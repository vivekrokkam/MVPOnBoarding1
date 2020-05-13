import React from "react";
import { Table } from "semantic-ui-react";
import ProductItem from "./ProductItem";
class ProductList extends React.Component {
  render() {
    console.log(this.props.Products);
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product Name</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell colSpan="2">Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.Products &&
              this.props.Products.map(Product => (
                <ProductItem
                            key={Product.productId}
                            Product={Product}
                            editProduct={this.props.editProduct}
                            delProduct={this.props.delProduct}
                            showEditProduct={this.props.showEditProduct}
                            closeModalProduct={this.props.closeModalProduct}
                />
              ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default ProductList;
