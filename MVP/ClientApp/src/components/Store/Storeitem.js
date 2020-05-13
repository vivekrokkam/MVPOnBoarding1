import React from "react";

import { Table, Button, Modal, Form, Icon } from "semantic-ui-react";

class StoreItem extends React.Component {
    state = {
        name: this.props.Store.name,
        address: this.props.Store.address,
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
            <Table.Cell>{this.props.Store.name}</Table.Cell>
        <Table.Cell> {this.props.Store.address}</Table.Cell>
        <Table.Cell>
          {" "}
          <Button
            icon="delete"
            color="yellow"
            onClick={this.props.showEditStore.bind(this, this.props.Store.id)}
          >
            Edit
          </Button>
          <Modal open={this.props.Store.editModalOpen}>
            <Modal.Header>Edit</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>Name</label>
                    <input
                      placeholder="Name"
                                        name="name"
                                        value={this.state.name}
                      onChange={this.onEdit}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Address</label>
                    <input
                      placeholder="Address"
                                        name="address"
                                        value={this.state.address}
                      onChange={this.onEdit}
                    />
                  </Form.Field>

                  <Button
                    type="submit"
                    positive
                    onClick={this.props.editStore.bind(
                      this,
                      this.props.Store.id,
                        this.state.name,
                        this.state.address
                    )}
                  >
                    Edit
                  </Button>
                                <Button type="submit" color="black" onClick={this.props.closeModalStore.bind(this, this.props.Store.id)}>
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
                onClick={this.props.delStore.bind(this, this.props.Store.id)}
                        >
                            <Icon disabled name="delete" />
                Delete
              </Button>
                        <Button style={{ margin: "10px" }}  color="black" onClick={this.handleClose}>
                Cancel
              </Button>
            </Modal.Content>{" "}
          </Modal>
        </Table.Cell>
      </Table.Row>
    );
  }
}
export default StoreItem;
