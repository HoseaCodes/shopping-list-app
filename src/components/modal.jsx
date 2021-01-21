import React, { useState } from 'react'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';


const EditModal = (props) => {
    const [show, setShow] = useState(false);
    console.log(props)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="outline-secondary" onClick={handleShow}>
                Edit
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Metadata</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                            type="text"
                            name="category"
                            placeholder="Category"
                            aria-label="Text input"
                            value={props.category}
                            onChange={e => props.updateInput("category", e.target.value)} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            type="text"
                            name="quanity"
                            placeholder="quanity"
                            aria-label="Text input"
                            value={props.quanity}
                            onChange={e => props.updateInput("quanity", e.target.value)} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            type="text"
                            name="price"
                            placeholder="Price"
                            aria-label="Text input"
                            value={props.price}
                            onChange={e => props.updateInput("price", e.target.value)} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={props.updateMetadata(props.idx)}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal;