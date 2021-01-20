import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import item from './components/item';

const Button = styled.button`

`;

const Input = styled.input`

`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      filteredSearch: "",
      newItem: "",
      pending: true,
      id: 0

    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
      filteredSearch: value.substr(0, 20),
    })
  }

  pendingCompleted = (id) => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          item.pending = !item.pending
        }
        return item;
      })
    })
  }
  addItem() {
    const idx = this.state.id + 1
    const newItem = { text: this.state.newItem, id: idx, pending: true }
    const list = [...this.state.list]
    list.push(newItem);
    this.setState({ list, newItem: "", id: idx, pending: true })
  }

  onSubmit = (e) => {
    this.addItem(this.newItem)
    this.setState({ list: this.state.list })
  }

  sortByText = (a, b) => {
    const diff = a.text.toLowerCase().localeCompare(b.text.toLowerCase());
    return diff;
  }
  render() {
    const { list } = this.state
    const sortedList = list.sort((a, b) => a.text.localeCompare(b.text))
      .map((item) => <li key={item.id} >{item.text}</li>);


    // const filteredList = list.filter((item) => {
    //   return item.value.toLowerCase().indexOf(this.state.filteredSearch.toLowerCase()) !== -1
    // })
    return (
      <main>
        <Input
          type="text"
          name="items"
          placeholder="Please enter shopping list item"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        ></Input>
        <Button onClick={() => this.addItem()}>Create Button</Button>
        {/* Sort alphabetically */}
        <section>
          <ul>
            List of Pending Items
            {sortedList}
          </ul>
        </section>
        <section> List of Crossed Off Items</section>
        {/* Sort alphabetically */}

      </main>
    )
  }
}

export default App;
