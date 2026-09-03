import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 2xl:px-24">
      {children}
    </div>
  );
}
