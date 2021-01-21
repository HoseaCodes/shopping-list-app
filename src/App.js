import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/header';
import Item from './components/item';
import { Button } from 'react-bootstrap';

const TitleStyle = styled.h2`
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
`;
const SubTitleStyle = styled.h2`
    background: whitesome;
    color: #333;
    text-align: center;
    padding: 10px;
`;
const InputGroup = styled.div`
    display: flex;
`;

const Input = styled.input`
    flex: 10;
    padding: 5px;
`;



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      complete: [],
      subtotal: 0,
      filteredSearch: "",
      newItem: "",
      category: "",
      price: null,
      quanity: null,
      pending: true,
      id: -1,
      itemsShow: "All"

    }
  }

  updateInput = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  handleSelect = () => {

    this.updateInput()
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
    }
    list.pop(list[id])
    this.setState({
      list,
      complete
    })
  }
  pendingList = (id) => {
    const complete = [...this.state.complete]
    console.log(complete[id])
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
  addItem = () => {
    const idx = this.state.id + 1
    const newItem = {
      text: this.state.newItem, id: idx, pending: true,
      category: this.state.category, quanity: this.state.quanity, price: this.state.price
    }
    const list = [...this.state.list]
    list.push(newItem);
    let subtotal = this.state.subtotal
    subtotal += (this.state.price * this.state.quanity)
    console.log(subtotal)
    this.setState({ list, subtotal, newItem: "", id: idx, pending: true, category: "", quanity: 0, price: 0 })
  }

  updateMetadata = (idx, newValue) => {
    const newItem = {
      text: this.state.newItem, pending: true,
      category: this.state.category, quanity: this.state.quanity, price: this.state.price
    }
    const list = [...this.state.list]

    let subtotal = this.subtotal
    subtotal += (this.state.price * this.state.quanity)
    this.setState({ list, subtotal, newItem: "", pending: true, category: "", quanity: 0, price: 0 })

  }

  onSubmit = (e) => {
    this.addItem(this.newItem)
    this.setState({ list: this.state.list })
  }

  updateItemsShow = (str) => {
    this.setState({
      itemsShow: str
    })
  }

  render() {
    const { list, complete } = this.state
    const sortedComplete = complete.sort((a, b) => a.text.localeCompare(b.text))
    const sortedList = list.sort((a, b) => a.text.localeCompare(b.text))
    const filteredList = sortedList.filter((item) => {
      return item.text.toLowerCase().includes(this.state.newItem.toLowerCase())
    })

    let items = []
    if (this.state.itemsShow === "All") {
      items = filteredList
    }
    else if (this.state.itemsShow === "Drinks") {
      items = filteredList.filter(item => item.category.includes("Drinks"))
    }
    else if (this.state.itemsShow === "Misc") {
      items = filteredList.filter(item => item.category.includes("Misc"))
    }
    else if (this.state.itemsShow === "Food") {
      items = filteredList.filter(item => item.category.includes("Food"))
    }

    return (
      <>
        <Header />
        <InputGroup >
          <Input
            type="text"
            name="items"
            placeholder="Please enter shopping list item"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          ></Input>
          <Input
            type="number"
            name="price"
            placeholder="Please enter item price"
            value={this.state.price}
            onChange={e => this.updateInput("price", e.target.value)}
          ></Input>
          <Input
            type="number"
            name="quanity"
            placeholder="Please enter item quanity"
            value={this.state.quanity}
            onChange={e => this.updateInput("quanity", e.target.value)}
          ></Input>
          <select name="category" value={this.state.category} onChange={e => this.updateInput("category", e.target.value)} className="filter-list">
            <option value="all"> All</option>
            <option value="Food"> Food</option>
            <option value="Drinks"> Drinks</option>
            <option value="Misc"> Misc</option>
          </select>
          <Button variant="outline-secondary" onClick={() => this.addItem()}>Create Button</Button>
        </InputGroup>
        <TitleStyle>
          List of Pending Items
        </TitleStyle>
        {
          items.map((item) => <Item item={item} item={item} updateMetadata={this.updateMetadata}
            category={item.category} price={item.price} quanity={item.quanity}
            userInput={this.updateInput} idx={item.id} />)
        }
        <InputGroup style={{ justifyContent: "center" }}>
          <Button variant={'outline-secondary'} onClick={() => this.updateItemsShow("All")}>All</Button>
          <Button variant={'outline-secondary'} onClick={() => this.updateItemsShow("Food")}>Food</Button>
          <Button variant={'outline-secondary'} onClick={() => this.updateItemsShow("Drinks")}>Drinks</Button>
          <Button variant={'outline-secondary'} onClick={() => this.updateItemsShow("Misc")}>Misc</Button>
        </InputGroup>

        <SubTitleStyle style={{ background: '#333', color: 'white' }}>
          Pending Subtotal:
          {this.state.subtotal}
        </SubTitleStyle>

        <TitleStyle>
          List of Crossed Off Items
        </TitleStyle>
        {
          sortedComplete.map((item) => <SubTitleStyle
            style={{ textDecoration: item.pending ? "" : "line-through" }}
            onClick={() => this.pendingList(item.id)}
            key={item.id} >{item.text}</SubTitleStyle>)
        }
      </>
    )
  }
}

export default App;
