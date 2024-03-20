<script>
  import * as RadioGroup from "./../../../lib/components/ui/radio-group";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Card } from "$lib/components/ui/card";
  import card1 from "../../../img/Internship/card1.svg";
  import card2 from "../../../img/Internship/card2.svg";
  import card3 from "../../../img/Internship/card3.svg";
  import card4 from "../../../img/Internship/card4.svg";
  import Modal from "./Modal.svelte";
  import { Label } from "$lib/components/ui/label";
  import { createForm } from "svelte-forms-lib";
  import config from "$lib/config";
  import * as yup from "yup";
  import axios from "axios";
  import { toast } from "svelte-sonner";

  let showModal = true;

  const { errors, touched, isValid, isSubmitting, handleChange, handleSubmit } =
    createForm({
      initialValues: {
        name: "",
        collegeName: "",
        email: "",
        fieldofStudy: "",
        phoneNumber: "",
      },
      validationSchema: yup.object().shape({
        name: yup.string().required("Name is required"),
        collegeName: yup.string().required("College Name is required"),
        email: yup.string().required("Email is required"),
        fieldofStudy: yup.string().required("Field of Study is required"),
        phoneNumber: yup
          .string()
          .required("Phone Number is required")
          .min(10, "phone number should be 10")
          .max(10, "phone number should be 10"),
      }),
      onSubmit: async (values) => {
        console.log(values);
      },
    });
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
    <Button
      on:click={() => (showModal = true)}
      style="background: linear-gradient(82.96deg, #FFFFFF -29.79%, #FF3434 -29.77%, #00B4DB -9.84%, #E9E9E9 108.39%, #212443 161.74%);"
      class="font-publicbold rounded-full px-6 md:px-12 py-6 md:py-8 text-[20px] text-[#000000]"
      >APPLY NOW</Button
    >
  </div>
</main>
<Modal bind:showModal>
  <h2 slot="header" class="font-publicaz text-herodesc text-center text-4xl">
    Complete Your Application
  </h2>

  <form class:valid={$isValid} method="POST" on:submit={handleSubmit}>
    <ol class="definition-list mt-10 flex justify-evenly">
      <li class="flex items-center gap-4">
        <input class="" type="checkbox" name="" id="" />
        <p class="font-publicbold text-3xl">Online</p>
      </li>
      <li class="flex items-center gap-4">
        <input type="checkbox" name="" id="" />
        <p class="font-publicbold text-3xl">offline</p>
      </li>
    </ol>
    <div class=" grid grid-cols-2 gap-x-8 pt-5">
      <div class="input-group">
        <input
          name="name"
          on:keyup={handleChange}
          class="font-publicaz w-full py-3 indent-4 md:text-lg"
          type="text"
        />
        <label for="" class="text-base font-inter">Name</label>
        {#if $errors.name && $touched.name}
          <small class="text-red-500 font-gilroy">{$errors.name}</small>
        {/if}
      </div>
      <div class="input-group">
        <input
          name="collegeName"
          on:keyup={handleChange}
          class="font-publicaz w-full py-3 indent-4 md:text-lg"
          type="text"
        />
        <label for="" class="text-base font-inter">College Name</label>
        {#if $errors.collegeName && $touched.collegeName}
          <small class="text-red-500 font-gilroy">{$errors.collegeName}</small>
        {/if}
      </div>
      <div class="input-group">
        <input
          name="email"
          on:keyup={handleChange}
          class="font-publicaz w-full py-3 indent-4 md:text-lg"
          type="text"
        />
        <label for="" class="text-base font-inter">E-Mail</label>
        {#if $errors.email && $touched.email}
          <small class="text-red-500 font-gilroy">{$errors.email}</small>
        {/if}
      </div>
      <div class="input-group">
        <input
          name="fieldofStudy"
          on:keyup={handleChange}
          class="font-publicaz w-full py-3 indent-4 md:text-lg"
          type="text"
        />
        <label for="" class="text-base font-inter">Field of Study</label>
        {#if $errors.fieldofStudy && $touched.fieldofStudy}
          <small class="text-red-500 font-gilroy">{$errors.fieldofStudy}</small>
        {/if}
      </div>
      <div class="input-group">
        <input
          name="phoneNumber"
          on:keyup={handleChange}
          class="font-publicaz w-full py-3 indent-4 md:text-lg"
          type="text"
        />
        <label for="" class="text-base font-inter">Phone Number</label>
        {#if $errors.phoneNumber && $touched.phoneNumber}
          <small class="text-red-500 font-gilroy">{$errors.phoneNumber}</small>
        {/if}
      </div>
      <div class="input-group">
        <select
          class="font-publicaz w-full border border-white py-4 bg-transparent text-white indent-4 md:text-lg"
          name="currentPosition"
        >
          <option value="">Area of Interest</option>
        </select>
      </div>
      <div class="input-group gender border border-white">
        <h1
          class="border inline relative -top-3 left-1 text-base bg-[#111111] font-inter"
        >
          gender
        </h1>
        <div class="">
          <RadioGroup.Root value="comfortable">
            <div class="flex gap-10 px-10 items-center">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="default" id="r1" />
                <Label for="r1">Default</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="comfortable" id="r2" />
                <Label for="r2">Comfortable</Label>
              </div>
            </div>
            <RadioGroup.Input name="spacing" />
          </RadioGroup.Root>
        </div>
      </div>
      <div class="input-group">
        <input class="font-publicaz w-full py-4 indent-4" type="file" />
        <label for="" class="text-base font-inter"
          >Upload Identity Card/Resume
        </label>
      </div>
    </div>

    <div class="flex justify-center px-10 pt-4">
      <Button
        type="submit"
        style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);
      "
        class="text-herodesc font-publicbold w-full rounded-full py-6 text-[20px] "
        >Submit</Button
      >
    </div>
  </form>
</Modal>

<style>
  .input-group {
    position: relative;
    margin: 25px 0;
  }
  .input-group label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }
  .input-group input {
    color: seashell;
    background-color: transparent;
    border: 1.2px solid #fff;
    outline: none;
    border-radius: 5px;
  }
  .input-group input:focus ~ label,
  .input-group input:valid ~ label {
    top: 0;
    background-color: #111111;
  }
  select,
  .gender {
    background-color: transparent;
    border: 1.2px solid #fff;
    outline: none;
    border-radius: 5px;
  }
</style>
