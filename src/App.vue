<template>
  <filters />
  <app-table></app-table>
  <paginator />
</template>

<script>
import AppTable from "./components/AppTable.vue";
import Paginator from "./components/Paginator.vue";
import Filters from "./components/Filters.vue";
export default {
  components: { AppTable, Paginator, Filters },
};
</script>
