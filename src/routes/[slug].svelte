<script context="module">
    export async function load(params) {
        let slug = params.params.slug;
        const url = `https://restcountries.com/v2/name/`+slug;
        let response = await axios.get(url);
        return { 
            props: { 
                country:response.data[0]
            }
        }
    }
</script>

<script>
    // @ts-nocheck
    import BorderCountryCard from "$lib/components/BorderCountryCard.svelte";
    import InfoItem from "$lib/components/InfoItem.svelte";
    import { lightMode } from "$lib/stores";
    import axios from "axios";
    import { goto } from "$app/navigation";
    
    export let country;

    function goBack(){
        goto('/');
    }

    async function borderCountryClicked(code){
        let url = 'https://restcountries.com/v2/alpha/'+code;
        let response = await axios.get(url);
        let borderCountryName = response.data.name;
        
        goto('/'+borderCountryName);
    }

</script>

<div class="{$lightMode ? "bg-light-gray" : "bg-very-dark-blue"} font-nunito flex lg:fixed w-full h-full">
    <div class="mx-8 lg:mx-20 w-full">
        <button on:click={goBack} class="my-12 shadow-md px-4 py-1.5 focus:outline-none rounded-md inline-flex items-center {$lightMode ? "bg-white" : "bg-dark-blue text-white border-dark-blue "} font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back
        </button>
       <div class="flex flex-col lg:flex-row space-x-0 lg:space-x-16">
            <div class="max-w-md h-72 flex-shrink-0">
                <img class="rounded-md flex-shrink-0 shadow-md object-cover" alt="flag" src={country.flag} />
            </div>
            <div class="flex flex-col my-10 w-full max-w-xl xl:max-w-3xl flex-shrink-0">
                <h1 class="font-bold text-2xl  {$lightMode ? "" : "text-white"}">{country.name}</h1>
                <div class="flex flex-col md:flex-row justify-between max-w-4xl w-full">
                    <div class="flex flex-col space-y-4 pt-8 w-full">
                        <InfoItem infoHeader={"Native Name"} infoDetail={country.nativeName} />
                        <InfoItem infoHeader={"Population"} infoDetail={country.population} />
                        <InfoItem infoHeader={"Region"} infoDetail={country.region} />
                        <InfoItem infoHeader={"Sub Region"} infoDetail={country.subregion} />
                        <InfoItem infoHeader={"Capital"} infoDetail={country.capital} />
                    </div>
                    <div class="flex flex-col space-y-4 pt-8 w-full">
                        <InfoItem infoHeader={"Top Level Domain"} infoDetail={country.topLevelDomain} />
                        {#if country.currencies && country.currencies.length > 0}
                            <InfoItem infoHeader={"Currencies"} infoDetail={country.currencies} hasMultipleDetail={true} />
                        {/if}
                        {#if country.languages && country.languages.length > 0}
                            <InfoItem infoHeader={"Languages"} infoDetail={country.languages} hasMultipleDetail={true} />
                        {/if}
                    </div>
                </div>
                <div class="flex flex-col xl:flex-row space-x-0 xl:space-x-4 items-start xl:items-center mt-8">
                    <span class="font-bold mb-4 xl:mb-0 whitespace-nowrap  {$lightMode ? "" : "text-white"}">Border Countries:</span>
                    {#if country.borders}
                        <div class="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2">
                            {#each country.borders as border}
                                <BorderCountryCard onClicked={()=>borderCountryClicked(border)} countryAbbreviation={border} />
                            {/each}
                        </div>
                    {:else}
                        <p class="text-red-600 font-semibold">This country has no border country</p>   
                    {/if}    
                </div>
            </div>
       </div>    
    </div>
</div>