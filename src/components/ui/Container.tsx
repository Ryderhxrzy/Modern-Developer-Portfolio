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
 * Page-width wrapper. Horizontal padding grows with the viewport. On
 * desktop the right padding is larger to leave room for the navigation
 * rail (numbers only at lg, numbers with labels from xl).
 */
export function Container({ children, as: Tag = "div", className, ...rest }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:pl-12 lg:pr-28 xl:pl-16 xl:pr-60 2xl:pl-20 2xl:pr-64",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
