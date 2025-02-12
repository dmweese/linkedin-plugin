document.getElementById("linkedinSignIn").addEventListener("click", () => {
  const clientId = "78rfi1kptel4t3";
  const redirectUri = "https://dmweese.github.io/oauth/";
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=openid%20profile%20email`;

  // Open LinkedIn login page
  browser.tabs.create({ url: authUrl });
});
