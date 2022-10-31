import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Explore from "./Pages/Explore/Explore/Explore";
import Purchase from "./Pages/Purchase/Purchase/Purchase";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import AddAProduct from "./Pages/Dashboard/AddAProduct/AddAProduct";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Review from "./Pages/Dashboard/Review/Review";
import Invoice from "./Pages/Dashboard/Invoice/Invoice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer position="top-center" autoClose={5000} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/explore" element={<Explore />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="addAProduct" element={<AddAProduct />} />
              <Route
                path="makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="manageAllOrders"
                element={
                  <AdminRoute>
                    <ManageAllOrders />
                  </AdminRoute>
                }
              />
              <Route
                path="manageProducts"
                element={
                  <AdminRoute>
                    <ManageProducts />
                  </AdminRoute>
                }
              />
              <Route path="myOrders" element={<MyOrders />} />
              <Route path="invoice/:id" element={<Invoice />} />
              <Route path="review" element={<Review />} />
            </Route>

            <Route
              path="purchase/:id"
              element={
                <PrivateRoute>
                  <Purchase />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
