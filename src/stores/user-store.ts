import { getStorageKey } from "@/utils/storageUtils"
import { defineStore } from 'pinia'

const accessTokenKey = getStorageKey('access-token')
const userInfoKey =  getStorageKey('access-token')

export const useUserStore = defineStore("userStore",{
  state:() =>({
    accessToken: useLocalStorage<string | undefined>(accessTokenKey,undefined,{
      writeDefaults:false
    }),
    actions: {
    }
  })
})