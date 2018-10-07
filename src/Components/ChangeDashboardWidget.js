import React, { Component } from 'react';



class ChangeDashboardWidget extends Component {
  state = {
    showInput: false,
    newDashboard: ""

  }

  handleSelectChange = (event) => {
    const value = event.target.value;
    if (value === "new") {
      this.setState({
        showInput: true
      })
    } else {
      this.setState({
        showInput: false
      })
      console.log("change dashboard");
    }
  }
  render () {
    const input = <div className="input-dashboard">
      <input className="" type="text" />
      <button>{"+"}</button>
      </div>
    return (
      <div className="change-dashboard-select">
      {this.state.showInput && input}
      
      <select onChange={this.handleSelectChange} >
      <option value="" disabled>Move to...</option>
      <option value="">want to read</option>
      <option value="new">new</option>
      </select>
      </div>

      )

  } 

}

export default ChangeDashboardWidget;