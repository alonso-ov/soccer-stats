export async function getFixtures() {
  try {
    const requestOptions: RequestInit = {
      method: "GET",
      headers: <any>{
        "Content-Type": "application/json",
        apikey: process.env.SUPABASE_ANON_KEY,
      },
      cache: "no-cache",
    };

    const response = await fetch(
      `${process.env.SUPABASE_PUBLIC_URL}/rest/v1/fixtures`,
      requestOptions
    );

    const fixtures = await response.json();

    return fixtures;
  } catch (error) {
    console.error("getFixtures error: ", error);

    throw new Error("Failed to get fixtures from Supabase");
  }
}