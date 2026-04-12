<script lang="ts">
    import { onMount } from "svelte";
    import { fly, slide } from "svelte/transition";

    let currentIndex = $state(0);

    let {
        messages = [],
    }: {
        messages: string[],
    } = $props();

    // svelte-ignore state_referenced_locally
        let messages2 = $state(messages.map((message) => {
        return {
            text: message,
            show: false
        }
    }));

    $effect(() => {
        messages2 = messages.map((message, index) => {
            return {
                text: message,
                show: index === 0
            }
        });
    });

    onMount(() => {
        const clearit = setInterval(() => {
            if (currentIndex + 1 === messages2.length) {
                currentIndex = 0;
            } else {
                currentIndex +=1;
            }
            messages2[currentIndex].show = true;
            let minusIndex = messages2.at(currentIndex - 1);
            if (minusIndex) minusIndex.show = false;
        }, 10000);

        return () => {
            clearInterval(clearit);
        }
    });
</script>

<div class="message-board">
    {#each messages2 as message (`amessage${message.text}`)}
        {#if message.show} 
            <p
                class="text-sm text-top-bar-foreground/80 whitespace-nowrap text-cente"
                in:fly={{
                    duration: 800,
                    y: 20,
                    delay: 400
                }}
                out:fly={{
                    duration: 400,
                    y: -20
                }}
            >{message.text}</p>
        {/if}
    {/each}
</div>

<style>
    .message-board {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
</style>