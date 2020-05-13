import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./components/Product/ProductList";
import NavMenu from "./components/NavMenu";
import NewCustomer from "./components/Customer/NewCustomer";
import NewProduct from "./components/Product/NewProduct";
import NewStore from "./components/Store/NewStore";
import NewSales from "./components/Sales/NewSales";
import CustomerList from "./components/Customer/CustomerList";
import StoreList from "./components/Store/StoreList";
import SalesList from "./components/Sales/SalesList";
import axios from 'axios';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      Customers: [],
      Products: [],
        Stores: [],
        Sales: []
    };
  }

    componentDidMount() {
        axios.all(
            [
                axios.get("https://localhost:44363/api/Customers"),
                axios.get("https://localhost:44363/api/Products"),
                axios.get("https://localhost:44363/api/Stores"),
                axios.get("https://localhost:44363/api/Sales")

            ]
        )
        

            .then(res => this.setState({ Customers: res[0].data, Products: res[1].data, Stores: res[2].data, Sales: res[3].data }));

       

    }
    

  //Add
  //Add Customer
  addCustomer = (name, address) => {
    const newCustomer = {

        "name": name,
        "address": address

      };
      
      let that = this;
    
      axios({
          method: 'post',
          url: 'https://localhost:44363/api/Customers',
          data: newCustomer,

      })
          .then(function (response) {
              //handle success
              console.log(response);
              that.setState({ Customers: [...that.state.Customers, newCustomer] });
              that.setState({})
          })
          .catch(function (response) {
              //handle error
              console.log(response);
          });

  };
  //Add Product
    addProduct = (name,price) => {
    const newProduct = {
      
        'name': name,
     'price': price
        };
        let that = this;

        axios({
            method: 'post',
            url: 'https://localhost:44363/api/Products',
            data: newProduct,

        })
            .then(function (response) {
                //handle success
                console.log(response);
                that.setState({ Products: [...that.state.Products, newProduct] });
                that.setState({})
            })
   
  };
  //Add Store
  addStore = (storeName, storeAddress) => {
    const newStore = {
      
        'name':storeName,
        'address':storeAddress
      };
      let that = this

      axios(
          {
              method: 'post',
              url: 'https://localhost:44363/api/Stores',
              data: newStore,  
          })
          .then(() => {
              this.setState({ Stores: [...that.state.Stores, newStore] });
              that.setState({})
          })
   
  };


    //AddSales

    addSale = (DateSold, CustomerId, ProductId, StoreId) => {
        const newSale = {
            'dateSold': DateSold,
            'customerId': CustomerId,
            'productId': ProductId,
            'storeId': StoreId
        };
        let that = this;

        axios({
            method: 'post',
            url: 'https://localhost:44363/api/Sales',
            data: newSale,

        })

        //axios.get("https://localhost:44363/api/Sales")
        //    .then(res => this.setState({ Customers: res.data }));

            .then(function (response) {
                //handle success
                console.log(response);
                that.setState({ Sales: [...that.state.Sales, newSale] });
                
                that.setState({})
            })
    }
  //Edit
    //EditCustomer  
    EditCustomerState = (id, name, address) => {
        this.state.Customers.map(item => {
            if (item.id == id) {
                item.editModalOpen = false;
                item.name = name;
                item.address = address
            }
        });
        this.setState({
            Customers: [...this.state.Customers]
        })
    }
   
    editCustomer = (id, name, address) => {

        this.EditCustomerState(id, name, address)
        
       
      const editedCustomer = {
          'id': id,
          'name': name,
          'address': address
      }
      

        let Url = 'https://localhost:44363/api/Customers/' + id;
      console.log(Url)
     
      axios({
          method: 'put',
          url: Url,
          data: editedCustomer
      })
      
      
     

      
  };

  showEditCustomer = id => {
    this.state.Customers.map(item => {
        if (item.id === id) {
        item.editModalOpen = true;
      }
    });
    this.setState({
      Customers: [...this.state.Customers]
    });
  };

  //Edit Product
    EditProductState = (id, name, price) => {
        this.state.Products.map(item => {
            if (item.id == id) {
                item.editModalOpen = false;
                item.name = name;
                item.price = price
            }
        });
        this.setState({
            Products: [...this.state.Products]
        })
    }

    editProduct = (id, name, price) => {
        this.EditProductState(id, name, price)
        const editedProduct = {
            
            'name': name,
            'price': price
        }
       

        let Url = 'https://localhost:44363/api/Products/' + id;
       

        axios({
            method: 'put',
            url: Url,
            data: editedProduct
        })

  };

  showEditProduct = id => {
    this.state.Products.map(item => {
      if (item.id === id) {
        item.editModalOpen = true;
      }
    });
    this.setState({
      Products: [...this.state.Products]
    });
  };

  //EditStore
    EditStoreState = (id, name, address) => {
        this.state.Stores.map(item => {
            if (item.id === id) {
                item.name = name;
                item.address = address;
                item.editModalOpen = false;
            }
        });
        this.setState({
            Stores: [...this.state.Stores]
        });
    }
    editStore = (id, name, address) => {
        this.EditStoreState(id, name, address);

        const editedStore = {

            'name': name,
            'address': address
        }
        let Url = 'https://localhost:44363/api/Stores/' + id;

        axios({
            method: 'put',
            url: Url,
            data: editedStore
        })
    };
    
  showEditStore = id => {
      this.state.Stores.map(item => {
          if (item.id === id) {
        item.editModalOpen = true;
      }
    });
    this.setState({
      Stores: [...this.state.Stores]
    });
    };

    //EditSales

    EditSaleState = (id, dateSold, customerId, productId, storeId) => {
        this.state.Sales.map(item => {
            if (item.id === id) {
                item.dateSold = dateSold
                item.CustomerId = customerId;
                item.ProductId = productId;
                item.StoreId = storeId;
                item.editModalOpen = false;
            }
        });
        this.setState({
            Stores: [...this.state.Stores]
        });
    }

    editSale = (id, dateSold, customerId, productId, storeId) => {

        this.EditSaleState(id, dateSold, customerId, productId, storeId);

        const editedSale = {
            
            'dateSold': dateSold,
            'CustomerId': customerId,
            'ProductId': productId,
            'StoreId': storeId
        }
        console.log(editedSale)
        let Url = 'https://localhost:44363/api/Sales/' + id;

        axios({
            method: 'put',
            url: Url,
            data: editedSale
        })

        window.location.reload(true);
    }

    showEditSale = id => {
        this.state.Sales.map(
            item => {
                if (item.id === id) {
                    item.editModalOpen = true;
                }
            }
        )
        this.setState({
            Sales: [...this.state.Sales]
        });
    }
