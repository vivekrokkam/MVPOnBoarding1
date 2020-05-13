import React from "react";

import { Table, Button, Modal, Form, Icon } from "semantic-ui-react";

class ProductItem extends React.Component {
  state = {
    name: this.props.Product.name,
    price: this.props.Product.price,
      modalOpen: false
    };
    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);

    return (
      <Table.Row>

            <Table.Cell>{this.props.Product.name}</Table.Cell>
            <Table.Cell> {this.props.Product.price}</Table.Cell>
        <Table.Cell>
          {" "}
          <Button
            color="yellow"
            onClick={this.props.showEditProduct.bind(
              this,
              this.props.Product.id
            )}
          >
            Edit
          </Button>
          <Modal open={this.props.Product.editModalOpen}>
            <Modal.Header>Edit</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>Product Name</label>
                    <input
                      name="name"
                      placeholder="Product Name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Price</label>
                    <input
                      name="price"
                      placeholder="Price"
                      value={this.state.price}
                      onChange={this.onChange}
                    />
                  </Form.Field>

                  <Button
                    type="submit"
                    positive
                    onClick={this.props.editProduct.bind(
                      this,
                      this.props.Product.id,
                        this.state.name,
                        this.state.price
                    )}
                  >
                    Edit
                  </Button>
                  <Button
                    type="submit"
                                    color="black"
                                    onClick={this.props.closeModalProduct.bind(this, this.props.Product.id)}

                  >
                    Cancel
                  </Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Table.Cell>
        <Table.Cell>
          {" "}
          <Modal
            trigger={
                        <Button color="red" onClick={this.handleOpen}>
                <Icon disabled name="delete" />
                Delete
              </Button>
                    }
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
          >
            <Modal.Header>Delete</Modal.Header>
            <Modal.Content>
              <Modal.Description>Are you sure?</Modal.Description>

              <Button
                style={{ margin: "10px" }}
               
                color="red"
                onClick={this.props.delProduct.bind(
                  this,
                  this.props.Product.id
                )}
                             >
                            <Icon disabled name="delete" />
                Delete
              </Button>
                        <Button style={{ margin: "10px" }} color="black" onClick={this.handleClose} >

                Cancel
              </Button>
            </Modal.Content>{" "}
          </Modal>
        </Table.Cell>
      </Table.Row>
    );
  }
}
export default ProductItem;
