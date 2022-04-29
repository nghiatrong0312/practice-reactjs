import React, {useContext} from "react";
import "./Product.css";
import DataContext from "../../common/Context/DataContext";

function Product(props) {

    let count = useContext(DataContext)

    const upQuantity = () => {
        let total = 1 + count.quantity
        count.setQuantity(total);
    }

    const downQuantity = () => {
        if (count.quantity > 0){
            let total = count.quantity -1
            count.setQuantity(total);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-3">
                    <img src="https://img.freepik.com/free-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000" alt=""/>
                </div>
                <div className="col-6">
                    {props.value.nameFood}
                </div>
                <div className="col-3">
                    <button onClick={ upQuantity }>UP</button>
                    <input type="number" />
                    <button onClick={ downQuantity }>Down</button>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Product;
