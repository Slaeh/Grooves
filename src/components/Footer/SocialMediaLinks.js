import { Link } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub } from 'react-icons/fa'

export const SocialMediaLinks = () => (
  <Link
    color='white'
    _hover={{ color: "#1DB954" }}>
    <FaGithub fontSize="60px" />
  </Link>
)