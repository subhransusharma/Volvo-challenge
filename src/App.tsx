import "./App.css";
import axios from "axios";
import ProductList from "./ProductList/ProductList";
import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

const App = () => {
  const [carList, setCarList] = useState([]);
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    axios.get("/api/cars.json")
    .then((response) => {
      setLoader(false)
      setCarList(response.data);
    })
    .catch((err) => {
      console.log("cars.json api not fetched, no response", err);
    });
  }, []);

  return (
    loading === true ?  
    <div className="d-flex justify-content-center ">
    <Loader
    visible={true}
    type="ThreeDots"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={300000} //3 secs
  />
  </div>
   
  :
  <ProductList carItems={carList} />
  )
};

export default App;
