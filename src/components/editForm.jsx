import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EditItem = (props) => {
    return (
        <div className="EditPage-container">
            <Container className="shadow p-3 bg-white rounded">
                <div>
                    <h3>Edit Item</h3>
                </div>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder={props.category}
                                value={props.category}
                                name="category"
                                onChange={e => props.updateInput("category", e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                size="sm"
                                type="number"
                                placeholder="Please enter item price"
                                value={props.price}
                                name="price"
                                onChange={e => props.updateInput("price", e.target.value)}
                            />    </Col>
                        <Col>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                size="sm"
                                type="number"
                                rows="3"
                                value={props.quantity}
                                name="quantity"
                                onChange={e => props.updateInput("quantity", e.target.value)}
                            />    </Col>
                    </Row>

                </Form.Group>

                <Button onClick={() => props.updateMetadata(props.item.id)} variant={"outline-secondary"} type="submit">
                    Submit Changes
            </Button>{" "}
            </Container>
        </div>
    );
}

export default EditItem;
