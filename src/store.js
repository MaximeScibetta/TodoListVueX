import Vue from 'vue'
import Vuex from 'vuex'
import nanoid from 'nanoid'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        tasks: [],
        visibility: 'all',
    },
    getters:{
        // Return all items in filteredTasks array
        filteredTasks(state){
            let filteredTasks = []
            if (state.visibility === 'active') {
                return filteredTasks = state.tasks.filter( (task) => !task.completed );
            } else if(state.visibility === 'completed') {
                return filteredTasks = state.tasks.filter( (task) => task.completed );
            } else{
                return filteredTasks = state.tasks;
            }
        },
        // Count items left in my tasks array 
        itemLeft(state){
            let taskCompleted = 0;
            state.tasks.forEach( (task) => {
              if( !task.completed ){
                taskCompleted++;
              }
            })
            state.itemLeft = taskCompleted;
            return state.itemLeft;
        },
    },
    mutations: {
        // send the task on keyup.enter event
        sendTask(state, payload){
            state.tasks.push({ 
                          title: payload,
                          completed: false,
                          editable: false,
                          id: nanoid(),
                        });
        },
        // Check/uncheck all task on click event
        checkAll(state){
            if( state.itemLeft == 0 ){
                state.tasks.forEach( (task) => {
                    task.completed = false;
                } )
            } else{
                state.tasks.forEach( (task) => {
                    task.completed = true;
                } )
            }
        },
        // Delete task on click
        removeTask(state, key){
            state.tasks.splice(key, 1)
        },
        // Make task editable on double click
        isEditable(state, key){
            state.tasks[key].editable = true;
        },
        // Make task not editable on keyup.enter
        notEditable(state, key){
            state.tasks[key].editable = false;
        },
        // Filter task on click on filter button
        setFilter(state, what) {
            if (what === 'active') {
                state.visibility = what;
            } else if(what === 'completed') {
                state.visibility = what;
            } else{
                state.visibility = what;
            }
        },
        // Delete all tasks are completed on button click
        clearCompleted(state){
            state.tasks = state.tasks.filter( task => !task.completed )
        },
    },
})