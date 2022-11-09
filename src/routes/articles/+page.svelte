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
<ul>
{#each $articles as article}
<li transition:fade>
    <h2>{article.title}</h2>
    <img src={url_base+article.image} alt={article.title} width="200px"/></li>
{/each}
</ul>