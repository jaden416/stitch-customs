"use client";
import React from "react";
import { CustomLink } from "./animated-tabs";
import { Icons } from "../Icons";
import { MotionConfig } from "motion/react";
import {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
} from "./popover";

const transition = {
  type: "spring",
  stiffness: 170,
  damping: 24,
  mass: 1.2,
};

export function AnimatedTabs() {
  const [popoverContent, setPopoverContent] = React.useState<boolean>(false);

  const handlePopoverContent = () => {
    setPopoverContent(!popoverContent);
  };

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center pb-[2rem]">
      <Popover open={popoverContent} onOpenChange={handlePopoverContent}>
        <PopoverAnchor className="relative z-30 flex items-center gap-1.5 rounded-[1.2rem] bg-darkgrey p-2 shadow-shado">
          <MotionConfig transition={transition}>
            <div className="inline-flex w-full items-center justify-start overflow-hidden rounded-2xl bg-neutral-100 p-2 dark:bg-neutral-800">
              {tabs.map((tab, index) => (
                <CustomLink
                  key={index}
                  value={tab.value}
                  href={tab.value}
                  popover={popoverContent}
                >
                  {tab.children}
                </CustomLink>
              ))}
              <PopoverTrigger active={popoverContent}>
                <Icons.email
                  className="z-50 h-[2.4rem] w-[2.4rem]"
                  color="white"
                />
              </PopoverTrigger>
              <PopoverContent
                active={popoverContent}
                sideOffset={10}
              ></PopoverContent>
            </div>
          </MotionConfig>
        </PopoverAnchor>
      </Popover>
    </nav>
  );
}

const tabs = [
  {
    label: "Frodo Baggins",
    children: (
      <Icons.home className="z-50 h-[2.4rem] w-[2.4rem]" color="white" />
    ),
    value: "/",
  },
  {
    label: "Sam Gamgee",
    children: (
      <Icons.keyboard className="z-50 h-[2.4rem] w-[2.4rem]" color="white" />
    ),
    value: "/work",
  },
];
