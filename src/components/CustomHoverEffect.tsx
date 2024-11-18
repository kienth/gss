import { ReactNode, useState } from "react";

import { Paper } from "@mui/material";

interface ICustomHoverEffect {
  children: ReactNode;
  disableHover?: boolean;
}

const CustomHoverEffect = (props: ICustomHoverEffect) => {
  const [elevation, setElevation] = useState(0);
  return (
    <Paper
      elevation={props.disableHover ? 0 : elevation}
      onMouseEnter={() => setElevation(12)}
      onMouseLeave={() => setElevation(0)}
      sx={{
        m: "auto",
        minWidth: 50,
        cursor: props.disableHover ? "" : "pointer",
      }}
    >
      {props.children}
    </Paper>
  );
};

export default CustomHoverEffect;
