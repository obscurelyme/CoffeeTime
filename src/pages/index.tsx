import React from "react";
import { graphql, Link } from "gatsby";
import PageLayout from "../components/page-layout";
import {
  blogPostThumbnail,
  blogPostThumbnailTitle,
  blogPostThumbnailLink,
} from "../components/core.module.css";

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
        }
        slug
      }
    }
  }
`;

interface MDXPost {
  frontmatter: {
    title: string;
    date: string;
    description: string;
  };
  slug: string;
}

interface Props {
  data: {
    allMdx: {
      nodes: MDXPost[];
    };
  };
}

export default function HomePage({ data }: Props): React.ReactElement {
  return (
    <>
      <PageLayout title="Home">
        <h1>☕ Coffee Time ☕</h1>
        <div>
          <ul
            style={{
              margin: "0",
              padding: "0",
            }}
          >
            {data.allMdx.nodes.map((mdxPost) => (
              <li className={blogPostThumbnail} key={mdxPost.slug}>
                <Link className={blogPostThumbnailLink} to={`/${mdxPost.slug}`}>
                  <h2 className={blogPostThumbnailTitle}>
                    {mdxPost.frontmatter.title}
                  </h2>
                </Link>
                <hr />
                <p>Published: {mdxPost.frontmatter.date}</p>
                <p>{mdxPost.frontmatter.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </PageLayout>
    </>
  );
}
