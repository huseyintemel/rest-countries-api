<script>
    export let countryName = "";
    export let countryImageSrc="";
    export let countryPopulationCount = 0;
    export let countryRegion = "";
    export let countryCapital = "";
    export let onClicked;
</script>

<div on:click={onClicked} class="flex flex-col rounded-md shadow-md bg-white dark:bg-dark-blue dark:text-white pb-11 hover:scale-105 hover:duration-700 transition-colors duration-200 cursor-pointer">
    <div class="h-[200px] w-full overflow-hidden box-border">
        <img class="  w-full h-full max-w-full rounded-t-md object-cover" alt="flag" src={countryImageSrc} />
    </div>
    <h1 class="font-bold mt-8 px-6 text-xl">{countryName}</h1>
    <div class="flex flex-col space-y-4 px-6 pt-5">
        <p class="font-bold">Population:
            <span class="font-semibold">{countryPopulationCount}</span>
        </p>
        <p class="font-bold">Region:
            <span class="font-semibold">{countryRegion}</span>
        </p>
        <p class="font-bold">Capital:
            <span class="font-semibold">{countryCapital}</span>
        </p>
    </div>
</div>