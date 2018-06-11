var React = require('react');
var moment = require('moment');
/**
 * Displays the product price and sale price
 */
var ProductPrice = React.createClass({

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */

  calculateSalePrice: function(sale, price){
    
    if(sale){
      var m = moment.utc();
      var isvalid = m.isValid();
      var isBefore = m.isBefore(sale.end_date);

      if(isBefore){
        var salePrice = (price.amount - (price.amount / 100) * sale.discount_percentage).toFixed(2);
        return <h3>{salePrice + ' ' + this.props.price.currency} <span className="sale">Sale Price</span></h3>;
      }
    }

    return <h3>{this.props.price.amount + ' ' + this.props.price.currency} <span>Current Price</span></h3>;
  },

  render: function() {
    return (
      <div className="product-price">
        {
          this.calculateSalePrice(this.props.sale, this.props.price)
        }
      </div>
    )
  }
});

module.exports = ProductPrice;
