
import ProductCard from "../ProductCard/ProductCard"
import React from "react";
import "./ProductList.css";

function product({data}) {
  return (
    <div className="all-product">
      {data.map((prod) => (
        
          <ProductCard id ={prod.id} name={prod.name} price={prod.price} image={prod.image} description ={prod.description} category={prod.category}/>
        
      ))}
    </div>
  );
}

export default product;
