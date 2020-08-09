import { useTheme } from "store/theme";
import useWindowScroll from "util/hooks/useWindowScroll";
import clsx from "clsx";

const NavbarLarge = () => {
  const theme = useTheme();
  const { y: scroll } = useWindowScroll();

  return (
    <nav className={"fixed"}>
      <div className={"wrapper container"}>
        <div className={"inner"}>
          <div className={"title"}>
            <p>
              Notion
              <span>API</span>
            </p>
          </div>
          <div className="links">
            <a>Features</a>
            <a>Capabilities</a>
            <a>Pricing</a>
            <a>
              More{" "}
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        nav {
          background: ${scroll > 0 ? theme.colors.bg2 : "transparent"};
          box-shadow: ${scroll > 0 ? theme.shadow : "none"};
          display: flex;
          top: 0;
          transition: all 300ms;
          width: 100%;
          z-index: 99;
        }

        .wrapper {
          display: flex;
          justify-content: center;
          margin: auto;
          padding: ${theme.spacings["8"]};
          width: 100%;
        }

        .inner {
          display: flex;
          height: ${theme.spacings["4"]};
          justify-content: center;
          position: relative;
          width: 100%;
        }

        .title {
          align-items: center;
          display: flex;
          font-size: ${theme.fontSizes["2xl"]};
          font-weight: ${theme.fontWeights.bold};
          height: ${theme.spacings["4"]};
          left: 0;
          position: absolute;

          span {
            color: ${theme.colors.primary};
          }
        }

        .links {
          color: ${theme.colors.tertiaryTextColor};
          display: flex;
          font-size: ${theme.fontSizes.base};

          a {
            display: flex;
            margin: ${"0 " + theme.spacings["4"]};

            svg {
              height: ${theme.fontSizes.lg};
            }
          }
        }
      `}</style>
    </nav>
  );
};

export default NavbarLarge;
