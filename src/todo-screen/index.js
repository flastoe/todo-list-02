import React from 'react';

import TodoComponent from './component';

class TodoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      selectedColor: '',
      toDos: []
    }
  }

  handleInput = (inputText) => {
    console.log(inputText);
    this.setState({
      inputText
    })
  }

  handleSelectColor = (selectedColor) => {
    this.setState({
      selectedColor
    })
  }
  handleAdd = () => {
    const { toDos, inputText, selectedColor } = this.state;
    this.setState({
      inputText: '',
      selectedColor: '',
      toDos: [...toDos, { title: inputText, color: selectedColor}]
    })
  }

  render () {
    const { inputText, selectedColor, toDos } = this.state;
    return <TodoComponent
      inputText={inputText}
      selectedColor={selectedColor}
      toDos={toDos}
      onInput={this.handleInput}
      onSelectColor={this.handleSelectColor}
      onAdd={this.handleAdd}
      />
  }
}

export default TodoScreen;