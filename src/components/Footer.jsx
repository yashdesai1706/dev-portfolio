import React from 'react'
import Linkedin from '../Assets/linkedin.png'
import Git from '../Assets/git.png'
import Twitter from '../Assets/twitter.png'
import './Footer.css'

function Footer() {
  return (
    <div className='logos' >
       
            
           <a href="https://www.linkedin.com/in/yash-desai-89144b296/" target="_blank" rel="noopener noreferrer"><img className='logo floating-logo' src={Linkedin}/></a>
            <a href="https://github.com/yashdesai1706" target="_blank" rel="noopener noreferrer"><img className='logo floating-logo' src={Git}/></a>
             <a href="https://x.com/yashdesai1108" target="_blank" rel="noopener noreferrer"><img className='logo floating-logo' src={Twitter}/></a>

        
    </div>
  )
}

export default Footer