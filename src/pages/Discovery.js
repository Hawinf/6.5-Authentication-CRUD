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
        reload();
   },[])

   const reload = () => {
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                access_token : token,
            }
        }

        axios
            .get(API.LISTCARS, config)
            .then((res) => {
                console.log(res)
                setGetCars(res.data.cars)
            })
            .catch((err) => console.log(err))
   }

   const handleDelete = (id) => {
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                access_token: token
            }
        }

        axios
            .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
            .then((res) => {
                // console.log(res)
                reload()
            })
            .catch((err) => console.log(err))
   }

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
                            <div>
                                <button onClick={() =>handleDelete(item.id)}>Delete</button>
                                <button>
                                    <Link to={`/edit/${item.id}`}>
                                        Edit
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default Discovery;