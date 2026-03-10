import ModelSection from './ModelSection.jsx'
import './Home.css'
import { Box, Heading, Text, Avatar, AvatarGroup } from "@chakra-ui/react"
import { px } from 'framer-motion'



export default function Home() {
  return (
    <div id="home">
      <ModelSection />

      <div className="home-items">
        <Box className="intro-text">
          Hi, I'm a programmer studying at the <a href="https://umanitoba.ca/"><span className="university-text">University of Manitoba</span> </a>
        </Box>
      </div>
      <Box className="pfp-container">
        <Box>
          <Heading className="name">Liam McCausland</Heading>
          <Heading className="sub-title">Student / Programmer</Heading>
        </Box>

        <AvatarGroup>
          <Avatar.Root className="avatar" size={"1xl"}>
            <Avatar.Fallback name="Liam McCausland" />
            <Avatar.Image src="/src/assets/pic.jpg" />
          </Avatar.Root>
        </AvatarGroup>
      </Box>
      <div className="about-container">
        <Heading
          className="heading"
          as="h2"
          size="lg"
          borderBottom="2px solid"
          borderColor="gray.400"
          pb={2}
          textAlign="left"
        >
          About Me
        </Heading>
        <div className="about-items">
          <Box className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>

        </div>
        <Heading
          className="heading"
          as="h2"
          size="lg"
          borderBottom="2px solid"
          borderColor="gray.400"
          pb={2}
          textAlign="left"
        >
          Languages & Technologies
        </Heading>
        <div className="languages">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"/>
          <img src="https://devicon-website.vercel.app/api/c/original.svg" />
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" />
        </div>
      </div>
    </div>
  )
}
