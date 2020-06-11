import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("products", props);
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="uk-child-width-1-2 uk-child-width-1-3@s  uk-child-width-1-4@m  uk-grid-small uk-text-center"
          data-uk-grid
        >
          {this.props.products.map((product, index) => (
            <div key={index}>
              <Product key="{product._id + index}" product={product} />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
