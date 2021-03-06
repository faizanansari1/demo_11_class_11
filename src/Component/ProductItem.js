import React from "react";
import { useParams } from "react-router";
import Shoes from "./../shoes.json";

function ProductItem() {
  let { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe) return <h2>Item Not Found!</h2>;
  return (
    <div>
      <div className="link">
        <h3 style={{ fontSize: 20 }}>{shoe.name}</h3>
        <img src={shoe.img} height={350} width={350} alt="shoe" />
      </div>
    </div>
  );
}

export default ProductItem;
