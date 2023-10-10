'use client';

import OneLiner from '@/components/LegacyOneLiner';
import { Rnd } from 'react-rnd';
import { Subject } from 'rxjs';

export default function Page() {
  return (
    <main className="h-screen flex items-center bg-black text-white">
      <Rnd
        className="bg-slate-800 rounded p-4"
        onResize={() => resize$.next(undefined)}
      >
        <OneLiner triggerTextSizeUpdate$={resize$}>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </OneLiner>
      </Rnd>
    </main>
  );
}

const resize$ = new Subject();
