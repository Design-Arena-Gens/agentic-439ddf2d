'use client';

import clsx from 'clsx';
import { DualText } from '@/lib/content';

type TranslatedTextProps = {
  text: DualText;
  showTranslations: boolean;
  className?: string;
  labelClassName?: string;
};

export function TranslatedText({
  text,
  showTranslations,
  className,
  labelClassName,
}: TranslatedTextProps) {
  return (
    <div className={clsx('space-y-1', className)}>
      <p className="text-base text-slate-900">{text.hinglish}</p>
      {showTranslations && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
          <p className={clsx('font-semibold uppercase tracking-wide text-slate-500', labelClassName)}>
            हिंदी
          </p>
          <p className="text-slate-700">{text.hindi}</p>
          <p className={clsx('mt-2 font-semibold uppercase tracking-wide text-slate-500', labelClassName)}>
            English
          </p>
          <p className="text-slate-700">{text.english}</p>
        </div>
      )}
    </div>
  );
}
