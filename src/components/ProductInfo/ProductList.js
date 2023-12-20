import React from "react";
import "./ProductList.css";
import Barcode from "react-barcode";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  const latestProduct = storedProducts[storedProducts.length - 1];
  const Navigate = useNavigate()
  const handleEditDetails = () => {
    Navigate("/addProduct");
    // Redirect to edit page with the product ID for editing details
  };

  const handleSaveChanges = () => {
    // Save changes logic
    // For example, update the product in the storage or API
    // ...

    // Show success message
    alert("Product details updated successfully!");
  };

  const handlePrintBarcode = () => {
    const printableContent = latestProduct && latestProduct.barcode;
    if (printableContent) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`<img src="${printableContent}" />`);
      printWindow.document.close();
      printWindow.print();
      console.log("Printing barcode...");
    } else {
      console.error("Barcode content is not available.");
    }
  };

  const handleSaveBarcode = () => {
    const barcodeURL = latestProduct?.barcode;
    if (barcodeURL) {
      fetch(barcodeURL)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "barcode.png");
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
          console.log("Barcode image saved to device.");
        })
        .catch((error) => {
          console.error("Error saving barcode:", error);
        });
    } else {
      console.error("Barcode image URL is not available.");
    }
  };


  return (
    <div className="product-list-container">
      <div className="barcode-heading">
        <h2>Barcode</h2>
      </div>

      {latestProduct && (
        <div className="product-card">
          <div className="product-image-container">
            <img
              src={latestProduct.image || "https://via.placeholder.com/150"}
              alt={latestProduct.productName}
              className="product-image"
            />
          </div>
          <div className="product-details">
            <h3 className="product-name">{latestProduct.productName}</h3>
            <p className="product-description">{latestProduct.description}</p>
            <div className="product-info">
              <p className="product-manufacturer heading">
                Manufacturer: {latestProduct.manufacturer}
              </p>
              <p className="product-id heading">
                Product ID: {latestProduct.productid}
              </p>
            </div>
            <div className="product-info">
              <p className="product-price heading">
                Price: ${latestProduct.price}
              </p>
              <p className="product-quantity heading">
                Quantity: {latestProduct.quantity}
              </p>
              <p className="product-category heading">
                Category: {latestProduct.category}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="barcode-card">
        <Barcode value={latestProduct?.barcode || ""} />
        <div className="barcode-buttons">
          <button onClick={handlePrintBarcode} className="print-button">
            Print Barcode
          </button>
          <button onClick={handleSaveBarcode} className="save-button">
            Save to Device
          </button>
        </div>
      </div>
      <div className="edit-save-buttons">
        <button onClick={handleEditDetails} className="edit-button">
          Edit Details
        </button>
        <button onClick={handleSaveChanges} className="save-changes-button">
          Save Changes
        </button>
      </div>
    </div>
    
  );
};

export default ProductList;
