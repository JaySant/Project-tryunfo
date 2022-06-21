import React from 'react';
import PropTypes from 'prop-types';

class FilterCards extends React.Component {
  render() {
    const { onInputChange, filterName, filterRare } = this.props;
    return (
      <form>
        <label htmlFor="filterName">
          Filtros de Cartas
          <input
            type="text"
            data-testid="name-filter"
            onChange={ onInputChange }
            name="filterName"
            value={ filterName }
            placeholder="Nome das Cartas"
          />
        </label>
        <label htmlFor="filterRare">
          <select
            htmlFor="filterRare"
            name="filterRare"
            value={ filterRare }
            onChange={ onInputChange }
            data-testid="rare-filter"
          >
            <option> todas </option>
            <option> normal </option>
            <option> raro </option>
            <option> muito raro </option>
          </select>
        </label>
      </form>
    );
  }
}

FilterCards.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
};

export default FilterCards;
