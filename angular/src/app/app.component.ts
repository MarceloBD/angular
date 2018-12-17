import { Component } from '@angular/core';
import { trigger,animate,style,transition,keyframes } from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  animations:[
   trigger("moveInLeft",[
      transition("void=> *",[style({transform:"translateX(300px)"}),
        animate(200,keyframes([
         style({transform:"translateX(300px)"}),
         style({transform:"translateX(0)"})
 
          ]))]),

transition("*=>void",[style({transform:"translateX(0px)"}),
        animate(100,keyframes([
         style({transform:"translateX(0px)"}),
         style({transform:"translateX(300px)"})
 
          ]))])    
     
    ])

]
})

export class AppComponent {
  todoArray=[]

  addTodo(description, start, end){
  	var new_event = {description: description, start:start, end:end}
    this.insertInOrder(new_event)
   
  }

  insertInOrder(new_event){
   	var event_index = 0
  	for(event_index ; event_index < this.todoArray.length; event_index++){
  		if(this.todoArray[event_index].start > new_event.start){
  			break;
  		}
  	}
  	this.todoArray.splice(event_index, 0, new_event);
  }

   deleteItem(todo){
   for(let i=0 ;i<= this.todoArray.length ;i++){
    if(todo== this.todoArray[i]){
     this.todoArray.splice(i,1)
    }
   }
  }

 todoSubmit(value:any){
     if(value!==""){
   		 this.addTodo(value.todo, value.start, value.end);
     //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
    
  }
}