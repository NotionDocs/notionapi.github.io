import React from "react";
import { useTheme } from "store/theme";

const Background: React.FC<{ left?: boolean; right?: boolean }> = ({
  left,
  right,
}) => {
  const theme = useTheme();

  return (
    <div className="block absolute inset-y-0 h-full w-full">
      <div className="relative h-full max-w-screen-xl mx-auto">
        {left && (
          <svg
            className="absolute top-full right-full transform -translate-y-1/2 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  style={{
                    opacity: 0.2,
                    fill: theme.colors.primary,
                  }}
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
        )}
        {right && (
          <svg
            className="absolute bottom-full left-full transform translate-y-1/4 -translate-x-1/4 md:translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  style={{
                    opacity: 0.2,
                    fill: theme.colors.primary,
                  }}
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Background;
