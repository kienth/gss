import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import {
  Avatar,
  Box,
  Collapse,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  KeyboardArrowDownTwoTone,
  KeyboardArrowRightTwoTone,
  Logout,
  SettingsTwoTone,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import { urls } from "../utils";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const papersRefs: any = useRef([]);

  const [hoveredPaper, setHoveredPaper] = useState<null | string>(null);
  const [clickedPaper, setClickedPaper] = useState<null | number>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Paper
        elevation={0}
        sx={{ width: 1, borderRadius: 7, p: 3, height: "100vh" }}
      >
        <Stack spacing={2} justifyContent="space-between" height={1}>
          <Typography
            variant="h5"
            fontWeight={800}
            textAlign="center"
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer" }}
          >
            General Service System
          </Typography>
          <Box px={1} py={5}>
            <Stack direction="column" spacing={0.5} px={2} width={1}>
              {urls.map((item, index) => {
                const subPath = item.sublevel.map((item) => {
                  return item.path;
                });

                return (
                  <Box key={index}>
                    <Paper
                      ref={(el) => (papersRefs.current[index] = el)}
                      elevation={
                        hoveredPaper === String(index) ||
                        location.pathname === item.path
                          ? 12
                          : 0
                      }
                      onMouseEnter={() => setHoveredPaper(String(index))}
                      onMouseLeave={() => setHoveredPaper(null)}
                      sx={{
                        p: 2,
                        bgcolor: "inherit",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        item.sublevel.length > 0
                          ? clickedPaper === index
                            ? setClickedPaper(null)
                            : setClickedPaper(index)
                          : navigate(item.path);
                      }}
                    >
                      <Stack direction="column">
                        <Stack direction="row" justifyContent="space-between">
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1.5}
                          >
                            {subPath.includes(location.pathname) ||
                            clickedPaper === index ? (
                              <KeyboardArrowDownTwoTone
                                fontSize="small"
                                sx={{
                                  zIndex: item.sublevel.length > 0 ? 0 : -1,
                                }}
                              />
                            ) : (
                              <KeyboardArrowRightTwoTone
                                fontSize="small"
                                sx={{
                                  zIndex: item.sublevel.length > 0 ? 0 : -1,
                                }}
                              />
                            )}

                            <Typography variant="body1">
                              {item.label}
                            </Typography>
                          </Stack>
                          <KeyboardArrowDownTwoTone
                            fontSize="small"
                            sx={{
                              color: grey[400],
                              pr: 3,
                            }}
                          />
                        </Stack>
                      </Stack>
                    </Paper>
                    {clickedPaper === index ||
                    subPath.includes(location.pathname) ? (
                      <Stack direction="column" spacing={0.5} px={2} width={1}>
                        <TransitionGroup>
                          {item.sublevel.map((subItem, subIndex) => {
                            return (
                              <Collapse key={`${index}-${subIndex}`}>
                                <Paper
                                  ref={(el) =>
                                    (papersRefs.current[
                                      `${index}-${subIndex}`
                                    ] = el)
                                  }
                                  elevation={
                                    hoveredPaper === `${index}-${subIndex}` ||
                                    location.pathname === subItem.path
                                      ? 12
                                      : 0
                                  }
                                  onMouseEnter={() =>
                                    setHoveredPaper(`${index}-${subIndex}`)
                                  }
                                  onMouseLeave={() => setHoveredPaper(null)}
                                  sx={{
                                    p: 2,
                                    bgcolor: "inherit",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    navigate(subItem.path);
                                  }}
                                >
                                  <Stack direction="column">
                                    <Stack
                                      direction="row"
                                      justifyContent="space-between"
                                    >
                                      <Stack
                                        direction="row"
                                        alignItems="center"
                                        spacing={1.5}
                                      >
                                        <KeyboardArrowRightTwoTone
                                          fontSize="small"
                                          sx={{
                                            zIndex: -1,
                                          }}
                                        />

                                        <Typography variant="body1">
                                          {subItem.label}
                                        </Typography>
                                      </Stack>

                                      <KeyboardArrowDownTwoTone
                                        fontSize="small"
                                        sx={{
                                          color: grey[400],
                                          pr: 3,
                                        }}
                                      />
                                    </Stack>
                                  </Stack>
                                </Paper>
                              </Collapse>
                            );
                          })}
                        </TransitionGroup>
                      </Stack>
                    ) : null}
                  </Box>
                );
              })}
            </Stack>
          </Box>
          <Paper elevation={0} sx={{ bgcolor: "inherit", width: 1, p: 1 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              width={1}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://preview.keenthemes.com/metronic8/demo3/assets/media/avatars/300-1.jpg"
                />
                <Stack direction="column" alignItems="start">
                  <Typography variant="body1">DSWD</Typography>
                  <Typography variant="caption">John Doe</Typography>
                </Stack>
              </Stack>

              <IconButton onClick={handleClick} size="small">
                <SettingsTwoTone color="inherit" />
              </IconButton>
            </Stack>
          </Paper>
        </Stack>
      </Paper>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem
          onClick={() => {
            //  Cookies.remove("token");
            window.location.replace("/");
          }}
        >
          <ListItem>
            <Logout fontSize="small" />
          </ListItem>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Sidebar;
