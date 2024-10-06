<script lang="ts">
	import { Card } from 'flowbite-svelte';

	import type { Budget } from '$lib/types/budgets';

	export let budget: Budget;
</script>

<Card class="max-w-full">
	<section>
		<h2 class="title">Current budget</h2>
		<h3 class="mt-8 title-primary text-center">
			{budget.month}-{budget.year}
		</h3>
	</section>
	<div class="mt-6 text-center">
		Balance:
		<p>{budget.balance}</p>
	</div>
	<div class="mt-4 grid grid-cols-2 gap-4 text-center">
		<div>
			Income:
			<p>{budget.totalIncome}</p>
		</div>
		<div>
			Expenses:
			<p>{budget.totalExpenses}</p>
		</div>
	</div>
</Card>
