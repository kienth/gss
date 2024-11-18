import { Grid2, Stack, TextField, Typography } from "@mui/material";

import CustomBody from "../../../../components/CustomBody";

const ConferenceRoom = () => {
  return (
    <CustomBody
      isLoading={false}
      header="DSWD Conference Room"
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
            REQUEST FOR USE OF DSWD CONFERENCE ROOM
          </Typography>
          <Typography variant="body2" textAlign="center">
            (Note: Request should be made at least two (3) days before the date
            of actual use)
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
            <Typography variant="body2">Name of Requesting Office</Typography>
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
            <Typography variant="body2">Purpose</Typography>
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
            <Typography variant="body2">Date and Time Needed</Typography>
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
            <Typography variant="body2">Number of Participants</Typography>
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
              Focal Person and Contact Number
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
        </Grid2>
        <br />
        <br />
        <br />
        <Grid2 container spacing={2}>
          <Grid2 size={{ md: 4, xs: 12 }}>
            <Typography variant="body2">Conference Room Requested:</Typography>
          </Grid2>
          <Grid2 size={{ md: 8, xs: 12 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={{ md: 6, xs: 12 }}>
                <Typography variant="body2">Name of Conference Room</Typography>
                <TextField variant="standard" fullWidth />
              </Grid2>
              <Grid2 size={{ md: 6, xs: 12 }}>
                <Typography variant="body2">Location</Typography>
                <TextField variant="standard" fullWidth />
              </Grid2>
              <Grid2 size={{ md: 6, xs: 12 }}>
                <Typography variant="body2">
                  Audio requirements, please specify:
                </Typography>
              </Grid2>
              <Grid2 size={{ md: 6, xs: 12 }}>
                <TextField variant="standard" fullWidth />
              </Grid2>
              <Grid2 size={{ md: 6, xs: 12 }}>
                <Typography variant="body2">Table Quantity:</Typography>
              </Grid2>
              <Grid2 size={{ md: 6, xs: 12 }}>
                <TextField variant="standard" fullWidth />
              </Grid2>
              <Grid2 size={{ md: 6, xs: 12 }}>
                <Typography variant="body2">Chair Quantity:</Typography>
              </Grid2>
              <Grid2 size={{ md: 6, xs: 12 }}>
                <TextField variant="standard" fullWidth />
              </Grid2>
              <Grid2 size={{ md: 6, xs: 12 }}>
                <Typography variant="body2">
                  Other requirements, please specify:
                </Typography>
              </Grid2>
              <Grid2 size={{ md: 6, xs: 12 }}>
                <TextField variant="standard" fullWidth />
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <br />
        <br />
        <br />
        <Stack>
          <Typography variant="body2">Set-Up / Arrangement</Typography>
          <TextField minRows={4} multiline />
        </Stack>
        <br />
        <br />
        <br />
        <Grid2 container spacing={10}>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <Typography variant="body1">Requested by:</Typography>
            <Stack>
              <TextField variant="standard" fullWidth />
              <Typography variant="body2" textAlign="center">
                Head of Office or Authorized Representative
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <Typography variant="body1">Approved by:</Typography>
            <TextField variant="standard" fullWidth />
            <Typography variant="body2" textAlign="center">
              Director, Administrative Service / Administrative Division Chief
            </Typography>
          </Grid2>
        </Grid2>
      </Stack>
    </CustomBody>
  );
};

export default ConferenceRoom;
