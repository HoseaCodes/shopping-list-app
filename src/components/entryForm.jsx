import React from 'react'
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Input = styled.input`
    flex: 10;
    padding: 5px;
`;
const InputGroup = styled.div`
    display: flex;
`;

const EntryForm = (props) => {

  return (
    <InputGroup >
      <Input
        type="text"
        name="items"
        placeholder="Please enter shopping list item"
        value={props.newItem}
        onChange={e => props.updateInput("newItem", e.target.value)}
      ></Input>
      <Input
        type="number"
        name="price"
        placeholder="Please enter item price"
        value={props.price}
        onChange={e => props.updateInput("price", e.target.value)}
      ></Input>
      <Input
        type="number"
        name="quantity"
        placeholder="Please enter item quantity"
        value={props.quantity}
        onChange={e => props.updateInput("quantity", e.target.value)}
      ></Input>
      <select name="category" value={props.category} onChange={e => props.updateInput("category", e.target.value)} className="filter-list">
        <option value="all"> Category</option>
        <option value="Food"> Food</option>
        <option value="Drinks"> Drinks</option>
        <option value="Misc"> Misc</option>
      </select>
      <Button variant="outline-secondary" onClick={() => props.addItem()}>Create Button</Button>
    </InputGroup>
  )
}

export default EntryForm;