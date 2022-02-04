import React, { useState } from 'react';
import InventoryCarList from '../data/InventoryCarList'
import { Table } from 'react-bootstrap';

const InventoryCarTable = () => {

    const [state, setState] = useState({ inventoryList: InventoryCarList })

    const fillTable = (car) => (
        <tr>
            <td>{car.make}</td>           
            <td>{car.model}</td>
            <td>{car.value}</td>
            <td>{car.color}</td>
            <td>{car.year}</td>
        </tr>
    )

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Value</th>
                    <th>Color</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {state.inventoryList.map(car => fillTable(car))}
            </tbody>
        </Table>
    )
}

export default InventoryCarTable