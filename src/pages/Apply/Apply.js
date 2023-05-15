import React, {useState} from "react"
import "./apply.css"
import { useNavigate } from 'react-router-dom'

const Apply = (props) => {

    
  
    const history = useNavigate();
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

   

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
   
    const login = () => {
        
            alert("Done")
          
          
          history("/")
       
    }

    return (
        <div className="container">
        <div className="login">
            <h1> Apply</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="text" name="password"  onChange={handleChange}  placeholder="Enter your Name" ></input>
            <input type="text" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Father Nmme" ></input>
            <input type="text" name="password"  onChange={handleChange}  placeholder="Enter your Mother Name" ></input>
            <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="4" 
                
              ></textarea>
            <div className="button" onClick={login} >Apply</div>
            
        </div>
        </div>
    )
}

export default Apply