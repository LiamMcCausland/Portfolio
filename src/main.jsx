import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem, } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './index.css'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Projects from './Projects.jsx'


// Wrapper to animate each page
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}

// Component to handle animated route switching
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Nav />
          <AnimatedRoutes />
        </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
)
