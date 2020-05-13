import React from "react";
import { Table } from "semantic-ui-react";
import SalesItem from "./SalesItem";
class SalesList extends React.Component {
    render() {
       
        return (
            <div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Customer</Table.HeaderCell>
                            <Table.HeaderCell>Product</Table.HeaderCell>
                            <Table.HeaderCell>Store</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2">Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.Sales.map(Sale => (
                            <SalesItem
                                key={Sale.id}
                                Sale={Sale}
                                Customers={this.props.Customers}
                                Products={this.props.Products}
                                Stores={this.props.Stores}
                                closeModalSale={this.props.closeModalSale}
                                showEditSale={this.props.showEditSale}
                                editSale={this.props.editSale}
                                delSale={this.props.delSale}
                            />
                        ))}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}
export default SalesList;