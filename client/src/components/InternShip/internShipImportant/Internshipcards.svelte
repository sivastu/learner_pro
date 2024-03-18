<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { Card } from "$lib/components/ui/card";
  import card1 from "../../../img/Internship/card1.svg";
  import card2 from "../../../img/Internship/card2.svg";
  import card3 from "../../../img/Internship/card3.svg";
  import card4 from "../../../img/Internship/card4.svg";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import close from "../../../img/Internship/close.svg";
  import Modal from "./Modal.svelte";

  let showModal = true;
</script>

<main class="bg-internherobg min-h-screen w-full overflow-x-hidden text-white">
  <div
    class="text-internheading font-publicaz mt-6 px-5 text-center text-xl md:text-[35px] xl:text-[50px]"
  >
    <h1>Why Internship is Important ?</h1>
  </div>

  <div class="py-6 md:py-14 flex justify-center container mx-auto">
    <div class="grid grid-cols-1 items-stretch gap-5 md:gap-10 md:grid-cols-2">
      <Card
        class=" w-[300px] md:w-[400px] rounded-2xl border-0 bg-gradient-to-br  from-[#000000] to-[#1F5382] px-4 md:px-8 py-2 md:py-4"
        style=""
      >
        <div>
          <img
            class="bg-interncard rounded-2xl border-0 p-3"
            src={card1}
            alt=""
          />
        </div>
        <div class="font-publicaz mt-4 text-base md:text-[20px] text-[#FFFFFF]">
          <p>
            Immerse yourself in real-world challenges and gain valuable hands-on
            experience through our live project internships.
          </p>
        </div>
      </Card>
      <Card
        class="w-[300px] md:w-[400px] rounded-2xl border-0 bg-gradient-to-br  from-[#000000] to-[#1F5382] px-4 md:px-8 py-2 md:py-4"
        style=""
      >
        <div>
          <img
            class="bg-interncard rounded-2xl border-0 p-3"
            src={card2}
            alt=""
          />
        </div>
        <div class="font-publicaz mt-4 text-base md:text-[20px] text-[#FFFFFF]">
          <p>
            Gain practical skills and apply your knowledge to real-world
            projects during your internship with us.
          </p>
        </div>
      </Card>
      <Card
        class="w-[300px] md:w-[400px] rounded-2xl border-0 bg-gradient-to-br  from-[#000000] to-[#1F5382] px-4 md:px-8 md:py-4"
        style=""
      >
        <div>
          <img
            class="bg-interncard rounded-2xl border-0 p-3"
            src={card3}
            alt=""
          />
        </div>
        <div class="font-publicaz mt-4 text-base md:text-[20px] text-[#FFFFFF]">
          <p>
            Experience the thrill of working on live projects and gain
            invaluable experience in our internship program.
          </p>
        </div>
      </Card>
      <Card
        class="w-[300px] md:w-[400px] rounded-2xl border-0 bg-gradient-to-br  from-[#000000] to-[#1F5382] px-4 md:px-8 py-2 md:py-4"
        style=""
      >
        <div>
          <img
            class="bg-interncard rounded-2xl border-0 p-3"
            src={card4}
            alt=""
          />
        </div>
        <div class="font-publicaz mt-4 text-base md:text-[20px] text-[#FFFFFF]">
          <p>
            Demonstrate your value by taking ownership of impactful projects
            during your internship.
          </p>
        </div>
      </Card>
    </div>
  </div>
  <div
    class="text-internheading font-publicaz md:pt-10 text-center text-xl md:text-[30px] xl:text-[35px]"
  >
    <h1>Kickstart Your Career With Our Internship Program!</h1>
  </div>
  <div class="py-4 md:py-16 mt-3 flex justify-center">
    <!-- <AlertDialog.Root>
			<AlertDialog.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					style="background: linear-gradient(82.96deg, #FFFFFF -29.79%, #FF3434 -29.77%, #00B4DB -9.84%, #E9E9E9 108.39%, #212443 161.74%);"
					class="font-publicbold rounded-full px-12 py-8 text-[20px] text-[#000000]"
					>APPLY NOW</Button
				>
			</AlertDialog.Trigger>
			<AlertDialog.Content class="w-[40%] border-0 bg-[#242424] p-2  ">
				<div class="flex justify-end px-10">
					<AlertDialog.Cancel class=" border-0 bg-[#242424]  hover:bg-transparent">
						<img src={close} class="h-[15px]" alt="" />
					</AlertDialog.Cancel>
				</div>
				<div class="font-publicaz text-herodesc flex justify-center text-4xl">
					<h1>Complete Your Application</h1>
				</div>
				<div class="">
					<form action=""></form>
				</div>
			</AlertDialog.Content>
		</AlertDialog.Root> -->
    <Button
      on:click={() => (showModal = true)}
      style="background: linear-gradient(82.96deg, #FFFFFF -29.79%, #FF3434 -29.77%, #00B4DB -9.84%, #E9E9E9 108.39%, #212443 161.74%);"
      class="font-publicbold rounded-full px-6 md:px-12 py-6 md:py-8 text-[20px] text-[#000000]"
      >APPLY NOW</Button
    >
    <Modal bind:showModal>
      <h2
        slot="header"
        class="font-publicaz text-herodesc text-center text-4xl"
      >
        Complete Your Application
      </h2>

      <ol class="definition-list mt-4 flex justify-evenly">
        <li>online</li>
        <li>offline</li>
      </ol>

      <form class=" ">
        <div
          class="grid grid-cols-2 items-center justify-center gap-x-5 px-10 pt-5"
        >
          <div class="input-group">
            <input class="font-publicaz" type="text" />
            <label for="" class="font-inter">Name</label>
          </div>
          <div class="input-group">
            <input class="font-publicaz" type="text" />
            <label for="" class="font-inter">College Name</label>
          </div>
          <div class="input-group">
            <input class="font-publicaz" type="text" />
            <label for="" class="font-inter">E-Mail</label>
          </div>
          <div class="input-group">
            <input class="font-publicaz" type="text" />
            <label for="" class="font-inter">Field of Study</label>
          </div>
          <div class="input-group">
            <input class="font-publicaz" type="text" />
            <label for="" class="font-inter">Phone Number</label>
          </div>
          <div class="input-group">
            <input class="font-publicaz" type="text" />
            <label for="" class="font-inter">Name</label>
          </div>
        </div>

        <div class="flex justify-center px-10 pt-4">
          <Button
            style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);
					"
            class="text-herodesc font-publicbold w-full rounded-full py-6 text-[20px] "
            >Submit</Button
          >
        </div>
      </form>
    </Modal>
  </div>
</main>

<style>
  .input-group {
    position: relative;
    margin: 20px 0;
  }
  .input-group label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 16px;
    color: #fff;
    padding: 0 5px;
    pointer-events: none;
    transition: 0.5s;
  }
  .input-group input {
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
    color: #fff;
    background-color: transparent;
    /* border: 3px solid;
		border-image-source: linear-gradient(180deg, #444444 0%, #959595 100%); */
    border: 1.2px solid #fff;
    outline: none;
    border-radius: 5px;
  }
  .input-group input:focus ~ label,
  .input-group input:valid ~ label {
    top: 0;
    font-size: 12px;
    background-color: #111111;
  }
</style>
