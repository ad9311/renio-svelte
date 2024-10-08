<script lang="ts">
	import { Card } from 'flowbite-svelte';

	import { page } from '$app/stores';
	import BudgetInfo from '$lib/components/budgets/BudgetInfo.svelte';
	import type { FullBudget } from '$lib/types/budgets';

	const budget: FullBudget | null = $page.data.budget;
</script>

{#if budget}
	<div class="grid grid-flow-row gap-4 lg:gap-6">
		<div class="grid grid-flow-row gap-4 lg:grid-flow-col lg:gap-4">
			<BudgetInfo {budget} />
			<Card size="none">
				<h2 class="title">Income list</h2>
			</Card>
		</div>
		<div class="grid grid-flow-row gap-4 lg:grid-flow-col lg:gap-4">
			<Card size="none">
				<h2 class="title">Expenses</h2>
			</Card>
			<Card size="none">
				<h2 class="title">Graph</h2>
			</Card>
		</div>
	</div>
{/if}
