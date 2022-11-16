<script lang="js">
    import {categories} from "../stores/recipe_categories";
    import {recipes} from "../stores/recipes";
    import { fade } from "svelte/transition";
	import { loop_guard } from "svelte/internal";
    const url_base = "http://umamidrupal.ddev.site/";
</script>
<svelte:head>
    <title>Svelte Kit Umami</title>
</svelte:head>
<div class="mt-12 p-3 h-screen w-screen bg-umami">
<h1>Welcome to SvelteKit Umami</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>Categories</h2>
<ul>
{#each $categories as category}
<li transition:fade>{category.name}</li>
{/each}
</ul>
</div>