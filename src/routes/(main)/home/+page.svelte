<script>
	import { Card } from 'flowbite-svelte';

	import { page } from '$app/stores';
	import BudgetAccountInfo from '$lib/components/budgets/BudgetAccountInfo.svelte';
</script>

<div class="grid grid-flow-row gap-4 lg:gap-6">
	<div class="grid grid-flow-row gap-4 lg:grid-flow-col lg:gap-4">
		<BudgetAccountInfo
			budgetCount={$page.data.budgetCount}
			budgetAccount={$page.data.budgetAccount}
		/>
		<Card class="max-w-full">
			<h2 class="title">Lists</h2>
		</Card>
	</div>
	<div class="grid grid-flow-row gap-4">
		<Card class="max-w-full">
			<h2 class="title">Notes</h2>
		</Card>
	</div>
</div>
