<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import Card from "$lib/components/ui/card/card.svelte";
  import { GroupofStudents, TwoStudents } from "./InternStudents";
</script>

<main
  class=" testimonialhero pt-10 md:pt-20 xl:pt-0 flex min-h-[100vh] w-full xl:items-center overflow-x-hidden text-white"
>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 xl:grid-cols-2 mb-4">
      <div class="">
        <div class="text-center xl:text-left">
          <h1
            data-aos="fade-up"
            class="font-publicaz text-herodesc text-nowrap text-2xl md:text-3xl lg:text-5xl xl:text-6xl"
          >
            Internship Testimonials
          </h1>
        </div>
        <div class="text-center xl:text-left pt-5">
          <Button
            style="background: linear-gradient(82.96deg, #FFFFFF -29.79%, #FF3434 -29.77%, #00B4DB -9.84%, #E9E9E9 108.39%, #212443 161.74%);"
            class="font-publicaz rounded-full px-6 md:px-12 py-5 md:py-8 text-xl md:text-2xl xl:text-3xl text-[#000000]"
            >Events and achievements</Button
          >
        </div>
      </div>
      <div
        class="grid mt-5 xl:mt-0 px-4 xl:px-0 md:grid-cols-2 gap-3 md:gap-10"
      >
        {#each TwoStudents as students}
          <Card
            style="
                border: 0px solid;
                border-image-source: linear-gradient(132.43deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 61.87%);
                background-color: rgba(0, 0, 0, 0.8);
                "
            class="rounded-xl border-0 border-opacity-25 shadow-white"
          >
            <div class="px-4 py-4">
              <div
                class="flex flex-wrap md:flex-nowrap justify-center md:justify-normal
           items-center gap-3"
              >
                <div>
                  <img
                    src={students.studentImage}
                    style="border-radius: 50%; object-fit: contain"
                    class="h-[140px] w-[140px]"
                    alt="student1"
                  />
                </div>
                <div class="text-center md:text-left">
                  <h1 class="font-publicamedium text-xl text-[#FFFFFF]">
                    {students.studentName}
                  </h1>
                  <div
                    class="font-publicalight mt-2 text-nowrap"
                    style="color: rgba(255, 255, 255, 0.69);"
                  >
                    <h1>{students.department}.</h1>
                  </div>
                  <div class="mt-1 flex justify-center md:flex-none">
                    <img src={students.stars} alt="stars" />
                  </div>
                </div>
              </div>
              <div
                class="font-publicalight pt-3 text-center text-[18px] text-[#D8D8D8]"
              >
                <p>
                  {students.review}
                </p>
              </div>
            </div>
          </Card>
        {/each}
      </div>
    </div>
    <div
      class="mt-4 grid grid-cols-1 px-4 xl:px-0 mb-3 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-10"
    >
      {#each GroupofStudents as students}
        <Card
          style="
                border: 0px solid;
                border-image-source: linear-gradient(132.43deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 61.87%);
                background-color: rgba(0, 0, 0, 0.8);
                "
          class="rounded-xl border-0 border-opacity-25 shadow-white"
        >
          <div class="px-4 py-4">
            <div
              class="flex flex-wrap md:flex-nowrap justify-center md:justify-normal
           items-center gap-3"
            >
              <div>
                <img
                  src={students.studentImage}
                  style="border-radius: 50%; object-fit: contain"
                  class="h-[140px] w-[140px]"
                  alt="student1"
                />
              </div>
              <div class="text-center md:text-left">
                <h1 class="font-publicamedium text-xl text-[#FFFFFF]">
                  {students.studentName}
                </h1>
                <div
                  class="font-publicalight mt-2 text-nowrap"
                  style="color: rgba(255, 255, 255, 0.69);"
                >
                  <h1>{students.department}.</h1>
                </div>
                <div class="mt-1 flex justify-center md:flex-none">
                  <img src={students.stars} alt="stars" />
                </div>
              </div>
            </div>
            <div
              class="font-publicalight pt-3 text-center text-[18px] text-[#D8D8D8]"
            >
              <p>
                {students.review}
              </p>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</main>

<style>
  .testimonialhero {
    /* background-image: url(../../../../img/Internship/testimonialhero.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: auto; */
    background-color: #111111;
  }
</style>
