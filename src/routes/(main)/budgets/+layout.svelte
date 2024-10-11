<script lang="ts">
	import { page } from '$app/stores';
	import { transactionTypesStore } from '$lib/stores/budget';

	transactionTypesStore.set($page.data.transactionTypes);
</script>

<slot />
