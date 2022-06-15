<script>
    // @ts-nocheck
    export let infoHeader;
    export let infoDetail;
    export let hasMultipleDetail = false;
    import { lightMode } from "$lib/stores";
</script>


<div class="flex flex-row lg:flex-col xl:flex-row flex-wrap">
    <p class="font-bold {$lightMode ? "" : "text-white"}">{infoHeader}:</p>
    {#if hasMultipleDetail}
        {#each infoDetail as detail,i}
            <span class="font-semibold ml-1 {$lightMode ? "" : "text-dark-gray"}">{i==0 ? "" :","} {detail.name}</span>
        {/each}
    {:else}
        <span class="font-semibold ml-1 {$lightMode ? "" : "text-dark-gray"} ">{infoDetail}</span>    
    {/if}
</div>