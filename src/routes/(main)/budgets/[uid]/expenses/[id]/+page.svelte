<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { TrashBinSolid } from 'flowbite-svelte-icons';

	import { page } from '$app/stores';
	import ExpenseAmount from '$lib/components/budgets/ExpenseAmount.svelte';
	import DeleteExpenseModalForm from '$lib/components/budgets/expenses/DeleteExpenseModalForm.svelte';
	import EditExpenseModalForm from '$lib/components/budgets/expenses/EditExpenseModalForm.svelte';

	$: expense = $page.data.expense;

	let openEdit: boolean = false;
	let openDelete: boolean = false;

	const openEditModal = () => {
		openEdit = true;
	};

	const openDeleteModal = () => {
		openDelete = true;
	};
</script>

<Card size="sm" class="mx-auto">
	<h2 class="title">Expense</h2>
	<div class="mt-2 grid grid-flow-row gap-1">
		<div class="grid grid-cols-2">
			<p class="text-sm">Transaction:</p>
			<p class="text-sm">{expense.transactionType.name}</p>
		</div>
		<div class="grid grid-cols-2">
			<p class="text-sm">Description:</p>
			<p class="text-sm">{expense.description}</p>
		</div>
		<div class="grid grid-cols-2 items-center">
			<p class="text-sm">Amount:</p>
			<ExpenseAmount amount={expense.amount} />
		</div>
	</div>
	<div class="mt-8 flex items-center justify-between">
		<Button class="!p-2" color="none" on:click={openDeleteModal}>
			<TrashBinSolid size="md" color="red" />
		</Button>
		<Button on:click={openEditModal}>Edit</Button>
	</div>
</Card>

<EditExpenseModalForm bind:open={openEdit} />
<DeleteExpenseModalForm bind:open={openDelete} />
