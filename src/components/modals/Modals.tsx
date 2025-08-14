'use client';

import { selectActiveModals } from '@/slices/modals/selectors';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const LazyLeaveRequest = dynamic(
  () => import('@/components/modals/leaveRequest/LeaveRequest'),
  { ssr: false },
);

const LazyThanksForRequest = dynamic(
  () => import('@/components/modals/thanksForRequest/ThanksForRequest'),
  { ssr: false },
);

const LazyThanks = dynamic(() => import('@/components/modals/thanks/Thanks'), {
  ssr: false,
});

export default function Modals() {
  const modals = useAppSelector(selectActiveModals);

  useEffect(() => {
    if (modals.length) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modals]);

  return (
    <>
      {modals.includes('leave-request') && (
        <LazyLeaveRequest modalClose={'leave-request'} />
      )}
      {modals.includes('thanks-for-request') && (
        <LazyThanksForRequest modalClose={'thanks-for-request'} />
      )}
      {modals.includes('thanks') && <LazyThanks modalClose={'thanks'} />}
    </>
  );
}
