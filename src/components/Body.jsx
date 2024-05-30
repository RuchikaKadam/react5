import React from 'react'
import image from '../assets/think.jpg'

const Body = () => {
  return (
    <div className='body-container'>
        <img src={image} style={{height:"80dvh", width:"95dvw", marginLeft:"1.05rem", marginTop:"1rem"}}/>
        <div style={{backgroundColor:"#9A1F48", margin:"2rem 1rem", padding:"3rem 13rem", textAlign:"center"}}>
            <h2 >
            Think Health. Think Massage.
            </h2>
            <br />
            <p>
            We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!
            </p>
            <br />
            <button >LEARN MORE ABOUT US</button>
            <button>CONTACT US TODAY</button>
        </div>
    </div>
  )
}

export default Body