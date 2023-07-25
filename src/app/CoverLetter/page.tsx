"use client";

import { Grid } from "@mui/material";
import { useSearchParams } from "next/navigation";
import getCoverLetter from "../ServerComponents/getCoverLetter";
import { use } from "react";

export default function CoverLetter() {
  // Retrieve resume from input page
  const searchParams = useSearchParams();
  const resume = searchParams?.get("resume");
  const job = searchParams?.get("job");

  // Fetched cover letter
  // todo - feed resume in here
  const coverLetter = use(getCoverLetter(resume, job));

  return (
    <Grid container alignItems="center" justifyContent="center" direction="row">
      <h1 className="text-3xl">Coveroo</h1>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <h1 className="text-xl">Cover Letter:</h1>
        {/* Cover letter displayed here */}
        <Grid
          container
          width="100vh"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <p>{coverLetter}</p>
        </Grid>
      </Grid>
    </Grid>
  );
}
