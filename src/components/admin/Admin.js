import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./Admin.css";
import Ahome from "./pages/home/Ahome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
function Admin() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/admin">
            <Ahome/>
          </Route>
          <Route path="/admin/users">
                <UserList />
              </Route>
              <Route path="/admin/user/:userId">
                <User />
              </Route>
              <Route path="/admin/newUser">
                <NewUser />
              </Route>
          <Route path="/admin/movies">
            <ProductList />
          </Route>
          <Route path="/admin/product/:productId">
            <Product />
          </Route>
          <Route path="/admin/newMovie">
            <NewProduct />
          </Route>
          <Route path="/admin/lists">
                <ListList />
              </Route>
              <Route path="/admin/list/:listId">
                <List />
              </Route>
              <Route path="/admin/newlist">
                <NewList />
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Admin;
