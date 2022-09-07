import { getStorageKey } from "@/utils/storageUtils"
import { defineStore } from 'pinia'
import type { RemovableRef  } from "@vueuse/core"

const accessTokenKey = getStorageKey('access-token')
const userInfoKey =  getStorageKey('access-token')


export const useUserStore = defineStore("userStore",{
  state:() =>({
    accessToken: useLocalStorage<string|undefined>(accessTokenKey,undefined,{
      writeDefaults:false
    }),
    
  }),
  actions:{
  }
})
