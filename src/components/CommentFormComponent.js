import React, { Component } from "react";
import { Control, LocalForm, Errors } from 'react-redux-form';
import {
    Button, Modal, ModalHeader, ModalBody, Row, Col, Label
} from 'reactstrap';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false
        };
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        values.preventDefault();

    }
    render() {
        return (
            <div>  <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} style={{ marginTop: "150px" }}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div>
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col >
                                    <Control.select model=".rating" id="rating" name="rating"

                                        className="form-control"
                                    >   <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </div>
                            <div>
                                <Label htmlFor="name" md={3}>Your Name</Label>
                                <Col >
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: (val) => val && (val.length >= 3),
                                            maxLength: (val) => !(val) || (val.length <= 15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </div>
                            <div>
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </div>
                            <div>
                                <Col md={{ size: 10, offset: 0 }} className="mt-3">
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>


            </div >
        )
    }

}
export default CommentForm;