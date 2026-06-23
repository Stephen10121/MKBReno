<script lang="ts">
	import { Award, Phone, Share2 } from '@lucide/svelte';
	import logo from '@/assets/mkblogo2.webp';
</script>

<footer
	class="w-full border-t border-outline-variant bg-surface-container-highest py-section-gap-mobile md:py-section-gap-desktop dark:border-outline dark:bg-inverse-surface"
>
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-grid-gutter px-grid-margin md:grid-cols-4">
		<div class="col-span-1 md:col-span-1">
			<div class="mb-6 flex items-center gap-2">
				<img alt="Logo" class="h-12" src={logo} />
			</div>
			<p class="mb-6 leading-relaxed text-on-surface-variant dark:text-surface-variant">
				Transforming homes with quality craftsmanship and exceptional attention to detail in
				Vancouver, WA and surrounding areas.
			</p>
			<p class="mb-6 leading-relaxed text-on-surface-variant dark:text-surface-variant">
				Address: 5505 NE 45th St, Vancouver, WA 98661
			</p>
			<div class="flex gap-4">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
				>
					<Award class="h-6 w-6" />
				</div>
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
				>
					<Share2 class="h-6 w-6" />
				</div>
			</div>
		</div>
		<div>
			<h4 class="mb-6 font-bold text-on-surface dark:text-inverse-on-surface">Services</h4>
			<ul class="space-y-4">
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/services#kitchen">Kitchen Remodeling</a
					>
				</li>
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/services#bathroom">Bathroom Remodeling</a
					>
				</li>
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/services#whole-house">Whole-House Renovations</a
					>
				</li>
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/services#adu">Additions/ADU's</a
					>
				</li>
			</ul>
		</div>
		<div>
			<h4 class="mb-6 font-bold text-on-surface dark:text-inverse-on-surface">Quick Links</h4>
			<ul class="space-y-4">
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/">Home</a
					>
				</li>
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/services">Services</a
					>
				</li>
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/about">About</a
					>
				</li>
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/projects">Projects</a
					>
				</li>
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/contact">Contact Us</a
					>
				</li>
			</ul>
		</div>
		<div>
			<h4 class="mb-6 font-bold text-on-surface dark:text-inverse-on-surface">
				Areas Served
			</h4>
			<ul class="space-y-4">
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/service-areas/battle-ground">Battle Ground</a
					>
				</li>
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/service-areas/vancouver">Vancouver</a
					>
				</li>
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/service-areas/washougal">Washougal</a
					>
				</li>
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/service-areas/camas">Camas</a
					>
				</li>
				<li>
					<a
						class="text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-surface-variant dark:hover:text-primary-fixed"
						href="/service-areas">View All</a
					>
				</li>
				<li class="flex items-center gap-2 pt-4 font-bold text-primary">
					<Phone class="h-5 w-5" />
					(360) 991-7646
				</li>
			</ul>
		</div>
	</div>
	<div
		class="mx-auto mt-16 max-w-7xl border-t border-outline-variant/30 px-grid-margin pt-8 text-center"
	>
		<p class="text-label- font-label-caps">
			© {new Date().getFullYear()} MKB Renovations. Licensed &amp; Insured. Serving Vancouver, WA
			&amp; surrounding areas. Phone: (360) 991-7646.
		</p>
	</div>
</footer>
