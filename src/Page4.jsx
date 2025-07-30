import React from 'react';
import './Page4.css';
import Linkedin from './Assets/linkedin.png'
import git from './Assets/git.png'
import Twitter from './Assets/twitter.png'
import Gmail from './Assets/gmail_5968534.png'
import Call from './Assets/call.png'
import Gmap from './Assets/google-maps_2702604.png'

function Page4() {
  return (
    <section className=" contact-page d-flex justify-content-center align-items-center " id='page4' data-aos="fade-up">
      <div className="contact-card">
        <div className='row'>
          <h2 className="contact-title">Let’s Work Together</h2>
          <p className="contact-subtitle">Have a project or idea? Feel free to drop a message!</p>
        </div>
        <div className='row '>
          <div className='col-lg-6 col-12'>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit" className="contact-button" style={{ textAlign: 'center' }}>Send Message</button>
            </form>
          </div>
   <div className='col-lg-6 col-12 mt-4'>
  <div className="contact-card-2">
    
    {/* EMAIL */}
    <div className='d-flex align-items-center mb-3'>
      <a href='mailto:desaiyash286@gmail.com' style={{ textDecoration: 'none' }}>
        <img className='infologo1' src={Gmail} alt='Gmail Icon' />
      </a>
      <span className='infotext' style={{ color: 'white', fontFamily: 'Anzo2' }}>
        Email: desaiyash286@gmail.com
      </span>
    </div>

    {/* LOCATION */}
    <div className='d-flex align-items-center mb-3'>
      <a href='https://maps.google.com' style={{ textDecoration: 'none' }}>
        <img className='infologo3' src={Gmap} alt='Map Icon' />
      </a>
      <span className='infotext' style={{ color: 'white', fontFamily: 'Anzo2' }}>
        Location: Kolhapur, Maharashtra
      </span>
    </div>

    {/* CONTACT */}
    <div className='d-flex align-items-center mb-3'>
      <a href='tel:+919075271108' style={{ textDecoration: 'none' }}>
        <img className='infologo2' src={Call} alt='Call Icon' />
      </a>
      <span className='infotext' style={{ color: 'white', fontFamily: 'Anzo2' }}>
        Contact: 9075271108
      </span>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default Page4;
