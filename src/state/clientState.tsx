import { syncObservable } from "@legendapp/state/sync"
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage"
import { synced } from '@legendapp/state/sync'
import { observable, syncState} from "@legendapp/state"; 

export const clientStates = syncState(observable(synced({token: "", isLoad: false})))
 


syncObservable(clientStates, {
  persist: {
      name: 'persistKey',
      plugin: ObservablePersistLocalStorage
  }
})