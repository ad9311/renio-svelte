<script lang="ts">
	import { Card } from 'flowbite-svelte';

	import BudgetInfo from '$lib/components/budgets/BudgetInfo.svelte';
	import IncomeList from '$lib/components/budgets/income/IncomeList.svelte';
</script>

<div class="grid grid-flow-row gap-4 lg:gap-6">
	<div class="grid grid-flow-row gap-4 lg:grid-flow-col lg:gap-4">
		<BudgetInfo />
		<IncomeList />
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
