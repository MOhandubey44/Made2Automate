import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App.css";
import SignInForm from "./components/Authentication/SignInForm";
import SignUpForm from "./components/Authentication/SignUpForm";
import Home from "./components/Home/Home";
import OrderList from "./components/Orders/Order";
import AddProductForm from "./components/ProductInfo/AddProductForm";
import ProductList from "./components/ProductInfo/ProductList";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> :
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between mt-4">
                {!isLoggedIn && (
                  <div className="flex space-x-4">
                    <a
                      href="#signin"
                      onClick={() => setIsSignUp(false)}
                      className="text-blue-500 hover:underline"
                    >
                      Sign In
                    </a>
                    <a
                      href="#signup"
                      onClick={() => setIsSignUp(true)}
                      className="text-green-500 hover:underline"
                    >
                      Register
                    </a>
                  </div>
                )}
              </div>
              {isSignUp ? (
                <SignUpForm setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <SignInForm setIsLoggedIn={setIsLoggedIn} />
              )}
            </div>
          </div>
        } />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/addProduct" element={<AddProductForm />} />
        <Route path="/product-list" element={<ProductList/>} />
      </Routes>
    </Router>
  );
};

export default App;
