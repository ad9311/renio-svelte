<script lang="ts">
	import { page } from '$app/stores';
	import type { Budget } from '$lib/types/budgets';

	const budget: Budget | null = $page.data.budget;
</script>

{#if budget}
	<section>
		<h2>{budget.month}-{budget.year}</h2>
	</section>
{/if}
