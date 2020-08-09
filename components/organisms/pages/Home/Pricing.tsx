import { useTheme } from "store/theme";
import Container from "components/molecules/Container";
import React from "react";
import Button from "../../../atoms/Button";

const PricingIcon: React.FC<{ type?: "pro" | "con" }> = ({ type }) => {
  const theme = useTheme();

  switch (type) {
    case "pro":
      return (
        <svg fill={theme.extendedPalette.green["600"]} viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "con":
      return (
        <svg fill={theme.extendedPalette.red["600"]} viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return (
        <svg fill={theme.extendedPalette.blue["600"]} viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
      );
  }
};

const Pricing = () => {
  const theme = useTheme();

  return (
    <div id={"pricing"}>
      <div className="top">
        <Container>
          <div className={"max-w-2xl mx-auto"}>
            <p className={"subtitle"}>PRICING</p>
            <h2>Pay for what you need</h2>
            <p className={"desc"}>
              Depending on what you need for your project, pricing can differ.
              However, this project is completely open source and self-hosted,
              so you decide how much you need to pay.
            </p>
          </div>
        </Container>
      </div>
      <div className="content">
        <div className="option">
          <div className={"max-w-5xl mx-auto"}>
            <div className="box">
              <div className="details">
                <h3>NotionAPI Core</h3>
                <h4>The main libraries and packages provided by NotionAPI.</h4>
                <div className="separation">
                  <p>WHAT'S INCLUDED</p>
                  <hr />
                </div>
                <ul className="included">
                  <li>
                    <PricingIcon />
                    <p>Basic NotionAPI Core libraries</p>
                  </li>
                  <li>
                    <PricingIcon type={"pro"} />
                    <p>Access to development Slack</p>
                  </li>
                  <li>
                    <PricingIcon type={"con"} />
                    <p>Does not support no-code platforms</p>
                  </li>
                </ul>
              </div>
              <div className="price">
                <h5>$0</h5>
                <p className={"phrase"}>Free forever</p>
                <Button>View on Github</Button>
                <p className={"contact"}>or get in touch</p>
              </div>
            </div>
          </div>
        </div>
        <div className="option">
          <div className={"max-w-5xl mx-auto"}>
            <div className="box">
              <div className="details">
                <h3>NotionAPI Server</h3>
                <h4>
                  NotionAPI is completely free to use. However, most platforms
                  charge you for hosting.
                </h4>
                <div className="separation">
                  <p>WHAT'S INCLUDED</p>
                  <hr />
                </div>
                <ul className="included">
                  <li>
                    <PricingIcon />
                    <p>Everything provided by NotionAPI Core</p>
                  </li>
                  <li>
                    <PricingIcon type={"pro"} />
                    <p>GraphQL querying</p>
                  </li>
                  <li>
                    <PricingIcon type={"pro"} />
                    <p>Supports no-code platforms</p>
                  </li>
                  <li>
                    <PricingIcon type={"pro"} />
                    <p>
                      Can be used with programming languages not currently
                      supported by NotionAPI Core
                    </p>
                  </li>
                </ul>
              </div>
              <div className="price">
                <h5>$$</h5>
                <p className={"phrase"}>Differs per platform</p>
                <Button>More Information</Button>
                <p className={"contact"}>or get in touch</p>
              </div>
            </div>
          </div>
        </div>
        <div className="option">
          <div className={"max-w-5xl mx-auto"}>
            <div className="box">
              <div className="details">
                <h3>Enterprise Support</h3>
                <h4>
                  We offer enterprise support for businesses who are looking for
                  help getting off the ground with NotionAPI.
                </h4>
                <div className="separation">
                  <p>WHAT'S INCLUDED</p>
                  <hr />
                </div>
                <ul className="included">
                  <li>
                    <PricingIcon type={"pro"} />
                    <p>Great support</p>
                  </li>
                  <li>
                    <PricingIcon type={"pro"} />
                    <p>Flat-rate subscription</p>
                  </li>
                </ul>
              </div>
              <div className="price">
                <h5>
                  $45<span>USD</span>
                </h5>
                <p className={"phrase"}>monthly</p>
                <Button>Contact us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #pricing {
          background: ${theme.colors.bg2};
          overflow: visible;
          padding-bottom: ${theme.spacings["6"]};
          position: relative;

          @media screen and (min-width: ${theme.breakpoints.md}) {
            text-align: center;
          }

          > .top {
            background: ${theme.colors.bg1};
            padding-bottom: ${theme.spacings["8"]};
            padding-top: ${theme.spacings["16"]};
            * {
              position: relative;
              z-index: 9;
            }
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

        .content {
          background: ${theme.colors.bg2};
          width: 100%;

          .option {
            margin: ${theme.spacings["8"] + " 0"};
            position: relative;
            width: 100%;

            &:first-of-type:before {
              background: ${theme.colors.bg1};
              content: "";
              height: 50%;
              left: 0;
              margin-top: ${"-" + theme.spacings["8"]};
              position: absolute;
              top: 0;
              width: 100%;
              z-index: 0;
            }

            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }

        .content .option .box {
          background: ${theme.colors.bg2};
          border: ${"1px solid " + theme.colors.bg1};
          border-radius: 0.375rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          display: flex;
          overflow: hidden;
          position: relative;
          width: 100%;
          z-index: 9;

          @media screen and (max-width: ${theme.breakpoints.md}) {
            border: none;
            box-shadow: none;
            flex-direction: column;
          }

          .details {
            flex: 1;
            line-height: 1.5;
            text-align: left;
            padding: ${theme.spacings["12"]};

            h3 {
              font-size: ${theme.fontSizes["2xl"]};
              font-weight: ${theme.fontWeights.bold};
            }

            h4 {
              color: ${theme.colors.tertiaryTextColor};
              font-size: ${theme.fontSizes.lg};
              margin-top: ${theme.spacings["4"]};
            }

            .separation {
              align-items: center;
              display: flex;
              margin: ${theme.spacings["6"] + " 0"};

              p {
                color: ${theme.colors.accent};
                font-weight: ${theme.fontWeights.semibold};
                letter-spacing: 0.05em;
                padding-right: ${theme.spacings["4"]};
                white-space: nowrap;
              }

              hr {
                border-bottom: ${"2px solid " + theme.colors.border};
                width: 100%;
              }
            }
          }

          ul.included {
            column-gap: ${theme.spacings["4"]};
            display: grid;
            grid-template-columns: 1fr 1fr;
            row-gap: ${theme.spacings["6"]};

            @media screen and (max-width: ${theme.breakpoints.md}) {
              grid-template-columns: 1fr;
            }

            li {
              align-items: flex-start;
              display: flex;

              :global(svg) {
                border-radius: 50%;
                margin-right: ${theme.spacings["4"]};
                width: ${theme.fontSizes["2xl"]};
              }

              p {
                color: ${theme.colors.secondaryTextColor};
                flex: 1;
              }
            }
          }

          .price {
            background: ${theme.colors.bg1};
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: ${theme.spacings["12"]};
            text-align: center;
            width: 20rem;

            @media screen and (max-width: ${theme.breakpoints.md}) {
              width: 100%;
            }

            .phrase {
              font-size: ${theme.fontSizes.xl};
              font-weight: ${theme.fontWeights.semibold};
              margin-bottom: ${theme.spacings["6"]};
            }

            h5 {
              align-items: center;
              display: inline-flex;
              font-size: ${theme.fontSizes["6xl"]};
              font-weight: ${theme.fontWeights.extrabold};
              justify-content: center;
              margin-bottom: ${theme.spacings["6"]};

              span {
                color: ${theme.colors.tertiaryTextColor};
                font-size: ${theme.fontSizes["2xl"]};
                font-weight: ${theme.fontWeights.medium};
                margin-left: ${theme.spacings["4"]};
              }
            }

            .contact {
              color: ${theme.colors.secondaryTextColor};
              font-weight: ${theme.fontWeights.semibold};
              margin-top: ${theme.spacings["6"]};
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Pricing;
