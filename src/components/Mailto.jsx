import React from 'react';

const Mailto = ({ email, subject, body, props }) => {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}`}>
      {props.children}
    </a>
  );
};

export default Mailto;
