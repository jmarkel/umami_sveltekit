import { writable } from "svelte/store";

export const recipes = writable([]);

async function fetch_recipes() {
    const url = 'http://umamidrupal.ddev.site/jsonapi/node/recipe?include=field_media_image.field_media_image&fields[file--file]=url,uri';
    const response = await fetch(url);
    const cats = await response.json();
    const recipe_array = [];

    const recipe_data = cats.data;
    const recipe_images = cats.included;
    const count = parseInt(cats.meta.count);

    const loaded_recipes = recipe_data.map((element, index) => {
        const ix = index + count;
        const recipe = {
            title: element.attributes.title,
            difficulty: element.attributes.field_difficulty,
            summary: element.attributes.field_summary.value,
            image: recipe_images[ix].attributes.uri.url,
        }
        return recipe;
    })
    recipes.set(loaded_recipes);
}
fetch_recipes();