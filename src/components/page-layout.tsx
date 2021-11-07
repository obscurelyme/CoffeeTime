import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "gatsby";

import { container, navigation } from "./core.module.css";

type PageLayoutProps = React.PropsWithChildren<{ title: string }>;

export default function PageLayout({
  title,
  children,
}: PageLayoutProps): React.ReactElement {
  return (
    <>
      <Header title={title} />
      <div className={container}>
        <nav className={navigation}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a
                href="https://github.com/obscurelyme/CoffeeMaker"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
        <section
          style={{
            margin: "0px 8px",
          }}
        >
          {children}
        </section>
        <Footer />
      </div>
    </>
  );
}
