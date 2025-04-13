import { useRef, useState, ReactNode, MouseEvent } from "react";

interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

export const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null); // Explicitly type as HTMLDivElement

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    // Safe access with optional chaining

    //@ts-ignore:
    const rect = itemRef.current?.getBoundingClientRect();
    if (!rect) return; // Early return if rect is undefined
    
    const { left, top, width, height } = rect;
  
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
  
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
  
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};