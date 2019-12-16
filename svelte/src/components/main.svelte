<script>
  import { onMount } from "svelte";
  import { initJsStore } from "../storage_services/idb_service";
  import ProductsGrid from "./products_grid.svelte";
  import { ProductService } from "../storage_services/product_service";

  onMount(async () => {
    try {
      const isDbCreated = await initJsStore();
      console.log("jsstore initiated");
      fetchProdutcs();
    } catch (ex) {
      console.error(ex);
      alert("unable to initialize local storage services");
    }
  });

  export let products = [];
  async function fetchProdutcs() {
    try {
      products = await new ProductService().fetchAll();
    } catch (error) {
      alert(error.message);
    }
  }

  function addProductToStore(event) {
    products = [...products, event.detail];
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <h1>
    Welcome to
    <a href="https://jsstore.net/">jsstore</a>
    demo
  </h1>
  <ProductsGrid
    on:update-item={fetchProdutcs}
    on:remove-item={fetchProdutcs}
    on:add-item={addProductToStore}
    {products} />
</main>
