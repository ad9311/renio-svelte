<script lang="ts">
	import { Modal } from 'flowbite-svelte';

	import IncomeForm from './IncomeForm.svelte';

	import { page } from '$app/stores';
	import { incomeStore } from '$lib/stores/budget';

	export let open: boolean = false;

	$: if ($page.form?.data) {
		open = false;
	}
</script>

<Modal
	title="Edit income"
	bind:open
	size="sm"
	headerClass="title flex justify-between items-center p-4 md:p-5 rounded-t-lg"
>
	<IncomeForm action="?/editIncome" incomeId={$incomeStore.id} />
</Modal>
