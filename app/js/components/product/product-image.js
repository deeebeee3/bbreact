var React = require('react');

/**
 * Component that displays the product image
 */
var ProductImage = React.createClass({
/**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {

    let images = this.props.images;

    return (
      <div className="carousel">
            <img src={images} alt="Bobble Hat" />
      </div>
    )
  }
});

module.exports = ProductImage;