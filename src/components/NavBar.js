import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { TbSearch } from "react-icons/tb";
import { TbFlag3Filled } from "react-icons/tb";
import { MdNotifications } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import "../App.css";
function NavBar() {
  return (
    <>
      <Navbar
        className="Polaris-TopBar__Contents_1u1wn w-100 navbar navbar-expand-lg navbar-light"
        expand="lg"
        // className="Polaris-TopBar__Contents_1u1wn w-100"
        // style={{ background: "#fff !important" }}
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            className="col-3 d-flex align-items-center gap-3"
          >
            <img
              src={
                "https://cdn.shopify.com/shopifycloud/web/assets/v1/ddb1b8f869635189.svg"
              }
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <h3>Shopify</h3>
          </Navbar.Brand>
          <Form className="d-flex  col-5" style={{ position: "relative" }}>
            <TbSearch
              style={{
                fontSize: "20px",
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3 ps-5 w-75"
              aria-label="Search"
              style={{
                outline: "none",
                border: "none",
                background: "none",
                backgroundColor: "#f1f2f4",
              }}
            />
          </Form>
          <div className="d-flex align-items-center justify-content-between col-3 gap-4">
            <div className="WQAz1 d-flex gap-2">
              <div className="SZ91S">
                <Button className="jXxiw">
                  <div className="Ge7ni">
                    <TbFlag3Filled className="Polaris-Icon_yj27d" />
                    <p>Setup guide</p>
                  </div>
                </Button>
              </div>
              <div className="SZ91S">
                <Button className="jXxiw">
                  <MdNotifications className="Polaris-Icon_yj27d" />
                </Button>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <h6
                className="m-0 d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#dde0e4",
                  borderRadius: "50%",
                }}
              >
                AY
              </h6>
              <h6 className="m-0">Ahmed Yahia </h6>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
