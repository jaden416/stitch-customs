"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

import Link, { LinkProps } from "next/link";

interface CustomLinkProps extends LinkProps {
  value: string;
  popover: boolean;
  children: React.ReactNode;
}
const CustomLink = (props: CustomLinkProps) => {
  const value = usePathname();
  const isActive = value === props.value && !props.popover;

  return (
    <div className="relative">
      {isActive && (
        <motion.div
          layoutId="active-tab-bg"
          style={{ borderRadius: 8 }}
          className="absolute inset-0 rounded-lg bg-[#a1a1a142] backdrop-blur-sm"
        />
      )}
      <Link
        href={props.href}
        className="z-100 relative flex h-[3.6rem] w-[3.6rem] cursor-pointer items-center justify-center"
      >
        {props.children}
      </Link>
    </div>
  );
};
export { CustomLink };
