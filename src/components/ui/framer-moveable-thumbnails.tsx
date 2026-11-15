'use client';

import {
  AnimatePresence,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  {
    id: 4,
    url: 'https://cdn.21st.dev/assets/mirror/c7/c7f20f2629a31f8eed6f2f899ee64dbb41877d38685fffe5ac32bf84c8d3e16a.jpg',
    title: 'RECLKTIKA',
  },
  {
    id: 5,
    url: 'https://cdn.21st.dev/assets/mirror/ed/ed52b4b14c1c72d64906e26b87ca6fe17c05ffcbc6f1acbde34e2b20eac0bb08.jpg',
    title: 'SONYPOO',
  },
  {
    id: 6,
    url: 'https://cdn.21st.dev/assets/mirror/dd/dda80b9931d1000fe04a9d10825b26f793520ced11ae723cc58eefdc06737f8b.jpg',
    title: 'DONM FLY',
  },
  {
    id: 7,
    url: 'https://cdn.21st.dev/assets/mirror/f7/f79f112518837fe538dc1b1efc0a3ff279a775fc4d718055b6b336025ffcaf6e.jpg',
    title: 'Snowy Mountain Highway',
  },
  {
    id: 8,
    url: 'https://cdn.21st.dev/assets/mirror/5a/5adc94c01293cf73c8d91501c9ccc9adaff4dd7a89b147a18c8cb6c506015249.jpg',
    title: 'FOGGY FOLS',
  },
  {
    id: 9,
    url: 'https://cdn.21st.dev/assets/mirror/05/05522fb6175f73d7dd288876f80520ea7cb93c38eded959ab917c5597250062d.jpg',
    title: 'DIM DARKO',
  },
  {
    id: 10,
    url: 'https://cdn.21st.dev/assets/mirror/a4/a4f9f554055ad10c60c9eac9ec758197f508bb28cd2ad67b424afd5c3367683d.jpg',
    title: 'BEALIVE',
  },
  {
    id: 11,
    url: 'https://cdn.21st.dev/assets/mirror/2d/2d2435801e1ceba95249f348f8338c7686f0e39f0d13232d2c2edcb2ef3aa1ca.jpg',
    title: 'DOMEDOM ROME',
  },
  {
    id: 12,
    url: 'https://cdn.21st.dev/assets/mirror/72/726cc39ff592b894a8371166c54a3218a71f9ef320a5d29905480eb5aad919fe.jpg',
    title: 'IKEIMON POVE',
  },
  {
    id: 13,
    url: 'https://cdn.21st.dev/assets/mirror/04/040e315414ec53eaa9cbd34cb87286eabc9bbeaa359af5e207a4f869d3f058f7.jpg',
    title: 'Wildflower Mountain Meadow',
  },
  {
    id: 14,
    url: 'https://cdn.21st.dev/assets/mirror/c6/c68ec12652dd244b6f56558cafe0258ede7091e4e90f7c950310a4dd9e1d0863.jpg',
    title: 'Mountain Valley Vista',
  },
  {
    id: 15,
    url: 'https://cdn.21st.dev/assets/mirror/1e/1ef7c67a36dda66b4ddb2a63efec1429ff24df9cd271ed636f0f20cd049d576f.jpg',
    title: 'Rugged Mountain Terrain',
  },
  {
    id: 16,
    url: 'https://cdn.21st.dev/assets/mirror/f4/f46e259858c10ad6c5a525513af156da6333f05c7e8bf81b9b41ea13586f805e.jpg',
    title: 'Mountain Wildflower Bloom',
  },
  {
    id: 17,
    url: 'https://cdn.21st.dev/assets/mirror/3d/3dff8b99f2c2ba06e55b2b0dbbbd57adcbbfb37b392c04424068fdbc3f6f3724.jpg',
    title: 'Mountain River Rapids',
  },
  {
    id: 18,
    url: 'https://cdn.21st.dev/assets/mirror/7c/7cb8bdab8b5e0e31d921c82286d748020ff94d8fe4f3abde673733a93d78a57a.jpg',
    title: 'Lush Mountain Valley',
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
  imageHeightClassName?: string;
  aspectRatio?: string;
  objectFit?: 'contain' | 'cover';
  showControls?: boolean;
}

export function FramerMoveableThumbnails({
  items: propItems,
  index: controlledIndex,
  onIndexChange,
  className = '',
  imageHeightClassName = '',
  aspectRatio = '3/2',
  objectFit = 'contain',
  showControls = true,
}: FramerMoveableThumbnailsProps) {
  const activeItems = propItems && propItems.length > 0 ? propItems : items;
  const isControlled = typeof controlledIndex === 'number' && typeof onIndexChange === 'function';

  const [uncontrolledIndex, setUncontrolledIndex] = useState<number>(0);
  const currentIndex = isControlled ? controlledIndex : uncontrolledIndex;

  const updateIndex = (newIdx: number) => {
    const clamped = Math.max(0, Math.min(activeItems.length - 1, newIdx));
    if (isControlled) {
      onIndexChange(clamped);
    } else {
      setUncontrolledIndex(clamped);
    }
  };

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -currentIndex * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [currentIndex, x, isDragging]);

  return (
    <div className={`w-full ${className}`}>
      <div className='flex flex-col gap-3.5'>
        {/* Main Carousel: Preserves landscape ratio, never crops */}
        <div
          className='relative overflow-hidden rounded-xl bg-black/40 shadow-2xl'
          ref={containerRef}
        >
          <motion.div
            className='flex'
            drag='x'
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = currentIndex;

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 400) {
                newIndex = velocity > 0 ? currentIndex - 1 : currentIndex + 1;
              }
              // Otherwise use offset threshold (25% of container width)
              else if (Math.abs(offset) > containerWidth * 0.25) {
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
                  aspectRatio: aspectRatio !== 'auto' ? aspectRatio : undefined,
                }}
                className={`shrink-0 w-full ${imageHeightClassName} flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={item.url}
                  alt={item.title || 'Gallery item'}
                  className={`w-full h-full ${
                    objectFit === 'contain' ? 'object-contain' : 'object-cover'
                  } select-none pointer-events-none rounded-xl`}
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          {showControls && activeItems.length > 1 && (
            <>
              <motion.button
                type='button'
                disabled={currentIndex === 0}
                onClick={() => updateIndex(currentIndex - 1)}
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
                  ${
                    currentIndex === 0
                      ? 'opacity-30 cursor-not-allowed bg-black/40 text-sand'
                      : 'bg-sand/90 text-ink hover:scale-105 hover:bg-cream opacity-85 backdrop-blur-sm'
                  }`}
                aria-label="Previous image"
              >
                <ChevronLeft className='w-5 h-5' />
              </motion.button>

              <motion.button
                type='button'
                disabled={currentIndex === activeItems.length - 1}
                onClick={() => updateIndex(currentIndex + 1)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
                  ${
                    currentIndex === activeItems.length - 1
                      ? 'opacity-30 cursor-not-allowed bg-black/40 text-sand'
                      : 'bg-sand/90 text-ink hover:scale-105 hover:bg-cream opacity-85 backdrop-blur-sm'
                  }`}
                aria-label="Next image"
              >
                <ChevronRight className='w-5 h-5' />
              </motion.button>
            </>
          )}

          {/* Counter Badge */}
          <div className='absolute bottom-3 left-3 z-10 rounded-full bg-moss-ink/75 px-2.5 py-1 text-[0.62rem] font-mono tracking-widest text-sand backdrop-blur-md'>
            {String(currentIndex + 1).padStart(2, '0')} / {String(activeItems.length).padStart(2, '0')}
          </div>
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
            onClick={() => setIndex(i)}
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
                : 'border-line/40 opacity-70 hover:opacity-100'
            }`}
            aria-label={`View slide ${i + 1}`}
          >
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
