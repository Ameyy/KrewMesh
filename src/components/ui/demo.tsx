import { WakeGlyph } from "@/components/ui/background-ascii-wake";

export default function Demo() {
  return (
    <div className="relative h-screen w-full bg-background">
      <WakeGlyph cellSize={9} color="#101010" globalPointer={true} className="absolute inset-0" />
    </div>
  );
}
