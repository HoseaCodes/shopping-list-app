import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/header';
import EditForm from './components/editForm';
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
const ListGroupd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
      filteredSearch: "",
      newItem: "",
      pending: true,
      id: -1

    }
  }

  updateInput = (key, value) => {
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
  addItem = () => {
    const idx = this.state.id + 1
    const newItem = { text: this.state.newItem, id: idx, pending: true, category: "", quanity: 0, price: 0 }
    const list = [...this.state.list]
    list.push(newItem);
    this.setState({ list, newItem: "", id: idx, pending: true, category: "", quanity: 0, price: 0 })
  }

  updateMetadata = (idx) => {
    const newItem = { text: this.state.newItem, pending: true, category: "", quanity: 0, price: 0 }
    const list = [...this.state.list]
    list.push(newItem);
    this.setState({ list: this.state.list })

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
      .map((item) => <ListGroupd><SubTitleStyle
        style={{ textDecoration: item.pending ? "" : "line-through" }}
        onClick={() => this.pendingCompleted(item.id)}
        key={item.id}>{item.text} </SubTitleStyle><EditForm item={item} updateMetadata={this.updateMetadata}
          category={item.category} price={item.price} quanity={item.quanity}
          userInput={this.updateInput} idx={item.id} /> </ListGroupd>);
    const sortedComplete = complete.sort((a, b) => a.text.localeCompare(b.text))
      .map((item) => <SubTitleStyle
        style={{ textDecoration: item.pending ? "" : "line-through" }}
        onClick={() => this.pendingList(item.id)}
        key={item.id} >{item.text}</SubTitleStyle>);


    // const filteredList = list.filter((item) => {
    //   return item.value.toLowerCase().indexOf(this.state.filteredSearch.toLowerCase()) !== -1
    // })
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
          <Button variant="outline-secondary" onClick={() => this.addItem()}>Create Button</Button>
        </InputGroup>
        <TitleStyle>
          List of Pending Items
        </TitleStyle>
        {sortedList}
        <TitleStyle>
          List of Crossed Off Items
        </TitleStyle>
        {sortedComplete}
      </>
    )
  }
}

export default App;
