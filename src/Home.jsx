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
            <Avatar.Image src="assets/pic.jpg" />
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
            I am a Computer Science student at the <i>University of Manitoba</i> with a long-standing interest in technology and how software works behind the scenes. From a young age I enjoyed exploring computers, experimenting with programs, and learning how things function at a deeper level. That curiosity eventually led me to pursue computer science in university.

Throughout my studies and personal projects, I have gained experience with several programming languages and development tools. I enjoy building projects, learning new technologies, and improving my problem-solving skills through coding. I’m especially interested in understanding how systems work and creating software that is both practical and well-designed.
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
