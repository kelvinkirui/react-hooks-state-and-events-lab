import React,{useState} from "react";

function Item({ name, category }) {

  const [isCart, setCart] = useState(false)

  function addItem(){
    setCart(true);
    
  }

  return (
    <li className={isCart ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItem} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
