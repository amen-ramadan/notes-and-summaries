import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState();

  let { productID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
      });
  }, []);

  return <>{product && <h1>{product.title}</h1>}</>;
}