//CancelModal
    closeModalCustomer = (id) => {
        this.state.Customers.map(item => {
            if (item.
                id === id) {
                item.editModalOpen = false;
            }
        });
        this.setState({
            Customers: [...this.state.Customers]
        });
    }

    closeModalProduct = (id) => {
        this.state.Products.map(item => {
            if (item.id === id) {
                item.editModalOpen = false;
            }
        });
        this.setState({
            Products: [...this.state.Products]
        })
    }

    closeModalStore = (id) => {
        this.state.Stores.map(item => {
            if (item.id === id) {
                item.editModalOpen = false;
            }
        });
        this.setState({
            Stores: [...this.state.Stores]
        })
    }

    closeModalSale = (id) => {
        this.state.Sales.map(item => {
            if (item.id === id) {
                item.editModalOpen = false;
            }
        });
        this.setState({
            Sales: [...this.state.Sales]
        })
    }
  //Delete
  //Delete Customers
    delAction = id => {

        this.setState({
            Customers: [
                ...this.state.Customers.filter(customer => customer.id !== id)
            ]
        });
       
        const Url = "https://localhost:44363/api/Customers/"+id
        axios(
            {
                method: "delete",
                url: Url
            }
        );
        //axios.get("https://localhost:44306/api/Customers")

        //    .then(Customers => this.setState({ Customers: Customers.data }));
    
  };
  //Delete Products
    delProduct = id => {

    this.setState({
      Products: [...this.state.Products.filter(product => product.id !== id)]
        });
        const Url = 'https://localhost:44363/api/Products/' + id
        axios(
            {
                method: "delete",
                url: Url
            }
            )
  };
  //Delete Store
  delStore = id => {
    this.setState({
      Stores: [...this.state.Stores.filter(store => store.id !== id)]
      });
      const Url = "https://localhost:44363/api/Stores/" + id
      axios(
          {
              method: "delete",
              url: Url
          }
          )
    };

    //Delete Sale

    delSale = id => {
        this.setState({
            Sales: [...this.state.Sales.filter(sale => sale.id !== id)]
        });
        const Url = "https://localhost:44363/api/Sales/" + id
        axios(
            {
                method: "delete",
                url: Url
            }
        )
    };


  //Pages
  //Products Page
  ProductPage = () => {
    return (
      <React.Fragment>
        <NewProduct addProduct={this.addProduct} />
        <ProductList
                Products={this.state.Products}
                delProduct={this.delProduct}
                editProduct={this.editProduct}
                showEditProduct={this.showEditProduct}
                editModalOpen={this.state.editModalOpen}
                closeModalProduct={this.closeModalProduct}
        />
      </React.Fragment>
    );
  };
  //Store Page
  StorePage = () => {
    return (
      <React.Fragment>
        <NewStore addStore={this.addStore} />
        <StoreList
          Stores={this.state.Stores}
          delStore={this.delStore}
          editStore={this.editStore}
          showEditStore={this.showEditStore}
                editModalOpen={this.state.editModalOpen}
                closeModalStore={this.closeModalStore}
        />
      </React.Fragment>
    );
  };
  //Sales Page
    SalesPage = () => {
        return (
            <React.Fragment>
                <NewSales
                    Customers={this.state.Customers}
                    Products={this.state.Products}
                    Stores={this.state.Stores}
                    addSale={this.addSale}
                />
                <SalesList
                    Sales={this.state.Sales}
                    Customers={this.state.Customers}
                    Products={this.state.Products}
                    Stores={this.state.Stores}
                    editSale={this.editSale}
                    showEditSale={this.showEditSale}
                    closeModalSale={this.closeModalSale}
                    delSale={this.delSale}
                />


            </React.Fragment>
            
            
            )
    }
    render() {
        console.log(this.state) 
    return (
        <Router>
            <div>
        <NavMenu />
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <NewCustomer addCustomer={this.addCustomer} />
              <CustomerList
                      Customers={this.state.Customers}
                      delAction={this.delAction}
                      editCustomer={this.editCustomer}
                      showEditCustomer={this.showEditCustomer}
                      editModalOpen={this.state.editModalOpen}
                      closeModalCustomer={this.closeModalCustomer}
              />
            </React.Fragment>
          )}
        />
        <Route path="/products" component={this.ProductPage} />
                <Route path="/stores" component={this.StorePage} />
                <Route path="/sales" component={this.SalesPage} />
            </div>
      </Router>
    );
  }
}

export default App;
