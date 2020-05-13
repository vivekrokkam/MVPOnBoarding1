import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
class NewProduct extends React.Component {
  state = {
    Storename: "",
    Address: "",
    modalOpen: false
  };
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.addStore(this.state.Storename, this.state.Address);
      this.setState({ Storename: "", Address: "" });
      this.setState({ modalOpen: false });
  };
  render() {
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
        <Modal.Header>Add Store</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Store Name</label>
              <input
                name="Storename"
                placeholder="Store Name"
                value={this.state.Storename}
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <input
                name="Address"
                placeholder="Address"
                value={this.state.Address}
                onChange={this.onChange}
              />
            </Form.Field>

            <Button type="submit" positive>
              Create
            </Button>
            <Button type="submit" color="black" onClick={this.handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default NewProduct;
