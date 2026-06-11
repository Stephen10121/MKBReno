<script lang="ts">
	import { page } from '$app/stores';
	import logo from '@/assets/mkblogo2.png';
	import { Phone } from '@lucide/svelte';

	let location = $derived($page.url);

	const links = [
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
	<div class="mx-auto flex max-w-7xl items-center justify-between px-grid-margin py-4">
		<div class="flex items-center gap-4">
			<img alt="MKB Renovations Logo" class="h-10 w-auto md:h-12" src={logo} />
		</div>
		<div class="hidden items-center gap-8 md:flex">
			{#each links as link (`alink${link.href}`)}
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
				class="rounded-lg bg-primary px-6 py-3 font-label-caps text-label-caps text-on-primary transition-transform hover:opacity-80 active:scale-95"
			>
				Get FREE Estimate
			</a>
		</div>
	</div>
</nav>
