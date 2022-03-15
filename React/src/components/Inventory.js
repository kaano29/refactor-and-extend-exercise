import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Inventory = () => {

    let cars = useSelector((state) => state.inventory);

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
        <div className="container col-lg-4 col-lg-offset-4">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Price in €</th>
                        <th>Color</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(car => fillTable(car))}
                </tbody>
            </Table>
        </div>
    )
}

export default Inventory