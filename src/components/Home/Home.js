import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="home-class">
      <nav className="navbar">
        <div className="left-section">
          <span className="site-name">Made 2 automate</span>
        </div>
        <div className="right-section">
          <button onClick={handleLogout}>
            <img
              className="logout-icon"
              src="https://cdn-icons-png.flaticon.com/128/12748/12748824.png"
              alt="logout"
            ></img>
          </button>
        </div>
      </nav>
      <main className="home-main">
        <div className="container">
          <div className="box">
            <div className="number">
              <h1>112</h1>
              <p>Total Orders</p>
            </div>
          </div>
          <div className="box">
            <div className="number">
              <h1>152</h1>
              <p>New Stocks</p>
            </div>
          </div>
          <div className="box">
            <div className="number">
              <h1>100</h1>
              <p>Dead Stocks</p>
            </div>
          </div>
          <div className="box">
            <div className="number">
              <h1>25</h1>
              <p>Total Leads</p>
            </div>
          </div>
          <div className="box">
            <div className="number">
              <p>1,11,200</p>
              <p style={{color:"blue"}}>Total Revenue</p>
            </div>
          </div>
        </div>
        <div className="total-Orders">
          <div className="ordersNav">
            <div className="left-section">
              <span className="site-name">Total Order</span>
            </div>
            <div className="right-section">
              <Link to="/orderlist">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  View All
                </button>
              </Link>
            </div>
          </div>
          <div className="span">
            <p>A Summary of your Orders</p>
          </div>
          <div className="order">
            <div className="order-detail">
              <h1>IR Sensors</h1>

              <div className="description">
                <p>Description for this order is too long click view all to see details</p>
              </div>
              <div className="Quantity">
                <p>Quantity: 120 pieces</p>
              </div>
            </div>
            <div className="order-detail">
              <h1>Metal Sensors</h1>

              <div className="description">
                <p>Description for this order is too long click view all to see details</p>
              </div>
              <div className="Quantity">
                <p>Quantity: 120 pieces</p>
              </div>
            </div>
          </div>
        </div>
        <div className="total-Orders">
          <div className="ordersNav">
            <div className="left-section">
              <span className="site-name">Total Leads</span>
            </div>
            <div className="right-section">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                View All
              </button>
            </div>
          </div>
          <div className="span">
            <p>A Summary of your leads received</p>
          </div>
          <div className="order">
            <div className="order-detail">
              <div className="name-detail">
                <div className="name">
                  <h1>Rakesh Verma</h1>
                </div>

                <div className="contact-detail">
                  {" "}
                  <p style={{ color: "blue" }}>Contact detail : </p>
                  <span> 8303082972</span>
                </div>
              </div>

              <div className="description">
                <p>Description for the Order</p>
              </div>
              <div className="Quantity">
                <p>Quantity: 120 pieces</p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/addProduct">
        <div className="bottom-right-button">
          <img
            style={{ height: "15px", width: "15px" }}
            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
            alt="add"
          ></img>
          
            <button>Add Product</button>

        </div>
        </Link>
        
      </main>
    </div>
  );
}
