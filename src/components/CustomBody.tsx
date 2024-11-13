import { ReactNode } from "react";
import { Box, Stack } from "@mui/material";

import CustomSkeleton from "./Skeleton";

interface ICustomBody {
  children: ReactNode;
}

const CustomBody = (props: ICustomBody) => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <Stack spacing={2}>
          <CustomSkeleton width={300} height={30} />

          <CustomSkeleton width={200} height={20} />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Box display={{ lg: "block", xs: "none" }}>
            <CustomSkeleton width={250} height={40} />
          </Box>
          <Box display={{ lg: "none", xs: "block" }}>
            <CustomSkeleton width={40} height={40} />
          </Box>
          <CustomSkeleton width={40} height={40} />
        </Stack>
      </Stack>
      <br />
      <br />
      {props.children}
    </Stack>
  );
};

export default CustomBody;
