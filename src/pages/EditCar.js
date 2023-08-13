import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCar = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [reload, setReload] = useState({});
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [cate, setCate] = useState('');
    const [img, setImg] = useState(null);

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
        setCate(e.target.value)
    }
    const handleImage = (e) => {
        // console.log(e.target.files[0])
        setImg(e.target.files[0])
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                access_token : token
            }
        }

        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,config)
            .then((res) => {
                console.log(res.data)
                // setReload()
            })
            .catch((err) => console.log(err))
    })

    const saveEdit = () => {
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                access_token : token
            }
        }

        const formData = new FormData();
            formData.append('name', name)
            formData.append('image', img)
            formData.append('category', cate)
            formData.append('status', false)
            formData.append('price', price)

        axios
            .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,formData, config)
            .then((res) => {
                // console.log(res)
                navigate('/discovery')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Edit Car</h1>
            <h1>This is {id}</h1>
            {/* {
                reload.length && (
                    reload.map((item) => (
                    <> */}
                        <input onChange={handleName} placeholder="name" />
                        <input onChange={handlePrice} placeholder="price" />
                        <input onChange={handleCatgeory} placeholder="category" />
                        <input onChange={handleImage} type="file" />
                        <button onClick={saveEdit}>Save Changes</button>
                    {/* </>
                    ))
                )
            } */}
            
        </div>
    )
}

export default EditCar;