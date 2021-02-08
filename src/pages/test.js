import React, { useState } from "react";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Test = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", ...formData }),
    })
      .then(() => navigate("/success"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <Layout>
      <SEO title="Test Page" />
      <form
        onSubmit={handleSubmit}
        name="test"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="test" />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter your name"
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="phone"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          placeholder="Enter your phone"
        />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default Test;
