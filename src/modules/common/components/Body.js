import React, {useContext, useState} from "react";
import Product from "../../feature/Product/Product";
import Menu from "./Menu/Menu";
import DataContext from "../../common/Context/DataContext";

var DataMenu = [
    {
        "id" : 1,
        "titleMenu" : "Hai San"
    },
    {
        "id" : 2,
        "titleMenu" : "Thuc Uong"
    },
    {
        "id" : 3,
        "titleMenu" : "Trang Mieng"
    },
    {
        "id" : 4,
        "titleMenu" : "Khai Vi"
    },
]


function Body() {

    let dataContext = useContext(DataContext)

    let DataFood = dataContext.dataProduct

    const [selectMenu, setSelectMenu] = useState('');

    const dataProducts = [];

    for (let i = 0; i < selectMenu.length; i++){
        dataProducts.push(<Product key={i} value={selectMenu[i]} />)
    }

    let result = [];
    const callBackFunction = (childData) => {
        DataFood.map((data, index) => {
            if (data.menuId === childData) {
                result.push(data)
                setSelectMenu(result);
            }
        })
    }

    let element = DataMenu.map((dataMenu, index) => {

        return  <Menu
                    key={index}
                    id={dataMenu.id}
                    titleMenu={dataMenu.titleMenu}
                    parentCallback={callBackFunction}
                />
    })

    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-2 mb-2">
                    {element}
                </div>
            </div>
            {dataProducts}
        </div>
    );
}

export default Body;
