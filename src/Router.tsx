import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ProductLearn from './ProductLearn/ProductLearn';
import ProductShop from './ProductShop/ProductShop';

const RouterConfig = () => (
    <Switch>
    <Route path="/learn" component={ProductLearn} />
    <Route path="/shop" component={ProductShop} />
    </Switch>
);

export default RouterConfig;