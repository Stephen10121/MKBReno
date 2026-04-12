<script lang="ts">
    import HeroImage from "$lib/assets/housefront.png";
    import { isContactModalOpen } from "@/store";
</script>

<section class="relative min-h-screen flex items-center">
    <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('{HeroImage}')"
    ></div>
    <div class="absolute inset-0 bg-[#1c2126]/65"></div>

    <div class="relative z-10 container mx-auto px-4 py-20">
        <div class="max-w-2xl">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-foreground leading-tight mb-6">
                Vancouver & Portland's Trusted{" "}
                <span class="text-primary">Renovation Team</span>
            </h1>
            <p class="text-lg md:text-xl text-primary-foreground/85 mb-8 font-body leading-relaxed">
                Expert kitchen, bathroom, and whole-house renovations. Where quality
                craftsmanship meets exceptional design, from concept to completion.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                <button onclick={() => isContactModalOpen.set(true)} class="text-white bg-[#196c3b] font-semibold uppercase tracking-wider rounded-sm transition-all duration-200; text-base px-8 py-3.5 text-center">
                    Get Your FREE Estimate
                </button>
                <a
                    href="tel:+13609917646"
                    class="px-8 py-3.5 text-base font-semibold text-primary-foreground border-2 border-primary-foreground/30 rounded-sm text-center hover:border-primary-foreground/60 transition-colors"
                >
                    Call (360) 991-7646
                </a>
            </div>
        </div>
    </div>
</section>