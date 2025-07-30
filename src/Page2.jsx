import React from 'react'
import './Page2.css'
import myimg from './Assets/myimg.png'
import Spline from '@splinetool/react-spline';

function Page2() {

  
  return (
    <div  className='container-fluid m-0 p-3 background1' id='page2' data-aos="fade-up">
    {/* <div className="spline-wrapper">
  <Spline scene="https://prod.spline.design/Rv3fdWrrchPThhL5/scene.splinecode" />
</div> */}

      <div className='  custom-shadow m-2 rounded-3' >
        
        <div className="row">
          <div className="col-sm-12">
            <h1 className='responsive-text1 '>ABOUT ME</h1>
         

          
          
          </div>
        </div>
        <div className="row responrow">
          <div className='col-lg-4' style={{ display: 'flex', justifyContent: 'center' }}>
            <img className='myimg floating-image' src={myimg} />
          </div>
          <div className="col-lg-8 p-4">
            <p className=' pfont '>Hello! I’m Yash Desai, a passionate and ever-evolving tech enthusiast with a strong foundation in software development and a sharp eye for creating impactful digital experiences. Currently pursuing a Diploma in Computer Engineering (2nd Year), I’ve been actively building real-world projects while sharpening my core programming and problem-solving skills.</p>
            <p className='pfont'>My approach is simple: Think deeply. Build smart. Grow consistently.
I’m not just aiming to be a developer — I’m working to be a creator who makes technology meaningful and accessible.</p>
          </div>
        </div>
        <div className="row m-3 p-3">
          <div className="col-sm-12 text-center" >
         <a href='#portfolio'>  <button  style={{backgroundColor:'black', color:'white', borderRadius:'20px', border:'none', padding:'10px', textAlign:'center', fontFamily:'Anzo2'}}>Viist to Portfolio</button></a> 
          </div>
        </div>


      </div>

    </div>
  )
}

export default Page2