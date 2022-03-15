import React from 'react';
import { Link } from "react-router-dom";

const PageHeader = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/14-transportation-automotive/car-inspection.svg" alt="" width="30" height="24"></img>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/validateCar">Validate Car</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/inventory">Inventory</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)



export default PageHeader