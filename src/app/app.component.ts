import { Component, OnInit } from '@angular/core';
import { add, read } from 'src/app/todos.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularProject';
  temp: string[] = []
  form: HTMLElement | null = null 
  todoinput?: HTMLElement | null = null

  constructor(){
    read().then(value => { this.temp = value})
    setTimeout( () => {
      add('treno').then(value => { this.temp = value})
    }, 3000)

    
  }
  ngOnInit(): void {
    this.form = document.getElementById('todos_form')
    //this.todoinput = document.getElementById('todo').value
    this.todoinput = document.forms[0]
    this.form?.addEventListener('submit', (event) => {
      event.preventDefault()
      console.log (document.forms)
    }) 
  }


}
