"use client"

import * as React from "react"
import Image from "next/image"
import {
  HTMLMotionProps,
  MotionValue,
  Variants,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react"

import { cn } from "@/lib/utils"

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>
}

export interface ContainerInsetProps extends HTMLMotionProps<"div"> {
  insetYRange?: [number, number]
  insetXRange?: [number, number]
  topInsetRange?: [number, number]
  bottomInsetRange?: [number, number]
  leftInsetRange?: [number, number]
  rightInsetRange?: [number, number]
  mobileLeftInsetRange?: [number, number]
  mobileRightInsetRange?: [number, number]
  roundednessRange?: [number, number]
  progressRange?: [number, number]
}

const SPRING_TRANSITION_CONFIG = {
  type: "spring",
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
} as const

const variants: Variants = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
  },
}

const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined)

export function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    )
  }
  return context
}

export interface ContainerScrollProps
  extends React.HTMLAttributes<HTMLDivElement> {
  offset?: [string, string] | any
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  children,
  className,
  offset = ["start start", "end end"],
  ...props
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: offset || ["start start", "end end"],
  })

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-svh w-full", className)}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  )
}
ContainerScroll.displayName = "ContainerScroll"

export interface ContainerAnimatedProps extends HTMLMotionProps<"div"> {
  inputRange?: number[]
  outputRange?: number[]
  opacityRange?: number[]
}

export const ContainerAnimated = React.forwardRef<
  HTMLDivElement,
  ContainerAnimatedProps
>(
  (
    {
      className,
      transition,
      style,
      inputRange = [0.2, 0.8],
      outputRange = [80, 0],
      opacityRange,
      ...props
    },
    ref
  ) => {
    const { scrollYProgress } = useContainerScrollContext()
    const y = useTransform(scrollYProgress, inputRange, outputRange)
    const opacity = opacityRange
      ? useTransform(scrollYProgress, inputRange, opacityRange)
      : undefined

    return (
      <motion.div
        ref={ref}
        className={cn("", className)}
        {...(!opacityRange
          ? {
              variants,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
            }
          : {})}
        style={{ y, ...(opacity !== undefined ? { opacity } : {}), ...style }}
        transition={{ ...SPRING_TRANSITION_CONFIG, ...transition }}
        {...props}
      />
    )
  }
)
ContainerAnimated.displayName = "ContainerAnimated"

export const ContainerSticky = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("sticky left-0 top-0 min-h-svh w-full", className)}
      {...props}
    />
  )
})
ContainerSticky.displayName = "ContainerSticky"

export const HeroVideo = React.forwardRef<
  HTMLVideoElement,
  HTMLMotionProps<"video">
>(({ style, className, transition, ...props }, ref) => {
  const { scrollYProgress } = useContainerScrollContext()
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.7, 1])

  return (
    <motion.video
      ref={ref}
      className={cn(
        "relative z-10 size-auto max-h-full max-w-full",
        className
      )}
      autoPlay
      muted
      loop
      playsInline
      style={{ scale, ...style }}
      {...props}
    />
  )
})
HeroVideo.displayName = "HeroVideo"

export interface HeroImageProps extends HTMLMotionProps<"div"> {
  src: string
  alt?: string
  priority?: boolean
  scaleRange?: [number, number]
  translateYRange?: [string | number, string | number]
  progressRange?: [number, number]
  imageClassName?: string
}

export const HeroImage = React.forwardRef<HTMLDivElement, HeroImageProps>(
  (
    {
      src,
      alt = "Hero image",
      priority = true,
      scaleRange = [1.15, 1],
      translateYRange,
      progressRange,
      style,
      className,
      imageClassName,
      ...props
    },
    ref
  ) => {
    const { scrollYProgress } = useContainerScrollContext()
    const pStart = progressRange ? progressRange[0] : 0.14
    const pEnd = progressRange ? progressRange[1] : 0.85

    const scale = useTransform(
      scrollYProgress,
      [0, pStart, pEnd],
      [scaleRange[0], scaleRange[0], scaleRange[1]]
    )
    const y = translateYRange
      ? useTransform(
          scrollYProgress,
          [0, pStart, pEnd],
          [translateYRange[0], translateYRange[0], translateYRange[1]]
        )
      : undefined

    return (
      <motion.div
        ref={ref}
        className={cn("relative z-10 h-full w-full", className)}
        style={{ scale, ...(y !== undefined ? { y } : {}), ...style }}
        {...props}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={cn("object-cover", imageClassName)}
        />
      </motion.div>
    )
  }
)
HeroImage.displayName = "HeroImage"

