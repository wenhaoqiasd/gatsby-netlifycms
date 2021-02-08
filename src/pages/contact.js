import React, { useState } from "react";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => navigate("/success"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <Layout>
      <SEO title="Contact Page" />
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter your name"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default Contact;
