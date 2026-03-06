<script lang="ts">
    import HeroImage from "$lib/assets/Hero.jpg";

    function scrollToServices(e: Event) {
        e.preventDefault();
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
</script>

<section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('{HeroImage}')"
    ></div>
    
    <div class="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-7xl font-bold mb-6" style="line-height: 1;">
            Transform Your
            <span class="block bg-linear-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">Dream Space</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style="line-height: 2rem;">
            Expert kitchen and bathroom renovations serving Vancouver, Washington and the Portland, Oregon area. 
            Where quality craftsmanship meets exceptional design.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button onclick={scrollToServices} class="bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors duration-200 text-lg px-8 py-4">
            Our Services
            </button>
            <a href="tel:+13609917646" class="text-text font-medium rounded-lg border transition-colors duration-200 text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
            Call (360) 991-7646
            </a>
        </div>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
    </div>
</section>