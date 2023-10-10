import { useEffect, useRef, CSSProperties } from 'react';
import { Observable } from 'rxjs';
import { updateTextSize } from '../src/updateTextSize';

/** A component whose inner text always spans a single line */
export default function LegacyOneLiner({
  children,
  className = '',
  style,
  triggerTextSizeUpdate$,
  errorMargin = 8,
  innerHorizontalSpacing: innerHorizontalSpacing = 0,
}: OneLinerProps) {
  const selfRef = useRef<HTMLDivElement>(null);

  // check overflow
  useEffect(() => {
    if (!selfRef.current) return;
    const el = selfRef.current;
    updateTextSize(el, { errorMargin, innerHorizontalSpacing });
    const sub = triggerTextSizeUpdate$.subscribe(() =>
      updateTextSize(el, { errorMargin, innerHorizontalSpacing }),
    );
    return () => sub.unsubscribe();
  }, [triggerTextSizeUpdate$, errorMargin, innerHorizontalSpacing]);

  return (
    <div
      ref={selfRef}
      className={`
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
}

interface OneLinerProps {
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  triggerTextSizeUpdate$: Observable<any>;
  /** Has the same effect as the innerHorizontalSpacing */
  errorMargin?: number;
  /** Sum of all the horizontal padding and margin in the children */
  innerHorizontalSpacing?: number;
}
