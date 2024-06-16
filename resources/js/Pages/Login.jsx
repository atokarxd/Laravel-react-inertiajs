import { Link } from "@inertiajs/react";
import { useState } from "react";
import axios from "../api/axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/signup', {email, password});
            setEmail("")
            setPassword("")
        } catch(e) {
            console.log(e)
        }
    }

    return(
        <>
        <div className="bg-black h-screen w-full place-content-center">
            <div className="bg-white max-w-96 max-h-1xl opacity-70 p-5 mx-auto rounded-2xl cursor-default">
                <h1 className="m-2 text-3xl text-center text-white mix-blend-difference mb-6">LOGIN</h1>
                <form className="flex flex-col m-2 justify-center items-center" onSubmit={handleLogin}>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className="my-2 focus:outline-red-700" type="email" placeholder="E-mail" required />
                    <input value={password} onChange={(e)=>setPassword(e.target.value)}  className="my-2 focus:outline-red-700" type="password" placeholder="Password" minLength={4} maxLength={8} required />
                    <button className="my-2 bg-red-700 text-white w-28 rounded-2xl" type="submit">Login</button>
                </form>
                <p className="m-2 text-sm text-center text-gray-500 border-t-2 p-2 mt-4"><Link href="/signup">Sign up here</Link></p>
            </div>
        </div>
        </>
    )
}