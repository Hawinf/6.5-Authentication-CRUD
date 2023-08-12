import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../const/endpoint";

const AddNewCar = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleName = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }
    const handlePrice = (e) => {
        // console.log(e.target.value)
        setPrice(e.target.value)
    }
    const handleCatgeory = (e) => {
        // console.log(e.target.value)
        setCategory(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleCreate = () => {
        const token = localStorage.getItem('token')

        const config = {
            headers: {
                access_token : token
            }
        }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('status', false);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('name', name);

        axios
            .post(API.POSTCAR, formData, config)
            .then((res) => {
                // console.log(res)
                navigate('/discovery')
            })
            .catch((err) => console.log(err.message))
    }

    return(
        <div>
            <h1>Add New Car Page</h1>
            <input onChange={handleName} placeholder="name" />
            <input onChange={handlePrice} placeholder="price" />
            <input onChange={handleCatgeory} placeholder="category" />
            <input onChange={handleImage} type="file" />
            <button>
                <Link to='/discovery'>
                    Cancel
                </Link>
            </button>
            <button onClick={handleCreate}>
                <Link>
                    Save
                </Link>
            </button>
        </div>
    )
}

export default AddNewCar;