<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-900">
    <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
          Welcome to Loot Council Advanced
        </h1>
        <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
          <button
            type="submit"
            class="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            <img class="social-media-login-icon" src="../assets/icons/discord-logo.svg" alt="Discord Logo"/>
            Login with Discord
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

definePageMeta({
  middleware: ['auth']
})

const handleLogin = async () => {
  try {
    const { error } = await supabase.auth.signIn({ provider: 'discord' })
    if (error) throw error
  } catch (error) {
    alert(error.error_description || error.message)
  }
}
</script>

<style>
.social-media-login-icon {
  width: 2em;
  height: 2em;
  display: inline-block;
  margin-right: .5em;
}
</style>
