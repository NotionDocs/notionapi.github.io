import React from "react";
import { useTheme } from "store/theme";
import tinycolor from "tinycolor2";

const Input: React.FC<{
  value: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, placeholder, onChange }) => {
  const theme = useTheme();

  return (
    <input value={value} placeholder={placeholder} onChange={onChange}>
      <style jsx>{`
        input {
          background: white;
          border: ${"1px solid " + theme.colors.border};
          border-radius: 0.375rem;
          box-shadow: ${theme.shadow};
          color: ${theme.colors.textColor};
          font-size: ${theme.fontSizes.lg};
          padding: ${theme.spacings["3"] + " " + theme.spacings["4"]};
          position: relative;
          transition: all 300ms;

          :active {
            box-shadow: none;
          }
        }
      `}</style>
    </input>
  );
};

export default Input;
