import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.calender = this.calender.bind(this);
    this.addTask = this.addTask.bind(this);
    this.populate = this.populate.bind(this);
    this.taskName = this.taskName.bind(this);
    this.taskTime = this.taskTime.bind(this);
    this.taskDue = this.taskDue.bind(this);
    this.taskStart = this.taskStart.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      form_status: "none",
      name: "",
      time: "",
      due: "",
      start: ""
    }
  }

  populate() {
      return(
        <div>

        <div className='margin-top'>
        <button className='btn' onClick={this.addTask}>Add Task</button>
        <div className='calendar'>{this.calender(this.state.name, this.state.time, this.state.due, this.state.start)}</div>
        </div>

        <div className='form' style={{display: this.state.form_status}}>
        <h1 className='x'> <span id="x-btn" onClick={() => {this.setState({
          form_status: "none",
          name: "",
          time: "",
          due: "",
          start: ""})}}>x</span></h1>
        <br></br>
        <h2 className='inputs'>Task Name: </h2>
        <input type="text" className='input-name' onChange={this.taskName}></input>
        <h2 className='inputs'>Estimated Time: </h2>
        <input type="text" className='input-name' onChange={this.taskTime}></input>
        <h2 className='inputs'>Due Date: </h2>
        <input type="text" className='input-name' onChange={this.taskDue}></input>
        <h2 className='inputs'>Start Date: </h2>
        <input type="text" className='input-name' onChange={this.taskStart}></input>
        <br></br>
        <button className='btn-p' onClick={this.submit}>Submit</button>
        </div>

       </div>
      );
  }

  taskName(e) {
    this.setState({
      name: e.target.value
    })
  }
  taskTime(e) {
    this.setState({
      time: e.target.value
    })
  }
  taskDue(e) {
    this.setState({
      due: e.target.value
    })
  }
  taskStart(e) {
    this.setState({
      start: e.target.value
    })
  }

  submit() {
    this.setState({
      form_status: "none"
    })
  }

  addTask() {
    this.setState({
      form_status: "block"
    })
  }

  calender(n, t, d, s) {
    let dates = [];
    let dailyHours = t/(d-s+1);
    for(let i = 1; i < 32; i++) {
      if(i == s && t > 0) {
        dates.push(
          <div className="calender-dates">
            {i}
            <p>{n}</p>
            <p>{dailyHours} hours</p>
          </div>
        );
        t = t-dailyHours;
        s++;
      } else {
        dates.push(
          <div className="calender-dates">
            {i}
          </div>
        );
      }
      if(i%7 === 0) {
        dates.push(
        <br></br>
        );
      } 
    }
    return dates;
  }

  render() {
    return this.populate();
  }
}

export default App;
