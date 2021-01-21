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

  const handleInput = (key, value) => {
    this.setState({
      [key]: value,
      filteredSearch: value.substr(0, 20),
    })
  }
  return (
    <InputGroup >
      <Input
        type="text"
        name="items"
        placeholder="Please enter shopping list item"
        value={this.state.newItem}
        onChange={e => this.handleInput("newItem", e.target.value)}
      ></Input>
      <select name="category" className="filter-list">
        <option value="all"> All</option>
      </select>
      <Button variant="outline-secondary" onClick={() => this.addItem()}>Create Button</Button>
    </InputGroup>
  )
}

export default EntryForm;