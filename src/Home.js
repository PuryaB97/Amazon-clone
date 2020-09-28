import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      ></img>

      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://productimages.hepsiburada.net/s/27/375/10192989716530.jpg"
        ></Product>

        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates"
          price={239}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._SX425_.jpg"
        ></Product>
      </div>

      <div className="home__row">
        <Product
          id="34534578"
          title="Samsung Galaxy Watch"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41CIyIkHRLL._SX500_SY500_CR,0,0,500,500_.jpg"
        ></Product>

        <Product
          id="87564535"
          title="Echo (3rd Gen)- Smart speaker with Alexa- Charcoals"
          price={98.99}
          rating={4}
          image="https://images.indianexpress.com/2018/10/amazon-echo-plus-2018-main.jpg"
        ></Product>

        <Product
          id="92174867"
          title="iPad Pro 12.9 inç Wi-Fi + Cellular"
          price={598.99}
          rating={5}
          image="https://image.coolblue.be/max/500x500/products/1404165"
        ></Product>
      </div>

      <div className="home__row">
        <Product
          id="36481953"
          title="49 QLED Gaming Monitor CRG9 with Dual QHD Resolution"
          price={1.516}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/tr-cxxrg9-lc49rg90ssmxuf-backsilver-170835507?$L2-Thumbnail$"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
