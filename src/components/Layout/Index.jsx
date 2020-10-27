import React from "react";
import "./Layout.css";

export const Layout = ({ children }) => {
  return (
    <main>
      <section className="inner-container">{children}</section>
    </main>
  );
};
