<template>
  <div>
    <div class="overflow-x-auto bg-gray-800">
      <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead class="ltr:text-left rtl:text-right">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Platform
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Genre
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Year
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Publisher
            </th>
          </tr>
        </thead>
        <tabl-item :list="getRows" />
      </table>
    </div>
  </div>
</template>

<script>
import TablItem from "./TablItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { TablItem },
  methods: mapActions(["fetchGames"]),
  computed: mapGetters(["getRows"]),
  mounted() {
    this.fetchGames({ page: 1, filters: { name: "", year: 2024 } });
  },
};
</script>

<style lang="css" scoped>
</style>