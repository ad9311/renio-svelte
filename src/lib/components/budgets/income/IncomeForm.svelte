<script lang="ts">
	import { Input, Label, Textarea, Button } from 'flowbite-svelte';
</script>

<form method="POST" class="form">
	<input type="hidden" name="budget_uid" value={0} />
	<fieldset>
		<Label for="description">Description</Label>
		<Textarea id="description" name="description" placeholder="Write something here..." />
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
			required
		/>
	</fieldset>
	<fieldset class="actions">
		<Button type="submit">Sign in</Button>
	</fieldset>
</form>
