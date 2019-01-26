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
  'Sord M200 Smart Home model': {
    manufacturer: 'Sord model Corporation',
    year: 1971,
    origin: 'Japan'
  },
  'Commodore 64': {
    manufacturer: 'Commodore',
    year: 1982,
    origin: 'USA'
  }
};

class App extends Component {
  state = {};

  updateSelection = event => {
    this.setState({ value: event.target.value });
  };

  submitHandler = () => {
    const model = { ...data[this.state.value], name: this.state.value };
    this.validateSelection(this.props.models, model) &&
      this.props.addModel(model);
  };

  validateSelection = (models, selection) => {
    if (!selection.name) {
      console.log(`No model selected`);
      return false;
    } else if (
      JSON.stringify(models).indexOf(JSON.stringify(selection)) !== -1
    ) {
      console.log(`Model ${selection.name} already added`);
      return false;
    }
    return true;
  };

  renderOptions = model => {
    const name = model[0];
    const details = model[1];
    return (
      <option key={name} value={name}>
        {name} ({details.year})
      </option>
    );
  };

  render() {
    return (
      <div className='App'>
        {
          <div className='model-selection'>
            <ModelDetails modelDetails={this.props.models} />
            <select onChange={this.updateSelection} value={this.state.value}>
              <option value=''>-- pick a model --</option>
              {Object.entries(data).map(model => this.renderOptions(model))}
            </select>
            <button onClick={this.submitHandler}>Add</button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { models: state.models };
};

export default connect(
  mapStateToProps,
  { addModel }
)(App);
