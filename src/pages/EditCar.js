import React from "react";
import { useParams } from "react-router-dom";

const EditCar = (id) => {
    const { id } = useParams();

    return (
        <div>
            <h1>Edit Car</h1>

        </div>
    )
}

export default EditCar;