import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../../Data/data.json";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFavorite } from "../../Redux/Actions/ProductActions";
import TopPage from "../../Component/TopPage/TopPage";
import "./Wishlist.css";

function Wishlist(props) {
  const dispatch = useDispatch();
  // on ramene notre liste de favoris (id) à partir du store
  const { favorite } = useSelector((state) => state.productsReducer);
  // on fait un filtre sur les id de la liste de favori à partir de notre data
  const favoriteproduct = data.filter((product) =>
    favorite.some((f) => f === product.id)
  );
  console.log(favoriteproduct);
  return (
    <div>
      {" "}
      <TopPage pageName={"Favourite Article"} />
      {favoriteproduct.length === 0 ? (
        <Container className="favorite-container">
          <div className="notif-favorite">
           <p> No product has been selected in your whishlist</p>
           <Link to="/shop"><button className="main-btn">Go the shop</button></Link>
           
          </div>

        </Container>
      ) : (
        <>
          <Container className="favorite-container">
            {" "}
            {favoriteproduct.map((favori) => (
              <Row key={favori.id} className="favorite-row">
                <Col sm={4}>
                  <img
                    src={favori.image}
                    alt={favori.name}
                    className="favorite-img"
                  />
                </Col>
                <Col sm={4}>
                  <p className="favorite-title">{favori.name}</p>
                </Col>
                <Col sm={2}>
                  <p className="favorite-price"> $ {favori.price}</p>
                </Col>
                <Col sm={2}>
                  <button
                    className="favorite-btn"
                    onClick={() => dispatch(RemoveFavorite(favori.id))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </Col>
              </Row>
            ))}
          </Container>
        </>
      )}
    </div>
  );
}

export default Wishlist;
