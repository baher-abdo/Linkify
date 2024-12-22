import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box, CardActions, Container } from "@mui/material";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";


export default function Loading() {
  return (
    <Container maxWidth="sm">
          <Card sx={{ m: 3, p: 2 }}>
      <CardHeader
        avatar={
          <Box
          >
        <Skeleton variant="circular" width={45} height={45} />
          </Box>
        }
        
        title={<Skeleton variant="text" sx={{ fontSize: "1rem", width:180}} />}
        subheader={<Skeleton variant="text" sx={{ fontSize: "1rem" ,width:150}} />}
        titleTypographyProps={{
          width: "fit-content",
          style: { cursor: "pointer" },
        }}
          />
          
      <CardContent>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </CardContent>
        <Box>
        <Skeleton variant="rounded" width={"100%"} height={170} />
        </Box>

        <CardActions>
      <Skeleton variant="text" sx={{ fontSize: "3rem",width:"100%" }} />

      </CardActions>
    </Card>
    </Container>
  );
}
