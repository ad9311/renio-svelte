<script lang="ts">
	import { Label, Input, Button } from 'flowbite-svelte';

	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import FormErrorList from '$lib/components/FormErrorList.svelte';
</script>

{#if $page.form?.errors}
	<FormErrorList errors={$page.form.errors} />
{/if}

<form method="POST" class="form" use:enhance>
	<fieldset>
		<Label for="email">Email</Label>
		<Input type="email" id="email" name="email" placeholder="john.doe@mail.com" required />
	</fieldset>
	<fieldset>
		<Label for="password">Password</Label>
		<Input
			type="password"
			id="password"
			name="password"
			placeholder="Enter your password here"
			required
		/>
	</fieldset>
	<fieldset class="actions">
		<Button type="submit">Sign in</Button>
	</fieldset>
</form>
