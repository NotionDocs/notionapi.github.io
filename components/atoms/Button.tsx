import React from "react";
import { useTheme } from "store/theme";
import tinycolor from "tinycolor2";

const Button: React.FC<{ primary?: boolean }> = ({ children, primary }) => {
  const theme = useTheme();

  return (
    <button>
      {children}
      <style jsx>{`
        button {
          background: ${primary
            ? theme.extendedPalette.red["500"]
            : theme.extendedPalette.red["100"]};
          border: ${"1px solid " + theme.extendedPalette.red["600"]};
          border-radius: 0.375rem;
          box-shadow: ${theme.shadow};
          color: ${primary ? "#f9fafb" : theme.colors.primary};
          font-size: ${theme.fontSizes.lg};
          padding: ${theme.spacings["3"] + " " + theme.spacings["4"]};
          position: relative;
          text-shadow: ${primary &&
          "0 -1px 0 " + theme.extendedPalette.red["600"]};
          transition: all 300ms;

          :active {
            background: ${primary
              ? theme.extendedPalette.red["600"]
              : theme.extendedPalette.red["200"]};
            border-color: ${theme.extendedPalette.red["600"]};
            color: ${primary ? "#f9fafb" : theme.extendedPalette.red["600"]};
            box-shadow: none;
          }

          :before {
            border-radius: 0.375rem;
            content: "";
            height: 100%;
            left: 0;
            opacity: 0.2;
            position: absolute;
            top: 0;
            width: 100%;
          }

          :focus:not(:active):before {
            animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1),
              waveEffect 0.75s cubic-bezier(0.08, 0.82, 0.17, 1);
          }
        }

        @keyframes waveEffect {
          100% {
            box-shadow: ${"0 0 0 10px " + theme.colors.primary};
          }
        }
        @keyframes fadeEffect {
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
};

export default Button;
