import React, {useContext, useState} from "react";
import * as Icon from 'react-bootstrap-icons';
import './Header.css'
import DataContext from "../Context/DataContext";
import InfoModal from "./Modal/InfoModal";
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {

    let dataContext = useContext(DataContext);

    let valueStatus = dataContext.show;

    const showModal = () => {
        dataContext.setShow(true);
    }

    return (
        <div>
            <div className="container-fluid header-content">
                <div className="row p-2">
                    <div className="col-6">
                        <Link to="/">WebSiteName</Link>
                    </div>
                    <div className="col-4 bag-icon">
                        <Icon.Bag onClick={showModal} />
                        <span className="quantity-food" onClick={showModal} >{dataContext.quantity}</span>
                    </div>
                    <div className="col-2">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Link to="/history-order">
                                    <p className="item-dropdown mb-0">History Order</p>
                                </Link>
                                <Dropdown.Item>Add Food</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <InfoModal value={{valueStatus}} />
        </div>
    );
}

export default Header;
