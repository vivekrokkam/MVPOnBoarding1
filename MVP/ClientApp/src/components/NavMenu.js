import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NavMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Header>
            <h1 className="NavMenuTitle" style={{ margin: "10px,20px" }}>
              React
            </h1>
          </Menu.Header>

          <Link to="/">
            <Menu.Item
              name="Customers"
              active={activeItem === ""}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/products">
            <Menu.Item
              name="Products"
              active={activeItem === ""}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/stores">
            <Menu.Item
              name="stores"
              active={activeItem === ""}
              onClick={this.handleItemClick}
            />{" "}
                </Link>

                <Link to="/sales">
                    <Menu.Item
                        name="sales"
                        active={activeItem === ""}
                        onClick={this.handleItemClick}
                    />{" "}
                </Link>

          <Menu.Item />
        </Menu>
      </Segment>
    );
  }
}
export default NavMenu;
