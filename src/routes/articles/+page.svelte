<script lang="ts">
    import {articles} from "../../stores/articles";
    import { fade } from "svelte/transition";
	import { loop_guard } from "svelte/internal";
    const url_base = "http://umamidrupal.ddev.site/";
</script>
<svelte:head>
    <title>Articles</title>
</svelte:head>
<h1>Our Articles</h1>
<h2>Articles</h2>
<ul class="columns-1 lg:columns-2 xl:columns-3 2xl:columns-4">
{#each $articles as article}
<li class="center" transition:fade>
    <h2>{article.title}</h2>
    <img src={url_base+article.image} alt={article.title} width="200px"/></li>
{/each}
</ul>