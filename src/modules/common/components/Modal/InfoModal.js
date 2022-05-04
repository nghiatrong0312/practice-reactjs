import React, {useContext, useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import DataContext from "../../Context/DataContext";
import * as Icon from 'react-bootstrap-icons';

export default function InfoModal(props) {

    const context = useContext(DataContext);
    const [newContext,setNewContext] = useState(context);
    useEffect(() => {
        setNewContext({...context});
    });

    const handleClose = () => {
        newContext.setShow(false);
    };

    const deleteFoodInList = (param1, param2) => e => {
        newContext.productOrder.splice(param1, 1);
        const arrayDelete = newContext.productOrder;
        newContext.setProductOrder(arrayDelete);

        newContext.dataProduct.map((data, index) => {
            if (data.id === param2) {
                if (newContext.quantity !== 0) {
                    console.log(2)
                    newContext.setQuantity(newContext.quantity - data.quantity);
                }
                data.quantity = 0;
                data.status = false;
            }
        })
    };

    const element = newContext.productOrder.map((data, index) => {
        if (data.quantity !== 0) {
            return <tr key={index}>
                        <th>{ data.nameFood }</th>
                        <th>{ data.quantity }</th>
                        <th><Icon.Trash3Fill onClick={ deleteFoodInList(index, data.id) } /></th>
                    </tr>
        }
    })

    const [testOrder,setTestOrder] = useState(context.dataProduct);

    const submitOrder = () => {
        newContext.setHistoryOrder(context.productOrder);
        newContext.setProductOrder([]);
        newContext.setQuantity(0);
        testOrder.map((data, index) => {
            data.quantity = 0;
            data.status = false;
        })
        console.log(testOrder)
    }

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
                    <Button variant="primary" onClick={submitOrder}>
                        Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}