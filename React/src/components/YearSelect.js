import React, { Component } from "react";


class YearSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            years: []
        };
        for (let i = this.props.start; i <= this.props.end; i++) {
            this.state.years = [...this.state.years, i];
        }
    }
    render() {
        return (
            <select defaultValue={this.props.end} className="form-control" id="year" name="year" onChange={e => this.props.setYear(e.target.value)}>
                {
                    this.state.years.map((year, index) => <option key={index} value={year}>{year}</option>)
                }
            </select>
        )
    }
}
export default YearSelect