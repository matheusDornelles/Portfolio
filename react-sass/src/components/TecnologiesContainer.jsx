

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiJava,
  } from "react-icons/di";

  import '../styles/components/tecnologiescontainer.sass'

  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "java", name: "Java", icon: <DiJava /> }
  ];

const TecnologiesContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Tenologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum dolor sit olor aspernatur.</p>
                    </div>
                </div>
            ))}
        </div>

    </section>  
    
  )
}

export default TecnologiesContainer