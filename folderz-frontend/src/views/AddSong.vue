<template>
    <div class="container formNewSong">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <div class="inputs">            
                <Input :propToBind="form.title" labelText="Title" inputName="title" placeholder="Title ..." type="text"/>     
                <Input :propToBind="form.artist" labelText="Artist" inputName="artist" placeholder="Artist ..." type="text"/> 
                <Input :propToBind="form.duration" labelText="Duration" inputName="duration" placeholder="Duration ..." type="text"/> 
                <Input :propToBind="form.date" labelText="Date" inputName="date" placeholder="Date ..." type="date"/>      
            </div>
            <div class="buttons">
                <b-button type="reset" variant="danger">Reset</b-button> | 
                <b-button type="submit" variant="primary">Submit</b-button>  
            </div>      
        </b-form>
  </div>
</template>
<script>
  import Input from '../components/shared/input.vue'

  export default {
    data() {
      return {
        form: {
          title: '',
          artist: '',
          duration: '',
          date:'',          
        },
        show: true
      }
    },
    components: { Input },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>

    .inputs{
        background-color: #f8f9fa;
        margin-top: 30px;
        box-shadow: -9px 9px 8px -5px rgba(166,164,166,1);
        padding: 30px;
        color: black;
        margin-bottom: 15px;
    }
    .formNewSong label{
        text-align: left;
        font-weight: bold;
    }
</style>
