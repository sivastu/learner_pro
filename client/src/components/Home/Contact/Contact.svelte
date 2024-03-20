<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import manvr from "../../../img/Home/manvr.png";
</script>

<main
  style="background: linear-gradient(102.02deg, #252525 0%, #001AFF 281.74%);"
  class="  w-full overflow-x-hidden text-white"
>
  <!-- <div class="mb-10 mt-20 grid justify-center px-10 md:grid-cols-2 xl:px-28">
    <div>
      <div
        class="font font-publicbold text-herodesc mb-3 text-[50px] xl:text-[80px]"
      >
        <h1 class="">Wear professional attire</h1>
        <h1 class="">that aligns with the company culture.</h1>
      </div>
      <div
        class=" font-publicaz mb-4 text-2xl font-medium leading-relaxed tracking-wider"
      >
        <p>With VR, they aren't limited to word descriptions or</p>
        <p>book illustrations; they can explore</p>
        <p>the topic and see how things are put together.</p>
      </div>
      <div class="mb-4">
        <Button
          style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);"
          class="text-herodesc font-publicbold rounded-full px-12 py-8 text-[20px]"
          >Contact us</Button
        >
      </div>
    </div>
    <div class="">
      <img
        class="mt-10"
        style=" width: 100%; height: 100% !important; object-fit: contain;"
        src={manvr}
        alt="Man with VR"
      />
    </div>
  </div> -->
  <div class="grid px-4 md:px-10 xl:px-28 md:py-10 md:grid-cols-2">
    <div>
      <div
        class="font pt-10 leading-snug font-publicbold text-herodesc mb-3 text-[35px] lg:text-[45px] xl:text-[70px]"
      >
        <h1 class="md:text-nowrap">Wear professional attire</h1>
        <h1 class="">that aligns with the company culture.</h1>
      </div>
      <div
        class=" font-publicaz mb-4 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-wider"
      >
        <p class="">With VR, they aren't limited to word descriptions or</p>
        <p>book illustrations; they can explore</p>
        <p>the topic and see how things are put together.</p>
      </div>
      <div class="mb-4 pt-4">
        <Button
          style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);"
          class="text-herodesc font-publicbold rounded-full px-6 md:px-12 py-5 md:py-8 text-[20px]"
          >Contact us</Button
        >
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <img src={manvr} class="  h-auto" alt="" />
    </div>
  </div>
</main>

<style>
  /* s */
</style>
