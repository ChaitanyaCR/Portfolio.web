import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-12 2xl:px-16">
      {children}
    </div>
  );
}
