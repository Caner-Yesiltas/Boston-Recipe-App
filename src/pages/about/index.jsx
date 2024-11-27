import { AboutContainer, InfoContainer, StyledImage } from "./About.style.jsx";
import codingSvg from '../../assets/coding.svg';

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>
          Frontend Developer <span>🚀</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'm Caner 🐧</h2>
        <h3>
          Passionate Frontend Developer crafting responsive web applications with modern technologies. 
          Specialized in React ecosystem and always eager to learn new tools and frameworks.
        </h3>
        <h4>
          Tech Stack: React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Material-UI, 
          Bootstrap, Styled Components, REST APIs, Git & GitHub
        </h4>
        <h2>
          <a href="mailto:caneryesiltas1@gmail.com">Send email</a>: caneryesiltas1@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;