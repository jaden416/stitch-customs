"use client";
import {
  animate,
  AnimationOptions,
  motion,
  MotionStyle,
  PanInfo,
  useMotionValue,
} from "motion/react";
import { Photo } from "./photo";
import React from "react";

interface VirtualizedPhotoProps {
  children: (props: { index: number }) => React.ReactNode;
}

export const VirtualizedPhoto = ({ children }: VirtualizedPhotoProps) => {
  const index = React.useState<number>(0);
  return <></>;
};
