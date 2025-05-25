"use client";
import {
  animate,
  AnimationOptions,
  motion,
  MotionStyle,
  PanInfo,
  useMotionValue,
} from "motion/react";
import Photo from "./photo";
import React from "react";

const range = [-1, 0, 1];

interface VirtualizedPhotoProps {
  children: (props: { index: number }) => React.ReactNode;
}

const transition: AnimationOptions<any> = {
  type: "spring",
  bounce: 0,
};

const containerStyle: MotionStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflowX: "hidden",
};

export const VirtualizedPhoto = ({ children }: VirtualizedPhotoProps) => {
  const [index, setIndex] = React.useState<number>(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const containerWidth = containerRef?.current?.clientWidth || 0;

    const { offset, velocity } = dragProps;

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      animate(x, calculateNewX(), transition);
      return;
    }

    if (offset.x > containerWidth / 4) {
      setIndex(index - 1);
    } else if (offset.x < -containerWidth / 4) {
      setIndex(index + 1);
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  React.useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    controls.play();
    console.log(index);
  }, [index]);

  return (
    <motion.div style={containerStyle} ref={containerRef}>
      {range.map((rangeValue) => {
        return (
          <Photo
            key={rangeValue + index}
            x={x}
            index={rangeValue + index}
            renderPage={children}
            dragEnd={handleEndDrag}
          ></Photo>
        );
      })}
    </motion.div>
  );
};
