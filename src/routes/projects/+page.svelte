<script lang="ts">
    import { goto } from "$app/navigation";

    function handleViewRecentWork() {
        goto('/');
        // Small delay to ensure the page has loaded before scrolling
        setTimeout(() => {
            const recentWorkSection = document.querySelector('[data-section="recent-work"]');
            if (recentWorkSection) {
                recentWorkSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    }
</script>

<svelte:head>
	<title>MKB Renovations - Projects</title>
	<meta name="title" content="MKB Renovations - Projects" />
	<meta property="og:url" content="https://www.mkbreno.com/projects" />
	<meta property="og:title" content="MKB Renovations - Projects" />
    
	<meta property="twitter:url" content="https://www.mkbreno.com/projects" />
	<meta property="twitter:title" content="MKB Renovations - Projects" />
</svelte:head>

<div>
    <section class="relative bg-linear-to-br from-green-800 via-green-700 to-primary text-white py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6">
                    Our Projects
                </h1>
                <p class="text-xl md:text-2xl leading-relaxed">
                    Explore our portfolio of completed kitchen and bathroom renovations
                </p>
            </div>
        </div>
    </section>

    <section class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="max-w-3xl mx-auto">
                <div class="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg class="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
                
                <h2 class="text-4xl font-bold text-gray-900 mb-6">
                    Project Gallery Coming Soon
                </h2>
                
                <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                    We're currently building our project portfolio to showcase our best work. 
                    In the meantime, you can see some of our recent projects in the gallery 
                    on our home page, or contact us directly to discuss your renovation needs.
                </p>

                <div class="grid md:grid-cols-2 gap-6 text-left mb-8">
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Kitchen Renovations</h3>
                        <ul class="space-y-2 text-gray-600">
                            <li>• Custom cabinet installations</li>
                            <li>• Countertop upgrades</li>
                            <li>• Modern appliance integration</li>
                            <li>• Lighting and electrical work</li>
                        </ul>
                    </div>
                    
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Bathroom Remodels</h3>
                        <ul class="space-y-2 text-gray-600">
                            <li>• Shower and tub installations</li>
                            <li>• Custom tile work</li>
                            <li>• Vanity and fixture upgrades</li>
                            <li>• Plumbing and electrical updates</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick={handleViewRecentWork} class="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer">
                        View Recent Work
                    </button>
                    <a href="tel:+13609917646" class="bg-white hover:bg-gray-50 text-text font-medium py-3 px-6 rounded-lg border border-secondary transition-colors duration-200 cursor-pointer">
                        Call (360) 991-7646
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>