import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CustomBody from "../../../../components/CustomBody";

const EmployeeVehicleEntryPass = () => {
  return (
    <CustomBody
      isLoading={false}
      header="Employee's Vehicle Entry Pass"
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
        <Typography variant="subtitle1" textAlign="center">
          APPLICATION FOR EMPLOYEE'S VEHICLE ENTRY PASS
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
        <Stack
          direction="row"
          justifyContent="end"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2">Contact No.: </Typography>
          <TextField variant="standard" />
        </Stack>
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Typography variant="body2">Name of Employee</Typography>
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
            <Typography variant="body2">Name of Office</Typography>
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
            <Typography variant="body2">Designation / Position</Typography>
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
        <Typography variant="body2">Vehicle Information</Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <Typography variant="body2">Make</Typography>
              </Grid2>
              <Grid2 size={8}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body2">:</Typography>
                  <TextField fullWidth variant="standard" />
                </Stack>
              </Grid2>
              <Grid2 size={4}>
                <Typography variant="body2">Model</Typography>
              </Grid2>
              <Grid2 size={8}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body2">:</Typography>
                  <TextField fullWidth variant="standard" />
                </Stack>
              </Grid2>
              <Grid2 size={4}>
                <Typography variant="body2">Color</Typography>
              </Grid2>
              <Grid2 size={8}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body2">:</Typography>
                  <TextField fullWidth variant="standard" />
                </Stack>
              </Grid2>
              <Grid2 size={4}>
                <Typography variant="body2">Plate No.</Typography>
              </Grid2>
              <Grid2 size={8}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body2">:</Typography>
                  <TextField fullWidth variant="standard" />
                </Stack>
              </Grid2>
              <Grid2 size={4}>
                <Typography variant="body2">OR / CR No.</Typography>
              </Grid2>
              <Grid2 size={8}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body2">:</Typography>
                  <TextField fullWidth variant="standard" />
                </Stack>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <Stack direction="row" justifyContent="center">
              <FormControl>
                <FormLabel>Status of Employment</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value=""
                    control={<Radio />}
                    label="Permanent"
                  />
                  <FormControlLabel
                    value=""
                    control={<Radio />}
                    label="Casual"
                  />
                  <FormControlLabel
                    value=""
                    control={<Radio />}
                    label="Contractual"
                  />
                  <FormControlLabel
                    value=""
                    control={<Radio />}
                    label="COS (MOA)"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Grid2>
        </Grid2>
        <br />
        <br />
        <br />
        <Typography variant="body2" fontStyle="italic">
          I hereby agree upon signing that DSWD shall not be held
          liable/responsible for any damage/loss that the vehicle described
          above may incur while inside the compound of the Department.
        </Typography>
        <Typography variant="body2" fontStyle="italic">
          Further, I agree that the vehicle entry pass issued shall be used
          within the DSWD Central Office Compound only.
        </Typography>
        <br />
        <br />
        <br />
        <Grid2 container spacing={10}>
          <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
            <Typography variant="body1">Requested by:</Typography>
            <Stack>
              <TextField variant="standard" fullWidth />
              <Typography variant="body2" fontStyle="italic">
                (Signature of applicant over printed name)
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
            <Typography variant="body1">Checked/Inspected by:</Typography>
            <Stack>
              <TextField variant="standard" fullWidth />
              <Typography variant="body2" fontStyle="italic">
                GSD / GSS Staff-In-Charge
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
            <br />
            <Stack>
              <TextField variant="standard" fullWidth />
              <Typography variant="body2" fontStyle="italic">
                Head, Security Service Provider
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size={{ md: 8, xs: 12 }}>
            <Typography variant="body1">Approved by:</Typography>
            <Typography variant="subtitle2">BELLENE LARENA-AHMAD</Typography>
            <Typography variant="body2">
              Director, Administrative Service / Administrative Division Chief
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 4, xs: 12 }} justifyContent="end">
            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <Typography variant="body2">EVEP No.</Typography>
              </Grid2>
              <Grid2 size={6}>
                <Stack direction="row" spacing={1}>
                  <Typography variant="body2">:</Typography>
                  <TextField variant="standard" />
                </Stack>
              </Grid2>
              <Grid2 size={6}>
                <Typography variant="body2">Issued by</Typography>
              </Grid2>
              <Grid2 size={6}>
                <Stack direction="row" spacing={1}>
                  <Typography variant="body2">:</Typography>
                  <TextField variant="standard" />
                </Stack>
              </Grid2>
              <Grid2 size={6}>
                <Typography variant="body2">Date</Typography>
              </Grid2>
              <Grid2 size={6}>
                <Stack direction="row" spacing={1}>
                  <Typography variant="body2">:</Typography>
                  <TextField variant="standard" />
                </Stack>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <br />
        <Stack spacing={1.5} width={{ md: "50%", xs: 1 }}>
          <Typography variant="body2" fontStyle="italic">
            *The above stated vehicle is probihited to park at the DSWD Compound
            during night time unless prior approved has been made.
          </Typography>
          <Typography variant="body2" fontStyle="italic">
            *Attach certified true copy of LTO OR/CR and Xerox copy of DSWD-ID
          </Typography>
          <Typography variant="body2" fontStyle="italic">
            *One (1) entry pass per employee.
          </Typography>
        </Stack>
      </Stack>
    </CustomBody>
  );
};

export default EmployeeVehicleEntryPass;
