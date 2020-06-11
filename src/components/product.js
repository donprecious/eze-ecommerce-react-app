import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("props", props);
  }
  render() {
    const images = `./images/iphones/${this.props.product.product
      .toLowerCase()
      .replace(/\s/g, "_")}.png`;
    return (
      <React.Fragment>
        <div className="uk-card uk-card-default uk-card-body ">
          <span className="tag uk-align-right">
            {this.props.product.condition}
          </span>
          <img src={images} width="250" alt="phone" />
          <div className="product-des">
            <span className="uk-text-Large">{this.props.product.product}</span>
            <br />
            <span className="uk-text-small">
              {this.props.product.status} | {this.props.product.storage}
            </span>
            <br />
            <span className="uk-text-small uk-text-light">Unit price</span>
            <br />
            <span className="uk-text-large uk-text-bold">
              ${this.props.product.price}
            </span>
            <br />
            <span className="uk-text-small uk-text-light">
              150 unit Avaliable
            </span>
          </div>
          <button className="uk-button uk-button-primary uk-border-rounded uk-margin-top">
            Buy
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
