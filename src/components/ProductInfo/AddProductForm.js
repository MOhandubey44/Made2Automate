import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Barcode from "react-barcode";

const AddProductForm = () => {
  const Navigate = useNavigate();

  const [product, setProduct] = useState({
    productName: "",
    price: "",
    quantity: "",
    category: "",
    manufacturer: "",
    image: null,
    barcode: "",
    description: "", // Added description to the product state
    productid:""
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [generatedBarcode, setGeneratedBarcode] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProduct({ ...product, image: URL.createObjectURL(imageFile) });
    setImagePreview(URL.createObjectURL(imageFile));
  };

  const generateBarcode = () => {
    const randomBarcode = Math.floor(Math.random() * 1000000);
    return `${product.productName}_${randomBarcode}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const barcode = generateBarcode();

    const productData = {
      ...product,
      barcode,
      image: product.image,
    };

    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    storedProducts.push(productData);
    localStorage.setItem("products", JSON.stringify(storedProducts));

    console.log("Product Data:", productData);
    setGeneratedBarcode(barcode);
    setProduct({
      productName: "",
      price: "",
      quantity: "",
      category: "",
      manufacturer: "",
      image: null,
      barcode: "",
      description: "",
      productid:"" // Reset description after submitting
    });
    setImagePreview(null);
    Navigate("/product-list");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add Products</h2>
        <div className="container mx-auto p-4">
          {generatedBarcode && (
            <div>
              <p className="text-green-600 font-semibold">
                Generated Barcode: {generatedBarcode}
              </p>
              <Barcode value={generatedBarcode} />
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>
                  Product Name:
                  <input
                    type="text"
                    name="productName"
                    value={product.productName}
                    onChange={handleChange}
                    required
                    className="border rounded px-2 py-1 w-full"
                  />
                </label>
              </div>
              <div>
                <label>
                  Product Id:
                  <input
                    type="text"
                    name="productid"
                    value={product.productid}
                    onChange={handleChange}
                    required
                    className="border rounded px-2 py-1 w-full"
                  />
                </label>
              </div>
              <div>
                <label>
                  Price:
                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    required
                    className="border rounded px-2 py-1 w-full"
                  />
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>
                  Quantity:
                  <input
                    type="number"
                    name="quantity"
                    value={product.quantity}
                    onChange={handleChange}
                    required
                    className="border rounded px-2 py-1 w-full"
                  />
                </label>
              </div>
              <div>
                <label>
                  Category:
                  <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    required
                    className="border rounded px-2 py-1 w-full"
                  />
                </label>
              </div>
            </div>
            <div>
              <label>
                Manufacturer:
                <input
                  type="text"
                  name="manufacturer"
                  value={product.manufacturer}
                  onChange={handleChange}
                  required
                  className="border rounded px-2 py-1 w-full"
                />
              </label>
            </div>
            <div>
              <label>
                Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  className="hidden"
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Product Preview"
                    className="mt-2 max-w-48 max-h-48 border rounded"
                  />
                )}
                {!imagePreview && (
                  <div className="mt-2 border border-dashed border-gray-400 rounded p-4">
                    <p className="text-gray-600">No image selected</p>
                  </div>
                )}
              </label>
            </div>
            <div>
              <label>
                Description:
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                  className="border rounded px-2 py-1 w-full"
                  rows={4}
                ></textarea>
              </label>
            </div>
            <Link to="/" className="text-blue-500 hover:underline">
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded float-right"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
