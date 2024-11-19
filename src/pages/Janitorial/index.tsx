import dayjs from "dayjs";

import { useGeneral } from "../../redux/generalHook";
import CustomBody from "../../components/CustomBody";
import CustomTable from "../../components/CustomTable";
import {
  Chip,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { OpenInBrowser, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const formData = [
  {
    id: 1,
    requestOffice: "ICTMS",
    purpose: "No Water",
    janitor: 1,
    timeNeeded: "2024/11/19 13:36:00",
    location: "Kalamba Office",
    fundToCharge: "",
    requestedBy: "John Doe",
    approvedBy: { name: "Bellene Larena-AHMAD", isApproved: false },
    notedBy: "John Doe",
    headOfRequestingOffice: { name: "John Doe", isApproved: false },
  },
  {
    id: 1,
    requestOffice: "ICTMS",
    purpose: "No Water",
    janitor: 1,
    timeNeeded: "2024/11/19 13:36:00",
    location: "Kalamba Office",
    fundToCharge: "",
    requestedBy: "John Doe",
    approvedBy: { name: "Bellene Larena-AHMAD", isApproved: false },
    notedBy: "John Doe",
    headOfRequestingOffice: { name: "John Doe", isApproved: false },
  },
  {
    id: 1,
    requestOffice: "ICTMS",
    purpose: "No Water",
    janitor: 1,
    timeNeeded: "2024/11/19 13:36:00",
    location: "Kalamba Office",
    fundToCharge: "",
    requestedBy: "John Doe",
    approvedBy: { name: "Bellene Larena-AHMAD", isApproved: false },
    notedBy: "John Doe",
    headOfRequestingOffice: { name: "John Doe", isApproved: false },
  },
  {
    id: 1,
    requestOffice: "ICTMS",
    purpose: "No Water",
    janitor: 1,
    timeNeeded: "2024/11/19 13:36:00",
    location: "Kalamba Office",
    fundToCharge: "",
    requestedBy: "John Doe",
    approvedBy: { name: "Bellene Larena-AHMAD", isApproved: false },
    notedBy: "John Doe",
    headOfRequestingOffice: { name: "John Doe", isApproved: false },
  },
  {
    id: 1,
    requestOffice: "ICTMS",
    purpose: "No Water",
    janitor: 1,
    timeNeeded: "2024/11/19 13:36:00",
    location: "Kalamba Office",
    fundToCharge: "",
    requestedBy: "John Doe",
    approvedBy: { name: "Bellene Larena-AHMAD", isApproved: false },
    notedBy: "John Doe",
    headOfRequestingOffice: { name: "John Doe", isApproved: false },
  },
];

const column = [
  { label: "Requesting Office" },
  { label: "Purpose" },
  { label: "Status", align: "center" },
  { label: "No. of Janitors", align: "center" },
  { label: "Date and Time Needed", align: "center" },
  { label: "Place of Assignment" },
  { label: "Action", align: "right" },
];

const Janitorial = () => {
  const navigate = useNavigate();

  const { data, isSuccess, isLoading } = useGeneral({
    testing: { status: "success", return: formData },
  });

  return (
    <CustomBody isLoading={isLoading} header="Janitorial">
      <Stack spacing={2}>
        <Stack
          direction={{ sm: "row", xs: "column" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <FormControl sx={{ width: { md: 300, sm: "50%", xs: 1 } }}>
            <InputLabel>Requesting Office</InputLabel>
            <Select label="Requesting Office">
              <MenuItem value={10}>ICTMS</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Search"
            placeholder="Type text here..."
            sx={{ width: { md: 500, sm: "50%", xs: 1 } }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Stack>
        <CustomTable
          row={
            isSuccess
              ? data.map(
                  (item: {
                    requestOffice: string;
                    purpose: string;
                    janitor: number;
                    timeNeeded: string;
                    location: string;
                  }) => [
                    item.requestOffice,
                    item.purpose,
                    <Chip label="Pending" variant="outlined" color="warning" />,
                    item.janitor,
                    dayjs(item.timeNeeded).format("MMM DD, YYYY HH:MM A"),
                    item.location,
                    <Stack direction="row" justifyContent="end" spacing={1}>
                      <IconButton
                        onClick={() => navigate("/request-form/janitorial")}
                      >
                        <OpenInBrowser color="primary" />
                      </IconButton>
                    </Stack>,
                  ]
                )
              : null
          }
          column={column}
          isLoading={isLoading}
        />
      </Stack>
    </CustomBody>
  );
};

export default Janitorial;
