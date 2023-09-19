import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import axios from "axios"
function Signup() {
    let nav = useNavigate();
    let [name, setName] = useState();
    let [email, setEmail] = useState()
    let [pass, setPass] = useState()





    function send() {
        if (name === "" || name === undefined || name === null || email === null || email === "" || email === undefined || pass === null || pass === undefined) {
            alert("write all fields First")
        }
        else {
            axios.post("https://videostream-back.onrender.com/Signdata", { name, email, pass })
            nav("/login")
        }
    }













    return (
        <>
            <h1 class="text-center">SignUp </h1>
            <form encType="multipart/form-data">


                <div class="card my-6 mx-3 mb-6 ">


                    <div class="input-group mb-3  " style={{ marginTop: "3rem" }}>
                        <div class="input-group-append">
                        </div>
                    </div>
                    <div class="input-group mb-3  " style={{ marginTop: "3rem" }}>
                        <input type="text" name="Name" placeholder="Enter a Name here" onChange={(e) => { setName(e.target.value) }} class="form-control" aria-describedby="basic-addon2" />
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








                    <button class="btn btn-outline-secondary" onClick={send} type="button" style={{ marginTop: "2rem" }}>SignUp</button>
                    <h5 class="text-center my-3">I Already I have Account <button onClick={() => { nav('/Login') }} class="btn  bg-primary">Login me</button></h5>
                </div>


            </form>

        </>
    )

}
export default Signup;
