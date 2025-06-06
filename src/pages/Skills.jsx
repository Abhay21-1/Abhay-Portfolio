import React from 'react'
import '../css/Skills.css';

function Skills() {
  return (
    <>
      <div className='container'>
        <div className='skills-section'>
          <h1>Skills</h1>
          <div className='row text-center mb-5'>
            <div className='col-sm-3 define-section'>
              <img src='/html.svg'/>
              <p>HTML</p>
            </div>
            <div className='col-sm-3 define-section'>
              <img src='/css.svg'/>
              <p>CSS</p>
            </div>
            <div className='col-sm-3 define-section1'>
                <img src='/Bootstrap.svg'/>
                <p>BOOTSTRAP</p>
            </div>
            <div className='col-sm-3 define-section'>
              <img src='/javascript.svg'/>
              <p>JAVASCRIPT</p>
            </div>
          </div>
          <div className='row text-center for-gap'>
            <div className='col-sm-3 define-section'>
              <img src='/react.svg'/>
              <p>REACT</p>
            </div>
            <div className='col-sm-3 define-section'>
              <img src='/Node.js.svg'/>
              <p>NODE JS</p>
            </div>
            <div className='col-sm-3 define-section'>
              <img src='/MongoDB.svg'/>
              <p>MONGO DB</p>
            </div>
            <div className='col-sm-3 define-section'>
              <img src='/Adobe Photoshop.svg'/>
              <p>ADOBE PHOTOSHOP</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
