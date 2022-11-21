<script lang="js">
    import {articles} from "../../stores/articles";
    import { fade } from "svelte/transition";
    import ArticleCard from "../../components/ArticleCard.svelte";
	import { loop_guard } from "svelte/internal";
    const url_base = "http://umamidrupal.ddev.site/";
</script>
<svelte:head>
    <title>Articles</title>
</svelte:head>
<div class="mt-12 p-3 h-screen w-screen bg-umami">
<h1>Our Articles</h1>
<h2>Articles</h2>
    <ul class="columns-1 med:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
    {#each $articles as article}
        <li class="center" transition:fade>
            <ArticleCard article_title={article.title} article_img={url_base+article.image}/>
        </li>
    {/each}
    </ul>
</div>