import React, { Component } from "react";
import FilterBar from "./filterbar";
import Products from "./products";
import buyRequest from "../services/buyrequest.services";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "./loader";
class Home extends Component {
  state = {
    sellRequest: [],
    buyRequest: [],
    page: 1,
    hasNext: true,
    search: "",
    filter: {
      min: 1,
      max: 999999,
    },
  };

  loadRecord = async () => {
    const { page, filter, search } = this.state;
    const sellRequest = await buyRequest.get(
      page,
      search,
      filter.min,
      filter.max
    );

    if (sellRequest.data.data.hasNext) {
      const prevSellreq = [...this.state.sellRequest];

      const records = [...prevSellreq, ...sellRequest.data.data.record];
      this.setState({
        page: this.state.page + 1,
        sellRequest: records,
      });
    }
    this.setState({
      hasNext: sellRequest.data.data.hasNext,
    });
  };
  search = async (e) => {
    e.preventDefault();
    let { search: term, sellRequest, page } = this.state;

    sellRequest = [];
    page = 1;
    this.setState({
      search: term,
      sellRequest: sellRequest,
      page: page,
    });
    this.loadRecord();
  };
  handleOnSearchChange = (event) => {
    this.setState({ search: event.target.value });
    console.log("search input", event.target.value);
  };

  handleOnChange = (event) => {
    const filter = this.state.filter;
    filter[event.target.name] = event.target.value;
    this.setState({ filter: filter });
  };
  handleClearFilter = (event) => {
    event.preventDefault();
    let { page, filter, search } = this.state;

    page = 1;
    filter.max = 999999;
    filter.min = 1;
    search = "";

    this.setState({ page: page, filter: filter, search: search });
  };
  handleFilter = (event) => {
    event.preventDefault();
    let { page, sellRequest } = this.state;
    page = 1;
    sellRequest = [];
    this.setState({
      sellRequest: sellRequest,
      page: page,
    });
    this.loadRecord();
  };

  async componentDidMount() {
    const sellRequest = await buyRequest.get(this.state.page);
    this.setState({ sellRequest: sellRequest.data.data.record });
  }
  render() {
    return (
      <React.Fragment>
        <div className="uk-section uk-section-large">
          <div className="uk-container">
            <div className="uk-grid">
              <div className="uk-width-1-2@m">
                <h1>
                  Shop Our Latest <br /> Avaliable Stock Here
                </h1>
                <form className="uk-grid uk-grid-small">
                  <div className="uk-width-expand">
                    <input
                      type="search"
                      className="uk-input"
                      value={this.state.search}
                      onChange={this.handleOnSearchChange}
                      placeholder="Enter Search Term (eg IPhone x, 128GB or A1)"
                    />
                  </div>
                  <div className="">
                    <button
                      className="uk-button uk-button-primary"
                      onClick={this.search}
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="uk-width-expand uk-visible@m">
                <img src="./images/laptop-banner.png" alt="banner"></img>
              </div>
            </div>
          </div>
          <div className="uk-container uk-margin-top">
            <div className="uk-grid">
              <FilterBar
                handleOnChange={this.handleOnChange}
                handleFilter={this.handleFilter}
                handleClearFilter={this.handleClearFilter}
                min={this.state.filter.min}
                max={this.state.filter.max}
              />
              <div className="uk-width-expand@s uk-width-large@m">
                <button
                  className="uk-button uk-button-default uk-margin uk-hidden@m"
                  id="filter-nav"
                  data-uk-toggle="target: #filter-nav"
                >
                  Filter
                </button>
                <InfiniteScroll
                  loadMore={this.loadRecord}
                  hasMore={this.state.hasNext}
                  loader={<Loader />}
                  key={1}
                >
                  <Products products={this.state.sellRequest} />
                </InfiniteScroll>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-section uk-section-large"></div>
      </React.Fragment>
    );
  }
}

export default Home;
