<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { PlusOutline } from 'flowbite-svelte-icons';

	import IncomeAmount from '../IncomeAmount.svelte';

	import NewIncomeModalForm from './NewIncomeModalForm.svelte';

	import { selectedBudget } from '$lib/stores/budget';

	let open: boolean = false;

	const budget = $selectedBudget;
	const openModal = () => {
		open = true;
	};
</script>

<Card size="none">
	<section>
		<div class="flex items-center justify-between">
			<h2 class="title">Income list</h2>
			<Button size="xs" color="primary" class="py-1 pl-1 pr-2 rounded" on:click={openModal}>
				<PlusOutline size="sm" />
				&nbsp;New
			</Button>
		</div>
		<ul class="mt-4 grid grid-flow-row gap-2">
			{#each budget.incomeList as income}
				<li class="border-b">
					<a href={`/budgets/${budget.uid}/income-list/${income.id}`}>
						<div class="px-2 py-1.5 flex items-center justify-between hover:bg-slate-100 rounded">
							<div class="">
								<p class="leading-none">{income.description}</p>
								<p class="leading-none text-xs text-gray-400">{income.transactionType.name}</p>
							</div>
							<IncomeAmount amount={income.amount} />
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</Card>

<NewIncomeModalForm bind:open />
