import React, { useEffect, useState } from "react";
import "../Styles/contact.css";

export default function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    msg: "",
  });

  function getUserData(e) {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, mobile, address, msg } = user;

    if (name && email && mobile && address && msg) {
      let res = await fetch(
        "https://authentication-1-89e92-default-rtdb.firebaseio.com/form1.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            mobile,
            address,
            msg,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          mobile: "",
          address: "",
          msg: "",
        });
        alert("Data stored successfully");
      } else {
        alert("Error happened");
      }
    } else {
      alert("Please fill all the data");
    }
  };

  useEffect(() => {
    console.log("User: ", user);
  }, [user]);

  return (
    <div className="c-container">
      <form id="myForm" className="contact-container" method="POST">
        <h2 className="label">Contact Us</h2>
        <div className="name-email-container">
          <div className="name-container">
            <div className="label">Name : </div>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="enter your name"
              className="input"
              onChange={(e) => {
                getUserData(e);
              }}
              autoComplete="off"
              required
            />
          </div>
          <div className="email-container">
            <div className="label">Email : </div>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="enter your email"
              className="input"
              onChange={(e) => {
                getUserData(e);
              }}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="mobile-address-container">
          <div className="mobile-container">
            <div className="label">Mobile No. : </div>
            <input
              type="text"
              name="mobile"
              value={user.mobile}
              placeholder="enter your mobile no."
              className="input"
              onChange={(e) => {
                getUserData(e);
              }}
              autoComplete="off"
              required
            />
          </div>
          <div className="address-container">
            <div className="label">Address : </div>
            <input
              type="text"
              name="address"
              value={user.address}
              placeholder="enter your address"
              className="input"
              onChange={(e) => {
                getUserData(e);
              }}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="msg-container">
          <div className="label">Message : </div>
          <textarea
            name="msg"
            value={user.msg}
            onChange={(e) => {
              getUserData(e);
            }}
            className="msg-box"
            placeholder="Write some messages"
            autoComplete="off"
            required
          ></textarea>
        </div>
        <div className="submit-btn">
          <button onClick={postData}>Submit</button>
        </div>
      </form>
    </div>
  );
}
