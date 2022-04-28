import React from "react";
import "./Product.css";

function Product() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <img src="https://img.freepik.com/free-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000" alt=""/>
                </div>
                <div className="col-6">
                    Name
                </div>
                <div className="col-3">
                    <input type="number"/>
                </div>
            </div>
        </div>
    );
}

export default Product;
