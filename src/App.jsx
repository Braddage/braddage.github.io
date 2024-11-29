import React, { useEffect } from 'react';
import './App.css';
import Typewriter from './components/Typewriter'
import LogoMenu from './components/LogoMenu/LogoMenu';
import GradHeadshot from './assets/gradheadshot.jpg';
import Carousel from './components/Carousel/Carousel';

function App() {

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  return (
    <div className="App">

      <div className="Screen-block Header-image">
        <LogoMenu></LogoMenu>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
        </style>

        <header className="App-header ">
          <h1> Bradley Greaves</h1>
          <p className="typewriter">
            <Typewriter initialText="Computer Science Graduate" replacementText="Software Engineer." speed={100} delay={2000} />
          </p>
        </header>
        </div>

        <div className="Screen-block">
          <div className="content animate-hidden">
            <h2 className="section-header">About Me</h2>
            <div className="about-me-grid">
              <div className="text-content">
                <p>
                  As a driven and adaptable software engineer, I bring practical experience from a year-long placement at MMT Digital. During this time, I contributed to delivering innovative technical solutions across diverse projects in an agile environment. 
                </p>
                <p>
                  With expertise in programming languages like JavaScript, Python, and more, I have honed skills in web development, machine learning, and computer vision. Having graduated with First Class Honours in Computer Science from Loughborough University, I am eager to apply my knowledge to real-world software engineering challenges.
                </p>
              </div>
              <div className="image-container animate-hidden">
                <img src={GradHeadshot} alt="Bradley Greaves Graduation Headshot" />
              </div>
            </div>
          </div>
        </div>

        <div className="Screen-block">
          <div className="content animate-hidden">
              <Carousel />
          </div>
        </div>

        <div className="Screen-block">
          <div className="content animate-hidden">
            <p>
              I am a highly motivated and adaptable software engineer with hands-on experience from a year-long placement at MMT Digital, where I played a key role in delivering technical solutions across multiple projects. My proactive approach and strong work ethic allowed me to thrive in an agile environment, enhancing both my technical skills and my ability to manage time effectively. 
              I possess a solid foundation in programming languages such as JavaScript, Python, and more, with experience in web development, machine learning, and computer vision. Having recently received a BSc in Computer Science with First Class Honours at Loughborough University, I am passionate about leveraging my skills and knowledge in software engineering and I am actively seeking opportunities to do so.
            </p>
          </div>
        </div>

    </div>
  );
}

export default App;