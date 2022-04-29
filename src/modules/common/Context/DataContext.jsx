import React, { createContext, useState } from "react";

const Quantity = createContext();

export function DataStory({children}) {

    const [quantity, setQuantity] = useState(0);

    return (
       <Quantity.Provider value={{quantity, setQuantity}}>
           {children}
       </Quantity.Provider>
    );
}

export default Quantity;
