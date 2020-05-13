import React from "react";
import { Table } from "semantic-ui-react";
import StoreItem from "./Storeitem";
class StoreList extends React.Component {
  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Store Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell colSpan="2">Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.Stores.map(Store => (
              <StoreItem
                key={Store.id}
                            Store={Store}
                            closeModalStore={this.props.closeModalStore}
                showEditStore={this.props.showEditStore}
                editStore={this.props.editStore}
                delStore={this.props.delStore}
              />
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
export default StoreList;
