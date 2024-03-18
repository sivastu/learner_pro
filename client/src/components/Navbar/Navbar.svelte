<script>
	import menuLinks from '$lib/Navlinks';
	import { page } from '$app/stores';

	console.log($page.url.pathname);
	const currentPath = $page.url.pathname;
</script>

<header class=" bg-navbg sticky top-0 z-20 py-3 transition-all duration-500">
	<div class=" flex items-center justify-between px-5 md:px-20 lg:px-52">
		<a href="/" class="font-gilroy text-navlogo text-xl md:text-3xl">Learner Pro</a>
		<ul
			class="font-publicalight flex cursor-pointer items-center justify-between gap-x-4 text-lg font-semibold lg:gap-x-9 xl:gap-x-24"
		>
			{#each menuLinks as link}
				<li
					class={`text-navmenu pb-1 tracking-[1px] transition-all duration-100 hover:border-b-2 `}
				>
					<a href={link.path}> {link.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</header>

<style>
</style>
