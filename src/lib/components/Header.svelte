<script lang="ts">
    import NavigationBar from "./NavigationBar.svelte";
    import TopHeader from "./TopHeader.svelte";

    let cl = $state<"show" | "hide">("show");
    let transition = $state(true);
    let prevScrollPos = $state(0);

    function scrolling(event: any) {
        let currentScrollPos = event.target.scrollingElement.scrollTop;
        if(currentScrollPos > 150) {
            if (currentScrollPos < prevScrollPos) {
                cl = "show";
            } else {
                cl = "hide";
            }
        } else {
            cl = "show";
        }
        prevScrollPos = currentScrollPos;
    }

    // If a new link is clicked, the header will appear automatically with no transition.
    function linkClicked() {
        transition = false;
        cl = "show";
        setTimeout(() => {
            transition = true;
        }, 100);
    }
</script>

<svelte:window on:scroll={scrolling} />

<header class="{cl} {transition ? "transition2" : ""}">
    <TopHeader />
    <NavigationBar {linkClicked} {cl} />
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
        grid-template-rows: 80px 80px;
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
</style>