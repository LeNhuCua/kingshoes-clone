import React, { createContext, useEffect, useState } from "react";


import axios from "axios";
import { allProduct ,hotProduct,slides,allImage} from "../API";


export const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      await axios
        .get(allProduct)
        .then(function (response) {
          setProducts(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getProducts()
  }, []);

//hot
const [productsHot, setProductsHot] = useState([]);
useEffect(() => {
  async function getProductsHot() {
    await axios
      .get(hotProduct)
      .then(function (response) {
        setProductsHot(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  getProductsHot()
}, []);


const [allslides, setslides] = useState([]);
useEffect(() => {
  async function getSlides() {
    await axios
      .get(slides)
      .then(function (response) {
        setslides(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  getSlides()
}, []);


const [allImages, setallImage] = useState([]);
useEffect(() => {
  async function getSlides() {
    await axios
      .get(allImage)
      .then(function (response) {
        setallImage(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  getSlides()
}, []);


  return (
    <ProductsContext.Provider value={{ products,productsHot ,allslides, allImages}}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
