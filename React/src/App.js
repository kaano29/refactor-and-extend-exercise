import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './components/Welcome';
import ValidateCar from './components/ValidateCar';
import InventoryCarTable from './components/InventoryCarTable';
import PageHeader from './components/PageHeader';

class App extends Component {

  state = {}

  render() {
    return (
      <BrowserRouter>
        <PageHeader />
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="validateCar" element={<ValidateCar />} />
          <Route path="inventory" element={<InventoryCarTable />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
