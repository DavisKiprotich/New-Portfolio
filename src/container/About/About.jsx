import React from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./About.scss";

const About = () => {
    // Sample code to display
    
    return (
      <section className="about-section">
        <div className="container">
          {/* Left Content */}
          <div className="about-text">
            <h2>Who am I?</h2>
            <h1>
              I'm <span className="highlight">Amos Kibet</span>, a Backend & AI
              Developer.
            </h1>
            <p>
              As an AI Developer and Software Engineer, I specialize in crafting
              innovative solutions that drive efficiency and deliver impactful
              results. Combining technical expertise with strategic
              problem-solving, I strive to create technology that empowers
              businesses to grow and succeed.
            </p>
            <p>
              On the backend, I excel in building scalable, high-performance
              applications using frameworks like Django and FastAPI. I’m
              passionate about developing robust APIs, optimizing data flow, and
              ensuring seamless integration across systems.
            </p>
          </div>

          {/* Right Content */}
          <div className="about-code">
            {/* Code Snippet */}
            <div className="code-block">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <pre>
                <code>
                  {`function HelloWorld() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Cleanup");
    };
  }, []);
}`}
                </code>
              </pre>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <p>
                <strong>Amos Kibet</strong>
              </p>
              <p>amosmaru10@gmail.com</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default About;
