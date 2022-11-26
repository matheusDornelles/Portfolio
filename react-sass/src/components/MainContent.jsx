import '../styles/components/maincontent.sass'
import About from './About'
import ProjectsContainer from './ProjectsContainer'
import TecnologiesContainer from './TecnologiesContainer'

const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <TecnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent