import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const TWEETS = new Array (3).fill(true).map((_, index)=> index) 

export const Feed = () => {
  return (
    <Stack spacing={12} padding={12}>
      
      {TWEETS.map((index) => <Skeleton key={index} height={36}/>)}
    </Stack>
  )
}
