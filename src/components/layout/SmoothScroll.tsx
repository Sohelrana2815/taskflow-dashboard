//component/SmoothScrolling.tsx
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothWheel: true,
    smoothTouch: false,
  };

  return (
    <ReactLenis root options={lenisOptions} autoRaf>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;