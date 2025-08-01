import { Skeleton } from '@radix-ui/themes';
import classNames from 'classnames';
import React from 'react';

export default function TaskCardSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={classNames(
        className,
        'rounded-lg border border-neutral-200 bg-white p-4 shadow-md w-full',
      )}
    >
      <div className="flex flex-col justify-between gap-3">
        <Skeleton className="h-4 w-72 rounded" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-80 rounded" />
          <Skeleton className="h-4 w-56 rounded" />
        </div>
      </div>
    </div>
  );
}
