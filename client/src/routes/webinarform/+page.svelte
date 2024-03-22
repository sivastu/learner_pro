<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { createForm } from "svelte-forms-lib";
  import config from "$lib/config";
  import * as yup from "yup";
  import axios from "axios";
  import { toast } from "svelte-sonner";
  import { onMount } from "svelte";

  let gradientColor1 = "#424242";
  let gradientColor2 = "#353535";

  const positions = [
    { value: "workingprofessional", label: "Working Professional" },
    { value: "lookingforcareer", label: "Looking For Career" },
    { value: "student", label: "Student" },
  ];

  const {
    handleReset,
    errors,
    touched,
    isValid,
    isSubmitting,
    form,
    state,
    handleChange,
    handleSubmit,
  } = createForm({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      certificateName: "",
      currentPosition: "student",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is required"),
      email: yup.string().required("Email is required").email("Invalid email"),
      phoneNumber: yup
        .string()
        .required("Phone number is required")
        .min(10, "phone number should be 10")
        .max(10, "phone number should be 10"),
      certificateName: yup.string().required("Certificate Name is required"),
      currentPosition: yup
        .string()
        .required("Current Position is required")
        .oneOf(["workingprofessional", "lookingforcareer", "student"]),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${config.BaseUrl}webinar/register`,
          values
        );
        console.log(response);
        if (response.data.ok === true) {
          toast(`${response.data.message}`, {
            duration: 3000,
            position: "top-center",
            style:
              "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
          });
        }
      } catch (error: any) {
        toast(`${error.response.data.message}`, {
          duration: 3000,
          position: "top-center",
          class: "bg-red-500",
          style:
            "border-radius: 20px; background: white; color: black; font-size: 17px; font-family: 'ZPublicaSans', sans-serif;",
        });
        console.log(error);
      }
      // empty the fields

      values.name = "";
      values.email = "";
      values.phoneNumber = "";
      values.certificateName = "";
      values.currentPosition = "";
    },
  });
</script>

<section
  class="h-[100vh] flex items-center justify-center"
  style="background: radial-gradient(circle, {gradientColor1}, {gradientColor2})"
>
  <div
    class=" px-10 py-10 rounded-2xl w-[600px] container mx-auto bg-[#242424] p-2 shadow-2xl"
  >
    <h2 class="font-publicaz text-herodesc text-center text-4xl">
      Webinar Form
    </h2>

    <form
      class:valid={$isValid}
      method="POST"
      on:submit={handleSubmit}
      class=""
    >
      <div class="">
        <div class="input-group">
          <input
            name="name"
            on:keyup={handleChange}
            class="font-publicaz w-full py-3 indent-4 md:text-lg"
            type="text"
          />
          <label for="" class="text-base font-inter">Name</label>
          {#if $errors.name && $touched.name}
            <p class="text-red-500 font-gilroy">{$errors.name}</p>
          {/if}
        </div>

        <div class="input-group">
          <input
            name="email"
            class="font-publicaz w-full py-3 indent-4 md:text-lg"
            type="text"
            on:keyup={handleChange}
          />
          <label for="" class="text-base font-inter">E-mail</label>
          {#if $errors.email && $touched.email}
            <p class="text-red-500 font-gilroy">{$errors.email}</p>
          {/if}
        </div>
        <div class="input-group">
          <input
            class="font-publicaz w-full py-3 indent-4 md:text-lg"
            type="text"
            on:keyup={handleChange}
            name="phoneNumber"
          />
          <label for="" class="text-base font-inter">Mobile Number</label>
          {#if $errors.phoneNumber && $touched.phoneNumber}
            <p class="text-red-500 font-gilroy">{$errors.phoneNumber}</p>
          {/if}
        </div>
        <div class="input-group">
          <input
            class="font-publicaz w-full py-3 indent-4 md:text-lg"
            type="text"
            on:keyup={handleChange}
            name="certificateName"
          />
          <label for="" class="text-base font-inter"
            >Name in certificate
          </label>
          {#if $errors.certificateName && $touched.certificateName}
            <p class="text-red-500 font-gilroy">{$errors.certificateName}</p>
          {/if}
        </div>
        <div class="">
          <div class="pb-2 px-2">
            <label for="" class="text-base -3 text-white font-inter"
              >Current Position
            </label>
          </div>
          <select
            class="font-publicaz w-full py-3 bg-black text-white indent-4 outline-none bg- md:text-lg"
            name="currentPosition"
            on:change={handleChange}
          >
            <option value="">Select Position</option>
            {#each positions as position}
              <option value={position.value}>
                {position.label}
              </option>
            {/each}
          </select>
          {#if $errors.currentPosition && $touched.currentPosition}
            <p class="text-red-500 font-gilroy">{$errors.currentPosition}</p>
          {/if}
        </div>
      </div>

      <div class="flex justify-center px-10 pt-4">
        <Button
          type="submit"
          style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);
          "
          class="text-herodesc font-publicbold w-full rounded-full py-8 text-[20px] "
          >Submit</Button
        >
      </div>
    </form>
  </div>
</section>

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
</style>
