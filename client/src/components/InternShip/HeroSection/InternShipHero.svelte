<script>
  import internhero from "../../../img/Internship/internhero.png";
</script>

<main class=" flex h-screen w-full items-center overflow-x-hidden text-white">
  <div class="px-4 md:px-8 lg:px-20">
    <div class="flex flex-col pt-6 items-start md:items-center md:flex-row">
      <div class="md:w-7/12">
        <div class="font-publicaz mb-3">
          <h1 class=" text-[25px] md:text-[30px] xl:text-[44px] leading-snug">
            Exciting Internship Opportunity
          </h1>
          <h1 class=" text-3xl lg:text-5xl leading-snug xl:text-7xl">
            Join Learner Pro Community
          </h1>
        </div>
        <div
          class="text-interndesc font-publicaz text-base md:text-[20px] leading-relaxed"
        >
          <p>
            An internship is a professional learning experience that offers
            practical work related <br />
            to a field of study or career interest. An internship gives opportunity
            for career exploration
            <br />
            and development, and to learn new skills.
          </p>
        </div>
      </div>
      <div class="md:w-5/12 mt-5 md:mt-0">
        <div class="hero-bg h-auto">
          <img src={internhero} alt="" class="h-auto w-full" />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .hero-bg {
    background-image: url(../../../img/Internship/internherobg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
