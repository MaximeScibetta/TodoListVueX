<template>
  <div id="app">
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

export default {
  name: 'app',
  components: {
    TodoList,
    TodoFooter,
  }
}
</script>

<style>
  .delete{
    background: none;
    border: none;
    color: #dc3545;
    font-size: 10px;
    border: 1px solid #dc3545;
    margin-left: 10px;
    border-radius: 5px;
  }
  .delete:hover{
      background: #dc3545;
      color: #fff;
      cursor: pointer;
    }
  .checkAll{
    position: absolute;
    top: 69px;left: 5px;
  }
  .form-control{
    padding-left: 18px; 
  }
  .list-group{
    margin-top: 25px;
    margin-bottom: 25px;
  }
  #app {
    position: relative;
    max-width: 500px;
    margin: 50px auto 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
