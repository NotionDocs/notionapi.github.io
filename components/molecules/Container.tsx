import { useTheme } from "store/theme";
import clsx from "clsx";

const Container: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <div className={clsx("container", className)}>
      {children}
      <style jsx>{`
        .container {
          margin: auto;
          padding: ${"0 " + theme.spacings["8"]};
        }
      `}</style>
    </div>
  );
};

export default Container;
