<script lang="ts">
    import Kitchen1 from '$lib/assets/showcase/kitchen/IMG_4930.jpg';
    import Kitchen2 from '$lib/assets/showcase/kitchen/IMG_4931.jpg';
    import Kitchen3 from '$lib/assets/showcase/kitchen/IMG_1186.jpg';
    import Kitchen4 from '$lib/assets/showcase/kitchen/IMG_1201(1).jpg';
    import Kitchen5 from '$lib/assets/showcase/kitchen/IMG_1202.jpg';
    import Kitchen6 from '$lib/assets/showcase/kitchen/IMG_2368(1).jpg';
    import Kitchen7 from '$lib/assets/showcase/kitchen/IMG_2382(1).jpg';
    import Kitchen8 from '$lib/assets/showcase/kitchen/IMG_3220.jpg';
    import Kitchen9 from '$lib/assets/showcase/kitchen/IMG_8980.jpg';
    import Kitchen10 from '$lib/assets/showcase/kitchen/IMG_8982.jpg';
    // Bathroom images
    import Bathroom1 from '$lib/assets/showcase/bathroom/IMG_3542.jpg';
    import Bathroom2 from '$lib/assets/showcase/bathroom/IMG_3986.jpg';
    import Bathroom3 from '$lib/assets/showcase/bathroom/IMG_4919.jpg';
    import Bathroom4 from '$lib/assets/showcase/bathroom/IMG_4921.jpg';
    import Bathroom5 from '$lib/assets/showcase/bathroom/IMG_8015.jpg';

    let currentImageIndex = $state(0);
    let filter: "all" | "kitchen" | "bathroom" = $state("all");
    let isUserInteracting = $state(false);

    const images = [
        // Kitchen images
        {
            src: Kitchen1,
            alt: 'Modern Kitchen Renovation',
            category: 'Kitchen'
        },
        {
            src: Kitchen2,
            alt: 'Kitchen Design',
            category: 'Kitchen'
        },
        {
            src: Kitchen3,
            alt: 'Kitchen Remodel',
            category: 'Kitchen'
        },
        {
            src: Kitchen4,
            alt: 'Custom Kitchen Cabinets',
            category: 'Kitchen'
        },
        {
            src: Kitchen5,
            alt: 'Modern Kitchen Island',
            category: 'Kitchen'
        },
        {
            src: Kitchen6,
            alt: 'Kitchen Countertops',
            category: 'Kitchen'
        },
        {
            src: Kitchen7,
            alt: 'Kitchen Backsplash',
            category: 'Kitchen'
        },
        {
            src: Kitchen8,
            alt: 'Contemporary Kitchen',
            category: 'Kitchen'
        },
        {
            src: Kitchen9,
            alt: 'Kitchen Lighting',
            category: 'Kitchen'
        },
        {
            src: Kitchen10,
            alt: 'Kitchen Appliances',
            category: 'Kitchen'
        },
        // Bathroom images
        {
            src: Bathroom1,
            alt: 'Bathroom Remodel',
            category: 'Bathroom'
        },
        {
            src: Bathroom2,
            alt: 'Modern Bathroom Vanity',
            category: 'Bathroom'
        },
        {
            src: Bathroom3,
            alt: 'Modern Bathroom',
            category: 'Bathroom'
        },
        {
            src: Bathroom4,
            alt: 'Luxury Bathroom',
            category: 'Bathroom'
        },
        {
            src: Bathroom5,
            alt: 'Bathroom Design',
            category: 'Bathroom'
        }
    ];

    let filteredImages = $derived(filter === "all" ? images : images.filter((img) => img.category.toLowerCase() === filter));

    $effect(() => {
        const interval = isUserInteracting ? 20000 : 5000; // 20 seconds after user interaction, 5 seconds normally
    
        const timer = setInterval(() => {
            currentImageIndex = currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1;
            // Reset user interaction flag after auto-advance
            if (isUserInteracting) {
                isUserInteracting = false;
            }
        }, interval);

        return () => clearInterval(timer);
    });

    function goToPrevious() {
        currentImageIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
        isUserInteracting = true;
    };

    function goToNext() {
        currentImageIndex = currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1;
        isUserInteracting = true;
    };

    function goToSlide(index: number) {
        currentImageIndex = index;
        isUserInteracting = true;
    };

    function handleFilterChange(newFilter: "all" | "kitchen" | "bathroom") {
        filter = newFilter;
        currentImageIndex = 0; // Reset to first image when filter changes
    };
</script>


<section class="py-16 md:py-24 bg-white" data-section="recent-work">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Recent Work</h2>

            <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Take a look at some of our recent kitchen and bathroom renovation projects 
                that showcase our attention to detail and quality craftsmanship.
            </p>
        
            <div class="flex justify-center space-x-4 mb-8">
                <button
                    onclick={() => handleFilterChange('all')}
                    class={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    filter === 'all' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-secondary'
                    }`}
                >
                    All Projects ({images.length})
                </button>

                <button
                    onclick={() => handleFilterChange('kitchen')}
                    class={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    filter === 'kitchen' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-secondary'
                    }`}
                >
                    Kitchens ({images.filter(img => img.category === 'Kitchen').length})
                </button>

                <button
                    onclick={() => handleFilterChange('bathroom')}
                    class={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    filter === 'bathroom' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-secondary'
                    }`}
                >
                    Bathrooms ({images.filter(img => img.category === 'Bathroom').length})
                </button>
            </div>
        </div>

        <div class="relative max-w-4xl mx-auto">
            <div class="relative h-96 md:h-125 rounded-2xl overflow-hidden shadow-2xl">
                <img
                    src={filteredImages[currentImageIndex]?.src}
                    alt={filteredImages[currentImageIndex]?.alt}
                    class="w-full h-full object-cover"
                />
                <div class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {filteredImages[currentImageIndex]?.category}
                </div>

                <button
                    title="Previous Picture"
                    onclick={goToPrevious}
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button
                    title="Next Picture"
                    onclick={goToNext}
                    class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div class="flex justify-center mt-6 space-x-2">
                {#each filteredImages as _, index (`adot${index}`)}
                    <button
                        title="See More"
                        onclick={() => goToSlide(index)}
                        class="w-3 h-3 rounded-full transition-all duration-200 {
                            index === currentImageIndex 
                            ? 'bg-primary scale-110' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }"
                    ></button>
                {/each}
            </div>

            <div class="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
                {#each filteredImages as image, index (`athumbImage${index}`)}
                    <button
                        onclick={() => goToSlide(index)}
                        class="shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 {
                            index === currentImageIndex 
                            ? 'ring-4 ring-primary scale-110' 
                            : 'opacity-70 hover:opacity-100'
                        }"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            class="w-full h-full object-cover"
                        />
                    </button>
                {/each}
            </div>
        </div>
    </div>
</section>