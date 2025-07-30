import React, { useRef, useState } from 'react'
import './Page1.css'
import Header from './components/Header'
import TiltText from './components/TiltText'
import Footer from './components/Footer'
import './App.css'
import gsap from 'gsap'

function Page1() {

    
 
  return (
    <div id='page1' className='container-fluid m-0 p-0 ' style={{height:'120vh'}}  >
        <div className=' container-fluid background img-fluid custom-shadow 'style={{height:'100vh'}} data-aos="fade-up" >
          
            <Header/>
             <TiltText />
           
            <Footer/>

        </div>

     </div>
  )
}

export default Page1