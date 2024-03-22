<script>
  import menuLinks from "$lib/Navlinks";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import profile from "../../img/Home/profile.png";
  let currentPath = "";
  console.log($page.url.pathname);
  $: if ($page) {
    currentPath = $page.url.pathname;
  }
  /**
   * @type {string | null}
   */
  let phoneNumber = "";
  onMount(() => {
    phoneNumber = localStorage.getItem("phoneNumber");
    console.log(phoneNumber);
  });
</script>

<header class=" bg-navbg sticky top-0 z-20 py-3 transition-all duration-500">
  <div class=" flex items-center justify-between px-3 lg:px-52">
    <a href="/" class="font-gilroy text-navlogo text-xl md:text-3xl"
      >Learner Pro</a
    >
    <ul
      class="font-publicalight flex cursor-pointer items-center justify-between gap-x-4 text-lg font-semibold lg:gap-x-9 xl:gap-x-24"
    >
      {#if phoneNumber}
        {#each menuLinks as link}
          <li
            class={`text-navmenu border-white pb-1 tracking-[1px] ${currentPath === link.path ? "border-b-2" : ""} transition-all duration-100 hover:border-b-2 `}
          >
            <a href={link.path}> {link.name}</a>
          </li>
        {/each}

        <li>
          <div
            style="border: 1.15px solid rgba(232, 239, 247, 0.25)"
            class="flex p-2 items-center rounded-xl ga-2 bg-[#010101]"
          >
            <!-- <img src={profile} class="h-12 rounded-lg" alt="" /> -->
            <img
              src="https://github.com/shadcn.png"
              class="h-12 rounded-lg"
              alt=""
            />
            <p class="px-5 py-2 font-publicaz text-[#EFEFEF] text-xl">
              {phoneNumber}
            </p>
          </div>
        </li>
      {/if}
    </ul>
  </div>
</header>

<!-- <header class="bg-navbg sticky top-0 z-20 py-3 transition-all duration-500">
	<div class="flex items-center justify-between px-3 lg:px-52">
		<a href="/" class="font-gilroy text-navlogo text-xl md:text-3xl">Learner Pro</a>
		<button class="focus:outline-none lg:hidden">
			<svg
				class="h-6 w-6 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				></path>
			</svg>
		</button>
		<ul class="hidden flex-col text-lg font-semibold lg:flex lg:flex-row lg:gap-x-9 xl:gap-x-24">
			{#each menuLinks as link}
				<li class={`text-navmenu pb-1 tracking-[1px] transition-all duration-100 hover:border-b-2`}>
					<a href={link.path}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="bg-navbg absolute left-0 right-0 top-16 z-10 shadow-md lg:hidden">
		<ul class="flex flex-col items-center gap-y-4">
			{#each menuLinks as link}
				<li class="text-navmenu pb-1 tracking-[1px] transition-all duration-100 hover:border-b-2">
					<a href={link.path}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</header> -->

<style>
</style>
