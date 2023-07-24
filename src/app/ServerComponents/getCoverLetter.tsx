export default async function getCoverLetter(
  resume: string | null,
  job: string | null
) {
  const input = { resume, job };

  const response = await fetch("http://localhost:9000/coverLetter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const json = await response.json();

  return json.coverLetter;
}
