'use client';

import { CircularProgress } from '@chakra-ui/react';

export default function Loading() {
  return (
    <CircularProgress isIndeterminate color='green.400' m={20}></CircularProgress>
  );
}
