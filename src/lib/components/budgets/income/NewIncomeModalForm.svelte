<script lang="ts">
	import { Modal } from 'flowbite-svelte';

	import IncomeForm from './IncomeForm.svelte';

	import { page } from '$app/stores';
	import FormErrors from '$lib/components/FormErrors.svelte';

	export let open: boolean = false;

	const form = $page.form;
</script>

<Modal
	title="New income"
	bind:open
	size="sm"
	headerClass="title flex justify-between items-center p-4 md:p-5 rounded-t-lg"
>
	{#if form?.errors}
		<FormErrors errors={form?.errors} />
	{/if}
	<IncomeForm action="?/createIncome" />
</Modal>
