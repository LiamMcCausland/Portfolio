import './Projects.css'
import { Button, Card, Image, Text, Box, Heading } from "@chakra-ui/react"
import ModelSection from './ModelSection.jsx'


function Projects() {
  return (
    <div className="projects-page">
      <Box className="model"><ModelSection />
        <Box className="intro-text-projects">
          Each projects is a unique development experience
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
      <div className='projects-container'>
        <Card.Root maxW="sm" overflow="hidden" bg="var(--surface-card)" color="var(--text-primary)" borderWidth="1px" borderColor="var(--surface-border)">
          <Image
            src="assets/image.png"
          />
          <Card.Body>
            <Card.Title color="var(--text-primary)">Automata Builder</Card.Title>
            <Card.Description color="var(--text-primary)">
              A web application that allows users to visually create finite automata and Turing machines. It provides an intuitive interface for designing state machines.
            </Card.Description>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid" bg="var(--button-background)" color="var(--text-primary)" _hover={{ bg: "var(--button-hover)", borderColor: "var(--text-primary)" }}>
              <a href="https://liammccausland.github.io/Automata-Builder/"><span style={{ color: "var(--text-primary)" }}>Visit</span></a>
            </Button>
          </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden" bg="var(--surface-card)" color="var(--text-primary)" borderWidth="1px" borderColor="var(--surface-border)">
          <Image
            src="assets/rebound.png"
          />
          <Card.Body>
            <Card.Title color="var(--text-primary)">Rebound Roblox Game</Card.Title>
            <Card.Description color="var(--text-primary)">
              An imitation of Valves game Ricochet, created in Roblox. This experience helped me refine my skills with lua and further my knowledge in game development, since dabbling with Unity.
            </Card.Description>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid" bg="var(--button-background)" color="var(--text-primary)" _hover={{ bg: "var(--button-hover)", borderColor: "var(--text-primary)" }}>
              <a href="https://www.roblox.com/games/18308161633/Rebound"><span style={{ color: "var(--text-primary)" }}>Visit</span></a>
            </Button>
          </Card.Footer>
        </Card.Root>

        <Card.Root maxW="sm" overflow="hidden" bg="var(--surface-card)" color="var(--text-primary)" borderWidth="1px" borderColor="var(--surface-border)">
          <Image
            src="assets/java.png"
          />
          <Card.Body>
            <Card.Title color="var(--text-primary)">COMP 2450 Battleship Project</Card.Title>
            <Card.Description color="var(--text-primary)">
              A battleship like game where ships can move around and effects can be picked up around the board. Uses pathfinding algorithm for submarine movement and was the project for my COMP 2450 course.
            </Card.Description>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid" bg="var(--button-background)" color="var(--text-primary)" _hover={{ bg: "var(--button-hover)", borderColor: "var(--text-primary)" }}>
              <a href="https://drive.google.com/drive/folders/1LtvdmDPhnbTADDNjFQ4xhICHJk2-zjYH?usp=sharing"><span style={{ color: "var(--text-primary)" }}>Visit</span></a>
            </Button>
          </Card.Footer>
        </Card.Root>

        {/* Banana Clicker */}
        <Card.Root maxW="sm" overflow="hidden" bg="var(--surface-card)" color="var(--text-primary)" borderWidth="1px" borderColor="var(--surface-border)">
          <Image
            src="assets/phase2-gamescreen.png"
          />
          <Card.Body>
            <Card.Title color="var(--text-primary)">Banana Clicker</Card.Title>
            <Card.Description color="var(--text-primary)">
              A Cookie Clicker-inspired incremental game developed using TypeScript, where players collect bananas and purchase upgrades. Features SQL database integration, game progression, and a web-based interface built with Vite.
            </Card.Description>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid" bg="var(--button-background)" color="var(--text-primary)" _hover={{ bg: "var(--button-hover)", borderColor: "var(--text-primary)" }}>
              <a href="https://github.com/LiamMcCausland/Banana-Clicker">
                <span style={{ color: "var(--text-primary)" }}>Visit</span>
              </a>
            </Button>
          </Card.Footer>
        </Card.Root>
      </div>
    </div>
  )
}

export default Projects

