const url = "https://clijcnedvgtppqzmwicf.supabase.co";
w;

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
  console.log(artwork);
}
