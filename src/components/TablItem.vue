<template>
  <tbody v-for="item in list" :key="item.rank" class="divide-y divide-gray-200">
    <tr>
      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {{ item.name }}
      </td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
        {{ item.platform }}
      </td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
        {{ item.genre }}
      </td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
        {{ item.year }}
      </td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
        {{ item.publisher }}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: { list: { type: Array, default: [] } },
};
</script>

