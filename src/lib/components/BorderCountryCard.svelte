<script>
    export let countryAbbreviation;
    export let onClicked;
</script>

<div on:click={onClicked} class="flex flex-row items-center justify-center rounded-md border cursor-pointer bg-white dark:text-white dark:bg-dark-blue dark:border-dark-blue flex-shrink-0">
    <p class="py-2 px-5">{countryAbbreviation}</p>
</div>