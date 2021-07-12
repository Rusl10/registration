<template>
    <div class="wrapper">
        <app-header/>
        <main class="page">
            <section class="reg">
                <div class="reg__container _container">
                    <app-registration/>
                </div>
            </section>
        </main>
    </div>
</template>
<script>

import AppHeader from './components/AppHeader';
import AppRegistration from './components/AppRegistration';
export default {
    name: 'App',
    data(){
      return{
        
      }
    },
    methods: {
      
    },
    components: {
      AppHeader,
      AppRegistration,

    },
  
}
</script>
<style src="./style.css">
</style>