import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`

`;

const Input = styled.input`

`;

class App extends Component {
  state = {
    items: ''
  }
  render() {
    return (
      <main>
        <Input></Input>
        <Button>Create Button</Button>
        {/* Sort alphabetically */}
        <section> List of Pending Items</section>
        <section> List of Crossed Off Items</section>
        {/* Sort alphabetically */}

      </main>
    )
  }
}

export default App;
