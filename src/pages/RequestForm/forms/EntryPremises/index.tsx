import {
  Box,
  Button,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CustomBody from "../../../../components/CustomBody";
import CustomTable from "../../../../components/CustomTable";
import { Add } from "@mui/icons-material";

const EntryPremises = () => {
  return (
    <CustomBody
      isLoading={false}
      header="Entry To DSWD Premises"
      breadcrumbs={[{ label: "Request Form", url: "/request-form" }]}
    >
      <Stack spacing={2}>
        <Stack
          direction="row"
          justifyContent="end"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body1">CONTROL NUMBER: </Typography>
          <TextField variant="standard" />
        </Stack>
        <Stack>
          <Typography variant="subtitle1" textAlign="center">
            SERVICE PROVIDER'S REQUEST FOR ENTRY TO DSWD PREMISES
          </Typography>
          <Typography variant="body2" textAlign="center">
            Important Note: Request Entry should be made at least one (1) day
            before the date of actual entry.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="end"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2">Date: </Typography>
          <TextField variant="standard" />
        </Stack>
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Typography variant="body2">Requesting Office</Typography>
          </Grid2>
          <Grid2 size={8}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2">:</Typography>
              <TextField
                variant="standard"
                sx={{ width: { md: 300, xs: 1 } }}
              />
            </Stack>
          </Grid2>
          <Grid2 size={4}>
            <Typography variant="body2">
              Name of Service Provider / Contractor
            </Typography>
          </Grid2>
          <Grid2 size={8}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2">:</Typography>
              <TextField
                variant="standard"
                sx={{ width: { md: 300, xs: 1 } }}
              />
            </Stack>
          </Grid2>
          <Grid2 size={4}>
            <Typography variant="body2">Expected Date of Entry</Typography>
          </Grid2>
          <Grid2 size={8}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2">:</Typography>
              <TextField
                variant="standard"
                sx={{ width: { md: 300, xs: 1 } }}
              />
            </Stack>
          </Grid2>
          <Grid2 size={4}>
            <Typography variant="body2">Project Title</Typography>
          </Grid2>
          <Grid2 size={8}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2">:</Typography>
              <TextField
                variant="standard"
                sx={{ width: { md: 300, xs: 1 } }}
              />
            </Stack>
          </Grid2>
          <Grid2 size={4}>
            <Typography variant="body2">Project Duration</Typography>
          </Grid2>
          <Grid2 size={8}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2">:</Typography>
              <TextField
                variant="standard"
                sx={{ width: { md: 300, xs: 1 } }}
              />
            </Stack>
          </Grid2>
          <Grid2 size={4}>
            <Typography variant="body2">Working Hours</Typography>
          </Grid2>
          <Grid2 size={8}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2">:</Typography>
              <TextField
                variant="standard"
                sx={{ width: { md: 300, xs: 1 } }}
              />
            </Stack>
          </Grid2>
        </Grid2>
        <br />
        <br />
        <br />
        <Typography variant="body2">
          List of personnel requesting entry
        </Typography>
        <CustomTable
          row={[]}
          column={[
            { label: "Name of Personnel", align: "center" },
            { label: "Work to be Done", align: "center" },
          ]}
        />
        <Box>
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{ float: "right" }}
          >
            Add New
          </Button>
        </Box>
        <br />
        <br />
        <br />
        <Grid2 container spacing={10}>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <Typography variant="body1">Requested by:</Typography>
            <Stack>
              <TextField variant="standard" fullWidth />
              <Typography variant="body2">
                Head of the Requesting Office
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <Typography variant="body1">Approved by:</Typography>
            <Typography variant="subtitle2">BELLENE LARENA-AHMAD</Typography>
            <Typography variant="body2">
              Director, Administrative Service / Administrative Division Chief
            </Typography>
          </Grid2>
        </Grid2>
      </Stack>
    </CustomBody>
  );
};

export default EntryPremises;
