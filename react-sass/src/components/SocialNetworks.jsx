import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  getSocialNetwork(socialNetworks);
}

function getSocialNetwork(socialNetworks) {
  socialNetworks.map(network => {
    if (network.name == "github") {
      return ((<section id="social-networks">

        <a href="https://github.com/matheusDornelles" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>

      </section>));
    } else if (network.name == "linkedin") {
      return (<a href="https://www.linkedin.com/in/matheus-dornelles-02942791/" className="social-btn" id={network.name} key={network.name}>
        {network.icon}
      </a>)

    }
  })
}

// TODO alterar condicional if else para usar filter do array. mudar function para arrow function

export default SocialNetworks