import React from "react";
import { Helmet } from "react-helmet";
import "./core.module.css";

interface HeaderProps {
  title: string;
}

export default function Header({
  title = "",
}: HeaderProps): React.ReactElement {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>CoffeeTime | {title}</title>
    </Helmet>
  );
}
