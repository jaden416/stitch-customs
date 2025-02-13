"use client";

import { createContext, forwardRef, useContext } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion, MotionConfig } from "motion/react";

const transition = {
  type: "spring",
  stiffness: 170,
  damping: 24,
  mass: 1.2,
};

type TabsContextType = {
  value: string;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

type TabsProviderProps = {
  children: React.ReactNode;
  value: string;
};

function TabsProvider({ children, value }: TabsProviderProps) {
  return (
    <TabsContext.Provider value={{ value }}>{children}</TabsContext.Provider>
  );
}

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
}

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

function Tabs({ value, onValueChange, children }: TabsProps) {
  return (
    <MotionConfig transition={transition}>
      <TabsProvider value={value}>
        <TabsPrimitive.Root
          value={value}
          onValueChange={onValueChange}
          className="relative"
        >
          {children}
        </TabsPrimitive.Root>
      </TabsProvider>
    </MotionConfig>
  );
}

const TabsList = forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className="inline-flex w-full items-center justify-start overflow-hidden rounded-2xl bg-neutral-100 p-2 dark:bg-neutral-800"
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ children, ...props }, ref) => {
  const { value } = useTabs();
  const isActive = value === props.value;

  return (
    <div className="relative">
      {isActive && (
        <motion.div
          layoutId="active-tab-bg"
          style={{ borderRadius: 8 }}
          className="absolute inset-0 rounded-lg bg-[#a1a1a142] backdrop-blur-sm"
        />
      )}
      <TabsPrimitive.Trigger
        ref={ref}
        className="z-100 relative flex h-[3.6rem] w-[3.6rem] cursor-pointer items-center justify-center"
        {...props}
      >
        {children}
      </TabsPrimitive.Trigger>
    </div>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className="focus-visible:ring-ring relative mt-2 rounded-xl border border-muted ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
