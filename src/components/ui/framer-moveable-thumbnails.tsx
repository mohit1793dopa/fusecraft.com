'use client';

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import craftAspectRatios from '@/data/craft/imageAspectRatios.json';

export const items = [
  {
    id: 1,
    url: 'https://cdn.21st.dev/assets/mirror/9f/9ff0e940308d62089e45cc7e886701c469b9d8bdefe1083ea4961f3afc5d8071.jpg',
    title: 'MAXX PHAM',
  },
  {
    id: 2,
    url: 'https://cdn.21st.dev/assets/mirror/a9/a95655f582827d22bb12101d1880394c78249f9057d12d043d7b3c1354c83025.jpg',
    title: 'BOXIEN BAY',
  },
  {
    id: 3,
    url: 'https://cdn.21st.dev/assets/mirror/41/418af4c54ec899f6e14404033548eff30e17ac34f8a6ecd0fa386736664ab098.jpg',
    title: 'AUSIZE MAM',
  },
];

const FULL_ASPECT_RATIO = 16 / 9;
const COLLAPSED_ASPECT_RATIO = 1 / 3;
const MARGIN = 2;
const GAP = 2;

export type ThumbnailItem = {
  id: string | number;
  url: string;
  title?: string;
};

export interface FramerMoveableThumbnailsProps {
  items?: ThumbnailItem[];
  index?: number;
  onIndexChange?: (index: number) => void;
  className?: string;
  adaptiveAspect?: boolean;
  aspectRatio?: string;
  objectFit?: 'contain' | 'cover';
  showControls?: boolean;
  imageHeightClassName?: string;
}

