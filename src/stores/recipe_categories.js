import { writable } from "svelte/store";

export const categories = writable([]);

async function fetch_categories() {
    const url = 'http://umamidrupal.ddev.site/jsonapi/taxonomy_term/recipe_category';
    const response = await fetch(url);
    const cats = await response.json();
    const loaded_categories = cats.data.map((data, index) => {
        return {
            uuid: data.id,
            name: data.attributes.name
        }
    })
    categories.set(loaded_categories);
}
fetch_categories();