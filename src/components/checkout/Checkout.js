import Box from "../box/Box";
import CHECK from "../../../public/assets/image1.svg";
import React from "react";
export default function Checkout() {
  return (
    <Box
      flexDirection="column"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <img src={CHECK} />
      <span style={{fontWeight: 'bold', fontSize:'40px', marginTop:'50px'}}>The challenge has been completed</span>
    </Box>
  );
}
