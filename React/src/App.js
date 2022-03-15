import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './components/Welcome';
import InputForm from './components/InputForm';
import Inventory from './components/Inventory';
import PageHeader from './components/PageHeader';


class App extends Component {

  state = {}

  render() {
    return (
      <div>
        <BrowserRouter>
          <PageHeader />
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="validateCar" element={<InputForm />} />
            <Route path="inventory" element={<Inventory />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

// render() {
//   return (
//     <div className="row">
//       <div className="App">
//         <InputForm isValid={this.state.isValid} addToCurrentCarsList={this.addToCurrentCarsList}/>
//         <CarList carList={this.state.currentCarsList}/>
//       </div>
//     </div>
//   );
// }

export default App;
