import Vue from 'vue'
import Vuex from 'vuex'
import nanoid from 'nanoid'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        tasks: [],
        filteredTasks: [],
        allChecked: false,
        visibility: 'all',
        itemLeft: 0,
    },
    getters:{
        // Return all items in filteredTasks array
        filteredTasks(state){
            return state.filteredTasks
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
        }
    },
    mutations: {
        // send the task on keyup.enter event
        sendTask(state, payload){
            state.tasks.push({ 
                          title: payload,
                          completed: false,
                          editable: false,
                          ts: nanoid(),
                        });
            state.filteredTasks = state.tasks;
            payload = '';
            console.log(payload)
        },
        // Check/uncheck all task on click event
        checkAll(state){
            if( !state.allChecked ){
                state.tasks.forEach( (task) => {
                    task.completed = true;
                }, state);
                state.allChecked = true;
            }else{
                state.tasks.forEach( (task) => {
                    task.completed = false;
                }, state);
                state.allChecked = false;
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
        filterTasks(state, what) {
            state.filteredTasks = []
            if (what === 'active') {
                state.visibility = what;
                return state.filteredTasks = state.tasks.filter( (task) => !task.completed );
            } else if(what === 'completed') {
                state.visibility = what;
                return state.filteredTasks = state.tasks.filter( (task) => task.completed );
            } else{
                state.visibility = what;
                return state.filteredTasks = state.tasks;
            }
        },
        // Remove from filteredTasks when click on checkbox
        removeFromFilter(state, key){
          if (state.visibility === 'active') {
            state.filteredTasks.splice(key, 1);
          } else if(state.visibility === 'completed') {
            state.filteredTasks.splice(key, 1);
          }
        },
        // Delete all tasks are completed on button click
        clearCompleted(state){
            state.tasks = state.tasks.filter( task => !task.completed )
            state.filteredTasks = state.tasks
        }
    },
})