export function FramerMoveableThumbnails({
  items: propItems,
  index: controlledIndex,
  onIndexChange,
  className = '',
  adaptiveAspect = true,
  aspectRatio = 'auto',
  showControls = true,
}: FramerMoveableThumbnailsProps) {
  const activeItems = propItems && propItems.length > 0 ? propItems : items;
  const isControlled = typeof controlledIndex === 'number' && typeof onIndexChange === 'function';

  const [uncontrolledIndex, setUncontrolledIndex] = useState<number>(0);
  const currentIndex = isControlled ? controlledIndex : uncontrolledIndex;

  // Track dynamic aspect ratios of all images loaded
  const [aspectRatios, setAspectRatios] = useState<Record<string, number>>({});
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    activeItems.forEach((item) => {
      if (!item.url) return;
      const img = new window.Image();
      img.src = item.url;
      if (img.complete && img.naturalWidth) {
        setAspectRatios((prev) => ({
          ...prev,
          [item.url]: Number((img.naturalWidth / img.naturalHeight).toFixed(3)),
        }));
      } else {
        img.onload = () => {
          setAspectRatios((prev) => ({
            ...prev,
            [item.url]: Number((img.naturalWidth / img.naturalHeight).toFixed(3)),
          }));
        };
      }
    });
  }, [activeItems]);

  // Robust container width measurement using ResizeObserver to prevent subpixel peeking
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        if (w > 0) {
          setContainerWidth(w);
        }
      }
    };

    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // When index or container width changes, smoothly animate to the exact slide position
  useEffect(() => {
    if (!isDragging && containerWidth > 0) {
      const targetX = -currentIndex * containerWidth;
      animate(x, targetX, {
        type: 'spring',
        stiffness: 350,
        damping: 32,
      });
    }
  }, [currentIndex, containerWidth, isDragging, x]);

  const updateIndex = (newIdx: number) => {
    const clamped = Math.max(0, Math.min(activeItems.length - 1, newIdx));
    if (isControlled) {
      onIndexChange(clamped);
    } else {
      setUncontrolledIndex(clamped);
    }
  };

  // Dynamically compute container aspect ratio based on whether the active image is portrait or landscape
  const currentUrl = activeItems[currentIndex]?.url || '';
  const staticRatio = (craftAspectRatios as Record<string, number>)[currentUrl];
  const naturalRatio = aspectRatios[currentUrl] || staticRatio;

  let containerAspect = aspectRatio !== 'auto' ? aspectRatio : '3/2';
  let containerMaxH = '52vh';

  if (adaptiveAspect && naturalRatio) {
    if (naturalRatio < 0.95) {
      // Tall portrait / vertical image (e.g. dining chairs, lounge chairs, doors, stools, tall cabinets)
      // Expand height so the portrait image fills the screen vertically and looks BIG & PROMINENT
      containerAspect = `${Math.max(0.70, Math.min(0.85, naturalRatio))}`;
      containerMaxH = 'min(66vh, 520px)';
    } else if (naturalRatio <= 1.15) {
      // Square or soft portrait image (e.g. 1:1, 4:5)
      containerAspect = `${naturalRatio}`;
      containerMaxH = 'min(58vh, 440px)';
    } else {
      // Wide landscape image (e.g. 3:2 beds, 16:9 tables/sofas)
      containerAspect = `${Math.min(1.78, Math.max(1.33, naturalRatio))}`;
      containerMaxH = 'min(50vh, 380px)';
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <div className='flex flex-col gap-3.5'>
        {/* Adaptive Main Carousel Card: Inset ring prevents border measurement mismatches */}
        <div
          style={{
            aspectRatio: containerAspect,
            maxHeight: containerMaxH,
          }}
          className='relative mx-auto w-full overflow-hidden rounded-2xl bg-[#12130e] shadow-2xl ring-1 ring-white/10 ring-inset transition-[aspect-ratio,max-height] duration-300 ease-out flex items-center justify-center'
          ref={containerRef}
        >
          <motion.div
            className='flex h-full w-full'
            drag='x'
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const width = containerWidth || containerRef.current?.clientWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = currentIndex;

              // Fast swipe
              if (Math.abs(velocity) > 400) {
                newIndex = velocity > 0 ? currentIndex - 1 : currentIndex + 1;
              }
              // Threshold swipe (25% of container width)
              else if (Math.abs(offset) > width * 0.25) {
                newIndex = offset > 0 ? currentIndex - 1 : currentIndex + 1;
              }

              updateIndex(newIndex);
            }}
            style={{ x }}
          >
            {activeItems.map((item) => (
              <div
                key={item.id}
                style={{
                  width: containerWidth > 0 ? `${containerWidth}px` : '100%',
                  minWidth: containerWidth > 0 ? `${containerWidth}px` : '100%',
                  maxWidth: containerWidth > 0 ? `${containerWidth}px` : '100%',
                }}
                className='shrink-0 h-full flex items-center justify-center overflow-hidden'
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.url}
                  alt={item.title || 'Gallery item'}
                  onLoad={(e) => {
                    const target = e.currentTarget;
                    if (target.naturalWidth && target.naturalHeight) {
                      const r = Number(
                        (target.naturalWidth / target.naturalHeight).toFixed(3),
                      );
                      setAspectRatios((prev) =>
                        prev[item.url] === r ? prev : { ...prev, [item.url]: r },
                      );
                    }
                  }}
                  className='w-full h-full object-cover select-none pointer-events-none rounded-2xl'
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation Controls */}
          {showControls && activeItems.length > 1 && (
            <>
              <motion.button
                type='button'
                disabled={currentIndex === 0}
                onClick={(e) => {
                  e.stopPropagation();
                  updateIndex(currentIndex - 1);
                }}
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all z-10 ${
                  currentIndex === 0
                    ? 'opacity-25 cursor-not-allowed bg-black/50 text-sand/40'
                    : 'bg-sand text-ink hover:scale-105 hover:bg-cream opacity-90 backdrop-blur-sm'
                }`}
                aria-label="Previous image"
              >
                <ChevronLeft className='w-5 h-5 -ml-0.5' />
              </motion.button>

              <motion.button
                type='button'
                disabled={currentIndex === activeItems.length - 1}
                onClick={(e) => {
                  e.stopPropagation();
                  updateIndex(currentIndex + 1);
                }}
                className={`absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all z-10 ${
                  currentIndex === activeItems.length - 1
                    ? 'opacity-25 cursor-not-allowed bg-black/50 text-sand/40'
                    : 'bg-sand text-ink hover:scale-105 hover:bg-cream opacity-90 backdrop-blur-sm'
                }`}
                aria-label="Next image"
              >
                <ChevronRight className='w-5 h-5 -mr-0.5' />
              </motion.button>
            </>
          )}

          {/* Counter Badge */}
          {activeItems.length > 1 && (
            <div className='absolute bottom-3 left-3 z-10 rounded-full bg-moss-ink/80 px-2.5 py-1 text-[0.62rem] font-mono tracking-widest text-sand backdrop-blur-md shadow-xs'>
              {String(currentIndex + 1).padStart(2, '0')} / {String(activeItems.length).padStart(2, '0')}
            </div>
          )}
        </div>

        {/* Moveable Thumbnails Strip */}
        {activeItems.length > 1 && (
          <Thumbnails items={activeItems} index={currentIndex} setIndex={updateIndex} />
        )}
      </div>
    </div>
  );
}

function Thumbnails({
  items: thumbnailItems,
  index,
  setIndex,
}: {
  items: ThumbnailItem[];
  index: number;
  setIndex: (i: number) => void;
}) {
  const x = index * 100 * (COLLAPSED_ASPECT_RATIO / FULL_ASPECT_RATIO) + MARGIN + index * GAP;
  const xSpring = useSpring(x, { bounce: 0 });
  const xPercentage = useMotionTemplate`-${xSpring}%`;

  useEffect(() => {
    xSpring.set(x);
  }, [x, xSpring]);

  return (
    <div className='flex h-14 sm:h-16 justify-center overflow-hidden py-1'>
      <motion.div
        style={{
          aspectRatio: FULL_ASPECT_RATIO,
          gap: `${GAP}%`,
          x: xPercentage,
        }}
        className='flex min-w-0'
      >
        {thumbnailItems.map((item, i) => (
          <motion.button
            key={item.id}
            type='button'
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                aspectRatio: FULL_ASPECT_RATIO,
                marginLeft: `${MARGIN}%`,
                marginRight: `${MARGIN}%`,
              },
              inactive: {
                aspectRatio: COLLAPSED_ASPECT_RATIO,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            className={`h-full shrink-0 overflow-hidden rounded-md border transition-all ${
              i === index
                ? 'border-chestnut shadow-md ring-1 ring-chestnut/60'
                : 'border-line/40 opacity-60 hover:opacity-100'
            }`}
            aria-label={`View slide ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.url}
              alt={item.title || `Thumbnail ${i + 1}`}
              className='h-full w-full object-cover pointer-events-none select-none'
            />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default FramerMoveableThumbnails;
