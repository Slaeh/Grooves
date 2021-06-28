import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'
import { SocialMediaLinks } from './SocialMediaLinks'

export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props} pt={20}>
    <Box minW="130px">
      <FooterHeading mb="4" textColor='#919496' fontWeight="bold">Application</FooterHeading>
      <Stack>
        <Link textColor='white'>About</Link>
        <Link textColor='white'>Contact</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4" textColor='#919496' fontWeight="bold">Source Code</FooterHeading>
      <SocialMediaLinks />
      <Stack>
        
      </Stack>
    </Box>
  </SimpleGrid>
)