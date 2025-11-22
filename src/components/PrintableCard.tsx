'use client';

import { ReactNode, RefObject, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

type PrintableCardProps = {
  title: string;
  fileName: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function PrintableCard({
  title,
  fileName,
  description,
  className,
  children,
}: PrintableCardProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    contentRef: contentRef as unknown as RefObject<Element | null>,
    documentTitle: fileName,
  });

  return (
    <div className={className}>
      <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
            {description && <p className="text-sm text-slate-500">{description}</p>}
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
          >
            PDF Export
          </button>
        </div>
        <div ref={contentRef} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
