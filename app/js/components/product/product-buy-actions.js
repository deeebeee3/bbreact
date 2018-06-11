var React = require('react');

/**
 * [ProductBuyActions description]
 * @type {[type]}
 */
var ProductBuyActions = React.createClass({

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    return (
      <div className="product-buy-actions">
        <div className="row no-gutter">
          <div className="col-xs-12 col-sm-6">
            <button className="btn btn-primary btn-lg btn-full">Add to Cart</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ProductBuyActions;
