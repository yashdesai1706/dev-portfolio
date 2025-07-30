import React from 'react'
import './TiltText.css'
import myimg from '../Assets/myimg.png'



function TiltText() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-sm-12 " data-aos="fade-right">
          <img className='img-fluid imgvis floating-image' style={{ display: "flex", justifyContent: 'center' }} src={myimg} />
          <h1 className='text-white responsive-text' style={{ fontFamily: 'Anzo2' }}>I'm <span style={{ color: 'black' }}>Dark Mode </span></h1>
          <h1 className='responsive-text' style={{ color: 'yellow ', fontFamily: 'Anzo2' }}>WEB DEVELOPER</h1>
          <h4 className='text-white responsive-text' style={{ fontFamily: 'Anzo2' }}> TO HIRE</h4>
          
          <a href='#contact' style={{textDecorationLine:'none'}}> <button className='btn' style={{ borderRadius: '20px', border: '2px solid gray', fontFamily: 'Anzo2',textDecorationLine:'none' }}>
             HIRE ME
            </button></a> 
         


        </div>

      </div>

    </div>
  )
}

export default TiltText