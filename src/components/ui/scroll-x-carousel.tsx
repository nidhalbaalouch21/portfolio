import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

interface ScrollXCarouselContextValue {
  scrollYProgress: MotionValue<number>;
}

const ScrollXCarouselContext =
  React.createContext<ScrollXCarouselContextValue | null>(null);

function useScrollXCarousel() {
  const context = React.useContext(ScrollXCarouselContext);
  if (!context) {
    throw new Error("useScrollXCarousel must be used within a ScrollXCarousel");
  }
  return context;
}

export function ScrollXCarousel({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end end"],
  });

  return (
    <ScrollXCarouselContext.Provider value={{ scrollYProgress }}>
      <div
        ref={carouselRef}
        className={cn("relative w-full", className)}
        {...props}
      >
        {children}
      </div>
    </ScrollXCarouselContext.Provider>
  );
}

export function ScrollXCarouselContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "sticky overflow-hidden w-full top-20 left-0 h-[calc(100vh-5rem)]",
        className,
      )}
      {...props}
    />
  );
}

type ScrollXCarouselWrapProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
> & {
  xRange?: unknown[];
  yRange?: number[];
  style?: React.CSSProperties;
};

export function ScrollXCarouselWrap({
  className,
  style,
  xRange = ["-0%", "-80%"],
  yRange = [0, 1],
  ...props
}: ScrollXCarouselWrapProps) {
  const { scrollYProgress } = useScrollXCarousel();
  const x = useTransform(scrollYProgress, yRange, xRange);

  return (
    <motion.div
      className={cn("w-fit", className)}
      style={{ x, ...style }}
      {...props}
    />
  );
}

type ScrollXCarouselProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  progressStyle?: string;
};

export function ScrollXCarouselProgress({
  className,
  style,
  progressStyle,
  ...props
}: ScrollXCarouselProgressProps) {
  const { scrollYProgress } = useScrollXCarousel();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={cn("max-w-screen overflow-hidden", className)} {...props}>
      <motion.div
        className={cn("origin-left", progressStyle)}
        style={{ scaleX, ...style }}
      />
    </div>
  );
}
