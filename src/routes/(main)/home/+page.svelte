<script>
	import { page } from '$app/stores';
	import BudgetAccountInfo from '$lib/components/budgets/BudgetAccountInfo.svelte';
</script>

<BudgetAccountInfo budgetCount={$page.data.budgetCount} budgetAccount={$page.data.budgetAccount} />
