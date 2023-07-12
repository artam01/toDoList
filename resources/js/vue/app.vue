<template>
    <div class="todoListContainer">
      <div class="heading">
        <h2 id="title">Todo List</h2>
        <add-item-from/>
      </div>
    </div>
  </template>
  
  <script>
  
  import addItemForm from './addItemForm.vue';
  import listView from './listView.vue';
  export default {
    components:{
        addItemForm,
        listView
    }
  }
  </script>
  
  <style scoped>
  .todoListContainer {
      width: 350px;
      margin: auto;
  }
  .heading{
      background:#e6e6e6;
      padding: 10px;
  }
  #title {
      text-align: center;
  }
  </style>
  

