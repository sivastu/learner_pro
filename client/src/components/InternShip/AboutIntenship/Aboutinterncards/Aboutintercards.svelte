<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { Card } from "$lib/components/ui/card";
  import tablet from "../../../../img/Internship/tablet.svg";
  import CardContent from "./CardContent";
</script>

<main
  class=" bg-internherobg min-h-screen w-full overflow-x-hidden pb-5 md:pb-20 pt-5 text-white"
>
  <div
    class="container px-3 mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-4 pb-10 xl:grid-cols-3"
  >
    {#each CardContent as card}
      <Card
        class=" rounded-xl border-2 border-white border-opacity-10  bg-white bg-opacity-10 p-2 "
      >
        <div class="flex justify-center">
          <img
            class="rounded-full bg-[#65EFE7] bg-opacity-5 p-2"
            src={card.image}
            alt=""
          />
        </div>
        <div
          class="font-publicbold flex justify-center pt-4 text-lg md:text-3xl uppercase text-[#FFFFFF]"
        >
          <h1>{card.title}</h1>
        </div>
        <div
          class="font-publicaz flex justify-center px-5 pt-3 text-center text-base md:text-[20px] text-[#FFFFFF]"
        >
          <p>{card.description}</p>
        </div>
      </Card>
    {/each}
  </div>

  <div class="mt-5 md:mt-10 px-5 md:px-10 lg:px-20">
    <div class="herowave py-2 md:py-5 rounded-2xl">
      <div
        class="herowave flex py-5 flex-wrap items-center justify-evenly rounded-s-3xl"
      >
        <h1
          class="font-publicamedium text-base md:text-[25px] lg:text-[35px] capitalize leading-relaxed"
        >
          Find out about the latest courses with <br /> the
          <span class="text-[#00DAEE]">academy </span> newsletter
        </h1>
        <div>
          <form action="">
            <div
              class="mt-4 flex w-full place-items-center rounded-xl border border-white bg-[#323232] px-1 py-1 text-[16px]"
            >
              <input
                placeholder="Email Address"
                class="font-publicamedium w-full bg-transparent indent-4 text-base md:text-lg text-[#8B8989] outline-none"
                type="text"
              />
              <Button
                class="rounded-lg bg-black text-white uppercase hover:bg-black"
                >Submit</Button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .herowave {
    background-image: url(../../../../img/Internship/newsletter.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
