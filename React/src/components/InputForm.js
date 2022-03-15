import React, { Component } from "react"
import validateCar from "./ValidateCar";
import YearSelect from "./YearSelect";
import MakeSelect from "./MakeSelect";


const InputForm = () => {

    // const setYear = (selectedYear) => {
    //     this.setState({ ...this.state, year: selectedYear })
    // }

    // const setMake = (selectedMake) => {
    //     this.setState({ ...this.state, make: selectedMake })
    // }

    // let selectedCar = useSelector((state) => state.selectedCar);

    return (


        <form   >
            <select class="form-select mb-3 mt-4" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    )

    {/* // <div className="container col-lg-4 col-lg-offset-4" >
        //     <h1 className="vertical-center">Supercarstore</h1>
        //     <br />
        //     <label>Make:</label>
        //     <MakeSelect setMake={setMake} />
        //     <br />
        //     <label>Year:</label>
        //     <YearSelect start="1900" end={this.state.year} setYear={setYear} />
        //     <br />
        //     <div className="row align-items-start">
        //         <div className="col">
        //             <button className="btn btn-primary" onClick={() => { setState({ ...this.state, isValid: validateCar({ make: this.state.make, year: this.state.year }) }) }}>Validate</button>
        //         </div>
        //         <div className="col align-self-end">
        //             {this.state.isValid ? <h5 className="text-success" >Valid Vehicle</h5> : <h5 className="text-danger">Invalid Vehicle</h5>}
        //         </div>
        //     </div>
        //     <br />
        //     <label>Price:</label>
        //     <input className="form-control" type="number" name="price" onChange={(event) => setState({ ...this.state, price: event.target.value })} />
        //     <br />
        //     {/* TODO Button Funktion einfügen */}
    {/* //     <button className="btn btn-primary btn-block" onClick={() => { */ }
    {/* //         if (this.state.isValid) { */ }
    {/* //             this.props.addToCurrentCarsList({ */ }
    {/* //                 make: this.state.make,
        //                 year: tis.state.year,
        //                 price: this.state.price,
        //             })
        //         }
        //     }}>Add</button>
        // </div> */}

}

export default InputForm;

