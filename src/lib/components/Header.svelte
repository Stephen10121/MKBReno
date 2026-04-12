<script lang="ts">
    import NavigationBar from "./NavigationBar.svelte";
    import TopHeader from "./TopHeader.svelte";
    import { topHeaderStatus } from "@/store";
    import { navigating } from "$app/state";

    let transition = $state(true);
    let prevScrollPos = $state(0);

    function scrolling(event: any) {
        let currentScrollPos = event.target.scrollingElement.scrollTop;
        if(currentScrollPos > 80) {
            if (currentScrollPos < prevScrollPos) {
                topHeaderStatus.set("show");
            } else {
                topHeaderStatus.set("hide");
            }
        } else {
            topHeaderStatus.set("show");
        }
        prevScrollPos = currentScrollPos;
    }
</script>

<svelte:window on:scroll={scrolling} />

<header class="{$topHeaderStatus} {transition ? "transition2" : ""}">
    <TopHeader />
    <div class="h-full">
        {#if navigating.complete !== null}
            <div class="loader"></div>
        {/if}
    </div>
    <NavigationBar />
</header>


<style>
    header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 100px;
        width: 100%;
        z-index: 200;
        display: grid;
        grid-template-rows: 80px 4px 80px;
    }

    header.transition2 {
        transition: transform 0.25s linear 0.2s;
    }

    header.hide {
        transform: translate(0, -80px);
    }

    header.show {
        transform: translate(0, 0);
    }

    /* HTML: <div class="loader"></div> */
    .loader {
        height: 100%;
        width: 100%;
        --c:no-repeat linear-gradient(#196c3b 0 0);
        background: var(--c),var(--c),#ffffff;
        background-size: 60% 100%;
        animation: l16 3s infinite;
    }

    @keyframes l16 {
        0%   {background-position:-150% 0,-150% 0}
        66%  {background-position: 250% 0,-150% 0}
        100% {background-position: 250% 0, 250% 0}
    }
</style>