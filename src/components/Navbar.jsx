import React from "react";
// import Mailto from './components/Mailto';

const Mailto = ({ email, subject, body, props }) => {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}`}>
      {props.children}
    </a>
  );
};
const Navbar = () => {
  return (
    <div>
      <div>
        About me
      </div>
      <div>
        My portfolio
      </div>
      <Mailto email="foo@bar.baz" subject="Hello">
        Mail me
      </Mailto>
    </div>
  );
};

export default Navbar;
