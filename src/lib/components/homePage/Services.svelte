<script lang="ts">
    import BathroomServicesIcon from "./icons/BathroomServicesIcon.svelte";
    import KitchenServicesIcon from "./icons/KitchenServicesIcon.svelte";

    const services = [
        {
            title: "Kitchen Renovations",
            description: "Transform your kitchen into a culinary masterpiece with custom cabinetry, modern appliances, and beautiful countertops.",
            features: ["Custom Cabinetry", "Countertop Installation", "Appliance Integration", "Lighting Design"],
            icon: KitchenServicesIcon
        },
        {
            title: "Bathroom Remodeling",
            description: "Create a spa-like retreat with modern fixtures, elegant tile work, and luxurious finishes that enhance comfort and value.",
            features: ["Custom Tile Work", "Modern Fixtures", "Shower & Tub Installation", "Vanity Design"],
            icon: BathroomServicesIcon
        }
    ];
</script>

<section id="services" class="py-16 md:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Specialties</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in kitchen and bathroom renovations, bringing years of expertise 
                and attention to detail to every project.
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
            {#each services as service, index (`aservice${index}`)}
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="flex items-center mb-6">
                        <div class="bg-secondary p-3 rounded-lg text-primary mr-4">
                            <service.icon />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                    </p>
                    
                    <ul class="space-y-3">
                        {#each service.features as feature, featureIndex (`aservicefeature${featureIndex}`)}
                            <li class="flex items-center text-gray-700">
                                <svg class="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                {feature}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</section>