import React from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "motion/react";

interface PopoverProps
  extends React.ComponentPropsWithoutRef<typeof RadixPopover.Root> {
  children: React.ReactNode;
}

const Popover = ({ children, ...props }: PopoverProps) => {
  return <RadixPopover.Root {...props}>{children}</RadixPopover.Root>;
};

interface PopoverTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixPopover.Trigger> {
  ref?: React.Ref<HTMLButtonElement>;
  active: boolean;
}

const PopoverTrigger = ({ children, ref, active }: PopoverTriggerProps) => {
  return (
    <motion.div className="relative">
      {active && (
        <motion.div
          layoutId="active-tab-bg"
          style={{ borderRadius: 8 }}
          className="absolute inset-0 rounded-lg bg-[#a1a1a142] backdrop-blur-sm"
        />
      )}
      <RadixPopover.Trigger
        style={{ pointerEvents: active ? "none" : "auto" }}
        disabled={active}
        ref={ref}
        className="z-100 relative flex h-[3.6rem] w-[3.6rem] cursor-pointer items-center justify-center"
      >
        {children}
      </RadixPopover.Trigger>
    </motion.div>
  );
};

const PopoverAnchor = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadixPopover.Anchor>) => {
  return <RadixPopover.Anchor {...props}>{children}</RadixPopover.Anchor>;
};

interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixPopover.Content> {
  active: boolean;
}

const PopoverContent = ({ active }: PopoverContentProps) => {
  const isActive = active;

  const variants = {
    initial: { scale: 0.95, y: 40, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
  };

  const transition = {
    type: "spring",
    bounce: 0,
    duration: 0.6,
  };

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <RadixPopover.Content asChild forceMount sideOffset={10}>
          <motion.div
            variants={variants}
            transition={transition}
            initial="initial"
            animate="animate"
            className="bg-darkgrey shadow-shado flex w-[36rem] flex-col gap-y-[1.2rem] rounded-[1.6rem] px-[1.6rem] py-[2rem]"
          >
            <motion.div className="flex flex-col gap-y-[.8rem]">
              <motion.p className="font-gmedium pr-[.8rem] text-[1.4rem] leading-[1.25] tracking-[.025em] text-white">
                Stay in touch with{" "}
                <motion.span className="bg-green-rgba font-bitmap rounded-[12px] px-[.6rem] py-[.4rem] text-[2rem] text-[#00DDA6]">
                  stitch
                </motion.span>
              </motion.p>
              <motion.p className="font-glight pr-[.8rem] text-[1.4rem] leading-[1.25] tracking-[.025em] text-[#B8B8B8]">
                Contact me on Email:
              </motion.p>
            </motion.div>
          </motion.div>
        </RadixPopover.Content>
      )}
    </AnimatePresence>
  );
};

export { Popover, PopoverTrigger, PopoverAnchor, PopoverContent };
