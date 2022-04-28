import React from "react";
import './Menu.css';

function Menu(props) {

    var idMenuSelect = '';

    const selectMenu = () => {
        idMenuSelect = props.id;
        props.parentCallback(props.id);
    }

    return (
        <div className="col-6 p-1">
            <button onClick={ selectMenu }>{ props.titleMenu }</button>
        </div>
    );
}

export default Menu;
