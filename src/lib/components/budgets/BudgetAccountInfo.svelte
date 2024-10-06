<script lang="ts">
	import { Card, Hr } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareSolid } from 'flowbite-svelte-icons';

	import type { BudgetAccount } from '$lib/types/budgets';

	export let budgetAccount: BudgetAccount;

	const currentBudget = budgetAccount.currentBudget;
</script>

<Card class="max-w-full">
	<section>
		<h2 class="title">Accounts info</h2>
		<div class="mt-4">
			<div class="flex items-center gap-1">
				<h3 class="subtitle">Budgets</h3>
				<a href="/">
					<ArrowUpRightFromSquareSolid size="sm" />
				</a>
			</div>
			<p class="text-sm">Budget count: 12</p>
		</div>
		<Hr hrClass="my-4" />
		<div>
			<div class="flex items-center gap-1">
				<h3 class="subtitle">Current budget</h3>
				<a href="/">
					<ArrowUpRightFromSquareSolid size="sm" />
				</a>
			</div>
			{#if currentBudget}
				<p class="text-sm">Balance: {currentBudget.balance}</p>
				<p class="text-sm">Last expense: {currentBudget.lastExpenseAmount}</p>
			{:else}
				<p class="text-sm text-gray-400 text-center">No budget for this month</p>
			{/if}
		</div>
	</section>
</Card>
