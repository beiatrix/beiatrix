<script setup lang="ts">
import { interestItems } from '@/config/interest-items'
</script>

<template>
  <AppSection
    img-classes="h-16 mb-6"
    img-url="/images/interests.svg"
    title="interests"
  >
    <AppItem
      v-for="item in interestItems"
      :key="item.name"
      :item
      type="interest"
    />
  </AppSection>
</template>
