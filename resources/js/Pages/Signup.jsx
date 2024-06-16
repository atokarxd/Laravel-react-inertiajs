import { Link } from "@inertiajs/react"
import React, { useState } from "react";
//import { useHistory } from 'react-router-dom';
import axios from "../api/axios";

export default function Signup() {
    //const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [new_password, setNew_password] = useState("");
    const [email, setMail] = useState("");
    //const history = useHistory();

   /* async function signUp() {
        if(password == new_password) {
            let item = {name, email, password}
            console.log(item)

            let result = await fetch("http://localhost:8000/api/register", {
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(item)
            })
            result = await result.json()
            localStorage.setItem("user-info", JSON.stringify(result))
            //history.push("/login")

        } else {
            window.alert("Wrong password Confirmation")
            //console.log(password, new_password)
        }
    }*/

    const signUp = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/register", {name, email, password});
            setMail("")
            setPassword("")
            setNew_password("")
            setName("")
        } catch(e) {
            console.log(s)
        }
    }

    return(
        <>
            <div className="bg-black h-screen w-full place-content-center">
                <div className="bg-white max-w-96 max-h-1xl opacity-70 p-5 mx-auto rounded-2xl cursor-default">
                    <h1 className="m-2 text-3xl text-center text-white mix-blend-difference mb-6">Sign UUUUp</h1>
                    <form action="" className="flex flex-col m-2 justify-center items-center" onSubmit={signUp}>
                        <input onChange={(e)=>setName(e.target.value)} value={name} className="my-2 focus:outline-red-700" type="text" placeholder="Full Name" required />
                        <input onChange={(e)=>setMail(e.target.value)} value={email} className="my-2 focus:outline-red-700" type="email" placeholder="E-mail" required />
                        <input onChange={(e)=>setPassword(e.target.value)} value={password} className="my-2 focus:outline-red-700" type="password" placeholder="Password" minLength={4} maxLength={12} required />
                        <input onChange={(e)=>setNew_password(e.target.value)} value={new_password} className="my-2 focus:outline-red-700" type="password" placeholder="Password Confirmation" minLength={4} maxLength={12} required />
                        <button className="my-2 bg-red-700 text-white w-28 rounded-2xl" type="submit">Signup</button>
                    </form>
                    <p className="m-2 text-sm text-center text-gray-500 border-t-2 p-2 mt-4"><Link href="/">LOGIN here</Link></p>
                </div>
            </div>
        </>
    )
}