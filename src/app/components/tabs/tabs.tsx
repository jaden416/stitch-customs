"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./animated-tabs";
import { Icons } from "../Icons";
export function AnimatedTabs() {
  const [value, setValue] = useState(tabs[0].value);

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center pb-[2rem]">
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          {tabs.map((tab, index) => (
            <TabsTrigger key={index} value={tab.value}>
              {tab.children}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* <TabsContent /> */}
      </Tabs>
    </nav>
  );
}

const tabs = [
  {
    label: "Frodo Baggins",
    children: (
      <Icons.home className="z-50 h-[2.4rem] w-[2.4rem]" color="white" />
    ),
    value: "frodo",
  },
  {
    label: "Sam Gamgee",
    children: (
      <Icons.keyboard className="z-50 h-[2.4rem] w-[2.4rem]" color="white" />
    ),
    value: "sam",
  },
  {
    label: "Merry",
    children: (
      <Icons.email className="z-50 h-[2.4rem] w-[2.4rem]" color="white" />
    ),
    value: "merry",
  },
];
