/* eslint-disable no-console */

import { unixfs, type UnixFS } from '@helia/unixfs'
import { createHelia } from 'helia'
import { multiaddr } from '@multiformats/multiaddr'
import { type Plugin, type App, ref, type Ref } from 'vue'

export interface HeliaProvider {
  loading: Ref<boolean>
  helia: Ref<Awaited<ReturnType<typeof createHelia>>>
  error: Ref<any>
  fs: Ref<UnixFS>
}

export const HeliaProviderPlugin : Plugin = {
  async install (app: App) {
    const loading = ref(true)
    const error = ref('')
    const helia = ref()
    const fs = ref()
    app.provide('HeliaProvider', {
      loading,
      error,
      helia,
      fs
    })
    try {
      const jwt = import.meta.env.VITE_PINATA_JWT!
      if( jwt ) {        
        error.value = 'Using Pinata instead of Helia'
        console.log(error.value);
      }
      else {
        const instance = await createHelia();        
        instance.libp2p.dial(multiaddr('/ip4/127.0.0.1/tcp/45005'))
        instance.start();        
        fs.value = unixfs(instance);
        helia.value = instance;
        console.log('Helia started', instance.libp2p.peerId);
      }
    } catch (e:any) {
      console.error(e)
      error.value = e.toString()  
    }
    loading.value = false;
  }
}