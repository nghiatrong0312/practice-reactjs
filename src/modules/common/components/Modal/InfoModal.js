import React, {useContext, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import DataContext from "../../Context/DataContext";
import * as Icon from 'react-bootstrap-icons';

export default function InfoModal(props) {

    let dataContext = useContext(DataContext)

    const handleClose = () => {
        dataContext.setShow(false);
    };

    const element = dataContext.productOrder.map((data, index) => {
        return <tr key={index}>
                    <th>{ data.nameFood }</th>
                    <th>{ data.quantity }</th>
                    <th><Icon.Trash3Fill /></th>
                </tr>
    })

    return (
        <>
            <Modal show={props.value.valueStatus} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Order List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            { element }
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}