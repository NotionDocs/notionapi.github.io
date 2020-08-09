import { useTheme } from "store/theme";
import { Command, Compass, Database, Filter } from "react-feather";
import { AkCodeBlock } from "@atlaskit/code";
import Container from "components/molecules/Container";
import { AtlaskitThemeProvider } from "@atlaskit/theme";

const queryExample = `query LatestPosts($limit: Int) {
  fetchCollection(
    collectionId: "audhfaiusdyfiuashfdj",
    collectionViewId: "nmbjhgyut65rerdfxcvbn",
    filters: [{
      property: "Status",
      operator: "enum_is",
      value: "Published"
    }],
    sort: {
      property: "Publish date",
      direction: "descending"
    },
    limit: $limit
  ) {
    schema
    pages {
      id
      title
      properties
      metadata {
        format {
          cover
        }
      }
    }
  }
}`;

const Capabilities = () => {
  const theme = useTheme();

  return (
    <div id={"capabilities"}>
      <Container>
        <div className={"max-w-2xl mx-auto"}>
          <p className={"subtitle"}>CAPABILITIES</p>
          <h2>Powerful querying that fits your requirements</h2>
          <p className={"desc"}>
            With NotionAPI Core and/or Server, you can use Notion as a complete
            backend solution to get exactly the content you need.
          </p>
        </div>
        <div className="content">
          <div className="left">
            <li>
              <div className={"block"}>
                <Compass />
              </div>
              <div className="details">
                <h3>Fetch exactly what you need</h3>
                <p>
                  Using the NotionAPI Server, you can harness the powers of
                  GraphQL querying. Retrieve everything, or only what you need.
                </p>
              </div>
            </li>
            <li>
              <div className={"block"}>
                <Command />
              </div>
              <div className="details">
                <h3>Different queries for different blocks</h3>
                <p>
                  Notion has a diverse set of different blocks, each with their
                  own schema. This is represented in the data returned by
                  NotionAPI Core and Server.
                </p>
              </div>
            </li>
            <li>
              <div className={"block"}>
                <Database />
              </div>
              <div className="details">
                <h3>Retrieve files from a collection</h3>
                <p>
                  Not only can you now use Notion for text and simple blocks,
                  but you can use it as a full backend file hosting platform.
                </p>
              </div>
            </li>
            <li>
              <div className={"block"}>
                <Filter />
              </div>
              <div className="details">
                <h3>Functional filtering and sorting</h3>
                <p>
                  NotionAPI allows for filtering and sorting that is available
                  within the Notion front-end so your data is ordered exactly
                  how you expect.
                </p>
              </div>
            </li>
          </div>
          <div className="right">
            <AtlaskitThemeProvider mode="dark">
              <AkCodeBlock
                language="graphql"
                text={queryExample}
                showLineNumbers={false}
              />
            </AtlaskitThemeProvider>
          </div>
        </div>
      </Container>
      <style jsx>{`
        #capabilities {
          background: ${theme.colors.bg1};
          padding: ${theme.spacings["16"] + " 0"};
          position: relative;

          > :global(.container) {
            position: relative;
            z-index: 9;
          }

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

        .content {
          display: flex;
          text-align: left;

          .left {
            display: flex;
            flex: 4;
            flex-direction: column;
            justify-content: center;
            margin-right: ${theme.spacings["4"]};
          }

          .right {
            display: flex;
            flex: 3;
            margin-left: ${theme.spacings["4"]};
            margin-top: ${theme.spacings["10"]};

            > :global(div) {
              background: #283447;
              border-radius: 0.375rem;
              box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              margin: auto;
              padding: ${theme.spacings["4"]};
              position: relative;

              @media screen and (max-width: ${theme.breakpoints.md}) {
                width: 100%;
              }
            }
          }

          @media screen and (max-width: ${theme.breakpoints.md}) {
            flex-direction: column;

            .left,
            .right {
              margin-left: 0;
              margin-right: 0;
            }
          }
        }

        li {
          display: flex;
          margin-top: ${theme.spacings["10"]};

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

export default Capabilities;
