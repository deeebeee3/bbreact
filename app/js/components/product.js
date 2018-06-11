var React = require('react');
var ProductImage = require('./product/product-image');
var ProductPrice = require('./product/product-price');
var ProductName = require('./product/product-name');
var ProductBuyActions = require('./product/product-buy-actions');
var ProductDetail = require('./product/product-detail');
var ProductDescription = require('./product/product-description');

/**
* Product Component
*/
  var Product = React.createClass({

  componentWillMount: function() {
    
    this.serverRequest = fetch('data.json').then(
      (response) => response.json()
    ).then(function(data){

      let product = data;

      this.setState({
        name: product.name,
        images: product.image,
        price: {
          "amount": product.price.amount,
          "currency": product.price.currency
        },
        properties: product.properties,
        description: product.description,
        sale: product.sale
      })

    }.bind(this)).catch(function(err) {
      console.error(err);
    });
  },


  /**
   * Invoked immediately before component is unmounted from the DOM.
   * Abort data fetch.
   */
  componentWillUnmount: function() {
    this.serverRequest.abort(); // trigger fetch cancellation
  },


  /**
   * Set initial state properties
   *
   * @return {Object} state initial props used throughout all other
   *                        child components
   */
  getInitialState: function() {
    return {
      name: '',
      images: [],
      price: {
        "amount": 0.00,
        "currency": 'EUR'
      },
      properties: [],
      description: '',
      sale: {}
    }
  },

  /**
  * Renders the component
  * @return {String} HTML markup for the component
  */
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <ProductName name={this.state.name}/>
            <ProductImage images={this.state.images} />
          </div>
          <div className="col-xs-12 col-sm-6">
            <ProductPrice price={this.state.price} sale={this.state.sale}/>
            <ProductBuyActions />
            <ProductDescription description={this.state.description} />
            <ProductDetail properties={this.state.properties} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Product;
