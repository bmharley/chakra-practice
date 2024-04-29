'use client';

import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

export default function Error() {
  return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle>Oops</AlertTitle>
      <AlertDescription>Sorry, something went wrong</AlertDescription>
    </Alert>
  );
}
