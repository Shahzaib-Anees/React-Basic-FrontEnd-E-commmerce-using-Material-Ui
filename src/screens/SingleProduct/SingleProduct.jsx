import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import axios from "axios";
function SingleProduct() {
  const { id } = useParams();
  const [productData , setProductData] = useState(null)
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const res = await axios(`https://fakestoreapi.com/products/${id}`);
      const data = res.data;
      setProductData(data)
      console.log(productData);
    };
    fetchSingleProduct();
  }, []);
  return <>
    
  </>;
}

export default SingleProduct;
