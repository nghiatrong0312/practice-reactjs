import React from "react";
import * as Icon from 'react-bootstrap-icons';
import './Header.css'

function Header() {
    return (
        <div>
            <div className="container-fluid header-content">
                <div className="row p-2">
                    <div className="col-6">
                        <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <div className="col-6 bag-icon">
                        <Icon.Bag />
                        <span className="quantity-food" >0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
