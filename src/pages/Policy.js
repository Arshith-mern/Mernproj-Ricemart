import React from "react";
import Layout from "./../components/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>1) We respect your privacy! We only collect information needed to fulfill your orders and improve your experience.</p>
          <p>2) We use secure servers to protect your personal data.</p>
          <p>3) We never share your information with third parties without your consent.</p>
          <p>4) You can access, update, or delete your information at any time.</p>
          <p>5) We use cookies to enhance your browsing experience. Learn more in our Cookie Policy.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;