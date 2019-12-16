<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { ProductService } from "../storage_services/product_service";

  const dispatch = createEventDispatcher();

  export let products = [];
  let productToAdd = {};
  let productToUpdate = {};

  onMount(() => {
    clear();
    console.log("products", products, "name", name);
  });

  let service = new ProductService();

  async function add() {
    try {
      const addedProducts = await service.addItem(productToAdd);
      dispatch("add-item", addedProducts[0]);
      clear();
    } catch (error) {
      alert(error.message);
    }
  }

  async function remove(id) {
    try {
      const noOfRecordRemoved = await service.removeItem(id);
      if (noOfRecordRemoved > 0) {
        dispatch("remove-item");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function update() {
    try {
      const noOfRecordUpdated = await service.updateItem(productToUpdate);
      if (noOfRecordUpdated > 0) {
        dispatch("update-item");
        productToUpdate = {};
      }
    } catch (error) {
      alert(error.message);
    }
  }

  function edit(item) {
    productToUpdate = item;
  }

  function clear() {
    productToAdd = {
      name: "",
      price: 0,
      quantity: 0
    };
  }
</script>

<style>
  .product__table {
    border-collapse: collapse;
  }
  .product__table tr td,
  .product__table tr th {
    border: 1px solid black;
    padding: 5px;
  }
</style>

<div class="productToAdd">

  <table class="product__table">
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th />
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <input bind:value={productToAdd.name} type="text" />
        </td>
        <td>
          <input bind:value={productToAdd.price} type="number" />
        </td>
        <td>
          <input bind:value={productToAdd.quantity} type="number" />
        </td>
        <td>
          <button on:click={add}>Add</button>
        </td>
        <td>
          <button on:click={clear}>Clear</button>
        </td>
      </tr>
      {#each products as item (item.id)}
        {#if item.id !== productToUpdate.id}
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <button on:click={() => edit(item)}>Edit</button>
            </td>
            <td>
              <button on:click={() => remove(item.id)}>Remove</button>
            </td>
          </tr>
        {:else}
          <tr>
            <td>
              <input type="text" bind:value={productToUpdate.name} />
            </td>
            <td>
              <input type="text" bind:value={productToUpdate.price} />
            </td>
            <td>
              <input type="text" bind:value={productToUpdate.quantity} />
            </td>
            <td>
              <button on:click={update}>Update</button>
            </td>
            <td>
              <button on:click={() => (productToUpdate = {})}>Cancel</button>
            </td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>
