<script
  id="otpless-sdk"
  type="text/javascript"
  src="https://otpless.com/v2/auth.js"
  data-appid="8E75C1E8RNZ4RH17N0GT"
>
  import "../app.pcss";
  import { Toaster } from "$lib/components/ui/sonner";
  import Navbar from "../components/Navbar/Navbar.svelte";

  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { toast } from "svelte-sonner";

  onMount(() => {
    // const isLoggedIn = localStorage.getItem("isLoggedIn");
    const phoneNumber = localStorage.getItem("phoneNumber");
    if (!phoneNumber) {
      goto("/login");
      toast("Please login to continue", {
        duration: 2000,
        position: "top-center",
        style:
          " border:0px; border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
      });
    }
  });
</script>

<Toaster />
<Navbar />
<slot />