export const HeroButton = React.forwardRef<
  HTMLButtonElement,
  HTMLMotionProps<"button">
>(({ className, transition, ...props }, ref) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      ref={ref}
      className={cn(
        "group relative flex w-fit items-center rounded-full border border-[#84cc16] bg-gray-950/10 px-4 py-2 shadow-[0px_4px_24px_#84cc16] transition-colors hover:bg-slate-950/50",
        className
      )}
      {...props}
    />
  )
})
HeroButton.displayName = "HeroButton"

export const ContainerInset = React.forwardRef<
  HTMLDivElement,
  ContainerInsetProps
>(
  (
    {
      className,
      style,
      insetYRange = [45, 0],
      insetXRange = [45, 0],
      topInsetRange,
      bottomInsetRange,
      leftInsetRange,
      rightInsetRange,
      mobileLeftInsetRange,
      mobileRightInsetRange,
      roundednessRange = [1000, 16],
      progressRange,
      transition,
      ...props
    },
    ref
  ) => {
    const { scrollYProgress } = useContainerScrollContext()

    const isMobile = React.useSyncExternalStore(
      (notify) => {
        window.addEventListener("resize", notify)
        return () => window.removeEventListener("resize", notify)
      },
      () => typeof window !== "undefined" && window.innerWidth < 768,
      () => false
    )

    const pStart = progressRange ? progressRange[0] : 0.14
    const pEnd = progressRange ? progressRange[1] : 0.85

    const mapRange = (r: [number, number]): [number, number, number] => [r[0], r[0], r[1]]
    const inputPoints = [0, pStart, pEnd]

    const topRange = topInsetRange ?? insetYRange
    const bottomRange = bottomInsetRange ?? insetYRange
    const leftRange =
      isMobile && mobileLeftInsetRange
        ? mobileLeftInsetRange
        : (leftInsetRange ?? insetXRange)
    const rightRange =
      isMobile && mobileRightInsetRange
        ? mobileRightInsetRange
        : (rightInsetRange ?? insetXRange)

    const topInset = useTransform(
      scrollYProgress,
      inputPoints,
      mapRange(topRange)
    )
    const bottomInset = useTransform(
      scrollYProgress,
      inputPoints,
      mapRange(bottomRange)
    )
    const leftInset = useTransform(
      scrollYProgress,
      inputPoints,
      mapRange(leftRange)
    )
    const rightInset = useTransform(
      scrollYProgress,
      inputPoints,
      mapRange(rightRange)
    )
    const roundedness = useTransform(
      scrollYProgress,
      [0, pStart, Math.min(pEnd + 0.05, 0.95)],
      [roundednessRange[0], roundednessRange[0], roundednessRange[1]]
    )

    const clipPath = useMotionTemplate`inset(${topInset}% ${rightInset}% ${bottomInset}% ${leftInset}% round ${roundedness}px)`

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative pointer-events-none overflow-hidden",
          className
        )}
        style={{
          clipPath,
          WebkitClipPath: clipPath,
          ...style,
        }}
        {...props}
      />
    )
  }
)
ContainerInset.displayName = "ContainerInset"

export const HeroVideoDemo = () => {
  return (
    <section>
      <ContainerScroll className="h-[350vh]">
        <ContainerSticky
          style={{
            background:
              "radial-gradient(40% 40% at 50% 20%, #0e19ae 0%, #0b1387 22.92%, #080f67 42.71%, #030526 88.54%)",
          }}
          className="bg-stone-900 px-6 py-10 text-slate-50"
        >
          <ContainerAnimated className="space-y-4 text-center">
            <h1 className="text-5xl font-medium tracking-tighter md:text-6xl">
              Scroll & Roll
            </h1>
            <p className="mx-auto max-w-[42ch] opacity-80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              et, distinctio eum impedit nihil ipsum modi.
            </p>
          </ContainerAnimated>

          <ContainerInset className="max-h-[450px] w-auto py-6">
            <HeroVideo
              src="https://cdn.21st.dev/assets/mirror/06/065ccc6c341108f959302b4bb3b20fb87e581b6eee35ccfae0fb3badc0e148fa.mp4"
              data-src="https://cdn.21st.dev/assets/mirror/06/065ccc6c341108f959302b4bb3b20fb87e581b6eee35ccfae0fb3badc0e148fa.mp4"
            />
          </ContainerInset>
          <ContainerAnimated
            transition={{ delay: 0.4 }}
            outputRange={[-120, 0]}
            inputRange={[0, 0.7]}
            className="mx-auto mt-2 w-fit "
          >
            <HeroButton>Get Started</HeroButton>
          </ContainerAnimated>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  )
}

export default HeroVideoDemo
