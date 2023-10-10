import { CSSProperties, ReactNode, useEffect, useRef } from 'react';

export default function OneLinerSVG({
  children,
  style,
  className = '',
}: {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const bbox = svg.getBBox();
    svg.setAttribute(
      'viewBox',
      `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`,
    );
  });

  return (
    <svg ref={svgRef} className={className} style={style}>
      {children}
    </svg>
  );
}
