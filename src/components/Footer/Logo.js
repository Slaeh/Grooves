import { chakra, useColorModeValue, useToken, Image } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props) => {
  const [white, black] = useToken('colors', ['white', 'gray.800'])
  return (
    <Image src='./Spotify.svg' boxSize='200px'/> 
  )
}
