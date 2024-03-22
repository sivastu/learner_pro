<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  export let showModal: boolean; // boolean
  let dialog: HTMLDialogElement; // HTMLDialogElement

  onMount(() => {
    let scrolloff;
    if (typeof document !== "undefined") {
      scrolloff = document.body.style.overflow = "hidden";
    }
  });

  $: {
    if (dialog && showModal && typeof document !== "undefined") {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

<dialog
  class=" rounded-2xl px-3 md:px-10 container mx-auto w-[1000px] bg-[#242424] p-0 md:p-2 opacity-90 shadow-2xl"
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <!-- svelte-ignore a11y-autofocus -->
    <div class="flex justify-end bg-transparent">
      <Button
        class="opacity-95 hover:bg-transparent"
        variant="ghost"
        size="icon"
        autofocus
        on:click={() => dialog.close()}
      >
        <Icon
          icon="mingcute:close-fill"
          class="text-3xl"
          style="color: white"
        />
      </Button>
    </div>

    <slot name="header" />
    <slot />
  </div>
</dialog>

<style>
  dialog {
    border: none;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
  dialog > div {
    padding: 10px;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
