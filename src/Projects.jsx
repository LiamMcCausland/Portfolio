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
                <Card.Root maxW="sm" overflow="hidden" bg="#2E2E2E" borderWidth="1px" borderColor="black">
                    <Image
                        src="assets/image.png"
                    />
                    <Card.Body>
                        <Card.Title color="white">Automata Builder</Card.Title>
                        <Card.Description color="white">
                            A web application that allows users to visually create finite automata and Turing machines. It provides an intuitive interface for designing state machines.
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer gap="2">
                        <Button variant="solid" _hover={{borderColor: "white",}}>
                            <a href="https://liammccausland.github.io/Automata-Builder/"><span style={{ color: "white" }}>Visit</span></a>
                        </Button>
                    </Card.Footer>
                </Card.Root>

                <Card.Root maxW="sm" overflow="hidden" bg="#2E2E2E" borderWidth="1px" borderColor="black">
                    <Image
                        src="assets/rebound.png"
                    />
                    <Card.Body>
                        <Card.Title color="white">Rebound Roblox Game</Card.Title>
                        <Card.Description color="white">
                          An imitation of Valves game Ricochet, created in Roblox. This experience helped me refine my skills with lua and further my knowledge in game development, since dabbling with Unity.
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer gap="2">
                        <Button variant="solid" _hover={{borderColor: "white",}}>
                            <a href="https://www.roblox.com/games/18308161633/Rebound"><span style={{ color: "white" }}>Visit</span></a>
                        </Button>
                    </Card.Footer>
                </Card.Root>

                <Card.Root maxW="sm" overflow="hidden" bg="#2E2E2E" borderWidth="1px" borderColor="black">
                    <Image
                        src="assets/java.png"
                    />
                    <Card.Body>
                        <Card.Title color="white">COMP 2450 Battleship Project</Card.Title>
                        <Card.Description color="white">
                          A battleship like game where ships can move around and effects can be picked up around the board. Uses pathfinding algorithm for submarine movement and was the project for my COMP 2450 course.
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer gap="2">
                        <Button variant="solid" _hover={{borderColor: "white",}}>
                            <a href="https://drive.google.com/drive/folders/1LtvdmDPhnbTADDNjFQ4xhICHJk2-zjYH?usp=sharing"><span style={{ color: "white" }}>Visit</span></a>
                        </Button>
                    </Card.Footer>
                </Card.Root>
            </div>
        </div>
    )
}

export default Projects

