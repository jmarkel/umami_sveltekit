<script lang="js">
    import {recipes} from "../../stores/recipes";
    import { fade } from "svelte/transition";
	import { loop_guard } from "svelte/internal";
    import RecipeCard from "../../components/RecipeCard.svelte";
    const url_base = "http://umamidrupal.ddev.site/";
</script>

<svelte:head>
    <title>Recipes</title>
</svelte:head>
<div class="mt-12 p-3 h-screen w-screen bg-umami">
    <h1>Our Recipes</h1>
    <h2>Recipes</h2>
    <ul class="columns-1 med:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
    {#each $recipes as recipe}
        <li transition:fade>
            <RecipeCard recipe_title={recipe.title} recipe_img={url_base+recipe.image} recipe_difficulty={recipe.difficulty}/>
        </li>
    {/each}
    </ul>
</div>