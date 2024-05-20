<template>
  <div class="filer-bar flex w-screen bg-blue-600 items-center pt-2 pb-2">
    <input
      class="input"
      placeholder="Search"
      type="text"
      v-model.trim="nameGame"
    />

    <div class="range-container">
      <p class="text-white">Year</p>
      <div class="flex items-center flex-col gap-0.5">
        <p class="text-white">to {{ formatYear(year) }}</p>
        <input
          type="range"
          v-model.number="year"
          class="appearance-none w-full h-2 bg-gray-200 rounded-md outline-none focus:bg-gray-300 focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <div>
      <label for="name" class=""
        ><input type="radio" id="name" v-model="sort" value="name" />Name</label
      >
      <input type="radio" id="year" v-model="sort" value="year" />
      <label for="year" class="">Year</label>
      <input type="radio" id="publisher" v-model="sort" value="publisher" />
      <label for="publisher" class="">Publisher</label>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      nameGame: "",
      year: 100,
      sort: "name",
    };
  },
  methods: {
    ...mapActions(["changeFilters", "fetchGames"]),
    formatYear(y) {
      return parseInt(1974 + y / 2);
    },
  },
  computed: mapGetters(["getFilters"]),
  watch: {
    nameGame() {
      this.changeFilters({ ...this.getFilters, name: this.nameGame });
      this.fetchGames({
        page: 1,
        filters: { ...this.getFilters, name: this.nameGame },
      });
    },
    year() {
      this.changeFilters({
        ...this.getFilters,
        year: this.formatYear(this.year),
      });
      this.fetchGames({
        page: 1,
        filters: { ...this.getFilters, year: this.formatYear(this.year) },
      });
    },
  },
};
</script>

<style lang="css" scoped>
.input {
  height: 32px;
  width: 230px;
  border: none;
  border-radius: 15px;
  margin-left: 20px;
  padding-left: 20px;
  display: flex;
}
.range-container {
  display: flex;
  align-items: center;
  margin-left: 20px;
  gap: 10px;
}
</style>