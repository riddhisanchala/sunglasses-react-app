// ProductExplore.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./ProductExplore.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import rectangle from "./assets/rectengle.png";
import oval from "./assets/oval.png";
import square from "./assets/square.png";
import wayfarer from "./assets/wayfarer.png";
import geometric from "./assets/geometric.png";
import round from "./assets/round.png";
import cat_eye from "./assets/cat-eye.png";
// eyeclic
import eyeclic1 from "./assets/eyeclic_one.png";
import eyeclic2 from "./assets/eyeclic_two.png";
import eyeclic3 from "./assets/eyeclic_three.png";
import eyeclic4 from "./assets/eyeclic_four.png";
import eyeclic5 from "./assets/eyeclic_five.png";
// police
import police1 from "./assets/police_one.png";
import police2 from "./assets/police_two.png";
import police3 from "./assets/police_three.png";
import police4 from "./assets/police_four.png";
// opium 
import opium1 from "./assets/opium_one.png";
import opium2 from "./assets/opium_two.png";
import opium3 from "./assets/opium_three.png";
import opium4 from "./assets/opium_four.png";

// rayban
import rayban1 from "./assets/rayban_one.png";
import rayban2 from "./assets/rayban_two.png";
import rayban3 from "./assets/rayban_three.png";
import rayban4 from "./assets/rayban_four.png";
// carrera
import carrera1 from "./assets/carrera_one.png";
import carrera2 from "./assets/carrera_two.png";
import carrera3 from "./assets/carrera_three.png";
// calvinklein
import calvinklein1 from "./assets/ck_one.png";
import calvinklein2 from "./assets/ck_two.png";
import calvinklein3 from "./assets/ck_three.png";
import calvinklein4 from "./assets/ck_four.png";

