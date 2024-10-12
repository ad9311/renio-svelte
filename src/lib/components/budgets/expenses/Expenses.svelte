<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { PlusOutline } from 'flowbite-svelte-icons';

	import ExpenseAmount from '../ExpenseAmount.svelte';

	import NewExpenseModalForm from './NewExpenseModalForm.svelte';

	import { page } from '$app/stores';
	import type { FullBudget } from '$lib/types/budgets';

	let open = false;

	$: budget = $page.data.budget as FullBudget;

	const openModal = () => {
		open = true;
	};
</script>

<Card size="none">
	<section>
		<div class="flex items-center justify-between">
			<h2 class="title">Expenses</h2>
			<Button size="xs" color="primary" class="py-1 pl-1 pr-2 rounded" on:click={openModal}>
				<PlusOutline size="sm" />
				&nbsp;New
			</Button>
		</div>
		<ul class="mt-4 grid grid-flow-row gap-2 max-h-96 xl:max-h-80 overflow-y-scroll">
			{#each budget.expenses as expense}
				<li class="border-b">
					<a href={`/budgets/${budget.uid}/expenses/${expense.id}`}>
						<div class="px-2 py-1.5 flex items-center justify-between hover:bg-slate-100 rounded">
							<div class="">
								<p class="leading-none">{expense.description}</p>
								<p class="leading-none text-xs text-gray-400">{expense.transactionType.name}</p>
							</div>
							<ExpenseAmount amount={expense.amount} />
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</Card>

<NewExpenseModalForm bind:open />
