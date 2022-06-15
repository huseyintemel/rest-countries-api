<script>
    // @ts-nocheck
    export let countryAbbreviation;
    import { lightMode } from "$lib/stores";
</script>
<div class="flex flex-row items-center justify-center rounded-md border {$lightMode ?  "bg-white" : "text-white bg-dark-blue border-dark-blue"} flex-shrink-0">
    <p class="py-2 px-5">{countryAbbreviation}</p>
</div>