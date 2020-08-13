import React from "react";
import features from "./features.json";
import Total from "./Total";

import CartItem from "./Summary";

export default function Cart(props) {
  
  return ( 
    <>
      <CartItem features = { features } {...props} />  
      <Total features = { features } {...props} />
    </>
  );
};
