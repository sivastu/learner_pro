<script>
  import Card from "$lib/components/ui/card/card.svelte";
  import * as Avatar from "$lib/components/ui/avatar";
  import service1 from "../../../img/Home/service1.svg";
</script>

<main class=" bg-codingballs min-h-screen w-full overflow-x-hidden text-white">
  <div
    class="font-publicamedium text-herotext flex justify-center pt-5 text-2xl md:text-5xl"
  >
    About we Services
  </div>
  <div class="px-10">
    <div class="grid grid-cols-4">
      <div class="bg-transparent jjjj mt-10 h-[300px] w-[400px] relative p-6">
        <div class="px-4 py-3 text-4xl font-publicamedium">
          <h1>Internship</h1>
        </div>
        <div>
          <p
            style="color: rgba(255, 255, 255, 0.73);
        "
            class="p-4 font-publicaz text-xl px-4"
          >
            Are you ready to kick-start your career in a dynamic and innovative
            environment
          </p>
        </div>
        <div class="flex items-center gap-20 pt-4 px-10">
          <img src={service1} alt="" />
          <p class=" font-inter text-xl md:text-3xl lg:text-5xl font-semibold">
            01
          </p>
        </div>
        <div
          class="absolute -bottom-1 right-3 bg-gradient-to-t from bg-transparent to bg-white h-[110px] w-[110px] rounded-full"
        ></div>
      </div>
      <div class="bg-transparent jjjj mt-10 h-[300px] w-[400px] relative p-6">
        <div class="px-4 py-3 text-4xl font-publicamedium">
          <h1>Internship</h1>
        </div>
        <div>
          <p
            style="color: rgba(255, 255, 255, 0.73);
        "
            class="p-4 font-publicaz text-xl px-4"
          >
            Are you ready to kick-start your career in a dynamic and innovative
            environment
          </p>
        </div>
        <div class="flex items-center gap-20 pt-4 px-10">
          <img src={service1} alt="" />
          <p class=" font-inter text-xl md:text-3xl lg:text-5xl font-semibold">
            01
          </p>
        </div>
        <div
          class="absolute -bottom-1 right-3 bg-gradient-to-t from bg-transparent to bg-white h-[110px] w-[110px] rounded-full"
        ></div>
      </div>
      <div class="bg-transparent jjjj mt-10 h-[300px] w-[400px] relative p-6">
        <div class="px-4 py-3 text-4xl font-publicamedium">
          <h1>Internship</h1>
        </div>
        <div>
          <p
            style="color: rgba(255, 255, 255, 0.73);
        "
            class="p-4 font-publicaz text-xl px-4"
          >
            Are you ready to kick-start your career in a dynamic and innovative
            environment
          </p>
        </div>
        <div class="flex items-center gap-20 pt-4 px-10">
          <img src={service1} alt="" />
          <p class=" font-inter text-xl md:text-3xl lg:text-5xl font-semibold">
            01
          </p>
        </div>
        <div
          class="absolute -bottom-1 right-3 bg-gradient-to-t from bg-transparent to bg-white h-[110px] w-[110px] rounded-full"
        ></div>
      </div>
      <div class="bg-transparent jjjj mt-10 h-[300px] w-[400px] relative p-6">
        <div class="px-4 py-3 text-4xl font-publicamedium">
          <h1>Internship</h1>
        </div>
        <div>
          <p
            style="color: rgba(255, 255, 255, 0.73);
        "
            class="p-4 font-publicaz text-xl px-4"
          >
            Are you ready to kick-start your career in a dynamic and innovative
            environment
          </p>
        </div>
        <div class="flex items-center gap-20 pt-4 px-10">
          <img src={service1} alt="" />
          <p class=" font-inter text-xl md:text-3xl lg:text-5xl font-semibold">
            01
          </p>
        </div>
        <div
          class="absolute -bottom-1 right-3 bg-gradient-to-t from bg-transparent to bg-white h-[110px] w-[110px] rounded-full"
        ></div>
      </div>
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
              <Avatar.Image
                src="https://github.com/shadcn.png"
                alt="@learner1"
              />
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
              Passion for Defi. Has worked @coinbase & @google as an advisor
            </p>
          </div>
        </Card>
        <Card class="rounded-3xl border-0 bg-[#333333] shadow-xl">
          <div class="flex justify-center py-4">
            <Avatar.Root class="h-20 w-20 rounded-full">
              <Avatar.Image
                src="https://github.com/shadcn.png"
                alt="@learner1"
              />
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
            <p>
              Has excellent skills in project management. Previously @binance
            </p>
          </div>
        </Card>
        <Card class="rounded-3xl border-0 bg-[#333333] shadow-xl">
          <div class="flex justify-center py-4">
            <Avatar.Root class="h-20 w-20 rounded-full">
              <Avatar.Image
                src="https://github.com/shadcn.png"
                alt="@learner1"
              />
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
  </div>
</main>

<style>
  .jjjj {
    background-image: url(../../../img/Internship/jjjjj.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
</style>
