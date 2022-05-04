import React, {useContext, useRef} from "react";
import "./Product.css";
import DataContext from "../../common/Context/DataContext";

function Product(props) {

    let count = useContext(DataContext)

    const upQuantity = () => {
        let total = 1 + count.quantity;
        let value = 1;
        count.setQuantity(total);
        value += props.value.quantity++
        props.value.quantity = value;
        addFoodOrder(props.value);
        count.dataProduct.map((data, index) => {
            if (data.id === props.value.id) {
                data.status = true;
            }
        })
    }

    const downQuantity = () => {
        if (props.value.quantity > 0){
            let total = count.quantity -1;
            count.setQuantity(total);
            props.value.quantity = props.value.quantity -1 ;

        }
        if (props.value.quantity === 0){
            count.dataProduct.map((data, index) => {
                if (data.id === props.value.id) {
                    data.status = false;
                }
            })
        }
    }

    const addFoodOrder = (value) => {
        if (count.productOrder.length === 0){
            count.productOrder.push(value)
        }else {
            let checkIsset = [];
            count.productOrder.map((data, index) => {
                if (data.id === value.id) {
                    checkIsset.push(value)
                }
            })
            if (checkIsset.length === 0) {
                count.productOrder.push(value)
            }
        }

    }

    const changeInputQuantity = () => {
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

                    <input type="number" value={props.value.quantity} onChange={ changeInputQuantity } />

                    <button onClick={ downQuantity }>Down</button>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Product;
