<script lang="ts">
	import { Badge } from 'flowbite-svelte';

	import { formatCurrency } from '$lib';

	export let amount: number | null;
</script>

{#if amount}
	<Badge color="green" border>
		{formatCurrency(amount)}
	</Badge>
{:else}
	<Badge color="none" border>
		{formatCurrency(0)}
	</Badge>
{/if}
