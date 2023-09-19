import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {useCookies} from "react-cookie"
function Login() {
    let nav = useNavigate();
    let [email,setEmail]=useState()
    let [pass,setPass]=useState()
    let [_,setCookies]=useCookies(["access_token"])



    function send(){
        axios.post("https://videostream-back.onrender.com/login",{email,pass}).then((res)=>{
            if(res.data.mess==="exist"){
                setCookies("access_token",res.data.token)
                window.localStorage.setItem("token",res.data.token);
                window.localStorage.setItem("id",res.data.id)
                nav("/")


            }else{
                alert("You eneter a Wrong crediantails")
            }
        })

    }

 












    return (
        <>
            <h1 class="text-center">Login </h1>
            <form encType="multipart/form-data">


                <div class="card my-6 mx-3 mb-6 ">


                    <div class="input-group mb-3  " style={{ marginTop: "3rem" }}>
                        <div class="input-group-append">
                        </div>
                    </div>
                  
                    <div class="input-group mb-3  " name="Email" onChange={(e) => { setEmail(e.target.value) }} style={{ marginTop: "3rem" }}>
                        <input type="text" class="form-control" placeholder="Enter a Email Here" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                        </div>
                    </div>
                    <div class="input-group mb-3  " name="Pass" onChange={(e) => { setPass(e.target.value) }} style={{ marginTop: "3rem" }}>
                        <input type="text" class="form-control" placeholder="Eneter a Passward Here " aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                        </div>
                    </div>
                 




                    <button class="btn btn-outline-secondary" onClick={send} type="button" style={{ marginTop: "2rem" }}>Login</button>
                    <h5 class="text-center my-3">I Dont  have Account <button onClick={() => { nav('/Signup') }} class="btn  bg-primary">Create</button></h5>
                </div>


            </form>

        </>
    )

}
export default Login;
