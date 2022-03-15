import React, { Component } from "react";
import { carBrands } from "../data/CarBrands";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";

const MakeSelect = () => {

    let handleSelection = (e) => {
        // const brand = JSON.parse(e.target.value);
        // this.props.setMake(brand.name);
        // this.setState({ logo: brand.logo })
        // carBrands.forEach(element => {
        //     if(element.name === e.target.value)
        //     this.setState({logo: element.logo})
        // })
    }


    return (
        <div className="row align-items-start">
            <div className="col">
                <select className="form-control" id="make" name="make"
                    onChange={e => handleSelection(e)}>
                    {
                        carBrands.map((brand, index) =>
                            <option key={index} value={JSON.stringify(brand)}>{brand.name}</option>)
                    }
                </select>
            </div>
            <div className="col align-self-end">
                {/* <img src={this.state.logo} alt="car logo" width="40px" height="40px" /> */}
            </div>
        </div>
    )
}
export default MakeSelect