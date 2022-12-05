import React from "react";

const Footer = () => {
  return (
    <footer className="container max-w-5xl h-16 mt-8">
      <hr />
      <p className="mt-4">
        Copyright &copy; {new Date().getFullYear()} <span>Dynamic Biz</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
