import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{ textAlign: "center", padding: "1rem", background: "#f8f9fa" }}
    >
      <p>
        &copy; {new Date().getFullYear()} Clothing Rental Portal. All rights
        reserved.
      </p>
      <p>
        Contact us:{" "}
        <a href="mailto:support@clothingrental.com">
          support@clothingrental.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
