import React, { Component } from 'react';

class NewPoll extends Component {
  constructor() {
    super();
    this.state = {
      options: [{ value: '' }],
    };
  }

  handleAddOption() {
    const { options } = this.state;

    this.setState({
      options: options.concat({ value: '' }),
    });
  }

  handleOptionRemoval(idx) {
    const filtered = this.state.options.filter((_, i) => i !== idx);
    this.setState({
      options: filtered,
    });
  }

  handleOptionChange(e) {
    const options = this.state.options.map((v, i) => {
      if (e.target.id !== i) return v;
      return { ...v, value: e.target.value };
    });

    this.setState({
      options,
    });
  }

  render() {
    return (
      <div className="formContainer">
        <form className="form-control form__login">
          <p>New poll</p>
          <div className="form-group">
            <label htmlFor="question">
              Enter your question
              <input type="text" className="form-control" id="question" />
            </label>
          </div>
          <button className="btn btn-light" onClick={this.handleaddOption}>
            Add option
          </button>
          {this.state.options.map((o, i) => (
            <div className="form-group">
              <label htmlFor={i}>
                {`Option ${i + 1}`}
                <input
                  type="text"
                  className="form-control"
                  placeholder={`Option ${i + 1}`}
                  value={o.value}
                  id={i}
                  onChange={this.handleOptionChange}
                />
                <button type="button" onClick={() => this.handleOptionRemoval(i)}>
                  x
                </button>
              </label>
            </div>
          ))}
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewPoll;
