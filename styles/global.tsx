import { useTheme } from "../store/theme";
import React from "react";

export default () => {
  const theme = useTheme();
  return (
    <>
      <style jsx>{`
        :global(html, body, #__next) {
          background: ${theme.colors.bg1};
          color: ${theme.colors.textColor};
          font-family: ${theme.fontFamilies["sans-serif"]};
          height: 100%;
          margin: 0;
          width: 100%;
        }
        :global(*) {
          color: inherit;
          font-family: inherit;
        }
        :global(*:active, *:focus) {
          outline: none !important;
        }
      `}</style>
    </>
  );
};
