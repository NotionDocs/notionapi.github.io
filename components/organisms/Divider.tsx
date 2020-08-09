import { useTheme } from "store/theme";

const Divider = () => {
  const theme = useTheme();
  return (
    <svg
      width="100%"
      height="8vw"
      viewBox="0 0 100 100"
      version="1.1"
      preserveAspectRatio="none"
      style={{
        fill: theme.colors.bg2,
        width: "100%",
      }}
    >
      <path d="M0,0 C40,33 66,52 75,52 C83,52 92,33 100,0 L100,100 L0,100 L0,0 Z"></path>
      <style jsx>{`
        svg {
          background: ${theme.colors.bg1};
          bottom: 0;
          position: absolute;
          transform: translateY(50%);
        }
      `}</style>
    </svg>
  );
};

export default Divider;
