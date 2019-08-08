<template>
  <div class="playlist">
    <PLaylistList></PLaylistList>
  </div>
</template>

<script>
// @ is an alias to /src
import PLaylistList from '@/components/playlist/PlaylistList.vue'

export default {
  name: 'playlist',
  components: {
    PLaylistList
  }
}
</script>
