<script lang="ts">
	import pnw from '@/assets/pnw.jpg';
</script>

<svelte:head>
	<title>Contact Us - MKB Renovations</title>
	<meta name="title" content="Contact Us - MKB Renovations" />
	<meta property="og:url" content="https://www.mkb-renovations.com/contact" />
	<meta property="og:title" content="Contact Us - MKB Renovations" />

	<meta property="twitter:url" content="https://www.mkb-renovations.com/contact" />
	<meta property="twitter:title" content="Contact Us - MKB Renovations" />
</svelte:head>

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
						class="space-y-6"
						onsubmit={(e) => {
							e.preventDefault();
							alert('Estimate request submitted!');
						}}
					>
						<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div class="space-y-1">
								<label
									for="fullname"
									class="block font-label-caps text-label-caps text-on-surface-variant"
									>Full Name</label
								>
								<input
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
								<input
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
							<input
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
								id="what"
								class="h-12 w-full rounded-lg border border-gray-subtle bg-surface-white px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
							>
								<option>Kitchen Remodeling</option>
								<option>Bathroom Remodeling</option>
								<option>Whole-House Renovation</option>
								<option>Siding &amp; Windows</option>
								<option>Decking &amp; Roofing</option>
							</select>
						</div>
						<div class="space-y-1">
							<label
								for="details"
								class="block font-label-caps text-label-caps text-on-surface-variant"
								>Project Details</label
							>
							<textarea
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
										Serving Vancouver, WA &amp; Portland, OR
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
										Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: By Appointment
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
	<!-- Trust / Social Proof Section -->
	<section class="overflow-hidden bg-surface-white py-section-gap-mobile">
		<div class="mx-auto max-w-7xl px-grid-margin text-center">
			<p class="mb-12 font-label-caps text-label-caps text-secondary">
				Proudly Licensed &amp; Insured Contractor
			</p>
			<div
				class="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale transition-all duration-700 hover:grayscale-0"
			>
				<img
					alt="Partner Logo"
					class="h-12 w-auto"
					data-alt="A minimalist logo of a professional building contractors association, representing industry standards and certified expertise. The aesthetic is corporate and clean, with balanced geometric proportions and a professional navy blue and white color scheme."
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdHOwmvWkCPIwcqfJPqlY1M4RUcvmm6bA7ilYqA9jqynMr6WP3SSBoJl5DOvwm-PieGOGpe3aP4-8YKEiRTmOqglusS-Vx-UuXtATQgHfEfwvmcWpujdA7EKV7P3oo0T3mWt9OkelLgVr0ekcp-dToiy1zQuK_dlhyUKRel3_auinVHKAhWbSmcO5exKJjRWsg4JkntZLKFINfWYCt-bMWxqVLoz-UzK4xTQdnGk7GYIJQxy3s8mSO0zKAgrUs2v3Z0ynbRA-FQN-B"
				/>
				<img
					alt="Partner Logo"
					class="h-12 w-auto"
					data-alt="A modern corporate architectural certification seal, showcasing high-end craftsmanship and professional reliability. The design features minimalist typography and a subtle circular crest, set against a bright, airy background consistent with the MKB Renovations brand identity."
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ6gw33WX_vttSoJM03VrSUR_FctK-HwNyB5sGs9qzBtk-GFdHEaUfLM8qqxw9x1rrL1Cf_q3M2Dm8zkq5k4QXxp1TDN56VYZiwIiF6PIbF8b9rlYa5VC4S0n5nab7bArdZ7ZvDLVhwaREz8PaMOHfhkkE0L03KFzBmQSjERUafEFdM_4Nouen_kPrkqeZ7KmvuQ8KJ2g_Xo2R3cGJIne7xzl7Hg1Xxh-uqCGef1v5doDjOjXQCSZvK87cdsVGachaEgcBxlzD2eGH"
				/>
				<img
					alt="Partner Logo"
					class="h-12 w-auto"
					data-alt="A clean, minimalist logo representing premium home building materials and supply partners. The visual style is modern and architectural, focusing on crisp lines and professional branding to evoke trust and high-quality material sourcing for renovations."
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbl4_Hf_RVnQa9_TLNoqohiD9yMYCGmQwwkLl06ZGZeKjt7QntRm1ohwdHgJFHonHzCpRWCSKabtmIihymB3NK-J0-l4jeLRdn3cyKyxqd8TA9tt7Gj-6Gxkx1m5EFJguJ6esXlYnTkFpSqGctSUUsvCOkYNaK1gEb2ZWSS6u54ZbOBXMnXylLtYBYn5vicYzqtX0UIYvs13B1hTqIcVtOynQtY1I-vGibiyMz-DdxZ_O_DQJDa5A2A8O3DSBsudNh4muwON4GR3yW"
				/>
				<img
					alt="Partner Logo"
					class="h-12 w-auto"
					data-alt="A corporate safety and insurance seal emblem, indicating professional protection and licensed operation. The aesthetic is clean and modern, using a balanced layout and sophisticated typography to communicate transparency and security for homeowners."
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuBramSA1hPl7_UrZQ77yB7fqwjnLPs3dovJvADk0OutnQCbWn3sJboLqmNMIcXf_6CZ4VeFLrX-Qvd35pUJn7wzlag2XYfIix4JSBnz7ayWPkIUB8mkRj0uoR4lET1czP1tqCX-oklnmNJbxmqMxLDPmJuRm3fEG8AdHAHFW8RQ_sh9ricBu4OLbP4maGKGmJ-pLcP_yv9MKy05Znu6R9ebTBuiFUHritm7gIMfOR7_aivrr8jkZxNDC60b7d0T3UL15jScqhjVleDl"
				/>
			</div>
		</div>
	</section>
</main>
