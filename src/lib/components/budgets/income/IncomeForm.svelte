<script lang="ts">
	import { Input, Label, Textarea, Select, Button } from 'flowbite-svelte';

	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import FormErrorList from '$lib/components/FormErrorList.svelte';
	import { budgetStore, transactionTypesStore } from '$lib/stores/budget';

	export let action: string;

	const selectValues = $transactionTypesStore.map(t => ({
		value: t.id,
		name: t.name,
	}));
</script>

{#if $page.form?.errors}
	<FormErrorList errors={$page.form.errors} />
{/if}

<form method="POST" class="form" {action} use:enhance>
	<input id="budget_uid" type="hidden" name="budget_uid" value={$budgetStore.uid} />
	<fieldset>
		<Label for="transaction_type_id">Transaction type</Label>
		<Select id="transaction_type_id" name="transaction_type_id" items={selectValues} />
	</fieldset>
	<fieldset>
		<Label for="description">Description</Label>
		<Textarea id="description" name="description" placeholder="Write something here..." />
	</fieldset>
	<fieldset>
		<Label for="amount">Amount</Label>
		<Input type="number" id="amount" name="amount" placeholder="100.99" step="0.01" min="1" />
	</fieldset>
	<fieldset class="actions">
		<Button type="submit">Submit</Button>
	</fieldset>
</form>
