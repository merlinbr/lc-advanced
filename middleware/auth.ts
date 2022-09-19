import {navigateTo} from "#app";

export default defineNuxtRouteMiddleware((to) => {
  console.log('defineNuxtRouteMiddleware')
  const user = useSupabaseUser()

  if (user.value && to.path !== '/') {
    console.log('if user.value')
    return navigateTo(to)
  } else {
    console.log('else bereich')
    return navigateTo('/')
  }
})
