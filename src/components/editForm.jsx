import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.updateMetadata = this.props.updateMetadata.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            category: this.props.item.category,
            price: this.props.item.price,
            quanity: this.props.item.quanity,

        };
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="EditPage-container">
                <Container className="shadow p-3 bg-white rounded">
                    <div className="form-header">
                        <h3>Edit Item</h3>
                    </div>
                    <br />
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={this.props.item.category}
                            value={this.state.category}
                            name="category"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder={this.props.item.price}
                            value={this.state.price}
                            name="price"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quanity</Form.Label>
                        <Form.Control
                            type="number"
                            rows="3"
                            value={this.state.quanity}
                            name="quanity"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button onClick={() => this.updateMetadata(this.props.item.id)} variant={"outline-secondary"} type="submit">
                        Submit Changes
            </Button>{" "}
                </Container>
            </div>
        );
    }
}

export default EditItem;
