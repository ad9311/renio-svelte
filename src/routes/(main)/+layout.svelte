<script lang="ts">
	import MainNavbar from '$lib/components/MainNavbar.svelte';
</script>

<header>
	<MainNavbar />
</header>
<main class="mt-4 px-2 container mx-auto">
	<slot />
</main>
