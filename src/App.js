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
      complete: [],
      filteredSearch: "",
      newItem: "",
      pending: true,
      id: -1

    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
      filteredSearch: value.substr(0, 20),
    })
  }

  pendingCompleted = (id) => {
    const list = [...this.state.list]
    list[id].pending = false;
    const complete = [...this.state.complete]
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      if (element.pending === false) {
        complete.push(element)
      }
      else if (element.pending === true) {
        complete.pop(element)
      }
    }
    list.pop(list[id])
    this.setState({
      list,
      complete
    })
  }
  pendingList = (id) => {
    const complete = [...this.state.complete]
    complete[id].pending = true;
    const list = [...this.state.list]
    for (let index = 0; index < complete.length; index++) {
      const element = complete[index];
      if (element.pending === true) {
        list.push(element)
      }
    }
    complete.pop(complete[id])
    this.setState({
      list,
      complete
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
    const { list, complete } = this.state
    const sortedList = list.sort((a, b) => a.text.localeCompare(b.text))
      .map((item) => <li
        style={{ textDecoration: item.pending ? "" : "line-through" }}
        onClick={() => this.pendingCompleted(item.id)}
        key={item.id} >{item.text}</li>);

    const sortedComplete = complete.sort((a, b) => a.text.localeCompare(b.text))
      .map((item) => <li
        style={{ textDecoration: item.pending ? "" : "line-through" }}
        onClick={() => this.pendingList(item.id)}
        key={item.id} >{item.text}</li>);


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
        <section>
          List of Pending Items
          <ul>
            {sortedList}
          </ul>
        </section>
        <section>
          List of Crossed Off Items
            <ul>

            {sortedComplete}
          </ul>
        </section>
      </main>
    )
  }
}

export default App;
