import ModelSection from './ModelSection.jsx'
import './Home.css'
import { Box, Heading, Avatar, AvatarGroup } from '@chakra-ui/react'
import {
  SiApple,
  SiC,
  SiCplusplus,
  SiChakraui,
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiOpenjdk,
  SiJavascript,
  SiLinux,
  SiLua,
  SiReact,
  SiRoblox,
  SiTypescript,
  SiVim,
  SiVite,
  SiVitest,
} from 'react-icons/si'

const skillGroups = [
  {
    title: 'Coding Languages',
    items: [
      ['Java', SiOpenjdk], ['JavaScript', SiJavascript], ['TypeScript', SiTypescript],
      ['SQL'], ['HTML', SiHtml5], ['CSS', SiCss3], ['Lua', SiLua],
      ['C', SiC], ['C++', SiCplusplus], ['C#'],
    ],
  },
  {
    title: 'Frameworks and Libraries',
    items: [
      ['React', SiReact], ['Chakra UI', SiChakraui], ['JointJS'],
      ['Vite', SiVite], ['Vitest', SiVitest],
    ],
  },
  {
    title: 'Software Programs',
    items: [
      ['Git', SiGit], ['GitHub', SiGithub], ['IntelliJ IDEA', SiIntellijidea],
      ['Visual Studio Code'], ['Vim', SiVim],
      ['Roblox Studio', SiRoblox], ['Microsoft Office 365'],
    ],
  },
  {
    title: 'Practices',
    items: [
      ['Object-Oriented Programming'], ['SOLID Principles'], ['Unit Testing'],
      ['UML Design'], ['JSON Data Persistence'], ['Debugging and Refactoring'],
    ],
  },
  {
    title: 'Operating Systems',
    items: [['Windows'], ['Linux', SiLinux], ['macOS', SiApple]],
  },
]

function SkillItem({ item }) {
  const [label, Icon] = item
  return (
    <span className="skill-item">
      {Icon && <Icon aria-hidden="true" />}
      {label}
    </span>
  )
}

export default function Home() {
  return (
    <div id="home">
      <ModelSection />

      <div className="home-items">
        <Box className="intro-text">
          Hi, I'm a programmer studying at <a href="https://umanitoba.ca/"><span className="university-text">the University of Manitoba</span></a>
        </Box>
      </div>
      <Box className="pfp-container">
        <Box>
          <Heading className="name">Liam McCausland</Heading>
          <Heading className="sub-title">Student / Programmer</Heading>
        </Box>

        <AvatarGroup>
          <Avatar.Root className="avatar" size="1xl">
            <Avatar.Fallback name="Liam McCausland" />
            <Avatar.Image src="assets/pic.jpg" />
          </Avatar.Root>
        </AvatarGroup>
      </Box>
      <div className="about-container">
        <Heading className="heading" as="h2" size="lg" borderBottom="2px solid" borderColor="gray.400" pb={2} textAlign="left">
          About Me
        </Heading>
        <div className="about-items">
          <Box className="body-text">
            I am a Computer Science student at the <i>University of Manitoba</i> with a long-standing interest in technology and how software works behind the scenes. From a young age I enjoyed exploring computers, experimenting with programs, and learning how things function at a deeper level. That curiosity eventually led me to pursue computer science in university.

Throughout my studies and personal projects, I have gained experience with several programming languages and development tools. I enjoy building projects, learning new technologies, and improving my problem-solving skills through coding. I’m especially interested in understanding how systems work and creating software that is both practical and well-designed.
          </Box>
        </div>
        <Heading className="heading" as="h2" size="lg" borderBottom="2px solid" borderColor="gray.400" pb={2} textAlign="left">
          Languages & Technologies
        </Heading>
        <div className="skills-list">
          {skillGroups.map((group) => (
            <section className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-items">
                {group.items.map((item) => <SkillItem item={item} key={item[0]} />)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
