import { useNavigate } from "react-router-dom";
import { Box, Grid2, Stack, Typography } from "@mui/material";

import { MakeStyle } from "../../utils";
import { useGeneral } from "../../redux/generalHook";
import CustomBody from "../../components/CustomBody";
import CustomSkeleton from "../../components/Skeleton";
import CustomHoverEffect from "../../components/CustomHoverEffect";
import BackgroundImage from "../../assets/img/backgroundImage.png";

export const formData = [
  {
    id: 1,
    label: "REQUEST FOR JANITORIAL SERVICES",
    category: "Janitorial",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam  consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo  fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam  quasi aliquam eligendi, placeat qui corporis!",
    url: "/request-form/janitorial",
  },
  {
    id: 1,
    label: "REQUEST FOR USE OF DSWD CONFERENCE ROOM",
    category: "Security",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam  consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo  fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam  quasi aliquam eligendi, placeat qui corporis!",
    url: "/request-form/conference-room",
  },
];

const RequestForm = () => {
  const classes = MakeStyle();
  const navigate = useNavigate();

  const { data, isSuccess, isLoading } = useGeneral({
    testing: { status: "success", return: formData },
  });

  return (
    <CustomBody
      isLoading={isLoading}
      header="Request Form"
      breadcrumbs={[{ label: "Request Form", url: "" }]}
    >
      <Grid2 container spacing={2}>
        {isLoading ? (
          <>
            <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
              <CustomSkeleton height={300} width={1} />
            </Grid2>
            <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
              <CustomSkeleton height={300} width={1} />
            </Grid2>
            <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
              <CustomSkeleton height={300} width={1} />
            </Grid2>
            <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
              <CustomSkeleton height={300} width={1} />
            </Grid2>
            <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
              <CustomSkeleton height={300} width={1} />
            </Grid2>
            <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
              <CustomSkeleton height={300} width={1} />
            </Grid2>
          </>
        ) : isSuccess ? (
          data.map((item: any) => {
            return (
              <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
                <CustomHoverEffect>
                  <Stack
                    justifyContent="space-between"
                    height={300}
                    onClick={() => navigate(item.url)}
                    sx={{
                      backgroundImage: `url(${BackgroundImage})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "start",
                    }}
                  >
                    <Box height="50%" />
                    <Stack
                      justifyContent="space-between"
                      spacing={2}
                      sx={{ backdropFilter: "blur(8px)" }}
                    >
                      <Stack
                        spacing={1}
                        justifyContent="space-between"
                        height={130}
                        pb={2}
                      >
                        <Typography variant="subtitle1" textAlign="center">
                          {item.label}
                        </Typography>
                        <Typography
                          className={classes.twoLinesEllipsis}
                          variant="body2"
                          textAlign="center"
                        >
                          {item.details}
                        </Typography>
                      </Stack>
                      <Typography variant="caption" color="white" pl={1} pb={1}>
                        {item.category}
                      </Typography>
                    </Stack>
                  </Stack>
                </CustomHoverEffect>
              </Grid2>
            );
          })
        ) : null}
      </Grid2>
    </CustomBody>
  );
};

export default RequestForm;
