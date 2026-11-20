import { Box, Flex, Link as ChakraLink, Text, IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'
import './Nav.css'

function Nav() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

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
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </ChakraLink>

          <ChakraLink
            href="https://www.linkedin.com/in/liam-mccausland-a5a605306/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </ChakraLink>
        </Flex>

        <IconButton
          className="theme-btn"
          aria-label={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={toggleColorMode}
        >
          {resolvedTheme === 'dark' ? <FaSun /> : <FaMoon />}
        </IconButton>
      </Flex>
    </Box>
  )
}

export default Nav
