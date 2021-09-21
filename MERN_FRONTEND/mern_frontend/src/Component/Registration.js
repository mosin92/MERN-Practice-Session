import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
function Registration() {
    const history=useHistory()
    const [user, setuser] = useState({
        name: "", email: "", password: "", cpassword: ""
    })
    const handleinput = (e) => {
        let fieldname = e.target.name
        let value = e.target.value
        setuser({
            ...user, [fieldname]: value
        })
    }

    const HandleSubmit=async(e)=>{
        e.preventDefault();
        const {name,email,password,cpassword}=user
        const res= await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,password,cpassword
            })
        })
        const data= await res.json()
        if(data.error=== 422 || !data)
        {
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        }
        else{
            window.alert("Registration Successfully")
            console.log("Registration Successfully")
            console.log("Status",data)
            history.push("/login")
        }
    }
    return (
        <div>
            Registration Page
            <form method="POST" onSubmit={HandleSubmit}>
                <input type="text" onChange={handleinput} value={user.name} name="name" placeholder="Enter Name..." />
                <br />
                <br />
                <input type="email" onChange={handleinput} value={user.email} name="email" placeholder="Enter Email..." />
                <br />
                <br />
                <input type="password" onChange={handleinput} value={user.password} name="password" placeholder="Enter Passoword..." />
                <br />
                <br />
                <input type="password" onChange={handleinput} value={user.cpassword} name="cpassword" placeholder="Confirm Password..." />
                <br />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Registration
