<script lang="ts">
    import logo from "$lib/assets/MKBLOGO.png";

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
    ];

    let { pathname }: { pathname: string } = $props();

    let menuOpen = $state(false);
</script>

<nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
            <div class="flex items-center">
                <a href="/" class="flex items-center space-x-3">
                    <img 
                        src={logo} 
                        alt="MKB Renovations" 
                        class="h-12 w-auto"
                    />
                    <span class="text-2xl font-bold text-gray-900">MKB Renovations</span>
                </a>
            </div>

            <div class="hidden md:flex items-center space-x-8">
                {#each navigation as navLink (`Anav${navLink.name}`)}
                    <a
                        href={navLink.href}
                        class={`text-lg font-medium transition-colors duration-200 ${
                            pathname === navLink.href
                            ? 'text-primary border-b-2 border-primary'
                            : 'text-gray-700 hover:text-primary'
                        }`}
                    >
                        {navLink.name}
                    </a>
                {/each}
                <a
                    href="tel:+13609917646"
                    class="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200"
                >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span class="font-medium">(360) 991-7646</span>
                </a>
            </div>

            <div class="md:hidden">
            <button
                onclick={() => menuOpen = !menuOpen}
                class="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {#if menuOpen}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M6 18L18 6M6 6l12 12" />
                    {:else}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M4 6h16M4 12h16M4 18h16" />
                    {/if}
                </svg>
            </button>
            </div>
        </div>

        {#if menuOpen}
            <div class="md:hidden py-4 border-t border-gray-200">
            {#each navigation as navLink (`MobileNave${navLink.name}`)}
                <a
                    href={navLink.href}
                    class={`block py-2 text-lg font-medium transition-colors duration-200 ${
                        pathname === navLink.href
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                    onclick={() => menuOpen = false}
                >
                    {navLink.name}
                </a>
            {/each}
            <a
                href="tel:+13609917646"
                class="flex items-center space-x-2 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
            >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span class="font-medium">(360) 991-7646</span>
            </a>
            </div>
        {/if}
    </div>
</nav>