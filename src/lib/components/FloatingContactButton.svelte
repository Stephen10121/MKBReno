<script lang="ts">
    let { click }: { click: () => unknown } = $props();
</script>

<button
    onclick={click}
    class="fixed bottom-6 right-6 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 z-50 flex items-center space-x-2 cursor-pointer"
    aria-label="Get Free Estimate"
>
    <span class="font-medium whitespace-nowrap">Free Estimate</span>
</button>