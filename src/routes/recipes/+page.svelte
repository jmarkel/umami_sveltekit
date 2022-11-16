<script lang="ts">
    import {recipes} from "../../stores/recipes";
    import { fade } from "svelte/transition";
	import { loop_guard } from "svelte/internal";
    const url_base = "http://umamidrupal.ddev.site/";
</script>

<svelte:head>
    <title>Recipes</title>
</svelte:head>
<h1>Our Recipes</h1>
<h2>Recipes</h2>
<ul class="columns-1 lg:columns-2 xl:columns-3 2xl:columns:4">
{#each $recipes as recipe}
<li transition:fade>
    <div>
    <h2>{recipe.title}</h2>
    <img src={url_base+recipe.image} alt={recipe.title} />
    <small>{recipe.summary}</small>
</div>
</li>
{/each}
</ul>