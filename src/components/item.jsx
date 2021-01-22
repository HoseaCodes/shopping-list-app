import { Button } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';
import EditItem from './editForm';

const ListGroupd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

`;
const SubTitleStyle = styled.h2`
    background: whitesome;
    color: #333;
    text-align: center;
    padding: 10px;
`;
const Item = (props) => {
    return (
        <ListGroupd><SubTitleStyle
            style={{ textDecoration: props.item.pending ? "" : "line-through" }}
            onClick={() => props.pendingCompleted(props.item.id)}
            key={props.item.id}>
            <p>Item: {props.item.text} </p>
            <p>Quantity: {props.item.quantity} </p>
            <p>Price: {props.item.price}  </p>
        </SubTitleStyle><EditItem item={props.item} updateMetadata={props.updateMetadata}
            category={props.item.category} price={props.item.price} quantity={props.item.quantity}
            updateInput={props.updateInput} idx={props.item.id} /> </ListGroupd>
    )
}
export default Item;

