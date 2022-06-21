import React from 'react';
import PropTypes from 'prop-types';

class FilterCards extends React.Component {
  render() {
    const { onInputChange, filterName } = this.props;
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
      </form>
    );
  }
}

FilterCards.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default FilterCards;
