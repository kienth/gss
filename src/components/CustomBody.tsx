import { ReactNode } from "react";
import {
  Badge,
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import CustomSkeleton from "./Skeleton";
import { ArrowBackIosNew, Notifications, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { MakeStyle } from "../utils";

interface ICustomBody {
  children: ReactNode;
  isLoading: boolean;
  header: string;
  breadcrumbs?: { label: string; url: string }[];
}

const CustomBody = (props: ICustomBody) => {
  const navigate = useNavigate();
  const classes = MakeStyle();

  return (
    <Stack spacing={2}>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        justifyContent="space-between"
        alignItems={{ sm: "center", xs: "start" }}
        spacing={2}
      >
        <Stack spacing={props.isLoading ? 2 : 0}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              sx={{ display: { md: "none", xs: "flex" } }}
              onClick={() =>
                navigate(
                  props.breadcrumbs
                    ? props.breadcrumbs[props.breadcrumbs.length - 1].url
                    : ""
                )
              }
            >
              <ArrowBackIosNew color="primary" />
            </IconButton>
            {props.isLoading ? (
              <CustomSkeleton width={300} height={30} />
            ) : (
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Typography
                  variant="subtitle1"
                  className={classes.oneLinesEllipsis}
                >
                  {props.header}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  divider={<Typography variant="caption">•</Typography>}
                  display={{ lg: "flex", xs: "none" }}
                >
                  {props.breadcrumbs?.map((item) => {
                    return (
                      <Typography
                        variant="caption"
                        sx={{
                          cursor: "pointer",
                        }}
                        onClick={() => navigate(item.url)}
                      >
                        {item.label}
                      </Typography>
                    );
                  })}
                </Stack>
              </Stack>
            )}
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="end"
          alignItems="center"
        >
          <Box display={{ md: "block", xs: "none" }}>
            {props.isLoading ? (
              <CustomSkeleton width={250} height={40} />
            ) : (
              <Paper
                elevation={0}
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="General Search"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton type="button">
                  <Search />
                </IconButton>
              </Paper>
            )}
          </Box>
          {props.isLoading ? (
            <CustomSkeleton width={40} height={40} />
          ) : (
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="primary">
                <Notifications />
              </Badge>
            </IconButton>
          )}
        </Stack>
      </Stack>
      <br />
      <br />
      {props.children}
    </Stack>
  );
};

export default CustomBody;
