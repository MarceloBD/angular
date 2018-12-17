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
    console.log(new_event)
    this.sendEventToServer(new_event)
   
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

  sendEventToServer(event){
        console.log('begin');
        var http = new XMLHttpRequest();
        var params = event;
        http.open("POST", "http://localhost:3000", true);

        http.setRequestHeader("Content-Type", "application/json"  );
        //http.setRequestHeader("Content-length", params.length);
        //http.setRequestHeader("Connection", "close");

        http.onreadystatechange = function() {
            console.log('onreadystatechange');
            if (http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
            }
            else {
                console.log('readyState=' + http.readyState + ', status: ' + http.status);
            }
        }

        console.log('sending...')
        console.log(params.description)
        http.send(JSON.stringify(params));
        console.log('end');
  }

}