import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "ec01",
    name: "Eyeclic Rectangle Pro",
    shape: "Rectangle",
    price: 1290,
    oldPrice: 4620,
    rating: 4.3,
    image: rectangle,
    brand: "Eyeclic",
  },
  {
    id: "ec02",
    name: "Eyeclic Oval Prime",
    shape: "Oval",
    price: 990,
    oldPrice: 2990,
    rating: 4.1,
    image: oval,
    brand: "Eyeclic",
  },
  {
    id: "ec03",
    name: "Eyeclic Square Max",
    shape: "Square",
    price: 590,
    oldPrice: 1590,
    rating: 4.5,
    image: square,
    brand: "Police",
  },
  {
    id: "ec04",
    name: "Eyeclic Wayfarer",
    shape: "Wayfarer",
    price: 890,
    oldPrice: 2590,
    rating: 4.0,
    image: wayfarer,
    brand: "Calvin Klein",
  },
  {
    id: "ec05",
    name: "Eyeclic Geometric",
    shape: "Geometric",
    price: 1090,
    oldPrice: 3190,
    rating: 4.7,
    image: geometric,
    brand: "Carrera",
  },
  {
    id: "ec06",
    name: "Eyeclic Round",
    shape: "Round",
    price: 790,
    oldPrice: 1990,
    rating: 4.2,
    image: round,
    brand: "Opium",
  },
  {
    id: "ec07",
    name: "Eyeclic Cat Eye",
    shape: "Cat-Eye",
    price: 1390,
    oldPrice: 3990,
    rating: 4.8,
    image: cat_eye,
    brand: "Ray-Ban",
  },
  {
    id: "ec08",
    name: "Rectangle Black",
    shape: "Rectangle",
    price: 999,
    oldPrice: 2490,
    rating: 4.1,
    image: rectangle,
    brand: "Police",
  },
  {
    id: "ec09",
    name: "Oval Crystal",
    shape: "Oval",
    price: 899,
    oldPrice: 1990,
    rating: 4.0,
    image: oval,
    brand: "Calvin Klein",
  },
  {
    id: "ec10",
    name: "Square Air",
    shape: "Square",
    price: 1190,
    oldPrice: 3290,
    rating: 4.4,
    image: square,
    brand: "Opium",
  },
  {
    id: "ec11",
    name: "Wayfarer Lite",
    shape: "Wayfarer",
    price: 690,
    oldPrice: 1690,
    rating: 3.9,
    image: wayfarer,
    brand: "Calvin Klein",
  },
  {
    id: "ec12",
    name: "Geometric Sky",
    shape: "Geometric",
    price: 1490,
    oldPrice: 4290,
    rating: 4.9,
    image: geometric,
    brand: "Calvin Klein",
  },
  {
    id: "ec13",
    name: "Round Premium",
    shape: "Round",
    price: 950,
    oldPrice: 2890,
    rating: 4.2,
    image: round,
    brand: "Carrera",
  },
  {
    id: "ec14",
    name: "Cat Eye Pink",
    shape: "Cat-Eye",
    price: 1590,
    oldPrice: 4890,
    rating: 4.6,
    image: cat_eye,
    brand: "Police",
  },
  {
    id: "ec15",
    name: "Rectangle Silver",
    shape: "Rectangle",
    price: 1299,
    oldPrice: 3490,
    rating: 4.3,
    image: rectangle,
    brand: "Ray-Ban",
  },
  {
    id: "ec16",
    name: "Oval White",
    shape: "Oval",
    price: 890,
    oldPrice: 2390,
    rating: 4.0,
    image: oval,
    brand: "Carrera",
  },
  {
    id: "ec17",
    name: "Square Edge",
    shape: "Square",
    price: 1199,
    oldPrice: 3590,
    rating: 4.4,
    image: square,
    brand: "Police",
  },
  {
    id: "ec18",
    name: "Wayfarer Gold",
    shape: "Wayfarer",
    price: 999,
    oldPrice: 2790,
    rating: 4.1,
    image: wayfarer,
    brand: "Ray-Ban",
  },
  {
    id: "ec19",
    name: "Geometric X",
    shape: "Geometric",
    price: 1690,
    oldPrice: 5290,
    rating: 4.8,
    image: geometric,
    brand: "Ray-Ban",
  },
  {
    id: "ec20",
    name: "Round Black",
    shape: "Round",
    price: 899,
    oldPrice: 2590,
    rating: 4.0,
    image: round,
    brand: "Eyeclic",
  },
  {
    id: "ec21",
    name: "Eyeclicl ",
    price: 750,
    oldPrice: 2200,
    rating: 3.5,
    image: eyeclic1,
    brand: "Eyeclic",
  },
  {
    id: "ec22",
    name: "Eyeclicl ",
    shape: "Square",
    price: 890,
    oldPrice: 2100,
    rating: 3.1,
    image: eyeclic2,
    brand: "Eyeclic",
  },
  {
    id: "ec23",
    name: "Eyeclicl ",
    shape: "Round",
    price: 790,
    oldPrice: 2100,
    rating: 4.2,
    image: eyeclic3,
    brand: "Eyeclic",
  },
  {
    id: "ec24",
    name: "Eyeclicl ",
    shape: "Cat-Eye",
    price: 650,
    oldPrice: 1800,
    rating: 3.1,
    image: eyeclic4,
    brand: "Eyeclic",
  },
  {
    id: "ec25",
    name: "Eyeclicl ",
    shape: "Cat-Eye",
    price: 999,
    oldPrice: 2500,
    rating: 3.9,
    image: eyeclic5,
    brand: "Eyeclic",
  },
  {
    id: "ec26",
    name: "Police ",
    shape: "Oval",
    price: 1490,
    oldPrice: 3000,
    rating: 4.1,
    image: police1,
    brand: "Police",
  },
  {
    id: "ec27",
    name: "Police ",
    shape: "Rectangle",
    price: 1100,
    oldPrice: 4400,
    rating: 4.2,
    image: police2,
    brand: "Police",
  },
  {
    id: "ec27",
    name: "Police ",
    shape: "Square",
    price: 1200,
    oldPrice: 4290,
    rating: 4.4,
    image: police3,
    brand: "Police",
  },
  {
    id: "ec28",
    name: "Police ",
    shape: "Square",
    price: 1000,
    oldPrice: 3000,
    rating: 4.2,
    image: police4,
    brand: "Police",
  },
  {
    id: "ec29",
    name: "Opium ",
    shape: "Round",
    price: 999,
    oldPrice: 2800,
    rating: 4.1,
    image: opium1,
    brand: "Opium",
  },
  {
    id: "ec30",
    name: "Opium ",
    shape: "Rectangle",
    price: 1400,
    oldPrice: 3300,
    rating: 4.2,
    image: opium2,
    brand: "Opium",
  },
  {
    id: "ec31",
    name: "Opium ",
    shape: "Rectangle",
    price: 1600,
    oldPrice: 3500,
    rating: 4.1,
    image: opium3,
    brand: "Opium",
  },
  {
    id: "ec32",
    name: "Opium ",
    shape: "Geometric",
    price: 1300,
    oldPrice: 2900,
    rating: 4.0,
    image: opium4,
    brand: "Opium",
  },
  {
    id: "ec33",
    name: "Ray-Ban",
    shape: "Rectangle",
    price: 2000,
    oldPrice: 5500,
    rating: 4.1,
    image: rayban1,
    brand: "Ray-Ban",
  },
  {
    id: "ec34",
    name: "Ray-Ban",
    shape: "Round",
    price: 2500,
    oldPrice: 6000,
    rating: 4.2,
    image: rayban2,
    brand: "Ray-Ban",
  },
  {
    id: "ec35",
    name: "Ray-Ban",
    shape: "Cat-Eye",
    price: 2200,
    oldPrice: 5800,
    rating: 4.1,
    image: rayban3,
    brand: "Ray-Ban",
  },
  {
    id: "ec36",
    name: "Ray-Ban",
    shape: "Wayfarer",
    price: 1800,
    oldPrice: 4500,
    rating: 4.0,
    image: rayban4,
    brand: "Ray-Ban",
  },
  {
    id: "ec37",
    name: "Carrera",
    shape: "Rectangle",
    price: 1500,
    oldPrice: 2500,
    rating: 4.2,
    image: carrera1,
    brand: "Carrera",
  },
  {
    id: "ec38",
    name: "Carrera",
    shape: "Oval",
    price: 1800,
    oldPrice: 3500,
    rating: 4.1,
    image: carrera2,
    brand: "Carrera",
  },
  {
    id: "ec39",
    name: "Carrera",
    shape: "Rectangle",
    price: 2200,
    oldPrice: 5200,
    rating: 4.2,
    image: carrera3,
    brand: "Carrera",
  },
  {
    id: "ec40",
    name: "Calvin Klein",
    shape: "Rectangle",
    price: 1600,
    oldPrice: 4000,
    rating: 4.0,
    image: calvinklein1,
    brand: "Calvin Klein",
  },
  {
    id: "ec41",
    name: "Calvin Klein",
    shape: "Rectangle",
    price: 1800,
    oldPrice: 3500,
    rating: 4.1,
    image: calvinklein2,
    brand: "Calvin Klein",
  },
  {
    id: "ec42",
    name: "Calvin Klein",
    shape: "Round",
    price: 2200,
    oldPrice: 5200,
    rating: 4.2,
    image: calvinklein3,
    brand: "Calvin Klein",
  },
  {
    id: "ec43",
    name: "Calvin Klein",
    shape: "Rectangle",
    price: 1600,
    oldPrice: 4000,
    rating: 4.0,
    image: calvinklein4,
    brand: "Calvin Klein",
  },

];


