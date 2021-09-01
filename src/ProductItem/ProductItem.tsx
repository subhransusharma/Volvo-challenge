import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  RouteComponentProps
} from "react-router-dom";
import ProductLearn from "../ProductLearn/ProductLearn";
import ProductList from "../ProductList/ProductList";
import ProductShop from "../ProductShop/ProductShop";

export interface carItemProps {
  id: string;
  modelName: string;
  modelType: string;
  imageUrl: string;
  bodyType: string;
}

const ProductItem = ({
  id,
  modelName,
  modelType,
  imageUrl,
  bodyType,
}: carItemProps) => {
  return (
    <div className="card border-0">
      <div className="card-body">
        <h6 className="card-title">{bodyType.toLocaleUpperCase()}</h6>
        <h6 className="d-inline card-subtitle text-muted">
          <b>{modelName}</b>
        </h6>
        <div className="d-inline card-subtitle p-2 text-muted">{modelType}</div>
        <img src={imageUrl} className="card-img-top" alt={modelName}></img>
        <div className="mx-auto text-center mt-4">
        <Link to={`/learn/${id}`} className="font-weight-bold text-decoration-none">LEARN
          <i className="fa fa-angle-right m-2" aria-hidden="true"></i>
          </Link>
          <Link to={`/shop/${id}`} className="font-weight-bold text-decoration-none">SHOP
          <i className="fa fa-angle-right m-2" aria-hidden="true"></i>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
