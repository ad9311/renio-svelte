<script lang="ts">
	import { Badge } from 'flowbite-svelte';

	import { formatCurrency } from '$lib';

	export let amount: number | null;
</script>

<Badge color="green" border>
	{#if amount}
		{formatCurrency(amount)}
	{:else}
		{formatCurrency(0)}
	{/if}
</Badge>
