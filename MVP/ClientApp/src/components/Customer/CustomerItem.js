import React from "react";

import { Table, Button, Modal, Form, Icon } from "semantic-ui-react";

class CustomerItem extends React.Component {
  state = {
      Name: this.props.Customer.name,
      Address: this.props.Customer.address,
    modalOpen: false
    };

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });
  onEdit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
    render() {
        
    return (
        <Table.Row>
            <Table.Cell>{this.props.Customer.name}</Table.Cell>
            <Table.Cell> {this.props.Customer.address}</Table.Cell>
        <Table.Cell>
          {" "}
          <Button
            
            color="yellow"
            onClick={this.props.showEditCustomer.bind(
              this,
              this.props.Customer.id
            )}
          >
            Edit
          </Button>
          <Modal open={this.props.Customer.editModalOpen}>
            <Modal.Header>Edit</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>Name</label>
                    <input
                      placeholder="Name"
                      name="Name"
                      value={this.state.Name}
                      onChange={this.onEdit}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Address</label>
                    <input
                      placeholder="Address"
                      name="Address"
                      value={this.state.Address}
                      onChange={this.onEdit}
                    />
                  </Form.Field>

                  <Button
                    type="submit"
                    positive
                    onClick={this.props.editCustomer.bind(
                        this,
                      this.props.Customer.id,
                      this.state.Name,
                      this.state.Address
                    )}
                  >
                    Edit
                  </Button>
                                <Button type="submit" color="black" onClick={this.props.closeModalCustomer.bind(this, this.props.Customer.id)}>
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
                icon="delete"
                color="red"
                onClick={this.props.delAction.bind(
                  this,
                  this.props.Customer.id
                )}
              >
                <Icon disabled name="delete" />
                Delete
              </Button>
                        <Button style={{ margin: "10px" }} color="black" onClick={this.handleClose}>
                Cancel
              </Button>
            </Modal.Content>{" "}
          </Modal>
        </Table.Cell>
      </Table.Row>
    );
  }
}
export default CustomerItem;
