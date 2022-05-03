import React, {useContext} from "react";
import './Menu.css';
import DataContext from "../../../common/Context/DataContext";

function Menu(props) {

    var idMenuSelect = '';

    let dataContext = useContext(DataContext)

    const selectMenu = () => {
        idMenuSelect = props.id;
        props.parentCallback(props.id);
    }

    const getQuantityChoose = (id) => {
        return dataContext.dataProduct.filter(function (item) {
            return item.menuId === id && item.status
        }).length;
    }

    return (
        <div className="col-6 p-1">
            <button onClick={selectMenu}>
                {props.titleMenu} ({ getQuantityChoose(props.id) })
            </button>
        </div>
    );
}

export default Menu;
