<template>
    <div class="addItem">   
        <input type="text" v-model="item.name"/>
        <font-awsome-icon
            icon="plus-square"
            @click="addItem()"
            :class="[item.name ?'active' : 'inactive','plus']"
        />
    </div>

</template>

<script>

export default {
data:function(){
    return {
        item:{
            name:""
            }
        }
    },
    methods: {
        addItem(){
            if(this.item.name==''){
                return;
            }

        }
    },
}
</script>
<style scoped>
.addItem{
    display: flex;
    justify-content: center;
    align-items: center;

}
input{
    background: #f7f7f7;
    border: 0px;
    outline: none;
}
.plus{
    font-size: 20px;
}
.active{
    color: forestgreen;
}
.inactive{
    color:#999;
}
</style>
