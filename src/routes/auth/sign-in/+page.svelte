<script lang="ts">
	import FormErrors from '$lib/components/FormErrors.svelte';
	import SignInForm from './SignInForm.svelte';

	export let form;
</script>

<h1>Sign in</h1>
{#if form?.errors}
	<FormErrors errors={form?.errors} />
{/if}
<SignInForm />
