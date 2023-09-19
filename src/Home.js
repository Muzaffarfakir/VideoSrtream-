import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useCookies } from "react-cookie";
import Login from "./Login";

function Home() {
    let [data, setData] = useState([]);
    let [cookie, setCookies] = useCookies(["access_token"]);
    function result() {
        fetch("https://videostream-back.onrender.com/").then((res) => res.json()).then((data) => {
            setData(data)
        })
    }
    useEffect(() => {
        result();
    }, [])
    return (
        <>
            {!cookie.access_token ? (<Login />) : (
                <>
                    <h2 className="text-center">All Post here</h2>
                    <div className="card my-3 mb-3 mx-3">
                        <div className="card-body my-3 mx-3 mb-3">
                            {data.map((el) => {


                                return <div className="card my-6 mx-3 mb-3">
                                    <video controls autoPlay={"autoplay"} muted   >
                                        <source src={`${el.video}`}></source>
                                    </video>
                                </div>
                            })}


                        </div>

                    </div>
                </>
            )}

        </>
    )

}
export default Home;
