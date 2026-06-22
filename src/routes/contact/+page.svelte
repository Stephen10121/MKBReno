<script lang="ts">
	import { contactForm } from '../contact.remote.js';
	import { turnstileWidgetId } from '@/store';
	import { loadScript } from '@/utils.js';
	import { toast } from 'svelte-sonner';
	import pnw from '@/assets/pnw.webp';
	import { onMount } from 'svelte';

	let { data } = $props();
	let token = $state('');

	onMount(() => {
		try {
			loadScript('https://challenges.cloudflare.com/turnstile/v0/api.js').then(() => {
				//@ts-ignore
				turnstileWidgetId.set(
					//@ts-ignore
					turnstile.render('#turnstile-container', {
						sitekey: data.turnstileSiteKey,
						callback: function (token2: string) {
							token = token2;
						}
					})
				);
			});
		} catch (err) {
			console.log(err);
		}

		return () => {
			const existingScript = document.querySelector(
				'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
			);

			if (existingScript) {
				document.head.removeChild(existingScript);
			}
		};
	});
</script>

<svelte:head>
	<title>Contact Us - MKB Renovations</title>
	<meta name="title" content="Contact Us - MKB Renovations" />
	<meta property="og:url" content="https://www.mkb-renovations.com/contact" />
	<meta property="og:title" content="Contact Us - MKB Renovations" />

	<meta property="twitter:url" content="https://www.mkb-renovations.com/contact" />
	<meta property="twitter:title" content="Contact Us - MKB Renovations" />
</svelte:head>

