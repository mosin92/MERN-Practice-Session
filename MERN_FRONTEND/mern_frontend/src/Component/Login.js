import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
function Login() {
    const [password,setpassword]=useState('')
    const [email,setemail]=useState('')
    const history=useHistory()
    const handlesubmit = async(e)=>{
        e.preventDefault()
        const resp= await fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        })

        const data= await resp.json()
        if(!data || data.error===400)
        {
            window.alert("Invalid Crediential")
        }
        else{
            window.alert("Successfully Login")
            history.push("/")
        }
    }
    return (
        <div>
            Login Page
            <form method="POST" onSubmit={handlesubmit}>
               
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email..." />
                <br/>
                <br/>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Passoword..." />
                <br/>
                <br />
                <input type="submit" />

            </form>
        </div>
    )
}

export default Login
