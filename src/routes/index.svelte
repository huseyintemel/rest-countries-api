<script>
    import CountryCard from "$lib/components/CountryCard.svelte";
    import axios from "axios";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import CountryCardPlaceHolder from "$lib/placeholders/CountryCardPlaceHolder.svelte";
    
    let countries = [];
    let loading = false;
    let filterVisible = false;
    let selectedFilter;
    let hasFilterSelected = false;
    let searchInput = '';
    $: filteredCountries = [];

    $:{
        if(searchInput){
            filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(searchInput.toLowerCase()));
        }else{
            filteredCountries = countries;
        }
    }

    let filters = [
        {id:1,name:"All"},
        {id:2,name:"Africa"},
        {id:3,name:"Americas"},
        {id:4,name:"Asia"},
        {id:5,name:"Europe"},
        {id:6,name:"Oceania"},
    ]; 

    onMount(async()=>{
        const url = `https://restcountries.com/v2/all`;
        loading = true;
        let response = await axios.get(url);
        loading = false;
        countries = response.data;
    });
    
    function onClicked(countryName){
        goto(countryName);
    }

    function toggleFilter(){
        filterVisible = !filterVisible;
    }

    async function filterClicked(i){
        selectedFilter = filters[i].name;
        hasFilterSelected = true;
        filterVisible = false;

        let region = selectedFilter.toLowerCase();
        let url;

        if(region == "all"){
            url = `https://restcountries.com/v2/all`;
        }else{
            url = `https://restcountries.com/v2/region/`+region;
        }
       
        loading = true;
        let response = await axios.get(url);
        loading = false;
        filteredCountries = response.data;
    }

</script>

<div class="h-full w-full font-nunito"> 
    <div class="bg-light-gray dark:bg-very-dark-blue min-h-screen transition-colors duration-200">
        <div class="flex flex-row flex-wrap space-y-6 sm:space-y-0 justify-between items-center px-8 sm:px-20 py-12">
            <div class="w-full max-w-md relative shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute z-10 text-dark-gray top-4 left-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input bind:value={searchInput} class="w-full font-semibold rounded-md border py-4 px-16 focus:outline-none" placeholder="Search for a country...">
            </div>
            <div class="relative">
                <button on:click={toggleFilter} class="inline-flex {hasFilterSelected ? "w-52" :"w-full"} py-4 px-5 justify-between items-center space-x-4 font-semibold bg-white rounded-md border shadow-sm focus:outline-none">
                    {hasFilterSelected ? selectedFilter : "Filter by Region"}
                    <svg class="-mr-1 ml-8 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <div class="{filterVisible ? "flex" : "hidden"} flex-col mt-1 absolute w-full bg-white rounded-md z-20">
                    {#each filters as filter,i}
                        <p on:click={()=>filterClicked(i)} class="py-2 px-6 hover:bg-light-gray cursor-pointer">{filter.name}</p>
                    {/each}
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-8 sm:px-20"> 
            {#if !loading}
                {#each filteredCountries as country}
                    <CountryCard 
                        countryName={country.name}
                        countryImageSrc={country.flag}
                        countryPopulationCount={country.population}
                        countryRegion={country.region}
                        countryCapital={country.capital}
                        onClicked={()=>onClicked(country.name)}
                    />
                {/each}
            {:else}
                <CountryCardPlaceHolder />
                <CountryCardPlaceHolder />
                <CountryCardPlaceHolder />
                <CountryCardPlaceHolder />
                <CountryCardPlaceHolder />
                <CountryCardPlaceHolder />
                <CountryCardPlaceHolder />
                <CountryCardPlaceHolder />
            {/if}
        </div>
    </div>
</div>
