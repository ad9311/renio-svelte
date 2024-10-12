<script lang="ts">
	import { Card } from 'flowbite-svelte';

	import BudgetBalance from './BudgetBalance.svelte';
	import ExpenseAmount from './ExpenseAmount.svelte';
	import IncomeAmount from './IncomeAmount.svelte';

	import { page } from '$app/stores';

	$: budget = $page.data.budget;
</script>

<Card size="none">
	<section>
		<h2 class="title">Budget</h2>
		<div class="max-w-96 mx-auto">
			<h3 class="mt-8 title-primary text-center">
				{budget.month}-{budget.year}
			</h3>
			<div class="mt-4 text-center">
				Balance:
				<p>
					<BudgetBalance balance={budget.balance} />
				</p>
			</div>
			<div class="pb-4 mt-4 grid grid-cols-2 gap-4 text-center">
				<div>
					Income:
					<p>
						<IncomeAmount amount={budget.totalIncome} />
					</p>
				</div>
				<div>
					Expenses:
					<p>
						<ExpenseAmount amount={budget.totalExpenses} />
					</p>
				</div>
			</div>
		</div>
	</section>
</Card>
