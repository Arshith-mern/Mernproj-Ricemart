import React from "react";
import Layout from "./../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Our website is your one-stop shop for all things rice! Explore our extensive selection of high-quality rice varieties, sourced directly from trusted growers.  Browse conveniently from home and enjoy the ease of having your favorite rice delivered straight to your door. We're passionate about rice and here to help you discover new favorites. Explore our informative content and friendly customer service to make every rice purchase a perfect one!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;