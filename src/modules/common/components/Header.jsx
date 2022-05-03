import React, {useContext, useState} from "react";
import * as Icon from 'react-bootstrap-icons';
import './Header.css'
import DataContext from "../Context/DataContext";
import InfoModal from "./Modal/InfoModal";

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
                        <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <div className="col-6 bag-icon" onClick={showModal}>
                        <Icon.Bag />
                        <span className="quantity-food" >{dataContext.quantity}</span>
                    </div>
                </div>
            </div>
            <InfoModal value={{valueStatus}} />
        </div>
    );
}

export default Header;
