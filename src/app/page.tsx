"use client";
import { Button, Grid, Stack, TextField } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");

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
          <TextField
            multiline
            minRows={10}
            fullWidth
            label="Resume"
            onChange={(e) => setResume(e.target.value)}
          />
          <TextField
            sx={{ marginTop: "2%" }}
            fullWidth
            label="Enter Job Application URL"
            onChange={(e) => setJob(e.target.value)}
          />
          <Stack direction="row" columnGap={1}>
            <Link
              href={{
                pathname: "/CoverLetter",
                query: { resume, job },
              }}
            >
              <Button sx={{ marginTop: "20%" }} variant="outlined">
                Generate Cover Letter
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
