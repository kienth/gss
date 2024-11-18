import { Divider, Grid2, Stack, TextField, Typography } from "@mui/material";

const Template = () => {
  return (
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
      <Typography variant="subtitle1" textAlign="center">
        REQUEST FOR JANITORIAL SERVICES
      </Typography>
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
            <TextField variant="standard" sx={{ width: { md: 300, xs: 1 } }} />
          </Stack>
        </Grid2>
        <Grid2 size={4}>
          <Typography variant="body2">Purpose</Typography>
        </Grid2>
        <Grid2 size={8}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2">:</Typography>
            <TextField variant="standard" sx={{ width: { md: 300, xs: 1 } }} />
          </Stack>
        </Grid2>
        <Grid2 size={4}>
          <Typography variant="body2">No. of Janitors / Janitress</Typography>
        </Grid2>
        <Grid2 size={8}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2">:</Typography>
            <TextField variant="standard" sx={{ width: { md: 300, xs: 1 } }} />
          </Stack>
        </Grid2>
        <Grid2 size={12}>
          <Typography variant="body2">Required</Typography>
        </Grid2>
        <Grid2 size={4}>
          <Typography variant="body2">Date and Time Needed</Typography>
        </Grid2>
        <Grid2 size={8}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2">:</Typography>
            <TextField variant="standard" sx={{ width: { md: 300, xs: 1 } }} />
          </Stack>
        </Grid2>
        <Grid2 size={4}>
          <Typography variant="body2">Place of Assignment</Typography>
        </Grid2>
        <Grid2 size={8}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2">:</Typography>
            <TextField variant="standard" sx={{ width: { md: 300, xs: 1 } }} />
          </Stack>
        </Grid2>
        <Grid2 size={4}>
          <Typography variant="body2">
            Fund to charge payment for Overtime (if any)
          </Typography>
        </Grid2>
        <Grid2 size={8}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2">:</Typography>
            <TextField variant="standard" fullWidth />
          </Stack>
        </Grid2>
      </Grid2>
      <br />
      <br />
      <br />
      <Grid2 container spacing={10}>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <Typography variant="body1">Requested by:</Typography>
          <TextField variant="standard" fullWidth />
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <Typography variant="body1">Approved by:</Typography>
          <br />
          <Typography variant="body2">BELLENE LARENA-AHMAD</Typography>
          <Typography variant="body2">
            Director, Administrative Service/
          </Typography>
          <Typography variant="body2">Administrative Division Chief</Typography>
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <Typography variant="body1">Noted by:</Typography>
          <TextField variant="standard" fullWidth />
          <Typography variant="body2">
            Supervisor, Philcare Manpower Services
          </Typography>
        </Grid2>
      </Grid2>
      <br />
      <br />
      <Divider
        sx={{
          borderStyle: "dashed",
          borderColor: "inherit",
        }}
      />
      <br />
      <br />
      <Typography variant="subtitle1" textAlign="center">
        Certificate of Service Rendered
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="body2">
          This is to certify that the following janitor/janitress has/have
          rendered services on
        </Typography>
        <TextField variant="standard" sx={{ width: 300 }} />
        <Typography variant="body2">.</Typography>
      </Stack>
      <Typography variant="body2">1.</Typography>
      <Typography variant="body2">2.</Typography>
      <br />
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="body2">
          This certification is issued upon request of
        </Typography>
        <TextField variant="standard" sx={{ width: 300 }} />
        <Typography variant="body2">
          for payment and monitoring purposes.
        </Typography>
      </Stack>
      <br />
      <br />
      <br />
      <Stack direction="row" justifyContent="end">
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <TextField variant="standard" sx={{ width: 300 }} />
          <Typography variant="body2">Head of Requesting Office </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Template;
