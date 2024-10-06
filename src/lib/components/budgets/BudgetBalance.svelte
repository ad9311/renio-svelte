<script lang="ts">
	import { Badge } from 'flowbite-svelte';

	import { formatCurrency } from '$lib';
	import type { FlowbiteColors } from '$lib/types';

	export let balance: number;

	let badgeColor: FlowbiteColors = 'none';

	if (balance > 0) {
		badgeColor = 'green';
	}

	if (balance < 0) {
		badgeColor = 'red';
	}
</script>

<Badge color={badgeColor} border>
	{formatCurrency(balance)}
</Badge>
