import { Box, Flex, Link as ChakraLink, Text, IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom' // React Router Link
import { FaMoon } from "react-icons/fa";
import './Nav.css'

function Nav() {
  return (
    <Box className="navbar">
      <Flex className="nav-container">
        <Flex className="nav-items">
          <Text className="title">Liam McCausland</Text>
          <ChakraLink as={Link} to="/" className="nav-link">
            Home
          </ChakraLink>
          <ChakraLink as={Link} to="/projects" className="nav-link">
            Projects
          </ChakraLink>
          <ChakraLink
            href="assets/resume.pdf"
            className="nav-link"
            isExternal
          >
            Resume
          </ChakraLink>
        </Flex>
        <IconButton className="theme-btn" aria-label="Toggle theme">
          <FaMoon />
        </IconButton>
      </Flex>
    </Box>
  )
}

export default Nav
