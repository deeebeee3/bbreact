var React = require('react');

/**
 * Component that displays additional product information (highlights)
 */
var ProductDescription = React.createClass({

  /**
   * Renders the component
   *
   * NOTE: By default, React escapes HTML to prevent XSS attacks. As a result,
   * we must use dangerouslySetInnerHTML to render the apropriate value.
   *
   * @return {String} HTML markup for the component
   */
  render: function() {

    let description = this.props.description;

    return (
      <div className="product-detail">
        <h3 className="title">Product Description</h3>
        <div className="product-description">{description}</div>
      </div>
    )
  }
});

module.exports = ProductDescription;