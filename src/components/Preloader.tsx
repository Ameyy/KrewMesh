"use client";

import { useEffect, useState } from "react";
import { TetrisLoader } from "@/components/ui/tetris-loader";
import { cn } from "@/lib/utils";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Artificial delay for the preloader to show the Tetris effect
    // Wait until document is ready and then some extra time
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // fade out duration
    }, 2000); // 2 seconds minimum loading time

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-500",
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <TetrisLoader
        columns={10}
        rows={16}
        cellSize={10}
        gap={2}
        className="mb-8"
      />
      <h2 className="text-2xl font-bold tracking-widest text-white mt-8 animate-pulse">
        LOADING...
      </h2>
    </div>
  );
}
