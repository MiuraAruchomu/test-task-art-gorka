'use client';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/shared/store/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
