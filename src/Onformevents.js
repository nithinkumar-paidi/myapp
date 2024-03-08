import React from 'react';

class FormExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
          />
        </label>
      </form>
    );
  }
}

export default FormExample;
