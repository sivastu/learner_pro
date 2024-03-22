<!-- <script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Select from "$lib/components/ui/select";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";

  const positions = [
    { value: "workingprofessional", label: "Working Professional" },
    { value: "lookingforcareer", label: "Looking For Career" },
    { value: "student", label: "Student" },
  ];

  const { errors, touched, isValid, isSubmitting, handleChange, handleSubmit } =
    createForm({
      initialValues: {
        name: "",
        email: "",
        phoneNumber: "",
        certificateName: "",
        currentPosition: "",
      },
      validationSchema: yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .required("Email is required")
          .email("Invalid email"),
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
      onSubmit: (values) => {
        // alert(JSON.stringify(values, null, 2));
        console.log(values);
      },
    });
</script>

<section
  class="h-[100vh] flex items-center justify-center"
  style="background: radial-gradient(circle, #424242, #353535)"
>
  <div
    class="px-10 py-10 rounded-2xl w-[600px] container mx-auto bg-[#242424] p-2 shadow-2xl"
  >
    <h2 class="font-publicaz text-herodesc text-center text-4xl">
      Webinar Form
    </h2>

    <form class:valid={$isValid} method="POST" on:submit={handleSubmit}>
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
        <label for="" class="text-base font-inter">Name in certificate </label>
        {#if $errors.certificateName && $touched.certificateName}
          <p class="text-red-500 font-gilroy">{$errors.certificateName}</p>
        {/if}
      </div>
      <div class="input-group">
        <select name="currentPosition" on:change={handleChange}>
          {#each positions as position}
            <option value={position.value}>
              {position.label}
            </option>
          {/each}
        </select>
      </div>

      <div class="flex justify-center px-10 pt-4">
        <Button
          type="submit"
          style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%)"
          class="text-herodesc font-publicbold w-full rounded-full py-8 text-[20px]"
        >
          Submit
        </Button>
      </div>
    </form>
  </div>
</section> -->

<!-- <script>
  import Button from "$lib/components/ui/button/button.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";

  const { errors, touched, isValid, isSubmitting, handleChange, handleSubmit } =
    createForm({
      initialValues: {
        status: "",
      },
      validationSchema: yup.object().shape({
        status: yup
          .string()
          .required("Status is required")
          .oneOf(["online", "offline"]),
      }),
      onSubmit: async (values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      },
    });
</script>

<form class:valid={$isValid} method="POST" on:submit={handleSubmit}>
  <ol class="flex gap-20">
    <li class="4">
      <input
        on:change={handleChange}
        class=""
        type="checkbox"
        name="status"
        id="online"
        value="online"
      />
      <Label class="font-publicbold text-3xl" for="online">Online</Label>
    </li>
    <li class="flex items-center gap-4">
      <input type="checkbox" value="offline" name="status" id="offline" />
      <Label for="offline" class="font-publicbold text-3xl">offline</Label>
    </li>
  </ol>
  <Button
    type="submit"
    style="background: linear-gradient(82.96deg, #212443 -29.79%, #FF3434 -29.77%, #006CDB -9.84%, #E51057 108.39%, #212443 161.74%);
"
    class="text-herodesc font-publicbold mt-6 rounded-full py-6 text-[20px] "
    >Submit</Button
  >
</form> -->
<script>
  // @ts-nocheck

  let name = "";
  let mobileNumber = "";

  /**
   * @param {{ preventDefault: () => void; target: HTMLFormElement | undefined; }} event
   */
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Mobile Number:", mobileNumber);

    const formData = new FormData(event.target);
    const response = await fetch("/api/form", {
      method: "POST",
      body: formData,
    });

    // if (!response.ok) {
    //   console.error("Error submitting form:", await response.text());
    //   return;
    // }

    // console.log("Form submitted successfully!");
    // name = "";
    // mobileNumber = "";
  }
</script>

<form on:submit={handleSubmit}>
  <label for="name">Name:</label>
  <input type="text" id="name" bind:value={name} required />

  <label for="mobileNumber">Mobile Number:</label>
  <input type="tel" id="mobileNumber" bind:value={mobileNumber} required />

  <button type="submit">Submit</button>
</form>
