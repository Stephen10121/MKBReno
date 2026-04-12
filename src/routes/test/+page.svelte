<script lang="ts">
    import SwipeUpMessageBar from "@/components/SwipeUpMessageBar.svelte";

    const testimonials = [
        "Remodeling Experts You Can Trust",
        "\"Very satisfied with the work! We love our new bathroom\" — Sam P.",
        "Proudly Serving Vancouver, WA & Portland, OR",
        "\"MKB transformed our kitchen beyond expectations\" — Lisa M.",
        "Quality Craftsmanship Since Day One",
    ];

</script>

<main>
    <SwipeUpMessageBar messages={testimonials} />
</main>

<style>
    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
