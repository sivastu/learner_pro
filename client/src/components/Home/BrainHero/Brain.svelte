<script>
  import brain from "../../../img/Home/brain.png";
  import brainman from "../../../img/Home/brainman.png";
  import check from "../../../img/Home/checkmark.svg";
</script>

<main
  class="min-h-screen w-full overflow-x-hidden bg-gradient-to-r from-[#000000] via-[#000000] to-[#33FEFD]"
>
  <div class="container mx-auto">
    <div class="grid items-center justify-between grid-cols-1 md:grid-cols-2">
      <div class="font-publicaz pt-10 md:pt-40">
        <h1
          class="text-herotext text-nowrap text-center md:text-left text-[25px] md:text-[30px] xl:text-[70px]"
        >
          Making Students
        </h1>
        <div
          class="text-herotext mt-3 px-2 justify-center md:justify-normal flex items-center gap-2 lg:text-nowrap text-[22px] md:text-[30px] leading-tight xl:text-[70px]"
        >
          Creative <div class="rounded-full bg-[#13D9E4]">
            <img
              class="-mt-8 md:h-[110px] w-[120px] lg:w-[180px]"
              src={brainman}
              alt=""
            />
          </div>
          Future
        </div>
        <div class="mt-10 md:mt-36">
          <div
            class="font-publicaz text-herotext mb-4 flex px-10 md:px-0 items-center gap-4 md:gap-12"
          >
            <div><img src={check} class="h-[40px]" alt="checkMark" /></div>
            <div class="text-[20px] md:text-[45px]">Creativity</div>
          </div>
          <div
            class="font-publicaz text-herotext mb-4 px-10 md:px-0 flex items-center gap-4 md:gap-12"
          >
            <div><img src={check} class="h-[40px]" alt="checkMark" /></div>
            <div class="text-[20px] md:text-[45px]">Digital Litercy</div>
          </div>
          <div
            class="font-publicaz text-herotext mb-4 flex items-center px-10 md:px-0 gap-4 md:gap-12"
          >
            <div><img src={check} class="h-[40px]" alt="checkMark" /></div>
            <div class="text-[20px] text-wrap md:text-[45px]">
              Communication
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          alt="LearnerPro Illustration"
          class="h-auto max-w-full"
          src={brain}
        />
      </div>
    </div>
  </div>
</main>
