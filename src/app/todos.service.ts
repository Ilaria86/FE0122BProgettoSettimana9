// import { Injectable } from "@angular/core"

// @Injectable({
//     providedIn: 'root'
// })
// export default class TodosService{
//     todo: string[] = ['ciao', 'minghie']

//     add(value: string){
//         this.todo.push(value)
//     }

//     remove(){
//         this.todo.pop()
//     }

//     async read(){
//         return new Promise( (resolve) => {
//             setTimeout( () => {
//                 resolve(this.todo)
//             }, 2000) 
//         })
//     }

//     update(value: string, index: number){
//         this.todo[index] = value
//     }
// } 
var todos = ['temp', 'test']


export function read() {
    return new Promise<string[]>(function(resolve){
        setTimeout(function(){
            console.log(todos)
            resolve(todos);
        },2000);
    })
}

export function add(value: string) {
    todos.push(value)
    return new Promise<string[]>(function(resolve){
        setTimeout(function(){
            console.log(todos)
            resolve(todos);
        },2000);
    })
}

export function remove(index: number) {
    todos.splice(index, 1)
    return new Promise<string[]>(function(resolve){
        setTimeout(function(){
            console.log(todos)
            resolve(todos);
        },2000);
    })
}

