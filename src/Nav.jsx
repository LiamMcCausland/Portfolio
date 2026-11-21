import { Box, Flex, Link as ChakraLink, IconButton } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa'
import './Nav.css'

function Nav() {
  const { resolvedTheme, setTheme } = useTheme()
  const toggleColorMode = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <Box className="navbar">
      <Flex className="nav-container">
        <Flex className="nav-items">
          <ChakraLink href="#top" className="title">LM / PORTFOLIO</ChakraLink>
          <ChakraLink href="#about" className="nav-link">About</ChakraLink>
          <ChakraLink href="#work" className="nav-link">Work</ChakraLink>
          <ChakraLink href="#skills" className="nav-link">Skills</ChakraLink>
          <ChakraLink href="#experience" className="nav-link">Experience</ChakraLink>
          <ChakraLink href="#contact" className="nav-link">Contact</ChakraLink>
          <ChakraLink href="https://github.com/LiamMcCausland/Portfolio" className="nav-link" target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> Source</ChakraLink>
        </Flex>
        <IconButton className="theme-btn" aria-label={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggleColorMode}>
          {resolvedTheme === 'dark' ? <FaSun /> : <FaMoon />}
        </IconButton>
      </Flex>
    </Box>
  )
}

export default Nav
