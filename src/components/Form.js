import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="name-input">
            Nome
            <input
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
              type="text"
            />
          </label>
        </div>
        <div>
          <label htmlFor="textarea">
            Descrição
            <textarea
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr1">
            Attr01
            <input
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
              type="number"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr2">
            Attr02
            <input
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
              type="number"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr3">
            Attr03
            <input
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
              type="number"
            />
          </label>
        </div>
        <div>
          <label htmlFor="image">
            Imagem
            <input
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
              type="text"
            />
          </label>
        </div>
        <div>
          <select
            htmlFor="rare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option> normal </option>
            <option> raro </option>
            <option> muito raro </option>
          </select>
        </div>
        <div>
          <label htmlFor="trunfo-input">
            <input
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
              type="checkbox"
            />
            Super Trybe Trunfo
          </label>
        </div>
        <div>
          <button
            type="button"
            name="onSaveButtonClick"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
