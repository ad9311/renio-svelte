<script>
	import { page } from '$app/stores';
	import BudgetAccountInfo from '$lib/components/budgets/BudgetAccountInfo.svelte';
</script>

<BudgetAccountInfo budgetAccount={$page.data.budgetAccount} />
