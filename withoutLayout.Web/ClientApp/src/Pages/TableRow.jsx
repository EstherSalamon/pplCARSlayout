import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const TableRow = (props) => {
    const { id, firstName, lastName, age, cars } = props.person;
    return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{cars.length}</td>
            <td>
                <Link to={`/AddCar/${id}`}>
                    <button className='btn btn-outline-info w-100'>Add Car</button>
                </Link>
            </td>
            <td>
                <Link to={`/DeleteCars/${id}`}>
                    <button className='btn btn-outline-danger w-100'>Delete all cars</button>
                </Link>
            </td>
        </tr>
    )
}

export default TableRow;