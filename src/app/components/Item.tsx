import React from "react";

interface ItemProps {
  children?: React.ReactNode;
  className: string;
}

const Item = ({ children, className }: ItemProps) => {
  return (
    <div
      className={`w-full rounded-[1.2rem] border-solid bg-[#141414] ${className}`}
    >
      {children}
    </div>
  );
};

export default Item;
