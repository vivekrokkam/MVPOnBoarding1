import React from "react";
import CustomerItem from "./CustomerItem";
import { Table } from "semantic-ui-react";

class CustomerList extends React.Component {
    render() {
       
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell colSpan="2">Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.Customers.map(Customer => (
              <CustomerItem
                key={Customer.customerId}
                Customer={Customer}
                delAction={this.props.delAction}
                editCustomer={this.props.editCustomer}
                            showEditCustomer={this.props.showEditCustomer}
                            closeModalCustomer={this.props.closeModalCustomer}
              />
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
export default CustomerList;
