import React from "react";
import { footer } from "./core.module.css";

export default function Footer(): React.ReactElement {
  const year = new Date(Date.now()).getFullYear();

  return (
    <footer className={footer}>
      <h6>&copy; {year}, ObscurelyMe</h6>
    </footer>
  );
}
