<template>
  <ol class="flex justify-center gap-1 text-xs font-medium">
    <li>
      <a
        @click="() => page > 1 && page--"
        href="#"
        class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <span class="sr-only">Prev Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </li>

    <li v-if="page > 1">
      <a
        @click="page--"
        href="#"
        class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
      >
        {{ page - 1 }}
      </a>
    </li>

    <li
      class="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
    >
      {{ page }}
    </li>

    <li>
      <a
        @click="page++"
        href="#"
        class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
      >
        {{ page + 1 }}
      </a>
    </li>

    <li>
      <a
        @click="page += 2"
        href="#"
        class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
      >
        {{ page + 2 }}
      </a>
    </li>

    <li>
      <a
        @click="page++"
        href="#"
        class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <span class="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </li>
  </ol>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      page: 1,
    };
  },
  computed: mapGetters(["getFilters"]),
  methods: mapActions(["fetchGames"]),
  watch: {
    page() {
      this.fetchGames({ page: this.page, filters: { name: "", year: 2024 } });
    },
  },
};
</script>

<style lang="css" scoped>
</style>