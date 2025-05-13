import React from 'react'
import '../css/About.css'

function About() {
  return (
    <div>
      <div className='container c-box2'>
        <div className='about-me text-center'>
        <h1>About me</h1>
          <div className='col-sm-12'>
          {/* introduction */}
          <p>Hi, I'm Abhay Kaushal — a passionate and dedicated Full Stack Developer with a strong focus on front-end technologies. I love turning ideas into interactive, user-friendly web experiences. With a keen interest in design and problem-solving, I enjoy bringing creativity and functionality together through code.</p>
           {/* introduction */}

           {/* education */}
              <h1>Education</h1>
              <p>I hold a Bachelor's degree in Business Administration (BBA), and I've successfully completed a comprehensive 1-year Full Stack Development training program at I-Max Infotech. This journey has equipped me with solid technical knowledge and hands-on experience in modern web development tools and practices.</p>
           {/* education */}

           {/* projects */}

            <h1>Projects</h1>
            <p>Over the past year, I've built numerous web projects using technologies like HTML, CSS, Bootstrap, JavaScript, and React.js. Each project has helped me grow as a developer and refine my skills. You can explore a variety of these works in the Projects section of my portfolio — showcasing everything from responsive websites to dynamic web applications.</p>

           {/* projects */}
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default About
