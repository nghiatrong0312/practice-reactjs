import React, {useContext} from "react";
import DataContext from "../../common/Context/DataContext";
import * as Icon from "react-bootstrap-icons";

function HistoryOrder() {

    const dataContext = useContext(DataContext)

    const element = dataContext.historyOrder.map((data, index) => {
        return <tr key={index}>
                    <th>{ data.nameFood }</th>
                    <th>{ data.quantity }</th>
                </tr>
    })

    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                    {element}
                </tbody>
            </table>
        </div>
    )
}

export default HistoryOrder;
