import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import CustomLoading from "./CustomLoading";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import CustomSkeleton from "./Skeleton";

interface ICustomTable {
  pagination?: {
    total: number;
    filter: {
      sort: string[];
      activePage: number;
      pagination: number;
    };
    setFilter: React.Dispatch<
      React.SetStateAction<{
        search: string;
        sort: string[];
        activePage: number;
        pagination: number;
      }>
    >;
  };
  isLoading?: boolean;
  isError?: boolean;
  row: any[];
  column: any[];
}

const CustomTable = (props: ICustomTable) => {
  return (
    <Box>
      {props.isLoading ? (
        <CustomSkeleton height="70vh" />
      ) : (
        <>
          <TableContainer component={Paper} elevation={0}>
            <Table sx={{ width: 1 }}>
              <TableHead>
                <TableRow>
                  {props.column.map((item, index) => (
                    <TableCell
                      key={index}
                      align={item.align || "left"}
                      sx={{
                        cursor: props.pagination && item.value ? "pointer" : "",
                      }}
                      onClick={() => {
                        if (props.pagination && item.value) {
                          props.pagination?.setFilter((prev) => ({
                            ...prev,
                            sort: [
                              item.value,
                              props.pagination?.filter.sort[0] === item.value
                                ? props.pagination?.filter.sort[1] === "ASC"
                                  ? "DESC"
                                  : "ASC"
                                : "DESC",
                            ],
                          }));
                        }
                      }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={
                          item.align === "left"
                            ? "start"
                            : item.align === "center"
                            ? "center"
                            : item.align === "right"
                            ? "end"
                            : "start"
                        }
                        spacing={0.5}
                      >
                        <Typography variant="body1" fontWeight={600} noWrap>
                          {item.label}
                        </Typography>
                        {props.pagination &&
                        item.value === props.pagination?.filter.sort[0] ? (
                          props.pagination?.filter.sort[1] === "ASC" ? (
                            <ArrowDropDown sx={{ color: "#FFF" }} />
                          ) : (
                            <ArrowDropUp sx={{ color: "#FFF" }} />
                          )
                        ) : null}
                      </Stack>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.isLoading || props.isError ? (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {props.isLoading ? (
                        <CustomLoading />
                      ) : (
                        "Please try again later..."
                      )}
                    </TableCell>
                  </TableRow>
                ) : props.row.length > 0 ? (
                  props.row.map((column, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                        },
                      }}
                    >
                      {column.map((row: any, index: number) => (
                        <TableCell
                          key={index}
                          component="th"
                          scope="row"
                          align={props.column[index].align || "left"}
                        >
                          {typeof row === "string" ? (
                            <Typography variant="body2" noWrap>
                              {row}
                            </Typography>
                          ) : (
                            row
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      sx={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      No data available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack
            display={props.row.length > 0 && props.pagination ? "flex" : "none"}
            direction={{ md: "row", xs: "column-reverse" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            my={2}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Select
                size="small"
                value={props.pagination?.filter.pagination}
                onChange={(e: any) =>
                  props.pagination?.setFilter((prev) => ({
                    ...prev,
                    activePage: 1,
                    pagination: Number(e.target.value),
                  }))
                }
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
              </Select>
              <Typography variant="caption">
                Displaying{" "}
                {Number(props.pagination?.filter.activePage) *
                  Number(props.pagination?.filter.pagination) -
                  (Number(props.pagination?.filter.pagination) - 1)}{" "}
                -{" "}
                {Number(props.pagination?.filter.activePage) *
                  Number(props.pagination?.filter.pagination)}{" "}
                of {props.pagination?.total} records
              </Typography>
            </Stack>
            <Pagination
              color="primary"
              page={props.pagination?.filter.activePage}
              count={Math.ceil(
                Number(props.pagination?.total) /
                  Number(props.pagination?.filter.pagination)
              )}
              onChange={(_e, value) =>
                props.pagination?.setFilter((prev) => ({
                  ...prev,
                  activePage: value,
                }))
              }
            />
          </Stack>
        </>
      )}
    </Box>
  );
};

export default CustomTable;
