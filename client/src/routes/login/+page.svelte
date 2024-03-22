<head>
  <script
    lang="ts"
    id="otpless-sdk"
    type="text/javascript"
    src="https://otpless.com/v2/auth.js"
    data-appid="TZ76JYNHHTEDGNMT4VIC"
  >
  </script>
  <script>
    function otpless(otplessUser) {
      console.log(otplessUser);
      console.log(otplessUser.token, "edfef");
      init(otplessUser.token);
    }
  </script>
  <script type="text/javascript">
    let isInitialized = false;

    function init(token) {
      if (isInitialized) {
        isInitialized = false;
        return;
      }

      isInitialized = true;

      fetch("https://auth.otpless.app/auth/userInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          token,
          client_id: "I28KG9G1D52ZBXQMNK57HTJRTG579HRJ",
          client_secret: "vydxtqrujycus5khgfnoikeonxx4njrs",
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data, "ressssssssssss");
          const phoneNumber = data.national_phone_number;
          localStorage.setItem("phoneNumber", phoneNumber);
          localStorage.setItem("isLoggedIn", true);
          fetch("http://localhost:4000/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phoneNumber }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.ok === true) {
                window.location.href = "/";
              }
            });
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  </script>
</head>

<div class="h-[94vh] flex items-center justify-center bg-white">
  <div id="otpless-login-page"></div>
</div>
