import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
class NewCustomer extends React.Component {
  state = {
    name: "",
    address: "",
    modalOpen: false
  };
  handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({
        name: "",
        address: "",
         modalOpen: false
    });
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.addCustomer(this.state.name, this.state.address);
     this.setState({ name: "", address: "" });
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
            Add Customer
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Add Customer</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Name</label>
              <input
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <input
                name="address"
                placeholder="Address"
                value={this.state.address}
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

export default NewCustomer;
