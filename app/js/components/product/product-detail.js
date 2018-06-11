var React = require('react');

/**
 * Component that displays additional product information (highlights)
 */
var ProductDetail = React.createClass({

  /**
   * Renders the component
   *
   * NOTE: By default, React escapes HTML to prevent XSS attacks. As a result,
   * we must use dangerouslySetInnerHTML to render the apropriate value.
   *
   * @return {String} HTML markup for the component
   */
  render: function() {

    let properties = this.props.properties;

    return (
      <div className="product-detail">
        <h3 className="title">Product Details</h3>
        <ul>
          {properties.map(function(property, index) {
            return <li key={'feature-' + index}>
              <strong>{property.name} : </strong> {property.value}
            </li>
          })}
        </ul>
      </div>
    )
  }
});

module.exports = ProductDetail;
