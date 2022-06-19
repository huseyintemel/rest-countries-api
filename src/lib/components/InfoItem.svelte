<script>
    export let infoHeader;
    export let infoDetail;
    export let hasMultipleDetail = false;
</script>


<div class="flex flex-row lg:flex-col xl:flex-row flex-wrap">
    <p class="font-bold dark:text-white">{infoHeader}:</p>
    {#if hasMultipleDetail}
        {#each infoDetail as detail,i}
            <span class="font-semibold ml-1 dark:text-dark-gray">{i==0 ? "" :","} {detail.name}</span>
        {/each}
    {:else}
        <span class="font-semibold ml-1 dark:text-dark-gray">{infoDetail}</span>    
    {/if}
</div>