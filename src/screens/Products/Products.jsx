import { useState, useEffect } from "react";
import axios from "axios";
import ProductCards from "../../components/Card/Card";
function Product() {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios("https://fakestoreapi.com/products");
      const data = res.data;
      setProductData(data);
      console.log(productData);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 p-5">
        {productData ? (
          productData.map((product) => {
            return (
              <ProductCards
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default Product;
