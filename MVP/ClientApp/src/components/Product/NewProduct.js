import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
class NewProduct extends React.Component {
  state = {
    name: "",
    price: "",
    modalOpen: false
  };
  handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({
        productName: "",
        productPrice: "", modalOpen: false });
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
      this.props.addProduct(this.state.name, this.state.price);
      this.setState({ name: "", price: "" });
      this.setState({ modalOpen: false });
  };
    render() {
        console.log(this.state)
    return (
      <Modal
        trigger={
          <Button
            color="blue"
            style={{ margin: "10px" }}
            position="right center"
            onClick={this.handleOpen}
          >
            Add Product
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Add Product</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.onSubmit}>
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

            <Button positive>Create</Button>
            <Button color="black" onClick={this.handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default NewProduct;
