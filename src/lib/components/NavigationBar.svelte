<script lang="ts">
    import { isContactModalOpen, mobileMenuOpen } from "@/store";
    import { fade, slide } from "svelte/transition";
    import { page } from "$app/stores";

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Additions", path: "/additions" },
        { label: "ADUs", path: "/adus" },
        { label: "Kitchen/Bathrooms", path: "/kitchen-bathrooms" },
        { label: "Full House", path: "/full-house" },
        { label: "Contact", path: "/contact" },
    ];

    let { linkClicked, cl }: { linkClicked: () => unknown, cl: "show" | "hide" } = $props();

    let location = $derived($page.url);
</script>

<div class="w-full h-full pl-1 pr-2 pb-1">
    <nav class="bg-white/60 ring-slate-500/50 {$mobileMenuOpen ? "ring" : ""} md:ring md:block backdrop-blur-sm rounded-md" style="transition: background-color 0.25s linear 0.5s;">
        <div class="flex items-center justify-between px-2">
            <ul class="hidden md:flex items-center gap-1">
                {#each navItems as item (`anavpath${item.path}`)}
                    <li>
                        <a href={item.path} onclick={linkClicked} class="nav-link relative text-sm font-medium tracking-wide px-3 transition-colors duration-200 block py-4 {location.pathname === item.path ? "active" : ""}">
                            {item.label}
                        </a>
                    </li>
                {/each}
            </ul>
    
            {#if cl === "hide"}
            <div transition:fade={{delay:200, duration:250}} class="hidden lg:flex items-center gap-4">
                <button onclick={() => isContactModalOpen.set(true)} class="bg-[#196c3b] text-white hidden md:flex cursor-pointer px-6 py-2.5 text-sm tracking-wider rounded-sm transition-all duration-200">
                    Get FREE Estimate
                </button>
                <a
                    href="tel:+13609917646"
                    class="text-sm font-semibold text-nav-bar-foreground hover:text-primary transition-colors"
                >
                    Call (360) 991-7646
                </a>
            </div>
            {/if}
        </div>
    
        {#if $mobileMenuOpen}
            <div class="md:hidden bg-nav-bar" transition:slide>
                <ul class="flex flex-col py-2">
                    {#each navItems as item (`mobilenav${item.path}`)}
                        <li>
                        <a
                            href={item.path}
                            class="block px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors {
                            location.pathname === item.path
                                ? "text-primary"
                                : "text-nav-bar-foreground hover:text-primary"
                            }"
                            onclick={() => {
                                linkClicked();
                                mobileMenuOpen.set(false);
                            }}
                        >
                            {item.label}
                        </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </nav>
</div>

<style>
    .nav-link.active,
    .nav-link:hover {
        color: #347e53;
    }

    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #347e53;
    }
</style>