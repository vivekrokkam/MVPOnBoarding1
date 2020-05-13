import React from "react";
import { Button, Modal, Form, Dropdown } from "semantic-ui-react";
import * as moment from 'moment';
class NewSales extends React.Component {

    state = {
        DateSold:"",
        CustomerId: "",
        ProductId: "",
        StoreId: ""
    };

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

    submit = (e) => {
        e.preventDefault();
        this.props.addSale(this.state.DateSold,this.state.CustomerId, this.state.ProductId, this.state.StoreId);
        this.setState({
            DateSold: "",
            CustomerId: "",
            ProductId: "",
            StoreId: "" });
        window.location.reload(true);
    }
   
    render() {
        console.log(this.state)

        let Customers = this.props.Customers
        let Products = this.props.Products
        let Stores = this.props.Stores
       
        return (
            
            <Modal
                trigger={
                    <Button
                        color="blue"
                        style={{ margin: "10px" }}
                        position="right center"
                      
                    >
                        Add Sale
          </Button>
                }
                
            >
                <Modal.Header>Add Sale</Modal.Header>
                <Modal.Content>
                    <Form 
                    >
                        <Form.Field>
                            <input
                                name='DateSold'
                                type='date'
                                onChange={this.handleChange}
                                value={moment(this.state.DateSold).format(moment.HTML5_FMT.DATE)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Customer</label>
                            <Dropdown
                                name= "CustomerId"
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
                            <label>Product</label>
                            <Dropdown
                                name= "ProductId"
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
                            <label>Store</label>
                            <Dropdown
                                name = "StoreId"
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

                        <Button type="submit" positive onClick={ this.submit}>
                            Create
            </Button>
                        <Button type="submit" color="black" 
                        >
                            Cancel
            </Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

export default NewSales;
