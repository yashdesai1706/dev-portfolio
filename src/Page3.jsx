import React, { useEffect, useState } from 'react';
import './Page3.css';
import Projects from './components/Projects';


import AOS from 'aos';
import 'aos/dist/aos.css';


// Import icons as an array for cleaner code
import Html from './Assets/icons8-html-5-48.png';
import Css from './Assets/css-3.png';
import Javascr from './Assets/javascript-logo-svgrepo-com.svg';
import ReactLogo from './Assets/reactlog.png';
import Bootstrap from './Assets/bootstrap-5-logo-icon.svg';
import Tailwind from './Assets/Tailwind.png';
import Material from './Assets/material-ui-1.svg';
import Node from './Assets/icons8-nodejs-50.png';
import Express from './Assets/icons8-express-js-50.png';
import Sql from './Assets/icons8-mysql-logo-50.png';
import Oracle from './Assets/icons8-oracle-logo-50.png';
import Certificates from './components/Certificates';
import Git from './Assets/github.png'

const techSkills = [
  { name: 'HTML', icon: Html },
  { name: 'CSS', icon: Css },
  { name: 'JAVASCRIPT', icon: Javascr },
  { name: 'REACT JS', icon: ReactLogo },
  { name: 'BOOTSTRAP', icon: Bootstrap },
  { name: 'TAILWIND CSS', icon: Tailwind },
  { name: 'MATERIAL UI', icon: Material },
  { name: 'NODE JS', icon: Node },
  { name: 'EXPRESS JS', icon: Express },
  { name: 'MYSQL', icon: Sql },
  { name: 'ORACLE', icon: Oracle },
  {name: 'GITHUB' ,icon: Git}
];



const TechCard = ({ name, icon }) => (
 
  <div className="col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center mt-5 text-center">
    <div className="card custom-shadow card-hove " data-aos="fade-up">
      <div className='card-top-img d-flex justify-content-center'>
        <img id='logo' src={icon} alt={`${name} icon`} />
      </div>
      <div className="card-body">
        <h1 style={{ fontFamily: 'Anzo2', fontWeight: '900', fontSize: '30px' }}>{name}</h1>
      </div>
    </div>
  </div>
 
);

function Page3() {
          useEffect(() => {
  AOS.init({
    duration: 1000,  // animation duration in ms
    once: false       // only animate once when in view
  });
}, []);
  return (

    <div className='container-fluid  backgroud3' id='page3' data-aos="fade-up">
      <div className="container-fluid backgroud3"> 
        <div className="row">
          <div className="col-sm-12">
            <h1 className='bigtext  '>PORTFOLIO</h1>
          </div>
        </div>

        <div className="row custom-shadow m-3 rounded-5">
          <div className="col-12">
            <section className="hero text-center py-5">
              <h1 style={{ fontFamily: 'Anzo2' }}>Hi, I'm Yash Desai</h1>
              <p style={{ fontFamily: 'Anzo2' }}>Passionate Web Developer | Building Solutions with React.js and Node.js</p>
              <a href="/Yash_Desai_Resume.pdf" className="btn btn-primary" style={{ fontFamily: 'Anzo2', margin: 'auto', width: 'auto' }}>Download Resume</a>
            </section>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h1 className='text'>MY TECH SKILLS</h1>
          </div>
        </div>

        <div className="row d-flex justify-content-center m-2  ">
          {techSkills.map((tech, index) => <TechCard key={index} name={tech.name} icon={tech.icon} />)}
        </div>
      </div>

  
      <Projects />
      <Certificates/>
      
    </div>
  );
}

export default Page3;
