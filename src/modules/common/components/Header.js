import React, {useContext} from "react";
import * as Icon from 'react-bootstrap-icons';
import './Header.css'
import DataContext from "../Context/DataContext";

function Header(context) {

    let count = useContext(DataContext)

    return (
        <div>
            <div className="container-fluid header-content">
                <div className="row p-2">
                    <div className="col-6">
                        <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <div className="col-6 bag-icon">
                        <Icon.Bag />
                        <span className="quantity-food" >{count.quantity}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
