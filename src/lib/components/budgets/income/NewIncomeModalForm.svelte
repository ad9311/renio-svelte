<script lang="ts">
	import { Modal } from 'flowbite-svelte';

	import IncomeForm from './IncomeForm.svelte';

	export let open: boolean = false;
</script>

<Modal
	title="New income"
	bind:open
	size="sm"
	headerClass="title flex justify-between items-center p-4 md:p-5 rounded-t-lg"
>
	<IncomeForm action="?/createIncome" />
</Modal>
