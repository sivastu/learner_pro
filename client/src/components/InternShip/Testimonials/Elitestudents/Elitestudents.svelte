<script>
  import { Card } from "$lib/components/ui/card";
  import college1 from "../../../../img/Internship/college1.svg";
  import EliteStudentsCollege from "./EliteCard";
</script>

<main class=" bg-internherobg w-full overflow-x-hidden pb-20 text-white">
  <div class="py-8 md:py-20">
    <div
      class="font-publicaz flex justify-center md:px-0 px-5 text-xl md:text-5xl"
    >
      <h1>Our Elite Students Interns from</h1>
    </div>
  </div>

  <div
    class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch gap-2 md:gap-5 px-10 md:px-20"
  >
    {#each EliteStudentsCollege as college}
      <Card class="bg-transparent flex flex-col justify-between border-0 p-2">
        <div class="flex justify-center">
          <img class="" src={college.image} alt="collegeimage" />
        </div>

        <div
          class="font-publicaz flex items-center justify-center pt-14 text-center text-[14px] text-[#FFFFFF]"
        >
          <p>{college.name}</p>
        </div>
      </Card>
    {/each}
  </div>
</main>
