<script>
  import Card from "$lib/components/ui/card/card.svelte";
  import * as Avatar from "$lib/components/ui/avatar";
</script>

<main class=" bg-codingballs min-h-screen w-full overflow-x-hidden text-white">
  <div
    class="font-publicamedium text-herotext flex justify-center pt-5 text-2xl md:text-5xl"
  >
    About we Services
  </div>
  <div>
    <!-- <Card
			style="clip-path: polygon(50% 0%, 100% 0, 100% 53%, 62% 53%, 62% 100%, 40% 100%, 0 100%, 0% 70%, 0% 35%, 0 0)"
			class=" h-[200px] w-[400px] rounded-xl"
		></Card> -->

    <!-- <div class="relative h-80 w-96">
			<div class="absolute left-[280px] top-[216px] h-28 w-28">
				<div class="absolute left-0 top-0 h-28 w-28 rounded-full"></div>
			</div>
			<div
				class="absolute left-[36.33px] top-[45.19px] inline-flex h-14 w-52 flex-col items-start justify-start gap-2.5"
			>
				<div class="font-['Publica Sans'] text-4xl font-medium text-gray-200">Internship</div>
			</div>
			<div
				class="font-['Publica Sans'] absolute left-[34.56px] top-[111.66px] h-12 w-80 text-xl font-normal text-white text-opacity-75"
			>
				Are you ready to kick-start your career in a dynamic and innovative environment
			</div>
			<div
				class="font-['Publica Sans'] absolute left-[163px] top-[225.54px] text-7xl font-medium text-white"
			>
				01
			</div>
		</div> -->
  </div>

  <div
    class="font-publicamedium text-herotext flex justify-center pt-5 text-2xl md:text-5xl"
  >
    Meet the team
  </div>
  <div class="container mx-auto mb-4">
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 items-stretch
			gap-5 md:px-10 px-4 pt-5 md:pt-12 xl:grid-cols-3 xl:px-20"
    >
      <Card class="rounded-3xl border-0 bg-[#333333] shadow-xl">
        <div class="flex justify-center py-4">
          <Avatar.Root class="h-20 w-20 rounded-full">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@learner1" />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar.Root>
        </div>

        <div
          class=" font-prompt mb-3 flex justify-center text-2xl text-[#FFFFFF]"
        >
          <h1>John Williams</h1>
        </div>
        <div
          class=" font-dmsans mb-3 flex justify-center text-xl font-normal text-[#FFFFFF]"
        >
          <h1>CTO</h1>
        </div>
        <div
          class="font-dmsans mb-3 flex justify-center px-10 text-center text-xl font-normal text-[#FFFFFF]"
        >
          <p>Passion for Defi. Has worked @coinbase & @google as an advisor</p>
        </div>
      </Card>
      <Card class="rounded-3xl border-0 bg-[#333333] shadow-xl">
        <div class="flex justify-center py-4">
          <Avatar.Root class="h-20 w-20 rounded-full">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@learner1" />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar.Root>
        </div>

        <div
          class=" font-prompt mb-3 flex justify-center text-2xl text-[#FFFFFF]"
        >
          <h1>Alisha Ruckets</h1>
        </div>
        <div
          class=" font-dmsans mb-3 flex justify-center text-xl font-normal text-[#FFFFFF]"
        >
          <h1>Advisor</h1>
        </div>
        <div
          class="font-dmsans mb-3 flex justify-center px-10 text-center text-xl font-normal text-[#FFFFFF]"
        >
          <p>Has excellent skills in project management. Previously @binance</p>
        </div>
      </Card>
      <Card class="rounded-3xl border-0 bg-[#333333] shadow-xl">
        <div class="flex justify-center py-4">
          <Avatar.Root class="h-20 w-20 rounded-full">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@learner1" />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar.Root>
        </div>

        <div
          class=" font-prompt mb-3 flex justify-center text-2xl text-[#FFFFFF]"
        >
          <h1>John Williams</h1>
        </div>
        <div
          class=" font-dmsans mb-3 flex justify-center text-xl font-normal text-[#FFFFFF]"
        >
          <h1>CTO</h1>
        </div>
        <div
          class="font-dmsans mb-3 flex justify-center px-10 text-center text-xl font-normal text-[#FFFFFF]"
        >
          <p>
            Has an experience of 10+ years working in web.3. Previously
            @crypto.com
          </p>
        </div>
      </Card>
    </div>
  </div>
</main>
