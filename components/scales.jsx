import React from "react";

export const Scales = () => {
  return (
    <>
      <div className="absolute top-0 right-0 h-full w-8 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 dark:[--pattern-fg:var(--color-white)]/10"></div>
      <div className="absolute top-0 left-0 h-full w-8 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 dark:[--pattern-fg:var(--color-white)]/10"></div>
    </>
  );
};