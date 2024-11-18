import { Grid2 } from "@mui/material";
import CustomBody from "../../components/CustomBody";
import CustomSkeleton from "../../components/Skeleton";

const Dashboard = () => {
  return (
    <CustomBody isLoading={false} header="Dashboard" breadcrumbs={[]}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <CustomSkeleton height={200} />
            </Grid2>
            <Grid2 size={6}>
              <CustomSkeleton height={200} />
            </Grid2>
            <Grid2 size={6}>
              <CustomSkeleton height={200} />
            </Grid2>
            <Grid2 size={6}>
              <CustomSkeleton height={200} />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <CustomSkeleton height={1} />
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <CustomSkeleton height={400} />
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <CustomSkeleton height={1} />
        </Grid2>
      </Grid2>
    </CustomBody>
  );
};

export default Dashboard;
