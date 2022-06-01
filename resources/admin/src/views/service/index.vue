<template>
    <div class="app-container">    

        <service-list></service-list>
        
    </div>
</template>

<script>

import AddService from './components/add-service'
import ServiceList from './components/service-list'

export default {
    components:{AddService,ServiceList}
}
</script>