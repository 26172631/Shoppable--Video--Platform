import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function Header() {
  const [show, setShow] = useState(false);
  const [showmd, setShowMD] = useState(false);
  const [videos, setVideos] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [videoData, setVideoData] = useState({
    timestamp: "",
    productId: "",
    position: {
      x: "",
      y: "",
    },
  });
  const updateVideoData = (e) => {
    const { name, value } = e.target;
    if (name === "x" || name === "y") {
      setVideoData((prevState) => ({
        ...prevState,
        position: {
          ...prevState.position,
          [name]: value,
        },
      }));
    } else {
      setVideoData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const updateProductData = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  //This function is used to create a new product
  const submitProductData = () => {
    axios
      .post("http://localhost:4000/product/createproduct", productData)
      .then((res) => {
        if (res.data.success) {
          setShow(false);
          setProductData({ name: "", description: "", price: "", image: "" });
        } 
      });
  };
  //This fuction is used to create a new Video Metadata
  const submitVideoData = () => {
    axios
      .post("http://localhost:4000/video/createvideo", videoData)
      .then((res) => {
        if (res.data.success) {
          setShowMD(false);
          setVideoData({
            timestamp: "",
            productId: "",
            position: { x: "", y: "" },
          });
        } 
      });
  };
  //This useEffecct is used to fetch all prodcut from the Database
  useEffect(() => {
    axios
      .get("http://localhost:4000/product/getAllProduct")
      .then((response) => setVideos(response.data.product))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container">
          <a className="navbar-brand text-white" href="/">
            SV Platform
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h6
                  className="nav-link text-white"
                  onClick={() => setShow(true)}
                  style={{cursor: 'pointer'}}
                >
                  Create Product Data
                </h6>
              </li>
              <li className="nav-item">
                <h6 className="nav-link text-white" onClick={() => setShowMD(true)} style={{cursor: 'pointer'}}>
                  Create Video MD
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal
        show={show}
        size="lg"
        centered={true}
        onHide={() => setShow(false)}
        closeButton
        backdrop="static"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body closeButton>
          <div>
            <h5 className="text-center">Create Product</h5>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter  Name..."
              className="input-box"
              value={productData.name}
              onChange={updateProductData}
            />

            <label for="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter Description..."
              className="input-box"
              value={productData.description}
              onChange={updateProductData}
            />
            <label for="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Enter Price..."
              className="input-box"
              value={productData.price}
              onChange={updateProductData}
            />
            <label for="image">Image</label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="Enter Image URL..."
              className="input-box"
              value={productData.image}
              onChange={updateProductData}
            />
            <button className="btn-submit" onClick={submitProductData}>
              Create
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showmd}
        size="lg"
        centered={true}
        onHide={() => setShowMD(false)}
        closeButton
        backdrop="static"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body closeButton>
          <div>
            <h5 className="text-center">Create Video Metadata</h5>
            <label for="timestamp">Time Stamp</label>
            <input
              type="text"
              id="timestamp"
              name="timestamp"
              placeholder="Enter  Time Stamp..."
              className="input-box"
              value={videoData.name}
              onChange={updateVideoData}
            />
            <select
              name="productId"
              className="input-box"
              value={videoData.productId}
              onChange={updateVideoData}
            >
              <option value="">Select Product</option>
              {videos.map((v) => (
                <option key={v._id} value={v._id}>
                  {v.name}
                </option>
              ))}
            </select>

            <label htmlFor="x">Position X</label>
            <input
              type="text"
              id="x"
              name="x"
              placeholder="Enter Position X..."
              className="input-box"
              value={videoData.position.x}
              onChange={updateVideoData}
            />

            <label htmlFor="y">Position Y</label>
            <input
              type="text"
              id="y"
              name="y"
              placeholder="Enter Position Y..."
              className="input-box"
              value={videoData.position.y}
              onChange={updateVideoData}
            />
            <button className="btn-submit" onClick={submitVideoData}>
              Create
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
