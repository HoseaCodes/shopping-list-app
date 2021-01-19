import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`

`;

const Input = styled.input`

`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      newItem: "",
      pending: true,
      id: 0

    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }

  addItem() {
    const newItem = { text: this.state.newItem.slice(), id: this.state.id + 1 }
    const list = [...this.state.list]
    list.push(newItem);
    this.setState({ list, newItem: "" })
  }


  render() {
    return (
      <main>
        <Input
          type="text"
          name="items"
          placeholder="Please enter shopping list item"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        ></Input>
        <Button >Create Button</Button>
        {/* Sort alphabetically */}
        <section>

          List of Pending Items
          </section>
        <section> List of Crossed Off Items</section>
        {/* Sort alphabetically */}

      </main>
    )
  }
}

export default App;
