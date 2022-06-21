import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import FilterCards from './components/FilterCards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      listCard: [],
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      filterName: '',
      filterRare: 'todas',
    };
    this.deleteButton = this.deleteButton.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateButtonDisabled);
  }

  validateButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxValue = 90;
    const minValue = 0;
    const totalValue = 210;

    if (cardName && cardDescription && cardImage !== ''
    && cardAttr1 <= maxValue && cardAttr1 >= minValue
    && cardAttr2 <= maxValue && cardAttr2 >= minValue
    && cardAttr3 <= maxValue && cardAttr3 >= minValue
    && parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10) <= totalValue
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      listCard,
      cardTrunfo,
    } = this.state;

    const obj = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
    };

    this.setState({
      listCard: [...listCard, obj],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: 'false',
    });
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
  };

  deleteButton(item) {
    const { listCard } = this.state;
    const newListCard = listCard.filter((e) => e.cardName !== item.cardName);
    const checkTrunfo = newListCard.some((e) => e.cardTrunfo === true);
    this.setState({
      listCard: newListCard,
      hasTrunfo: checkTrunfo,
    });
  }

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
      hasTrunfo,
      listCard,
      isSaveButtonDisabled,
      filterName,
      filterRare,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <FilterCards
          filterName={ filterName }
          filterRare={ filterRare }
          onInputChange={ this.onInputChange }
        />
        {listCard.filter((item) => item.cardName
          .includes(filterName))
          .filter((item) => ((filterRare === 'todas') || (item.cardRare === filterRare)))
          .map((item) => (
            <div key={ item.cardName }>
              <Card
                cardName={ item.cardName }
                cardDescription={ item.cardDescription }
                cardAttr1={ item.cardAttr1 }
                cardAttr2={ item.cardAttr2 }
                cardAttr3={ item.cardAttr3 }
                cardImage={ item.cardImage }
                cardRare={ item.cardRare }
                cardTrunfo={ item.cardTrunfo }

              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.deleteButton(item) }
              >
                Excluir
              </button>
            </div>
          ))}
      </div>
    );
  }
}

export default App;

// Obrigada Carla Heyde turma 20A pela ajuda com as props;
