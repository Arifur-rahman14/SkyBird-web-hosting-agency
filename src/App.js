import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DashBoard from "./components/DashBoard/DashBoard";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import CheckOut from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Review from "./components/Review/Review";
import ManageServices from "./components/ManageServices/ManageServices";
import OrderList from "./components/OrderList/OrderList";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <div className="App">
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <PrivateRoute path="/checkout/:id">
                            <CheckOut />
                        </PrivateRoute>
                        <PrivateRoute path="/dashBoard">
                            <DashBoard />
                        </PrivateRoute>
                        <PrivateRoute path="/makeAdmin">
                            <MakeAdmin />
                        </PrivateRoute>
                        <PrivateRoute path="/manageService">
                            <ManageServices />
                        </PrivateRoute>
                        <PrivateRoute path="/orders">
                            <Orders />
                        </PrivateRoute>
                        <PrivateRoute path="/orderList">
                            <OrderList />
                        </PrivateRoute>
                        <PrivateRoute path="/review">
                            <Review />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
