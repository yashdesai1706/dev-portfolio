import React from 'react'
import './Certificate.css'

function Certificates() {

    const certificate = [
        {
            head: "AI Tools Workshop",
            description: "Successfully completed a 1-Day AI Tools Workshop conducted by be10x, focusing on the practical applications of modern AI tools to enhance productivity and automation.",
            pdf: "./be10x.pdf",
            button :"View Certificate"
        },
        {
             head: "Enterpreneurship Development-NPTEL",
            description: "Successfully completed a 12-week intensive online course on Entrepreneurship, focusing on the fundamentals of business creation, innovation, and startup growth strategies.",
            pdf: "./Entrepreneurship.pdf",
              button :"View Certificate"
        },
        {
             head: "C Programming", 
            description: "Successfully completed the C Developer certification program by Edureka!, a Veranda Enterprise.",
            pdf: "./cprog.pdf",
              button :"View Certificate"
        },
        {
             head: "AI MasterClass",
            description: "Successfully completed a 1-Day AI Tools Workshop conducted by be10x, focusing on the practical applications of modern AI tools to enhance productivity and automation.",
            pdf: "./Aicer.pdf",
              button :"View Certificate"
        },
    

    ];


    return (
        <div className="container-fluid" id='certi'>
            <div className="row mb-5 mt-5">
                <div className="col-12">
                    <h1 className='text'>CERTIFICATIONS</h1>
                </div>
            </div>
            <div className="row">
                {certificate.map((Certificates, index) => (
                    <div className="col-lg-6" key={index}>
                        <div className="card custom-shadow w-100 rounded-5 mb-5" data-aos="fade-up">
                            <div className="card-body">
                                <h1 className='fsize style'>{Certificates.head}</h1>
                                <h1 className='fsize'>{Certificates.description}</h1>
                                <a
                                    href={Certificates.pdf}
                                    className="btn btn-outline-light mt-2"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ width: 'auto', margin: 'auto' ,borderRadius: '20px',  fontFamily: 'Anzo2', fontSize:'16px', height:'45px' }}
                                >
                                    {Certificates.button}
                                </a>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>



    )
}

export default Certificates


// <div>
//    <h1>{description}</h1>
//    <button><a href={pdf}>View Certificate</a></button>
// </div>