import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useCookies } from "react-cookie";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function AddVideo() {
    let [file, SetFile] = useState();
    let [cookie, setCookies] = useCookies(["access_token"])
    let nav = useNavigate();
    function send(e) {
        let data = new FormData();
        data.append("file", file)
        if (file === undefined || file === null) {
            alert('first upload here !')

        } else {
            axios({
                method: 'post',
                url: "https://videostream-back.onrender.com/AddVideo/",
                data: data,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
             nav("/")

        }


    }

    return (
        <>
            {!cookie.access_token ? (<Login />) : (
                <>

                    <h2 className="text-center">
                        Add A Videos  or share With Others
                    </h2>
                    <div class="input-group mb-3  " style={{ marginTop: "3rem" }}>
                        <input type="file" name="file" onChange={(e) => { SetFile(e.target.files[0]) }} class="form-control" aria-describedby="basic-addon2" />
                        <div class="input-group-append">

                        </div>

                    </div>
                    <button class="btn btn-outline-secondary text-center d-flex mx-auto" onClick={send} type="button" style={{ marginTop: "2rem" }}>SignUp</button>

                </>
            )}



        </>
    )
}
export default AddVideo
