import React, { Component } from "react";
class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="uk-width-1-4 uk-visible@m">
          <div className="uk-card uk-card-default">
            <ul className="uk-nav uk-nav-default uk-padding">
              <li className="uk-nav-header">Category</li>
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Samsung</a>
              </li>
              <li>
                <a href="#">IPad</a>
              </li>
              <li className="uk-nav-header">Price Filter</li>
              <li className="uk-nav-divider"></li>

              <li>
                Min Price
                <input
                  className="uk-input"
                  name="min"
                  onChange={this.props.handleOnChange}
                  placeholder="Min"
                  type="number"
                  value={this.props.min}
                />
                <br />
                <br />
                Max Price
                <input
                  className="uk-input"
                  name="max"
                  onChange={this.props.handleOnChange}
                  placeholder="Max"
                  type="number"
                  value={this.props.max}
                />
                <br />
                <br />
                <br />
                <button
                  onClick={this.props.handleFilter}
                  className="uk-button uk-button-small uk-button-default"
                >
                  Filter
                </button>
                <button
                  onClick={this.props.handleClearFilter}
                  className="uk-button uk-button-small uk-button-default"
                >
                  Clear
                </button>
              </li>

              <li className="uk-nav-header">Storage Filter</li>
              <li className="uk-nav-divider"></li>
              {/* <li>
                <label>
                  <input
                    className="uk-checkbox uk-margin-left"
                    name="storage"
                    type="checkbox"
                  />
                  32Gb
                </label>
              </li>
              <li>
                <label>
                  <input
                    className="uk-checkbox uk-margin-left"
                    name="storage"
                    type="checkbox"
                    checked
                  />
                  64Gb
                </label>
              </li>
              <li>
                <label>
                  <input
                    className="uk-checkbox uk-margin-left"
                    type="checkbox"
                    name="storage"
                  />
                  128Gb
                </label>
              </li> */}
            </ul>
          </div>
        </div>

        {/* over */}
        <div id="filter-nav" data-uk-offcanvas="overlay: true">
          <div className="uk-offcanvas-bar">
            <button
              className="uk-offcanvas-close"
              type="button"
              data-uk-close
            ></button>
            <ul className="uk-nav uk-nav-default uk-padding">
              <li className="uk-nav-header">Category</li>
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Samsung</a>
              </li>
              <li>
                <a href="#">IPad</a>
              </li>
              <li className="uk-nav-header">Price Filter</li>
              <li className="uk-nav-divider"></li>

              <li>
                Min Price
                <input
                  className="uk-input"
                  name="min"
                  onChange={this.props.handleOnChange}
                  placeholder="Min"
                  type="number"
                  value={this.props.min}
                />
                <br />
                <br />
                Max Price
                <input
                  className="uk-input"
                  name="max"
                  onChange={this.props.handleOnChange}
                  placeholder="Max"
                  type="number"
                  value={this.props.max}
                />
                <br />
                <br />
                <br />
                <button
                  onClick={this.props.handleFilter}
                  className="uk-button uk-button-small uk-button-default"
                >
                  Filter
                </button>
                <button
                  onClick={this.props.handleClearFilter}
                  className="uk-button uk-button-small uk-button-default"
                >
                  Clear
                </button>
              </li>

              <li className="uk-nav-header">Storage Filter</li>
              <li className="uk-nav-divider"></li>

              {/* <li>
                <label>
                  <input
                    className="uk-checkbox uk-margin-left"
                    name="storage"
                    type="checkbox"
                  />
                  32Gb
                </label>
              </li>
              <li>
                <label>
                  <input
                    className="uk-checkbox uk-margin-left"
                    name="storage"
                    type="checkbox"
                    checked
                  />
                  64Gb
                </label>
              </li>
              <li>
                <label>
                  <input
                    className="uk-checkbox uk-margin-left"
                    type="checkbox"
                    name="storage"
                  />
                  128Gb
                </label>
              </li>
            */}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FilterBar;
