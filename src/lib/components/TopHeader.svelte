<script lang="ts">
    import { isContactModalOpen, mobileMenuOpen } from "@/store";
    import SwipeUpMessageBar from "./SwipeUpMessageBar.svelte";
    import { Menu, Phone, X } from "@lucide/svelte";
    import logo from "$lib/assets/mkblogo2.png";

    const testimonials = [
        "Remodeling Experts You Can Trust",
        "\"Very satisfied with the work! We love our new bathroom\" — Sam P.",
        "Proudly Serving Vancouver, WA & Portland, OR",
        "\"MKB transformed our kitchen beyond expectations\" — Lisa M.",
        "Quality Craftsmanship Since Day One",
    ];
</script>


<div class="h-full bg-[#181a1d] text-white">
    <div class="h-full flex justify-between">
        <a href="/" class="p-3">
            <img src={logo} alt="MKB Renovations logo" class="h-full" />
        </a>

        <div class="hidden lg:flex items-center justify-center flex-1 mx-8 h-6 max-w-150 my-auto">
            <SwipeUpMessageBar messages={testimonials} />
        </div>

        <div class="flex items-center gap-4 shrink-0 pr-3">
            <a
                href="tel:+13609917646"
                class="hidden md:flex items-center gap-1.5 text-sm font-semibold text-top-bar-foreground hover:text-primary transition-colors"
            >
                <Phone class="w-4 h-4" />
                (360) 991-7646
            </a>
            <button onclick={() => isContactModalOpen.set(true)} class="bg-[#196c3b] hidden md:flex cursor-pointer px-6 py-2.5 text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-200">
                FREE Estimate
            </button>

            <button
                class="md:hidden p-2 text-nav-bar-foreground"
                onclick={() => mobileMenuOpen.update((open) => !open)}
                aria-label="Toggle menu"
            >
                {#if $mobileMenuOpen}
                    <X class="w-6 h-6" />
                {:else}
                    <Menu class="w-6 h-6" />
                {/if}
            </button>
        </div>
    </div>
</div>