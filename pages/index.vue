<template>
  <Account v-if="user" />
  <Auth v-else />
</template>

<script setup lang="ts">
import Account from '../components/Account.vue'
import Auth from '../components/Auth.vue'

const user = useSupabaseUser();
</script>
