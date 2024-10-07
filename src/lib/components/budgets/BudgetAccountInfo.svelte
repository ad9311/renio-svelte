<script lang="ts">
	import { Card, Hr } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareSolid } from 'flowbite-svelte-icons';

	import BudgetBalance from './BudgetBalance.svelte';
	import ExpenseAmount from './ExpenseAmount.svelte';

	import type { BudgetAccount } from '$lib/types/budgets';

	export let budgetAccount: BudgetAccount | null;
	export let budgetCount: number;

	const currentBudget = budgetAccount?.currentBudget;
</script>

<Card class="max-w-full">
	<section>
		<h2 class="title">Accounts info</h2>
		<div class="mt-4">
			<div class="flex items-center gap-1">
				<h3 class="subtitle">Budgets</h3>
				<a href="/budgets">
					<ArrowUpRightFromSquareSolid size="sm" />
				</a>
			</div>
			<p class="mt-2 text-sm">Budget count: <span class="font-semibold">{budgetCount}</span></p>
		</div>
		<Hr hrClass="my-4" />
		<div>
			<div class="flex items-center gap-1">
				<h3 class="subtitle">Current budget</h3>
				{#if currentBudget}
					<a href={`/budgets/${currentBudget.uid}`}>
						<ArrowUpRightFromSquareSolid size="sm" />
					</a>
				{/if}
			</div>
			{#if currentBudget}
				<div class="mt-2 grid grid-flow-row gap-1">
					<div class="grid grid-cols-2">
						<p class="text-sm">Balance:</p>
						<div class="w-fit">
							<BudgetBalance balance={currentBudget.balance} />
						</div>
					</div>
					<div class="grid grid-cols-2">
						<p class="text-sm">Last expense:</p>
						<div class="w-fit">
							<ExpenseAmount amount={currentBudget.lastExpenseAmount} />
						</div>
					</div>
				</div>
			{:else}
				<p class="mt-2 text-sm text-gray-400 text-center">No budget for this month</p>
			{/if}
		</div>
	</section>
</Card>
