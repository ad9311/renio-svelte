<script lang="ts">
	import { Modal } from 'flowbite-svelte';

	import ExpenseForm from './ExpenseForm.svelte';

	import { page } from '$app/stores';

	export let open: boolean = false;

	$: if ($page.form?.data) {
		open = false;
	}
</script>

<Modal
	title="Edit expense"
	bind:open
	size="sm"
	headerClass="title flex justify-between items-center p-4 md:p-5 rounded-t-lg"
>
	<ExpenseForm action="?/editExpense" />
</Modal>