<div id="turnstile-container"></div>
<main class="pt-20">
	<!-- Hero Section -->
	<section class="relative flex h-153.5 min-h-125 items-center overflow-hidden">
		<div class="absolute inset-0 z-0">
			<div
				class="absolute inset-0 z-10 bg-linear-to-r from-on-background/80 to-transparent"
			></div>
			<img alt="Modern Kitchen Renovation" class="h-full w-full object-cover" src={pnw} />
		</div>
		<div class="relative z-20 mx-auto w-full max-w-7xl px-grid-margin">
			<div class="max-w-2xl text-surface">
				<span
					class="mb-6 inline-block rounded-full bg-primary-container px-4 py-1 font-label-caps text-label-caps text-on-primary-container"
					>Expert Renovations</span
				>
				<h1 class="mb-6 font-display-lg text-display-lg leading-tight md:text-display-lg">
					Start Your Dream Home Project Today
				</h1>
				<p class="mb-8 font-body-lg text-body-lg opacity-90">
					Experience a polished, architectural transformation with Vancouver and
					Portland's most trusted remodeling team.
				</p>
				<div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
					<a
						class="flex items-center gap-3 font-headline-md text-headline-md text-primary-fixed decoration-2 underline-offset-4 hover:underline"
						href="tel:3609917646"
					>
						<span class="material-symbols-outlined text-3xl">call</span>
						(360) 991-7646
					</a>
				</div>
			</div>
		</div>
	</section>
	<!-- Contact & Form Section -->
	<section class="bg-surface py-section-gap-mobile md:py-section-gap-desktop" id="estimate">
		<div class="mx-auto max-w-7xl px-grid-margin">
			<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
				<!-- Left: Contact Form -->
				<div
					class="rounded-xl border border-gray-subtle bg-surface-white p-8 shadow-sm md:p-12 lg:col-span-7"
				>
					<div class="mb-10">
						<h2 class="mb-2 font-headline-md text-headline-md text-on-background">
							Request Your Free Estimate
						</h2>
						<p class="text-secondary">
							Tell us about your project and we'll get back to you within 24 hours.
						</p>
					</div>
					<form
						{...contactForm.enhance(async ({ submit, form }) => {
							let savingChanges = toast.loading('Sending Request.', {
								duration: Number.POSITIVE_INFINITY
							});
							try {
								await submit();
								form.reset();
								toast.dismiss(savingChanges);

								//@ts-ignore
								turnstile.reset($turnstileWidgetId);

								if (!contactForm.fields.allIssues()) {
									toast.success('Thank you for your message.', {
										description: 'We will contact you soon!'
									});
								}
							} catch (err) {
								console.log(err);
								toast.dismiss(savingChanges);
								toast.error('Failed to send message.', {
									description: 'Please try again later.'
								});
							}
						})}
						class="space-y-6"
					>
						{#if token}
							<input {...contactForm.fields.turnStileToken.as('hidden', token)} />
						{/if}
						{#each contactForm.fields.turnStileToken.issues() as issue}
							<p class="text-sm text-red-500">{issue.message}</p>
						{/each}
						<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div class="space-y-1">
								<label
									for="fullname"
									class="block font-label-caps text-label-caps text-on-surface-variant"
									>Full Name</label
								>
								{#each contactForm.fields.name.issues() as issue}
									<p class="text-sm text-red-500">{issue.message}</p>
								{/each}
								<input
									{...contactForm.fields.name.as('text')}
									class="h-12 w-full rounded-lg border border-gray-subtle px-4 transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary"
									placeholder="John Doe"
									required
									type="text"
									id="fullname"
								/>
							</div>
							<div class="space-y-1">
								<label
									for="phone"
									class="block font-label-caps text-label-caps text-on-surface-variant"
									>Phone Number</label
								>
								{#each contactForm.fields.phone.issues() as issue}
									<p class="text-sm text-red-500">{issue.message}</p>
								{/each}
								<input
									{...contactForm.fields.phone.as('tel')}
									class="h-12 w-full rounded-lg border border-gray-subtle px-4 transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary"
									placeholder="(360) 000-0000"
									required
									id="phone"
									type="tel"
								/>
							</div>
						</div>
						<div class="space-y-1">
							<label
								for="email"
								class="block font-label-caps text-label-caps text-on-surface-variant"
								>Email Address</label
							>
							{#each contactForm.fields.email.issues() as issue}
								<p class="text-sm text-red-500">{issue.message}</p>
							{/each}
							<input
								{...contactForm.fields.email.as('email')}
								class="h-12 w-full rounded-lg border border-gray-subtle px-4 transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary"
								placeholder="john@example.com"
								required
								id="email"
								type="email"
							/>
						</div>
						<div class="space-y-1">
							<label
								for="what"
								class="block font-label-caps text-label-caps text-on-surface-variant"
								>Project Type</label
							>
							<select
								{...contactForm.fields.projectType.as('select')}
								id="what"
								class="h-12 w-full rounded-lg border border-gray-subtle bg-surface-white px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
							>
								<option>Kitchen Remodeling</option>
								<option>Bathroom Remodeling</option>
								<option>Whole-House Renovation</option>
								<option>Addition</option>
								<option>ADU</option>
							</select>
						</div>
						<div class="space-y-1">
							<label
								for="details"
								class="block font-label-caps text-label-caps text-on-surface-variant"
								>Project Details</label
							>
							{#each contactForm.fields.message.issues() as issue}
								<p class="text-sm text-red-500">{issue.message}</p>
							{/each}
							<textarea
								{...contactForm.fields.message.as('text')}
								required
								id="details"
								class="w-full rounded-lg border border-gray-subtle px-4 py-3 transition-colors outline-none focus:border-primary focus:ring-1 focus:ring-primary"
								placeholder="Describe your vision..."
								rows="4"
							></textarea>
						</div>
						<button
							class="w-full rounded-xl bg-primary py-4 font-headline-md text-headline-md text-on-primary shadow-md shadow-primary/10 transition-all hover:bg-primary-container active:scale-[0.98]"
							type="submit"
						>
							Send Request
						</button>
					</form>
				</div>
				<!-- Right: Info & Timeline -->
				<div class="space-y-8 lg:col-span-5">
					<!-- Contact Card -->
					<div class="rounded-xl border border-gray-subtle bg-surface-container-low p-8">
						<h3 class="mb-6 font-headline-md text-headline-md">Our Contact Info</h3>
						<div class="space-y-6">
							<div class="flex items-start gap-4">
								<span
									class="material-symbols-outlined rounded-lg bg-primary-fixed/30 p-2 text-primary"
									>location_on</span
								>
								<div>
									<p class="font-bold text-on-surface">Service Area</p>
									<p class="text-secondary">
										Serving Vancouver, WA & Surrounding Areas
									</p>
								</div>
							</div>
							<div class="flex items-start gap-4">
								<span
									class="material-symbols-outlined rounded-lg bg-primary-fixed/30 p-2 text-primary"
									>schedule</span
								>
								<div>
									<p class="font-bold text-on-surface">Business Hours</p>
									<p class="text-secondary">
										Mon - Fri: 8:30 AM - 5:00 PM<br />Sat: 10:00 AM - 2:30 PM
									</p>
								</div>
							</div>
							<div class="flex items-start gap-4">
								<span
									class="material-symbols-outlined rounded-lg bg-primary-fixed/30 p-2 text-primary"
									>verified</span
								>
								<div>
									<p class="font-bold text-on-surface">Licensed &amp; Insured</p>
									<p class="text-secondary">
										Full protection for your home and our team during every
										phase of construction.
									</p>
								</div>
							</div>
						</div>
					</div>
					<!-- Timeline -->
					<div class="p-8">
						<h3 class="mb-8 font-headline-md text-headline-md">What to Expect</h3>
						<div class="relative space-y-10">
							<!-- Vertical Line -->
							<div
								class="absolute top-2 bottom-2 left-4 w-0.5 bg-outline-variant"
							></div>
							<div class="relative flex items-start gap-6">
								<div
									class="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary"
								>
									1
								</div>
								<div>
									<h4 class="font-bold text-on-background">Consultation</h4>
									<p class="text-body-md text-secondary">
										We visit your site, listen to your needs, and provide a
										clear, transparent estimate.
									</p>
								</div>
							</div>
							<div class="relative flex items-start gap-6">
								<div
									class="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary"
								>
									2
								</div>
								<div>
									<h4 class="font-bold text-on-background">
										Design &amp; Planning
									</h4>
									<p class="text-body-md text-secondary">
										Collaborative design phase where we finalize materials,
										layout, and timelines.
									</p>
								</div>
							</div>
							<div class="relative flex items-start gap-6">
								<div
									class="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary"
								>
									3
								</div>
								<div>
									<h4 class="font-bold text-on-background">The Build</h4>
									<p class="text-body-md text-secondary">
										Expert craftsmanship with minimal disruption, overseen by a
										dedicated project manager.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
