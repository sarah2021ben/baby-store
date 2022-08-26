import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./TopPage.css";

function TopPage({ pageName }) {
  return (
    <div className="top-page" >
      <h2>{pageName}</h2>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

        <Breadcrumb.Item active>{pageName}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default TopPage;
