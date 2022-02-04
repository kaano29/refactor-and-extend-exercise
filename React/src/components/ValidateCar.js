import React, { useState } from "react";
import ValidCarDataList from "../data/ValidCarDataList";



const ValidateCar = () => {

    const [state, setState] = useState({})

    const isValidCar = (car) => {
        if (!isNaN(car.year) && (car.year.length === 2 || car.year.length === 4)) {
            return validCar(car);
        }
        return false;
    };

    const validCar = (car) => {
        let result = false
        let validDate = car.year.length === 4 ? Number(String(car.year).substring(2, 4)) : car.year;
        for (let item of ValidCarDataList) {
            if (
                car.make.toLowerCase() === item.make &&
                (validDate > item.minYearOfConstruction ||
                    validDate < item.maxYearOfConstruction)
            ) {
                result = true;
                break;
            }
        }
        return result
    };

    return (
        <div style={{marginLeft: '35%', marginTop: '30px'}}>
            {state.isValid ? <h2>Valid Vehicle</h2> : <h2>Invalid Vehicle</h2>}
            <label>Make:</label>
            <input type="text" name="make" onChange={(event) => setState(({ ...state, make: event.target.value }))} />
            <br />
            <label>Year:</label>
            <input type="text" name="year" onChange={(event) => setState(({ ...state, year: event.target.value }))} />
            <br />
            <button style={{marginTop: 10}} onClick={() => setState({ ...state, isValid: isValidCar({ make: state.make, year: state.year }) })}>Validate</button>
        </div>
    )
}

export default ValidateCar;