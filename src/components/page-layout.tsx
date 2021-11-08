import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "gatsby";

import {
  container,
  navigation,
  coffeeLink,
  page,
  blogLayout,
} from "./core.module.css";

type PageLayoutProps = React.PropsWithChildren<{ title: string }>;

export function BlogLayout({
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
              <Link className={coffeeLink} to="/">
                Home
              </Link>
            </li>
            <li>
              <a
                className={coffeeLink}
                href="https://github.com/obscurelyme/CoffeeMaker"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
        <section className={blogLayout}>{children}</section>
        <Footer />
      </div>
    </>
  );
}

export function PageLayout({
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
              <Link className={coffeeLink} to="/">
                Home
              </Link>
            </li>
            <li>
              <a
                className={coffeeLink}
                href="https://github.com/obscurelyme/CoffeeMaker"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
        <section className={page}>{children}</section>
        <Footer />
      </div>
    </>
  );
}
