<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
  import Button from "$lib/components/ui/button/button.svelte";
  import Icon from "@iconify/svelte";
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher();
  let isOpen: boolean = false;
  const toggleQuestion = () => {
    isOpen = !isOpen;
    dispatcher("toggle", isOpen);
  };
</script>

<main
  class=" bg-internherobg w-full min-h-0 overflow-x-hidden pb-20 text-white"
>
  <div class="py-8 md:py-20">
    <div
      class="font-publicaz flex justify-center md:px-0 px-5 text-2xl md:text-5xl"
    >
      <h1>Frequently Ask Questions</h1>
    </div>
  </div>
  <div class="container mx-auto mb-5 md:mb-10 px-5">
    <div class=" ">
      <div class="">
        <Accordion.Root
          on:on:toggle={(event) => (isOpen = event.detail.isOpen)}
        >
          <Accordion.Item
            value="item-1"
            class="border-0 rounded-lg bg-[#242424] mb-3 px-2 md:px-20 py-1 md:py-4"
          >
            <Accordion.Trigger
              on:click={toggleQuestion}
              class=" border-0 no-underline hover:cursor-default hover:no-underline "
            >
              <div class="flex items-center gap-4 md:gap-10">
                <div
                  class="text-gradient font-inter text-xl md:text-3xl lg:text-5xl font-semibold"
                >
                  01
                </div>
                <div
                  class="font-publicamedium text-base md:text-[20px] xl:text-[30px]"
                >
                  What language will be used for aspects of the internship?
                </div>
              </div>
              {#if isOpen}
                <div
                  class="cursor-pointer rounded-full bg-[#D9D9D91A] text-lg md:text-3xl text-[#C0C0C0]"
                >
                  <Icon icon="mingcute:close-fill" />
                </div>
              {:else}
                <div
                  class="cursor-pointer rounded-full bg-[#D9D9D91A] text-lg md:text-3xl text-[#C0C0C0]"
                >
                  <Icon icon="pepicons-pop:plus" />
                </div>
              {/if}
            </Accordion.Trigger>
            <Accordion.Content class="no-underline"
              ><div
                class="text-interndesc font-publicaz px-5 md:px-10 lg:px-20 text-sm md:text-[20px] leading-relaxed"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit ipsa obcaecati magnam aliquam atque fuga perspiciatis
                  corrupti non qui unde impedit quam, ipsam itaque enim
                  laudantium hic, officiis pariatur! Voluptas.
                </p>
              </div></Accordion.Content
            >
          </Accordion.Item>

          <Accordion.Item
            value="item-2"
            class="border-0 rounded-lg bg-[#242424] px-2 md:px-20 py-1 md:py-4"
          >
            <Accordion.Trigger
              on:click={toggleQuestion}
              class=" border-0 no-underline hover:cursor-default hover:no-underline "
            >
              <div class="flex items-center gap-4 md:gap-10">
                <div
                  class="text-gradient font-inter text-xl md:text-3xl lg:text-5xl font-semibold"
                >
                  01
                </div>
                <div
                  class="font-publicamedium text-base md:text-[20px] xl:text-[30px]"
                >
                  What language will be used for aspects of the internship?
                </div>
              </div>
              {#if isOpen}
                <div
                  class="cursor-pointer rounded-full bg-[#D9D9D91A] text-lg md:text-3xl text-[#C0C0C0]"
                >
                  <Icon icon="mingcute:close-fill" />
                </div>
              {:else}
                <div
                  class="cursor-pointer rounded-full bg-[#D9D9D91A] text-lg md:text-3xl text-[#C0C0C0]"
                >
                  <Icon icon="pepicons-pop:plus" />
                </div>
              {/if}
            </Accordion.Trigger>
            <Accordion.Content class="no-underline"
              ><div
                class="text-interndesc font-publicaz px-5 md:px-10 lg:px-20 text-sm md:text-[20px] leading-relaxed"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit ipsa obcaecati magnam aliquam atque fuga perspiciatis
                  corrupti non qui unde impedit quam, ipsam itaque enim
                  laudantium hic, officiis pariatur! Voluptas.
                </p>
              </div></Accordion.Content
            >
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  </div>

  <div class="container mx-auto py-6 px-5 md:px-0 md:py-20">
    <div class=" rounded-2xl bg-[#242424]">
      <div class=" rounded-s-3xl">
        <h1
          class="font-publicaz px-5 md:px-14 py-3 md:py-8 text-xl md:text-[33px] capitalize md:leading-relaxed"
        >
          Need Further Assistance?

          <p
            style="text-transform: none;"
            class="mt-2 text-base md:text-[17px] text-[#C4C4C4]"
          >
            Sign up to the newsletter and learn about new resources, new
            commits, new proposals, and more.
          </p>
          <form action="">
            <div
              class="mt-4 flex w-full place-items-center rounded-full border-0 bg-[#000000] px-2 py-2 text-[16px]"
            >
              <input
                placeholder="Type Query Here..."
                class="font-publicamedium w-full bg-transparent text-xs indent-4 outline-none"
                type="text"
              />
              <Button
                style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);"
                class="text-herodesc font-publicbold rounded-full text-[17px] "
                >Send</Button
              >
            </div>
          </form>
        </h1>
      </div>
    </div>
  </div>
</main>

<style>
  .text-gradient {
    background-image: linear-gradient(
      202.11deg,
      #9b66ff 31.72%,
      #a61f89 85.56%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
</style>
