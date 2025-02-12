browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "linkedinAuth") {
      const authCode = message.code;
      console.log("Received auth code:", authCode);

      // Exchange auth code for access token
      fetch("https://www.linkedin.com/oauth/v2/accessToken", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
              grant_type: "authorization_code",
              code: authCode,
              client_id: "#", //replace with os.environ
              client_secret: "#", //replace with os.environ
              redirect_uri: "https://dmweese.github.io/oauth/"
          })
      })
      .then(response => response.json())
      .then(data => {
          if (data.access_token) {
              console.log("Access token received:", data.access_token);

              // Store token
              browser.storage.local.set({ linkedinAccessToken: data.access_token });
          } else {
              console.error("Failed to get access token:", data);
          }
      })
      .catch(error => console.error("Error fetching access token:", error));
  }
});
