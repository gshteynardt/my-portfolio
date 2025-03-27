'use client';

export default function ScanLines() {
    return (
        <div className="pointer-events-none fixed inset-0 z-[60] h-full w-full overflow-hidden before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] before:bg-[length:100%_4px] before:opacity-10 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_90%)] after:opacity-40"></div>
    );
}
