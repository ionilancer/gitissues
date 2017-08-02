import { Component } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  result: Object;

  constructor(private http : Http) {
  var baseUrl = 'https://api.github.com/repos/ionilancer/gitissues/issues?state=closed';
  this.result = {friends:[]}; http.get(baseUrl).map((res: Response) => res.json()).subscribe(res => { this.result = res;
  this.showResults(res);
  });
  }
  showResults(res){
  console.dir(res);
  var element =document.querySelector('.searchResults');
  var result="";
  for (var i = 0; i < res.length; i++) {

    console.log(res[i].title);
    result+="<tr>";
    result += "<td><a target ='blank' href='"+res[i].html_url+"'>"+res[i].title+"</a></td>";
    result += "<td>"+res[i].body+"</td>";
    if(res[i].state=="closed")
      result += "<td class='red'>"+res[i].state+"</td>";
    else{
      result += "<td class='green'>"+res[i].state+"</td>";
    }
    result += "</tr>";
  }

  element.innerHTML = result;

  }
}
