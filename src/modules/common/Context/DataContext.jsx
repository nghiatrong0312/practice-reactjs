import React, { createContext, useState } from "react";

const Quantity = createContext();

export function DataStory({children}) {

    const [quantity, setQuantity] = useState(0);
    const [show, setShow] = useState(false);
    const [productOrder, setProductOrder] = useState([]);
    const [dataProduct, setDataProduct] = useState([
        {
            "id" : 1,
            "nameFood" : "Food 1",
            "menuId" : 1,
            "quantity" : 0,
            "status" : false
        },
        {
            'id' : 2,
            "nameFood" : "Food 2",
            "menuId" : 1,
            "quantity" : 0,
            "status" : false
        },
        {
            'id' : 3,
            "nameFood" : "Food 3",
            "menuId" : 3,
            "quantity" : 0,
            "status" : false
        },
        {
            'id' : 4,
            "nameFood" : "Food 4",
            "menuId" : 3,
            "quantity" : 0,
            "status" : false
        },
        {
            'id' : 5,
            "nameFood" : "Food 5",
            "menuId" : 3,
            "quantity" : 0,
            "status" : false
        },
        {
            'id' : 6,
            "nameFood" : "Food 6",
            "menuId" : 2,
            "quantity" : 0,
            "status" : false
        },
        {
            'id' : 7,
            "nameFood" : "Food 7",
            "menuId" : 4,
            "quantity" : 0,
            "status" : false
        },
        {
            'id' : 8,
            "nameFood" : "Food 8",
            "menuId" : 4,
            "quantity" : 0,
            "status" : false
        },
    ]);
    const [historyOrder, setHistoryOrder] = useState([]);

    return (
       <Quantity.Provider value={{
           quantity, setQuantity,
           show, setShow,
           productOrder, setProductOrder,
           dataProduct, setDataProduct,
           historyOrder, setHistoryOrder,
       }}>
           {children}
       </Quantity.Provider>
    );
}

export default Quantity;
