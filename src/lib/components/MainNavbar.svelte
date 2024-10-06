<script lang="ts">
	import {
		Drawer,
		Navbar,
		NavBrand,
		CloseButton,
		Avatar,
		Sidebar,
		SidebarWrapper,
		SidebarItem,
		SidebarGroup,
		Hr,
	} from 'flowbite-svelte';
	import {
		AdjustmentsVerticalSolid,
		ArrowRightToBracketOutline,
		BarsOutline,
		CashSolid,
		ClipboardCheckSolid,
		FileSolid,
		HomeSolid,
		UserSettingsSolid,
	} from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';

	let hidden: boolean = true;
	let transitionParams = {
		x: 320,
		duration: 250,
		easing: sineIn,
	};

	const settingsItems = [
		{ label: 'Admin', href: '/admin', icon: AdjustmentsVerticalSolid },
		{ label: 'Settings', href: '/settings', icon: UserSettingsSolid },
	];

	const sectionItems = [
		{ label: 'Home', href: '/', icon: HomeSolid },
		{ label: 'Budgets', href: '/budgets', icon: CashSolid },
		{ label: 'Lists', href: '/lists', icon: ClipboardCheckSolid },
		{ label: 'Notes', href: '/notes', icon: FileSolid },
	];
</script>

<Navbar>
	<NavBrand href="/">
		<h1>RENIO</h1>
	</NavBrand>
	<button on:click={() => (hidden = false)}>
		<BarsOutline size="xl" />
	</button>
	<Drawer placement="right" transitionType="fly" {transitionParams} bind:hidden id="sidebar2">
		<div class="flex items-center">
			<h5 class="ml-1 title">Menu</h5>
			<CloseButton on:click={() => (hidden = true)} />
		</div>
		<div class="mt-12 mb-4 w-fit mx-auto">
			<div>
				<Avatar rounded border size="lg" />
			</div>
			<h6 class="mt-4 text-center text-gray-500 text-lg">Nombre</h6>
		</div>
		<Sidebar>
			<SidebarWrapper divClass="overflow-y-auto py-4 rounded">
				<SidebarGroup>
					{#each settingsItems as item}
						<SidebarItem label={item.label} href={item.href} class="text-slate-600">
							<svelte:component this={item.icon} slot="icon" color="#6B7280" />
						</SidebarItem>
					{/each}
				</SidebarGroup>
				<Hr hrClass="my-2" />
				<SidebarGroup>
					{#each sectionItems as item}
						<SidebarItem label={item.label} href={item.href} class="text-slate-600">
							<svelte:component this={item.icon} slot="icon" color="#6B7280" />
						</SidebarItem>
					{/each}
				</SidebarGroup>
				<Hr hrClass="my-2" />
				<SidebarGroup>
					<SidebarItem label="Sing out" href="/auth/sign-out" class="text-red-400">
						<svelte:fragment slot="icon">
							<ArrowRightToBracketOutline color="#f98080" />
						</svelte:fragment>
					</SidebarItem>
				</SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
	</Drawer>
</Navbar>
