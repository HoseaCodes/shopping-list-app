import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components';
import Item from '../components/item';
import ButtonFilter from '../components/filterData';
import EntryForm from '../components/entryForm';
import { v4 as uuidv4 } from 'uuid';

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
const ListItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 50vh;
    overflow: scroll;
`;

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      complete: [],
      subtotal: null,
      filteredSearch: "",
      newItem: "",
      category: "",
      price: null,
      quantity: null,
      pending: true,
      id: null,
      itemsShow: "All"

    }
  }

  updateInput = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  pendingCompleted = (id) => {
    const list = [...this.state.list]
    const complete = [...this.state.complete]
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      if (element.id === id) {
        if (element.pending === true) {
          element.pending = false
          complete.push(element)
          list.pop(element)
        }
      }
      this.setState({
        list,
        complete
      })
    }
  }
  crossCheck = (id) => {
    const list = [...this.state.list]
    const complete = [...this.state.complete]
    for (let index = 0; index < complete.length; index++) {
      const element = complete[index];
      if (element.id === id) {
        if (element.pending === false) {
          element.pending = true
          list.push(element)
          complete.pop(element)
        }
      }
    }
    this.setState({
      list,
      complete
    })
  }

  addItem = () => {
    const newItem = {
      text: this.state.newItem, id: uuidv4(), pending: true,
      category: this.state.category, quantity: this.state.quantity, price: this.state.price
    }
    const list = [...this.state.list]
    list.push(newItem);
    let subtotal = this.state.subtotal
    subtotal += (this.state.price * this.state.quantity)
    this.setState({ list, subtotal, newItem: "", id: null, pending: true, category: "", quantity: 0, price: 0 })
  }

  updateMetadata = (idx) => {
    const list = [...this.state.list]
    const category = this.state.category
    const quantity = this.state.quantity
    const price = this.state.price
    list.map((element) => {
      if (element.id === idx) {
        var editItem = {
          text: element.text,
          pending: true,
          id: idx,
          category: category,
          quantity: quantity,
          price: price
        }
        list.pop(element.idx)
        list.push(editItem)
      }
    })
    let subtotal = this.state.subtotal

    subtotal += (this.state.price * this.state.quantity)
    this.setState({ list, subtotal, category: "", quantity: 0, price: 0 })

  }

  updateItemsShow = (str) => {
    this.setState({
      itemsShow: str
    })
  }

  render() {
    const { list, complete } = this.state

    /* Sort Alphabetically */

    const sortedComplete = complete.sort((a, b) => a.text.localeCompare(b.text))
    const sortedList = list.sort((a, b) => a.text.localeCompare(b.text))

    /* Sort Alphabetically */


    /* Filter Input */

    const filteredList = sortedList.filter((item) => {
      return item.text.toLowerCase().includes(this.state.newItem.toLowerCase())
    })
    /* Filter Input */


    /* Filter Button Method */

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

    /* Filter Button Method */


    return (
      <>
          <EntryForm category={this.state.category} price={this.state.price}
            quantity={this.state.quantity} newItem={this.state.newItem}
            updateInput={this.updateInput} addItem={this.addItem} />
          <TitleStyle>
            List of Pending Items
          </TitleStyle>
          <SubTitleStyle>Sort By Category</SubTitleStyle>
          <InputGroup style={{ justifyContent: "center" }}>
            <ButtonFilter updateItemsShow={this.updateItemsShow} />
          </InputGroup>
          <ListItems>
            {
              items.map((item) => <Item item={item} updateMetadata={this.updateMetadata}
                category={item.category} price={item.price} quantity={item.quantity}
                updateInput={this.updateInput} idx={item.id} pendingCompleted={this.pendingCompleted} />)
            }
          </ListItems>

          <SubTitleStyle style={{ background: '#333', color: 'white' }}>
            Pending Subtotal:
            ${this.state.subtotal}
          </SubTitleStyle>

          <TitleStyle>
            List of Crossed Off Items
          </TitleStyle>
          {
            sortedComplete.map((item) => <SubTitleStyle
              style={{ textDecoration: item.pending ? "" : "line-through" }}
              onClick={() => this.crossCheck(item.id)}
              key={item.id} >{item.text}</SubTitleStyle>)
          }
        </>
    )
  }
}

export default Home;
