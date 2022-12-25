export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI3N2QwZjZlMi02NmEyLTQ4MzUtODIwYi0yMWU1ZmM5NmYxNjIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3MTY4NzU4NiwiZXhwIjoxNjc0Mjc5NTg2fQ.HZ-djLpKlxIzhBKGVxa3LEiVf4sek7PWz4lbQ6KAX4I";

// API call to create meeting
export const createMeeting = async () => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};

// API call to fetch latest downstream url for a meeting session
export const fetchHlsDownstreamUrl = async ({ meetingId }) => {
  const res = await fetch(
    `https://api.videosdk.live/v2/hls/?roomId=${meetingId}`,
    {
      method: "GET",
      headers: {
        authorization: `${authToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  const json = await res.json();

  const { downstreamUrl } = json?.data[0];

  return downstreamUrl;
};
