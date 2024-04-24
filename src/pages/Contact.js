import React from "react";
import Layout from "./../components/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          We understand you might have questions about our delicious rice varieties! Whether you're curious about specific cooking methods, have dietary inquiries, or simply want to learn more about our sourcing practices, our friendly team is here to assist you. We look forward to connecting with you and ensuring a smooth rice buying experience!
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ricemart.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 6305735418
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-1234-5678 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
