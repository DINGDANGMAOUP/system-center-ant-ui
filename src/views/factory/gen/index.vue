<template>
  <div>
    <span>{{ rolee }}</span>
    <a-button v-if="hasPermission([rolee])" type="primary" block> 只有admin角色可见 </a-button>
    <Authority :value="rolee">
      <a-button type="primary" block> 只有admin角色可见 Authority </a-button>
    </Authority>
  </div>
</template>

<script lang="ts">
  import { Authority } from '/@/components/Authority';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: {
      usePermission,
      Authority,
    },
    setup() {
      const { hasPermission } = usePermission();
      return { hasPermission,Authority };
    },
    data() {
      return {
        rolee: '5000',
      };
    },
  });
</script>

<style></style>
