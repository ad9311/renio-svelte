<script lang="ts">
	import { Card } from 'flowbite-svelte';

	import { page } from '$app/stores';
	import BudgetAccountInfo from '$lib/components/budgets/BudgetAccountInfo.svelte';
	import type { BudgetAccount } from '$lib/types/budgets';

	const budgetAccount: BudgetAccount = $page.data.budgetAccount;
	const budgetCount: number = $page.data.budgetCount;
</script>

<div class="grid grid-flow-row gap-4 lg:gap-6">
	<div class="grid grid-flow-row gap-4 lg:grid-flow-col lg:gap-4">
		<BudgetAccountInfo {budgetAccount} {budgetCount} />
		<Card size="none">
			<h2 class="title">Lists</h2>
		</Card>
	</div>
	<div class="grid grid-flow-row gap-4">
		<Card size="none">
			<h2 class="title">Notes</h2>
		</Card>
	</div>
</div>
