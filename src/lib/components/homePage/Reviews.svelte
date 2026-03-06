<script lang="ts">
    import { reviews } from "@/utils";
    import RenderStars from "../RenderStars.svelte";

    let currentReview = $state(Math.floor(Math.random() * reviews.length));

    function nextReview() {
        currentReview = (currentReview + 1) % reviews.length;
    };

    function prevReview() {
        currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    };

    function goToReview(index: number) {
        currentReview = index;
    };
</script>

<section class="py-16 md:py-24 bg-secondary/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers 
                have to say about their renovation experience with MKB Renovations.
            </p>
        </div>

        <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                <div class="flex justify-center mb-6">
                    <RenderStars rating={reviews[currentReview].rating} />
                </div>
                
                <blockquote class="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                    "{reviews[currentReview].text}"
                </blockquote>
                <div class="flex items-center justify-center space-x-4">
                    <div class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <span class="text-primary font-semibold text-lg">
                            {reviews[currentReview].name.charAt(0)}
                        </span>
                    </div>

                    <div class="text-left">
                        <div class="font-semibold text-gray-900 text-lg">
                            {reviews[currentReview].name}
                        </div>
                        <div class="text-gray-500 text-sm">
                            {reviews[currentReview].project}
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center items-center mt-8 space-x-4">
                <button
                    title="Previous Review"
                    onclick={prevReview}
                    class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div class="flex space-x-2">
                    {#each reviews as review, index (`areviewdot${index}`)}
                        <button
                            title="Go to review by {review.name}"
                            onclick={() => goToReview(index)}
                            class="w-3 h-3 rounded-full transition-all duration-200 {
                                index === currentReview 
                                    ? 'bg-primary scale-110' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }"
                        ></button>
                    {/each}
                </div>
                <button
                    title="Next Review"
                    onclick={nextReview}
                    class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>