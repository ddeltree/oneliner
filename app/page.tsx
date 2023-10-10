'use client';

import OneLinerSVG from '@/components/OneLinerSVG';
import OneLinerHTM from '@/components/OneLinerHTM';
import { Rnd } from 'react-rnd';
import { Subject } from 'rxjs';

export default function Page() {
  return (
    <main className="h-screen flex items-center bg-black">
      <Rnd
        className="rounded p-4 bg-slate-800 text-slate-50"
        onResize={() => resize$.next(undefined)}
      >
        <OneLinerHTM triggerTextSizeUpdate$={resize$}>
          This uses the legacy component
        </OneLinerHTM>
      </Rnd>

      <Rnd
        className="bg-green-950 rounded p-4"
        default={{ width: 350, height: 50, x: 20, y: 100 }}
      >
        <OneLinerSVG className="fill-green-50">
          <text>
            This is an example using the&nbsp;
            <tspan className="fill-green-600">SVG</tspan>
            &nbsp;tag
          </text>
        </OneLinerSVG>
      </Rnd>
    </main>
  );
}

const resize$ = new Subject();
