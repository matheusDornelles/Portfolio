import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.filter(network => network.name == "github").map((network) => (
        <a href="https://github.com/matheusDornelles" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
      {socialNetworks.filter(network => network.name == "linkedin").map((network) => (
        <a href="https://www.linkedin.com/in/matheus-dornelles-02942791/" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
      {socialNetworks.filter(network => network.name == "instagram").map((network) => (
        <a href="https://www.instagram.com/matheusdornelless/" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}

    </section>
  );
}

// TODO alterar condicional if else para usar filter do array. mudar function para arrow function

export default SocialNetworks