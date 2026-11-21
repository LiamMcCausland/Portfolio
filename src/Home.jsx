import { Heading } from '@chakra-ui/react'
import { FaArrowUpRightFromSquare, FaGithub, FaLinkedin } from 'react-icons/fa6'
import ModelSection from './ModelSection.jsx'
import projects from './projectsData.js'
import './Home.css'

const skills = [
  ['Languages', 'Java · JavaScript · TypeScript · SQL · HTML/CSS · Lua · C · C++ · C#'],
  ['Frameworks', 'React · Chakra UI · JointJS · Vite · Vitest'],
  ['Tools', 'Git · GitHub · IntelliJ IDEA · Visual Studio Code · Vim · Roblox Studio · Microsoft Office 365'],
  ['Practices', 'Object-Oriented Programming · SOLID · Unit Testing · UML · JSON Persistence · Debugging'],
  ['Systems', 'Windows · Linux · macOS'],
]

const experience = [
  {
    role: 'Physiotherapy Assistant',
    organization: 'Elite Sports Injury',
    dates: 'Aug 2024 — Present',
    detail: 'Coordinate schedules, billing, client communication, and rehabilitation support in a busy clinical environment.',
  },
  {
    role: 'Stadium Operations General Labourer',
    organization: 'Investors Group Field',
    dates: 'Jun 2021 — Aug 2022',
    detail: 'Prepared venues and fields for major events while collaborating with operations crews and following detailed floor plans.',
  },
]

function ExternalLink({ href, children }) {
  return <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{children}<FaArrowUpRightFromSquare aria-hidden="true" /></a>
}

export default function Home() {
  return (
    <main className="portfolio-page">
      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Computer Science student · Winnipeg, MB</p>
          <h1>Liam<br /><span>McCausland</span></h1>
          <p className="hero-lede">I build practical software, explore how systems work, and turn curious ideas into thoughtful projects.</p>
          <div className="hero-links">
            <a className="button-link" href="#work">View my work ↓</a>
            <ExternalLink href="assets/resume.pdf">Résumé</ExternalLink>
          </div>
        </div>
        <div className="hero-model" aria-label="Interactive 3D computer model">
          <ModelSection />
        </div>
        <p className="scroll-note">Scroll to explore <span>↓</span></p>
      </section>

      <section className="content-section intro-section" id="about">
        <p className="section-index">01 / About</p>
        <div className="section-body two-column">
          <Heading as="h2">A student who likes<br /><em>understanding the why.</em></Heading>
          <div>
            <p>I’m a Computer Science student at the <a className="text-link" href="https://umanitoba.ca/" target="_blank" rel="noopener noreferrer">University of Manitoba</a>, interested in software that is useful, understandable, and well designed.</p>
            <p>My work spans interactive web applications, game development, algorithms, and the systems behind them. I enjoy learning by building — then refining the result until the details make sense.</p>
          </div>
        </div>
      </section>

      <section className="content-section work-section" id="work">
        <p className="section-index">02 / Selected work</p>
        <div className="section-heading-row"><Heading as="h2">Things I’ve built</Heading><span>({String(projects.length).padStart(2, '0')})</span></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <a className="project-row" href={project.link} target="_blank" rel="noopener noreferrer" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <span className="project-image"><img src={project.image} alt="" /></span>
              <span className="project-info"><strong>{project.title}</strong><small>{project.description}</small></span>
              <FaArrowUpRightFromSquare className="project-arrow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="content-section skills-section" id="skills">
        <p className="section-index">03 / Technical skills</p>
        <div className="section-body two-column"><Heading as="h2">Tools for<br /><em>making things work.</em></Heading><div className="skills-table">{skills.map(([label, value]) => <div className="skill-line" key={label}><strong>{label}</strong><span>{value}</span></div>)}</div></div>
      </section>

      <section className="content-section experience-section" id="experience">
        <p className="section-index">04 / Experience</p>
        <div className="section-body two-column"><Heading as="h2">Beyond<br /><em>the screen.</em></Heading><div className="experience-list">{experience.map((item) => <article className="experience-item" key={item.role}><div><strong>{item.role}</strong><span>{item.organization}</span></div><time>{item.dates}</time><p>{item.detail}</p></article>)}</div></div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-index">05 / Contact</p>
        <Heading as="h2">Have an idea?<br /><em>Let’s talk.</em></Heading>
        <a className="email-link" href="mailto:liammccausland65@gmail.com">liammccausland65@gmail.com <FaArrowUpRightFromSquare aria-hidden="true" /></a>
        <div className="contact-links"><ExternalLink href="https://github.com/LiamMcCausland"><FaGithub /> GitHub</ExternalLink><ExternalLink href="https://www.linkedin.com/in/liam-mccausland-a5a605306/"><FaLinkedin /> LinkedIn</ExternalLink></div>
      </section>

      <footer><span>© {new Date().getFullYear()} Liam McCausland</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
