<script lang="ts">
	import { Modal } from 'flowbite-svelte';

	import ExpenseForm from './ExpenseForm.svelte';

	export let open: boolean = false;
</script>

<Modal
	title="New expense"
	bind:open
	size="sm"
	headerClass="title flex justify-between items-center p-4 md:p-5 rounded-t-lg"
>
	<ExpenseForm action="?/createExpense" />
</Modal>
