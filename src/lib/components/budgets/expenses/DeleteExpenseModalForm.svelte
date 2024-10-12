<script lang="ts">
	import { Modal, Button } from 'flowbite-svelte';

	import { enhance } from '$app/forms';

	export let open: boolean = false;

	const closeModal = () => {
		open = false;
	};
</script>

<Modal
	title="Edit expense"
	bind:open
	size="sm"
	headerClass="title flex justify-between items-center p-4 md:p-5 rounded-t-lg"
>
	<p class="mb-8">Deleting this expense cannot be undone</p>
	<form method="POST" action="?/deleteExpense" class="form" use:enhance>
		<fieldset class="actions">
			<Button color="none" on:click={closeModal}>Cancel</Button>
			<Button type="submit" color="red">Delete</Button>
		</fieldset>
	</form>
</Modal>
