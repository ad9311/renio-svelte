<script lang="ts">
	import { Badge } from 'flowbite-svelte';

	export let amount: number | null;
</script>

<Badge color="red" border>
	{#if amount}
		{amount}
	{:else}
		0
	{/if}
</Badge>