const ProductExplore = () => {

  const navigate = useNavigate();
  const selectedShape = JSON.parse(localStorage.getItem("selectedShape"));
  const selectedBrand = JSON.parse(localStorage.getItem("selectedBrand"));
  const handleProductClick = (product) => {

    localStorage.setItem(
      "singleProduct",
      JSON.stringify(product)
    );

    navigate("/Single_Product");

  };

  // declaratioon
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [sortType, setSortType] = useState("default");
  // 
  useEffect(() => {

    if (selectedShape && selectedShape.shape) {

      setSelectedShapes([
        selectedShape.shape
      ]);

      localStorage.removeItem("selectedShape");
    }

    if (selectedBrand && selectedBrand.brand) {

      setSelectedBrands([
        selectedBrand.brand
      ]);

      localStorage.removeItem("selectedBrand");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // const filteredProducts =
  //   selectedShapes.length > 0
  //     ? products.filter((item) =>
  //       selectedShapes.includes(item.shape)
  //     )
  //     : products;
  const filteredProducts = products.filter((item) => {

    let shapeMatch = true;
    let brandMatch = true;

    // SHAPE FILTER
    if (selectedShapes.length > 0) {

      shapeMatch =
        item.shape &&
        selectedShapes.includes(item.shape);

    }

    // BRAND FILTER
    if (selectedBrands.length > 0) {

      brandMatch =
        item.brand &&
        selectedBrands.includes(item.brand);

    }

    return shapeMatch && brandMatch;

  });

  let sortedProducts = [...filteredProducts];

  if (sortType === "low") {

    sortedProducts.sort(
      (a, b) => a.price - b.price
    );

  }

  if (sortType === "high") {

    sortedProducts.sort(
      (a, b) => b.price - a.price
    );

  }
  // SHAPE FILTER
  const handleShapeFilter = (shape) => {

    if (selectedShapes.includes(shape)) {

      setSelectedShapes(
        selectedShapes.filter(
          (item) => item !== shape
        )
      );

    } else {

      setSelectedShapes([
        ...selectedShapes,
        shape,
      ]);

    }
  };
  // BRAND FILTER
  const handleBrandFilter = (brand) => {

    if (selectedBrands.includes(brand)) {

      setSelectedBrands(
        selectedBrands.filter(
          (item) => item !== brand
        )
      );

    } else {

      setSelectedBrands([
        ...selectedBrands,
        brand,
      ]);

    }
  };
  //WISHLIST
  // WISHLIST
  const [wishlistItems, setWishlistItems] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  // HANDLE WISHLIST
  const handleWishlist = (e, product) => {

    e.stopPropagation();

    if (!currentUser) {

      alert("Please Login");

      return;
    }

    let updatedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyExists = updatedWishlist.find(
      (item) =>
        item.userId === currentUser.id &&
        item.id === product.id
    );

    if (alreadyExists) {

      updatedWishlist = updatedWishlist.filter(
        (item) =>
          !(
            item.userId === currentUser.id &&
            item.id === product.id
          )
      );

    } else {

      updatedWishlist.push({
        ...product,
        userId: currentUser.id
      });

    }

    setWishlistItems(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };
  return (
    <>
      <Header />
      {/*  */}
      <div className="explore-top" style={{ padding: "10px 30px" }}>
        <p>
          <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</span>
          <span>/</span>
          <span>Product Explore</span>

        </p>
      </div>
      {/*  */}
      <div className="explore-page">

        {/* LEFT FILTER */}
        <div className="filter-section">

          <h2>Frame Shape</h2>

          {[
            "Rectangle",
            "Oval",
            "Square",
            "Wayfarer",
            "Geometric",
            "Round",
            "Cat-Eye",
          ].map((shape, index) => (
            <div className="filter-item" key={index}>
              <input
                type="checkbox"
                checked={selectedShapes.includes(shape)}
                onChange={() =>
                  handleShapeFilter(shape)
                }
              />
              <label>{shape}</label>
            </div>
          ))}
          <h2>Brands</h2>

          {[
            "Eyeclic",
            "Police",
            "Opium",
            "Ray-Ban",
            "Carrera",
            "Calvin Klein",
          ].map((brand, index) => (

            <div className="filter-item" key={index}>

              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() =>
                  handleBrandFilter(brand)
                }
              />

              <label>{brand}</label>

            </div>

          ))}
        </div>

        {/* RIGHT PRODUCTS */}
        <div className="products-section">

          <div className="top-bar">
            <h3>
              {filteredProducts.length} Products
            </h3>

            <select
              value={sortType}
              onChange={(e) =>
                setSortType(e.target.value)
              }
            >

              <option value="default">
                Default
              </option>

              <option value="low">
                Low To High
              </option>

              <option value="high">
                High To Low
              </option>

            </select>
          </div>

          <div className="products-grid">

            {sortedProducts.map((item) => (
              <div
                className="product-card"
                key={item.id}
                onClick={() => handleProductClick(item)}
              >

                <div
                  className="wishlist-btn"
                  onClick={(e) =>
                    handleWishlist(e, item)
                  }
                >

                  {
                    wishlistItems.find(
                    (wishlistItem) =>
                        wishlistItem.id === item.id &&
                        wishlistItem.userId === currentUser?.id
)
                      ? <FaHeart />

                      : <FaRegHeart />
                  }

                </div>

                <div className="product-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>

                <div className="product-info">

                  <h2>{item.name}</h2>

                  <div className="rating">
                    ⭐ {item.rating}
                  </div>

                  <div className="price-section">

                    <span className="price">
                      ₹{item.price}
                    </span>

                    <span className="old-price">
                      ₹{item.oldPrice}
                    </span>

                  </div>

                  <p className="offer">
                    Get 3 Pair in just ₹1290
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default ProductExplore;