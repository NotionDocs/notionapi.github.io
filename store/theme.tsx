import { light, dark, extendedPalette } from "util/theme/colors";
import { transition, breakpoints, shadow } from "util/theme/constants";
import { dimensions } from "util/theme/dimensions";
import { spacings } from "util/theme/spacings";
import { fontFamilies, fontSizes, fontWeights } from "util/theme/typography";
import { AnimatePresence, motion } from "framer-motion";
import {
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const baseTheme = {
  extendedPalette,
  transition,
  breakpoints,
  shadow,
  dimensions,
  spacings,
  fontFamilies,
  fontWeights,
  fontSizes,
};

const ThemeContext = createContext({
  ...baseTheme,
  colors: light,
});
export const useTheme = () => useContext(ThemeContext);

const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => setThemeState(media.matches);
    if (typeof media.addEventListener !== "undefined") {
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    } else if (typeof media.addListener !== "undefined") {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  });

  return [themeState, setThemeState];
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark] = useDarkMode();

  const theme = isDark ? dark : light;

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={isDark + "" + new Date().getMilliseconds()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ThemeContext.Provider
          value={{
            ...baseTheme,
            colors: theme,
          }}
        >
          {children}
        </ThemeContext.Provider>
      </motion.div>
    </AnimatePresence>
  );
};
