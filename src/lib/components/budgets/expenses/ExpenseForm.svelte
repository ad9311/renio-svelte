<script lang="ts">
	import { Input, Label, Textarea, Select, Button } from 'flowbite-svelte';

	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import FormErrorList from '$lib/components/FormErrorList.svelte';
	import type { TransactionType, Transaction } from '$lib/types/budgets';

	export let action: string;

	$: expense = $page.data.expense as Transaction;

	const transactionTypes = $page.data.transactionTypes as TransactionType[];
	const selectValues = transactionTypes.map(t => ({
		value: t.id,
		name: t.name,
	}));
</script>

{#if $page.form?.errors}
	<FormErrorList errors={$page.form.errors} />
{/if}

<form method="POST" class="form" {action} use:enhance>
	<input id="budget_uid" type="hidden" name="budget_uid" value={$page.params.uid} />
	{#if expense}
		<input id="expense_id" type="hidden" name="expense_id" value={expense.id} />
	{/if}
	<fieldset>
		<Label for="transaction_type_id">Transaction type</Label>
		<Select
			id="transaction_type_id"
			name="transaction_type_id"
			items={selectValues}
			value={expense?.transactionType.id}
		/>
	</fieldset>
	<fieldset>
		<Label for="description">Description</Label>
		<Textarea
			id="description"
			name="description"
			placeholder="Write something here..."
			value={expense?.description}
		/>
	</fieldset>
	<fieldset>
		<Label for="amount">Amount</Label>
		<Input
			type="number"
			id="amount"
			name="amount"
			placeholder="100.99"
			step="0.01"
			min="1"
			value={expense?.amount}
		/>
	</fieldset>
	<fieldset class="actions">
		<Button type="submit">Submit</Button>
	</fieldset>
</form>
