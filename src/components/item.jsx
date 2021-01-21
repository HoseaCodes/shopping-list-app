import React from 'react';
import styled from 'styled-components';
import EditItem from './editForm';

const ListGroupd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
            <h3>Item #: {props.item.id + 1} </h3>
            <h3>Item: {props.item.text} </h3>
            <h3>Quanity: {props.item.quanity} </h3>
            <h3>Price: {props.item.price}  </h3>
        </SubTitleStyle><EditItem item={props.item} updateMetadata={props.updateMetadata}
            category={props.item.category} price={props.item.price} quanity={props.item.quanity}
            userInput={props.updateInput} idx={props.item.id} /> </ListGroupd>
    )
}
export default Item;