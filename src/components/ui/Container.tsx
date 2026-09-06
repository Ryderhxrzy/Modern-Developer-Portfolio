import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

/**
 * Page-width wrapper. Horizontal padding grows with the viewport and
 * leaves room on the right for the desktop navigation rail.
 */
export function Container({ children, as: Tag = "div", className, ...rest }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
