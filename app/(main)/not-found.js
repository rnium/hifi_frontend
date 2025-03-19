import Link from "next/link";
import { Container, Stack, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Container>
      <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ my: 7 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[350px]"
        >
          <source src="/videos/404.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <Typography variant="h2">Page not found</Typography>
        <Typography>
          The page you are looking for does not exist.
        </Typography>
      </Stack>
    </Container>
  );
}
