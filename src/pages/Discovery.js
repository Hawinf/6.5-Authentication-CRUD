import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AddNewCar from "./AddNewCar";
import { API } from "../const/endpoint";
import axios from "axios";
import { Link } from "react-router-dom";

const Discovery = () => {
    const [getCars, setGetCars] = useState([]);
    // console.log(getCars, 'this is GetCars')
    
    useEffect(() => {
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                access_token : token,
            }
        }

        axios
            .get(API.LISTCARS, config)
            .then((res) => {
                // console.log(res)
                setGetCars(res.data.cars)
            })
            .catch((err) => console.log(err))
   },[])

    return (
        <div>
            <h1>This is Discovery</h1>
            <Navbar />
            <button>
                <Link to='/addcar'>
                    Add New Car
                </Link>
            </button>
            {
                getCars.length && (
                    getCars.map(item => (
                        <div>
                            {/* <img src={item.image} /> */}
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                            <p>{item.category}</p>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default Discovery;