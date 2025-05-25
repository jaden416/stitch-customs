import React, { JSX } from "react";
import { motion, PanInfo, MotionValue } from "motion/react";

const pageStyle: MotionStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
};
interface PhotoProps {
  index: number;
  x: MotionValue<number>;
  renderPage: (props: { index: number }) => React.ReactNode;
  dragEnd(e: Event | TouchEvent | MouseEvent, info: PanInfo): void;
}
function Photo({ index, x, renderPage, dragEnd }: PhotoProps) {
  const child = React.useMemo(() => renderPage({ index }), [index, renderPage]);

  return (
    <motion.div
      style={{
        ...pageStyle,
        x,
        left: `${index * 100}%`,
        right: `${index * 100}% `,
      }}
      draggable
      drag="x"
      dragElastic={1}
      onDragEnd={dragEnd}
    >
      {child}
    </motion.div>
  );
}

export default Photo;
