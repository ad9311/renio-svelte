<script lang="ts">
	import type { FormErrors } from "$lib/types/common";
  import { Alert } from 'flowbite-svelte';
  import { InfoCircleSolid } from 'flowbite-svelte-icons';

  export let errors: FormErrors;
</script>

{#if errors}
  <Alert class="!items-start" color="red">
    <span slot="icon">
      <InfoCircleSolid class="w-5 h-5" />
      <span class="sr-only">Info</span>
    </span>
    <p class="font-medium">This form has some errors:</p>
    <ul class="ms-2 list-disc list-inside">
      {#each errors as error}
        <li class="text-xs">{error}</li>
      {/each}
    </ul>
  </Alert>
{/if}
