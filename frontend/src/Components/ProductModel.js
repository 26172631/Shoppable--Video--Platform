import React from "react";
import Modal from "react-bootstrap/Modal";

const ProductModel = ({ product, isModalOpen, setIsModalOpen }) => {
  if (!product) return null;

  return (
    <Modal
      show={isModalOpen}
      size="lg"
      centered
      onHide={() => setIsModalOpen(false)}
      backdrop="static"
    >
      <Modal.Header closeButton className="py-1">
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-2">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid product-img"
              />
              <p className="mb-0 mt-1">{product.description}</p>
              <p className="mb-0 mt-1">${product.price}</p>
              <div className="d-flex justify-content-end">
                <button className="mt-1 btn btn-outline-primary">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModel;
