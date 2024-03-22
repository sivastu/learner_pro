<script>
  import Card from "$lib/components/ui/card/card.svelte";
  import * as Avatar from "$lib/components/ui/avatar";
  import service1 from "../../../img/Home/service1.svg";
  import service2 from "../../../img/Home/service2.svg";
  import service3 from "../../../img/Home/service3.svg";
  import service4 from "../../../img/Home/service4.svg";
  import arrow from "../../../img/Home/arrow.svg";
  import ServiceCard from "./Servicecard";
</script>

<main class=" bg-codingballs min-h-screen w-full overflow-x-hidden text-white">
  <div
    class="font-publicamedium text-herotext flex justify-center text-2xl md:text-5xl"
  >
    About we Services
  </div>
  <div class=" ">
    <div
      class="grid py-5 md:py-10 grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-stretch md:gap-2"
    >
      <div
        class="bg-transparent mx-auto xl:mx-0 polygon1 mt-10 h-[300px] w-[342px] md:w-[390px] relative p-3 md:p-5"
      >
        <div class="px-4 py-3 text-xl md:text-3xl font-publicamedium">
          <h1>Internship</h1>
        </div>
        <div>
          <p
            style="color: rgba(255, 255, 255, 0.73);
        "
            class="p-3 md:p-4 font-publicaz text-base md:text-lg px-4"
          >
            Navigating the exciting realm of internships, where every task is a
            lesson and every challenge is an opportunity.
          </p>
        </div>
        <div class="flex items-center gap-10 md:gap-20 pt-4 px-7 md:px-10">
          <img src={service1} alt="" />
          <p class=" font-inter text-xl md:text-3xl lg:text-5xl font-semibold">
            01
          </p>
        </div>
        <div
          class="absolute -bottom-0 md:-bottom-1 right-0 md:right-3 bg-gradient-to-t flex justify-center items-center from to bg-[#303030] h-[100px] md:h-[110px] w-[100px] md:w-[110px] rounded-full"
        >
          <img style="object-fit: contain;" src={arrow} alt="" />
        </div>
      </div>

      <div
        class="bg-transparent mx-auto xl:mx-0 polygon2 mt-10 h-[300px] w-[342px] md:w-[390px] relative p-3 md:p-5"
      >
        <div class="flex items-center gap-10 md:gap-20 pt-4 px-7 md:px-10">
          <img class="h-[50px]" src={service2} alt="" />
          <p class=" font-inter text-xl md:text-3xl lg:text-5xl font-semibold">
            02
          </p>
        </div>
        <div class="px-4 pt-10 text-xl md:text-3xl font-publicamedium">
          <h1>Interview Tips</h1>
        </div>
        <div>
          <p
            style="color: rgba(255, 255, 255, 0.73);
      "
            class="p-3 md:p-4 font-publicaz text-base md:text-lg px-4"
          >
            Crafting your path to success starts with mastering the art of
            interviews.
          </p>
        </div>

        <div
          class="absolute -bottom-0 md:-bottom-1 -top-1 right-0 md:right-3 bg-gradient-to-t flex justify-center items-center from to bg-[#303030] h-[100px] md:h-[110px] w-[100px] md:w-[110px] rounded-full"
        >
          <img style="object-fit: contain;" src={arrow} alt="" />
        </div>
      </div>

      <div
        class="bg-transparent mx-auto xl:mx-0 polygon1 mt-10 h-[300px] w-[342px] md:w-[390px] relative p-3 md:p-5"
      >
        <div class="px-4 py-3 text-xl md:text-3xl font-publicamedium">
          <h1>Face To Face</h1>
        </div>
        <div>
          <p
            style="color: rgba(255, 255, 255, 0.73);
      "
            class="p-3 md:p-4 font-publicaz text-base md:text-lg px-4"
          >
            A glimpse into a face-to-face interview, where communication skills
            become the key to unlocking career doors
          </p>
        </div>
        <div class="flex items-center gap-10 md:gap-20 pt-2 px-7 md:px-10">
          <img class="h-[50px]" src={service3} alt="" />
          <p class=" font-inter text-xl md:text-3xl lg:text-5xl font-semibold">
            03
          </p>
        </div>
        <div
          class="absolute -bottom-0 md:-bottom-1 right-0 md:right-3 bg-gradient-to-t flex justify-center items-center from to bg-[#303030] h-[100px] md:h-[110px] w-[100px] md:w-[110px] rounded-full"
        >
          <img style="object-fit: contain;" src={arrow} alt="" />
        </div>
      </div>

      <div
        class="bg-transparent mx-auto xl:mx-0 polygon2 mt-10 h-[300px] w-[342px] md:w-[390px] relative p-3 md:p-5"
      >
        <div class="flex items-center gap-10 md:gap-20 pt-4 px-7 md:px-10">
          <img src={service4} alt="" />
          <p class=" font-inter text-xl md:text-3xl lg:text-5xl font-semibold">
            04
          </p>
        </div>
        <div class="px-4 pt-10 text-xl md:text-3xl font-publicamedium">
          <h1>Mockup</h1>
        </div>
        <div>
          <p
            style="color: rgba(255, 255, 255, 0.73);
      "
            class="p-3 md:p-4 font-publicaz text-base md:text-lg px-4"
          >
            Diving into a mock interview to refine responses, conquer nerves,
            and set the stage for success
          </p>
        </div>

        <div
          class="absolute -bottom-0 md:-bottom-1 -top-1 right-0 md:right-3 bg-gradient-to-t flex justify-center items-center from to bg-[#303030] h-[100px] md:h-[110px] w-[100px] md:w-[110px] rounded-full"
        >
          <img style="object-fit: contain;" src={arrow} alt="" />
        </div>
      </div>
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
      {#each ServiceCard as card}
        <Card class="rounded-3xl py-5 border-0 bg-[#333333] shadow-xl">
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
            <h1>{card.name}</h1>
          </div>
          <div
            class=" font-dmsans mb-3 flex justify-center text-xl font-normal text-[#FFFFFF]"
          >
            <h1>{card.role}</h1>
          </div>
          <div
            class="font-dmsans mb-3 flex justify-center px-10 text-center text-xl font-normal text-[#FFFFFF]"
          >
            <p>
              {card.content}
            </p>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</main>

<style>
  .polygon1 {
    background-image: url(../../../img/Home/polygon1.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .polygon2 {
    background-image: url(../../../img/Home/polygon2.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
</style>
