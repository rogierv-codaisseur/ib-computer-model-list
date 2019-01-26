import React from 'react';
import PropTypes from 'prop-types';

const ModelDetails = props => {
  const renderModelDetails = model => {
    return (
      <div key={model.name}>
        <ul>
          <li>Name: {model.name}</li>
          <li>Manufacturer: {model.manufacturer}</li>
          <li>Year: {model.year}</li>
          <li>Origin: {model.origin}</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      {props.modelDetails &&
        props.modelDetails.map(
          model => model.name && renderModelDetails(model)
        )}
    </div>
  );
};

ModelDetails.propTypes = {
  modelDetails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      origin: PropTypes.string.isRequired
    }).isRequired
  )
};

export default ModelDetails;
