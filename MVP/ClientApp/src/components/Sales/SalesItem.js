import React from "react";
import * as moment from 'moment';
import { Table, Button, Modal, Form, Icon, Dropdown } from "semantic-ui-react";

class SalesItem extends React.Component {
    state = {
        dateSold: this.props.Sale.dateSold,
        CustomerId: this.props.Sale.customer.id,
        ProductId: this.props.Sale.product.id, 

        StoreId: this.props.Sale.store.id,
        modalOpen: false
    };

    submit = (e) => {
        this.props.editSale.bind(
            this,
            this.props.Sale.id,
            this.state.dateSold,
            this.state.CustomerId,
            this.state.ProductId,
            this.state.StoreId
        );
        window.location.reload(true);
    }

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });

    handleChange = (event, data) => {
        if (event.target.name) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
        else {
            this.setState({
                [data.name]: data.value
            });
        }

    }

    render() {

       

        let Customers = this.props.Customers
        let Products = this.props.Products
        let Stores = this.props.Stores
        return (
            <Table.Row>
                <Table.Cell>{this.props.Sale.customer.name}</Table.Cell>
                <Table.Cell>{this.props.Sale.product.name}</Table.Cell>
                <Table.Cell>{this.props.Sale.store.name}</Table.Cell>
                <Table.Cell>{new Intl.DateTimeFormat('en-NZ', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(this.props.Sale.dateSold))}</Table.Cell>
                <Table.Cell>
                    {" "}
                    <Button
                       
                        color="yellow"
                        onClick={this.props.showEditSale.bind(this, this.props.Sale.id)}
                    >
                        Edit
          </Button>
                    <Modal open={this.props.Sale.editModalOpen}
                    >
                        
                        <Modal.Header>Edit</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Form>
                                    <Form.Field>
                                        <input
                                            name='dateSold'
                                            type='date'
                                            onChange={this.handleChange}
                                            value={moment(this.state.dateSold).format(moment.HTML5_FMT.DATE)}
                                            
                                        />
                                    </Form.Field>

                                    <Form.Field>
                                        <label>Customer Name</label>
                                        <Dropdown
                                            name="CustomerId"
                                            placeholder='Customer'
                                            fluid
                                            selection
                                            options={Customers.map(Customer => ({
                                                key: Customer.id,
                                                value: Customer.id,
                                                text: Customer.name
                                            }))}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Product Name</label>
                                        <Dropdown
                                            name="ProductId"
                                            placeholder='Customer'
                                            fluid
                                            selection
                                            options={Products.map(Product => ({
                                                key: Product.id,
                                                value: Product.id,
                                                text: Product.name
                                            }))}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>

                                    <Form.Field>
                                        <label>Store Name</label>
                                        <Dropdown
                                            name="StoreId"
                                            placeholder='Store'
                                            fluid
                                            selection
                                            options={Stores.map(Store => ({
                                                key: Store.id,
                                                value: Store.id,
                                                text: Store.name
                                            }))}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>

                                    <Button
                                        type="submit"
                                        positive
                                        onClick={this.submit}
                                    >
                                        Edit
                  </Button>
                                    <Button type="submit" color="black" onClick={this.props.closeModalSale.bind(this, this.props.Sale.id)}
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
                            <Button color="red" onClick={this.handleOpen}
                            >
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
                                onClick={this.props.delSale.bind(this, this.props.Sale.id)}
                            >
                                <Icon disabled name="delete" />
                Delete
              </Button>
                            <Button style={{ margin: "10px" }} color="black" onClick={this.handleClose}
                            >
                                Cancel
              </Button>
                        </Modal.Content>{" "}
                    </Modal>
                </Table.Cell>
               
                </Table.Row>
            )

    }

}
export default SalesItem;