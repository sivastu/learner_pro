<script>
  import "../app.pcss";
  import { Toaster } from "$lib/components/ui/sonner";
  import Navbar from "../components/Navbar/Navbar.svelte";
</script>

<Toaster />
<Navbar />
<slot />
