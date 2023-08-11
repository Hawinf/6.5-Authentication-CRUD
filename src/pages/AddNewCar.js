import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddNewCar = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

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
            <button>
                <Link>
                    Save
                </Link>
            </button>
        </div>
    )
}

export default AddNewCar;