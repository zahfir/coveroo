"use client";
import { Button, Grid, Stack, TextField } from "@mui/material";
export default function Home() {
  return (
    <Grid container alignItems="center" justifyContent="center" direction="row">
      <h1 className="text-3xl">Coveroo</h1>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <h1 className="text-xl">Enter Resume Text:</h1>
        {/* Text Fields and Button */}
        <Grid
          container
          width="100vh"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <TextField multiline minRows={10} fullWidth label="Resume" />
          <TextField
            sx={{ marginTop: "2%" }}
            fullWidth
            label="Enter Job Application URL"
          />
          <Stack direction="row" columnGap={1}>
            <Button sx={{ marginTop: "20%" }} variant="outlined">
              Generate Cover Letter
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
