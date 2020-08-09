import { useTheme } from "store/theme";
import Container from "../molecules/Container";
import Button from "../atoms/Button";
import React from "react";

const Shoutout = () => {
  const theme = useTheme();

  return (
    <div id={"waitlist"}>
      <Container>
        <div className={"card"}>
          <div className={"tagline"}>
            <h2>Ready to get started?</h2>
            <h3>Find us on Github or visit our developer blog.</h3>
          </div>
          <div className="form">
            <Button primary>View on Github</Button>
            <Button>Developer Blog</Button>
          </div>
        </div>
      </Container>
      <style jsx>{`
        #waitlist {
          background: ${theme.colors.bg2};
          padding: ${theme.spacings["16"] + " 0"};
          .card {
            background: ${theme.colors.bg1};
            border-radius: 0.375rem;
            display: flex;
            padding: ${theme.spacings["12"]};

            @media screen and (max-width: ${theme.breakpoints.md}) {
              flex-direction: column;
            }
          }
        }

        .tagline {
          flex: 1;

          @media screen and (max-width: ${theme.breakpoints.md}) {
            margin-bottom: ${theme.spacings["8"]};
          }

          h2 {
            color: ${theme.colors.accent};
            font-size: ${theme.fontSizes["4xl"]};
            font-weight: ${theme.fontWeights.bold};
          }

          h3 {
            color: ${theme.colors.secondaryTextColor};
            font-size: ${theme.fontSizes["xl"]};
            font-weight: ${theme.fontWeights.medium};
            margin-top: ${theme.spacings["4"]};
            opacity: 0.8;
          }
        }

        .form {
          align-items: center;
          display: flex;
          justify-content: center;

          @media screen and (max-width: ${theme.breakpoints.md}) {
            flex-direction: column;
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

export default Shoutout;
