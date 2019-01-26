import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModelDetails from './components/ModelDetails';
import { addModel } from './actions/models';
import './App.css';

const data = {
  'Ivel Z3': {
    manufacturer: 'Ivasim',
    year: 1969,
    origin: 'Croatia'
  },
  'Bally Astrocade': {
    manufacturer: 'Bally Consumer Products',
    year: 1977,
    origin: 'USA'
  },
  'Sord M200 Smart Home Computer': {
    manufacturer: 'Sord Computer Corporation',
    year: 1971,
    origin: 'Japan'
  },
  'Commodore 64': {
    manufacturer: 'Commodore',
    year: 1982,
    origin: 'USA'
  }
};

const computers = Object.entries(data);

class App extends Component {
  state = {};

  updateSelection = event => {
    this.setState({ value: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const model = { ...data[this.state.value], name: this.state.value };
    this.props.addModel(model);
  };

  render() {
    return (
      <div className='App'>
        {
          <div>
            <select onChange={this.updateSelection} value={this.state.value}>
              <option value=''>-- pick a model --</option>
              {computers.map((computer, index) => (
                <option key={computer[0]} value={computer[0]}>
                  {computer[0]} ({computer[1].year})
                </option>
              ))}
            </select>
            <button onClick={this.submitHandler}>Add</button>
            <ModelDetails modelDetails={this.props.models} />
          </div>
        }
      </div>
    );
  }

  componentDidMount() {
    return <ModelDetails />;
  }
}

const mapStateToProps = state => {
  return { models: state.models };
};

export default connect(
  mapStateToProps,
  { addModel }
)(App);
