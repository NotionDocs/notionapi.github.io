import { useTheme } from "store/theme";
import Container from "components/molecules/Container";
import { Code, CreditCard, FileText, Globe } from "react-feather";
import React from "react";

const Features = () => {
  const theme = useTheme();

  return (
    <div id={"features"}>
      <Container>
        <div className={"max-w-2xl mx-auto"}>
          <p className={"subtitle"}>FEATURES</p>
          <h2>Functional API for the best content editing tool</h2>
          <p className={"desc"}>
            Notion is now the best way to run a blog, host a team wiki, write
            documentation, and much more.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <ul className={"list"}>
            <li>
              <div className={"block"}>
                <Code />
              </div>
              <div className="details">
                <h3>Great code support</h3>
                <p>
                  We provide libraries to help you implement NotionAPI into your
                  development ecosystem. We also hope to support no-code
                  platforms via NotionAPI Server.
                </p>
              </div>
            </li>
            <li>
              <div className={"block"}>
                <FileText />
              </div>
              <div className="details">
                <h3>Supports most block types</h3>
                <p>
                  Most block types, including columns, are supported by
                  NotionAPI, and we are constantly improving and adding support
                  for more blocks.
                </p>
              </div>
            </li>
            <li>
              <div className={"block"}>
                <CreditCard />
              </div>
              <div className="details">
                <h3>Affordable pricing</h3>
                <p>
                  Use NotionAPI Core <b>for free</b>. NotionAPI Server can be
                  hosted on your platform of choice. Also, please support us to
                  continue development!
                </p>
              </div>
            </li>
            <li>
              <div className={"block"}>
                <Globe />
              </div>
              <div className="details">
                <h3>Open-source</h3>
                <p>
                  Every package from NotionAPI is completely open source. This
                  means that we accept contributions from other developers, and
                  anyone can introspect how NotionAPI works.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
      <style jsx>{`
        #features {
          background: ${theme.colors.bg2};
          padding: ${theme.spacings["16"] + " 0"};
          position: relative;
          width: 100%;
          z-index: 4;

          @media screen and (min-width: ${theme.breakpoints.md}) {
            text-align: center;
          }
        }

        .subtitle {
          color: ${theme.colors.accent};
          font-weight: ${theme.fontWeights.semibold};
          letter-spacing: 0.05em;
        }

        h2 {
          font-size: ${theme.fontSizes["4xl"]};
          font-weight: ${theme.fontWeights.semibold};
          letter-spacing: 0.025em;
          margin: ${theme.spacings["3"] + " 0"};

          @media screen and (max-width: ${theme.breakpoints.sm}) {
            font-size: ${theme.fontSizes["3xl"]};
          }
        }

        .desc {
          color: ${theme.colors.tertiaryTextColor};
          font-size: ${theme.fontSizes.xl};
          line-height: 1.4;

          @media screen and (max-width: ${theme.breakpoints.sm}) {
            font-size: ${theme.fontSizes.lg};
          }
        }

        .list {
          display: grid;
          grid-column-gap: ${theme.spacings["8"]};
          grid-row-gap: ${theme.spacings["8"]};
          grid-template-columns: 1fr 1fr;
          margin-top: ${theme.spacings["10"]};

          @media screen and (max-width: ${theme.breakpoints.md}) {
            grid-template-columns: 1fr;
          }
        }

        li {
          display: flex;

          .block {
            background: ${theme.colors.primary};
            border-radius: 0.375rem;
            display: flex;
            height: ${theme.spacings["12"]};
            width: ${theme.spacings["12"]};
            :global(svg) {
              color: #f9fafb;
              height: ${theme.spacings["8"]};
              margin: auto;
              width: ${theme.spacings["8"]};
            }
          }

          .details {
            flex: 1;
            line-height: 1.5;
            margin-left: ${theme.spacings["5"]};
            text-align: left;

            h3 {
              color: ${theme.colors.textColor};
              font-size: ${theme.fontSizes.lg};
              font-weight: ${theme.fontWeights.medium};
              margin-bottom: ${theme.spacings["1"]};
            }

            p {
              color: ${theme.colors.secondaryTextColor};
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Features;
