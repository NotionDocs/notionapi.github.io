import { useTheme } from "store/theme";
import useWindowSize from "util/hooks/useWindowSize";
import { useState } from "preact/hooks";
import Background from "components/organisms/Background";
import Container from "components/molecules/Container";
import Typed from "react-typed";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Divider from "components/organisms/Divider";
import React from "react";

const Hero = () => {
  const theme = useTheme();
  const { width } = useWindowSize();

  const [email, setEmail] = useState("");

  return (
    <div className={"intro"}>
      <Background left right />

      <div className={"hero"}>
        <Container className={"relative"}>
          <h1>
            The{" "}
            <span>
              {width > parseInt(theme.breakpoints.md.slice(0, -2)) ? (
                <Typed
                  strings={["API", "CMS", "editor", "database"]}
                  typeSpeed={60}
                  backDelay={2000}
                  backSpeed={80}
                  loop
                />
              ) : (
                "CMS & API"
              )}
            </span>{" "}
            you've been <br className={"md:block hidden"} />
            looking for
          </h1>
          <p className={"desc"}>
            Introducing the{" "}
            <b>
              unofficial GraphQL API wrapper for{" "}
              <a href={"//notion.so/product"}>Notion</a>
            </b>
            . Works great for anything; blogs, databases, collections, and more.
          </p>
          <div className={"cta"}>
            <Button primary>View on Github</Button>
            <Button>Developer Blog</Button>
          </div>
        </Container>
      </div>

      <Divider />

      <style jsx>{`
        .intro {
          background: ${theme.colors.bg1};
          display: flex;
          overflow: hidden;
          position: relative;
        }

        .hero {
          display: inline-block;
          margin: auto;
          max-width: 55rem;
          overflow: hidden;
          padding-bottom: ${theme.spacings["24"]};
          padding-top: ${theme.spacings["48"]};
          position: relative;
          text-align: center;

          @media screen and (max-width: ${theme.breakpoints.md}) {
            padding-bottom: ${theme.spacings["20"]};
            padding-top: ${theme.spacings["40"]};
            text-align: left;
          }
        }

        h1 {
          font-size: ${theme.fontSizes["5xl"]};
          font-weight: ${theme.fontWeights.bold};
          line-height: 1.2;

          span {
            color: ${theme.colors.primary};
          }

          @media screen and (max-width: ${theme.breakpoints.sm}) {
            font-size: ${theme.fontSizes["4xl"]};
          }
        }

        .desc {
          color: ${theme.colors.secondaryTextColor};
          font-size: ${theme.fontSizes["xl"]};
          font-weight: ${theme.fontWeights.light};
          line-height: 1.4;
          margin-top: ${theme.spacings["8"]};

          b {
            font-weight: ${theme.fontWeights.medium};
          }

          a {
            text-decoration: underline;
          }

          @media screen and (max-width: ${theme.breakpoints.md}) {
            font-size: ${theme.fontSizes["lg"]};
          }
        }

        .cta {
          display: inline-block;
          margin-top: ${theme.spacings["8"]};
          text-align: center;

          p {
            font-size: ${theme.fontSizes["lg"]};
            font-weight: ${theme.fontWeights.medium};
            margin-bottom: ${theme.spacings["4"]};
          }

          :global(button:first-of-type) {
            margin-bottom: ${theme.spacings["4"]};

            @media screen and (min-width: ${theme.breakpoints.sm}) {
              margin-bottom: 0;
              margin-right: ${theme.spacings["4"]};
            }
          }

          :global(button) {
            @media screen and (max-width: ${theme.breakpoints.sm}) {
              width: 100%;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
