// Har fulgt nedenstående playliste ang. Supabase for at få hul igennem:
// https://youtube.com/playlist?list=PLCx1FpZ4Dtb10T6cClBrq7jHky5HmVots&si=6IOaM4Va_fm1Pt3

const url = "https://clijcnedvgtppqzmwicf.supabase.co";

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsaWpjbmVkdmd0cHBxem13aWNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3Mzc1NDYsImV4cCI6MjAxNjMxMzU0Nn0.ZB94RLQFTwNWgedKWPsDaUC6axpOb001oC9_gVqzCnY";

fetch("https://clijcnedvgtppqzmwicf.supabase.co/rest/v1/artwork", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(artwork) {
  console.table(artwork);
}
