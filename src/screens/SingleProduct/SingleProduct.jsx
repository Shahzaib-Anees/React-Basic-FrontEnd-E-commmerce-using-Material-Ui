import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import PaidIcon from '@mui/icons-material/Paid';
import "./SingleProduct.css"
function SingleProduct() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const res = await axios(`https://fakestoreapi.com/products/${id}`);
      const data = res.data;
      setProductData(data);
      console.log(productData);
    };
    fetchSingleProduct();
  }, []);
  return (
    <>
      <div className="main-container d-flex justify-content-center align-items-center" style={{
        height: "100vh",
        padding : "40px 20px",
        marginTop : "10px"
      }}>
        {productData ? (
          <Box className="single-product-container d-flex justify-content-center align-items-center gap-1">
            <Box>
              <img alt="product-image" src={productData.image} width = "350px" />
            </Box>
            <Box className="single-product-details">
              <h1
              style = {{
                fontSize : "32px",
                fontWeight : "bold",
                color : "101010",
              }}>{productData.title}</h1>
              <p
              style = {{
                fontSize : "18px",
                fontWeight : "400",
                fontStyle : "capitalize",
                color : "rgba(0, 0, 0, 0.6)",
              }}>{productData.description}</p>
              <p className="d-flex gap-1 fw-bold" style={{
                padding : "3px 10px",
                backgroundColor : "#efefef",
                borderRadius : "5px",
                width  : "fit-content"
               }}>
               <PaidIcon/>
               <span >
                Prices :
               </span>
              ${productData.price}</p>
            </Box>
          </Box>
        ) : (
          <h1> Loading ...</h1>
        )}
      </div>
    </>
  );
}
export default SingleProduct;
