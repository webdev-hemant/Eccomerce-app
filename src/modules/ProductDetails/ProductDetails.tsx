import Product from "components/Product/Product";
import { Productvariant } from "components/Product/ProductVariants";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IApiData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetails = () => {
  const [apiData, setApiData] = useState<IApiData>({} as IApiData);
  const { productId } = useParams();
  // console.log(productId);

  const getData = useCallback(async () => {
    try {
      const jsonData = await fetch(
        `${process.env.REACT_APP_API}/products/${productId}`
      );
      const data = await jsonData.json();
      // console.log(data);
      setApiData(data);
    } catch (error) {
      console.error(error);
    }
  }, [productId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <Product variant={Productvariant.PRODUCTWITHTWOCOUMNS} data={apiData} />
    </div>
  );
};

export default ProductDetails;
