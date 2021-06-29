import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="white" {...props}>
    <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="50px" />} />
  </ButtonGroup>
)