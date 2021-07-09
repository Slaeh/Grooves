import { Link } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub } from "react-icons/fa";

export const SocialMediaLinks = () => (
  <Link
    href="https://www.github.com/Slaeh/Grooves"
    target="_blank"
    color="white"
    _hover={{ color: "#1DB954" }}
  >
    <FaGithub fontSize="60px" />
  </Link>
);
