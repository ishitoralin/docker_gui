import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore("auth", () => {
    const token = ref(null)
    const setToken = (item) => {
        token.value = item
    }

    const clearToken = () => {
        token.value = null
    }

    const getToken = computed(() => token.value)

    return {
        token,
        setToken,
        clearToken,
        getToken,
    }
})
