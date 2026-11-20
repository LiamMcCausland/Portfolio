import './Projects.css'
import { Button, Card, Image, Box, Heading } from '@chakra-ui/react'
import ModelSection from './ModelSection.jsx'
import projects from './projectsData.js'

function ProjectCard({ project }) {
  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      bg="var(--surface-card)"
      color="var(--text-primary)"
      borderWidth="1px"
      borderColor="var(--surface-border)"
    >
      <Image src={project.image} alt={project.title} />
      <Card.Body>
        <Card.Title color="var(--text-primary)">{project.title}</Card.Title>
        <Card.Description color="var(--text-primary)">
          {project.description}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button
          as="a"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          bg="var(--button-background)"
          color="var(--text-primary)"
          _hover={{ bg: 'var(--button-hover)', borderColor: 'var(--text-primary)' }}
        >
          Visit
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

function Projects() {
  return (
    <div className="projects-page">
      <Box className="model">
        <ModelSection />
        <Box className="intro-text-projects">
          Each project is a unique development experience
        </Box>
      </Box>

      <Heading
        className="heading"
        as="h2"
        size="lg"
        borderBottom="2px solid"
        borderColor="gray.400"
        pb={2}
        textAlign="left"
      >
        Projects
      </Heading>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
