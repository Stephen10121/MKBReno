<script lang="ts">
	import { page } from '$app/stores';
	import logo from '@/assets/mkblogo2.png';
	import { Menu, Phone, X } from '@lucide/svelte';
	import { AnimatePresence, Motion } from 'svelte-motion';

	let location = $derived($page.url);
	let menuOpen = $state(false);

	const NAV_LINKS = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Services',
			href: '/services'
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Testimonials',
			href: '/testimonials'
		}
	];
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-gray-subtle bg-surface/90 shadow-sm backdrop-blur-md dark:border-outline-variant dark:bg-on-background/90"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-grid-margin py-3 md:py-4">
		<a href="/" class="flex items-center gap-4">
			<img alt="MKB Renovations Logo" class="h-14 w-auto md:h-12" src={logo} />
		</a>
		<div class="hidden items-center gap-8 md:flex">
			{#each NAV_LINKS as link (`alink${link.href}`)}
				{@const islink = location.pathname === link.href}
				<a
					class="{islink
						? 'mt-0.5 border-b-2 border-primary'
						: ''} pb-1 font-label-caps text-label-caps {islink
						? 'text-primary'
						: 'text-secondary'}"
					href={link.href}>{link.name}</a
				>
			{/each}
		</div>
		<div class="flex items-center gap-4">
			<a
				class="hidden items-center gap-2 font-bold text-primary lg:flex"
				href="tel:3609917646"
			>
				<Phone class="h-5 w-5" />
				(360) 991-7646
			</a>
			<a
				href="/contact"
				class="hidden rounded-lg bg-primary px-6 py-3 font-label-caps text-label-caps text-on-primary transition-transform hover:opacity-80 active:scale-95 sm:block"
			>
				Get FREE Estimate
			</a>
			<button class="p-1 text-black md:hidden" onclick={() => (menuOpen = !menuOpen)}>
				{#if menuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</div>
</nav>

<AnimatePresence show={menuOpen}>
	<Motion
		initial={{ opacity: 0, x: '100%' }}
		animate={{ opacity: 1, x: 0 }}
		exit={{ opacity: 0, x: '100%' }}
		transition={{ duration: 0.3, ease: 'easeInOut' }}
		let:motion
	>
		<div
			use:motion
			class="fixed inset-0 z-40 flex flex-col justify-center bg-surface pt-20 dark:bg-on-background"
		>
			<nav class="flex flex-col gap-2 px-8">
				{#each NAV_LINKS as link, i (link.href)}
					<Motion
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							delay: i * 0.06,
							duration: 0.3
						}}
						let:motion
					>
						<div use:motion>
							<a
								onclick={() => {
									setTimeout(() => (menuOpen = false), 200);
								}}
								href={link.href}
								class="block border-b border-white/10 py-4 text-2xl font-bold text-black"
								style="color: {location.pathname === link.href ? '#006b30' : ''};"
							>
								{link.name}
							</a>
						</div>
					</Motion>
				{/each}
				<Motion
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					let:motion
				>
					<div use:motion class="mt-8">
						<a
							href="tel:+13609917646"
							class="flex items-center gap-2 py-4 text-xl font-bold text-primary"
						>
							<Phone size={20} /> (360) 991-7646
						</a>
					</div>
				</Motion>
			</nav>
		</div>
	</Motion>
</AnimatePresence>
