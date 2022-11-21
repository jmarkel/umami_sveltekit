import { writable } from "svelte/store";

export const articles = writable([]);

async function fetch_articles() {
    const url = 'http://umamidrupal.ddev.site/jsonapi/node/article?include=field_media_image.field_media_image&fields[file--file]=url,uri';
    const response = await fetch(url);
    const cats = await response.json();

    const article_data = cats.data;
    const article_images = cats.included;
    const count = parseInt(cats.meta.count);
    articles.set(article_data);
    const loaded_articles = article_data.map((element, index) => {
        const ix = index + count;
        const article = {
            title: element.attributes.title,
            body: element.attributes.body.processed,
            image: article_images[ix].attributes.uri.url,
        }

        return article;
    })
    articles.set(loaded_articles);
}
fetch_articles();