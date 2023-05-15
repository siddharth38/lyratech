import React from 'react';
import './message.css'
import chooseImg from './04fbecafbbd35f4cb6585d136e5dfe3a.png'
import chooseImg1 from './NG Pic.jpg'
const Message = () => {
    return <div>

<div className="row mx-3 section">
  <div className="col-lg-10 col-xs-6 section  col-md-8 ">
  <h2 style={{textAlign:"center" ,  backgroundImage: "linear-gradient(to left,pink,orange)"}}>Message from Principal {""} </h2>
  <p className='  mx-2 section' >
  At our school, we believe in providing you with the tools and resources you need to succeed, but ultimately, your success depends on your own hard work and dedication. We encourage you to take advantage of every opportunity to learn, both inside and outside of the classroom.
  <br/>
Remember, your education is an investment in yourself and your future. It opens doors to new opportunities and helps you develop the knowledge and skills you need to achieve your goals. Whether you plan to attend college, enter the workforce, or pursue other paths, a strong education is essential.
<br/>
So, I urge you to stay focused on your studies, ask for help when you need it, and make the most of your time here at our school. We are here to support you every step of the way, and we believe in you.
<br/>
Sincerely,
<br/>
[Principal's Name]
</p>
  </div>
  <div className="col-lg-2 col-xs-6  col-md-4 bg-secondary">   <img src={chooseImg} alt=""  className='principal' /></div>
</div>

<div className="row pt-2  mx-3">
  <div className="col-lg-10 col-xs-6  section  col-md-8  ">
  <h2 style={{textAlign:"center" ,  backgroundImage: "linear-gradient(to left,pink,orange)"}}>Message from Chairman {""} </h2>
  <p className='  mx-2 section' >
  At our school, we believe in providing you with the tools and resources you need to succeed, but ultimately, your success depends on your own hard work and dedication. We encourage you to take advantage of every opportunity to learn, both inside and outside of the classroom.
  <br/>
Remember, your education is an investment in yourself and your future. It opens doors to new opportunities and helps you develop the knowledge and skills you need to achieve your goals. Whether you plan to attend college, enter the workforce, or pursue other paths, a strong education is essential.
<br/>
So, I urge you to stay focused on your studies, ask for help when you need it, and make the most of your time here at our school. We are here to support you every step of the way, and we believe in you.
<br/>
Sincerely,
<br/>
[Chairman]
</p>
  </div>
  <div className="col-lg-2 col-xs-6  col-md-4  bg-secondary">   <img src={chooseImg1} alt=""  className='principal' /></div>
</div>

    </div>;
}



export default Message;