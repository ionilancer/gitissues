import { Component} from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  result: Object;
  totalIssues:number;
  page:number;
  user:string;
  rep:string;
  http:Http;
  input:Element;

  constructor(public _http : Http) {
  this.http=_http;
  }
  getIssues(){
  var baseUrl = 'https://api.github.com/repos/'+this.user+'/'+this.rep+'/issues?state=all&page='+this.page+'&per_page=5';
  this.result = {friends:[]}; this.http.get(baseUrl).map((res: Response) => res.json()).subscribe(res => { this.result = res;
  this.showResults(res);
  });
  }
  showResults(res){
  console.log("showinf");
  var element =document.querySelector('.searchResults');
  var paginationEl = document.querySelector('.pagination');
  var totalPages =Math.ceil(this.totalIssues/5);

  var result="";
  for (var i = 0; i < res.length; i++) {
    result+="<tr>";
    result += "<td><a target ='blank' href='"+res[i].html_url+"'>"+res[i].title+"</a></td>";
    result += "<td>"+res[i].number+"</td>";
    result += "<td>"+res[i].body+"</td>";
    if(res[i].state=="closed")
      result += "<td class='red'>"+res[i].state+"</td>";
    else{
      result += "<td class='green'>"+res[i].state+"</td>";
    }
    result += "</tr>";
  }
    element.innerHTML = result;
    var j=0;
    result="";
  for (var i = 0; i < totalPages; i++) {
    j=i+1;
    if(this.page==j){
    result+= "<li><a class='active'";
    }else{
    result+= "<li><a";
    }
    result+=" id="+j+" href='#'>"+j+"</a></li>";
  }
  paginationEl.innerHTML = result;
  paginationEl.addEventListener('click',(e)=>{
  e.preventDefault();
  let target: any = e.target;
  let data =parseInt(target.firstChild.data.toString());
  this.page=data;
  this.getIssues();
  });

  var newValue="https://github.com/"+this.user+"/"+this.rep
  this.input.setAttribute("value", newValue);
  //console.log("daf",input.getAttribute("value"));


  }
  onSubmit(f: NgForm) {
    console.log("eaafdfafdfds");
}
pageClick
  ngOnInit() {
var location=window.location.search.substr(1);
if (location){
this.user =  location.substr(location.indexOf("u"),location.indexOf("&"));
this.user = this.user.substr(this.user.indexOf("=")+1,this.user.length);
this.rep =  location.substr(location.indexOf("r"),location.length);
this.rep = this.rep.substr(this.rep.indexOf("=")+1,this.rep.length);
}
this.input =(document.getElementById("system-search"));
var btnBuscar= document.querySelector(".btn_buscarRep");
document.querySelector(".searchForm").addEventListener('submit',(e)=>{
console.log("event");
console.dir(e.target);
e.preventDefault();
var newSearch = document.getElementById("system-search").getAttribute("value");
console.log("afdfadfafd",document.getElementById("system-search").innerHTML );
if(newSearch){
if(newSearch.lastIndexOf("/")+1==newSearch.length){
newSearch = newSearch.substr(0,newSearch.lastIndexOf("/"));

}
console.log(newSearch);
this.rep = newSearch.substr(newSearch.lastIndexOf("/")+1);

this.user = newSearch.substr(newSearch.lastIndexOf(".com/")+5);
this.user = this.user.substr(0,this.user.lastIndexOf("/"));

this.getIssues();
}
},false);

this.page =1;

var baseUrl = 'https://api.github.com/repos/'+this.user+'/'+this.rep+'/issues?state=all';
console.log(baseUrl);
this.result = {friends:[]}; this.http.get(baseUrl).map((res: Response) => res.json()).subscribe(res => { this.result = res;
this.totalIssues= res.length;
this.getIssues();
});
  }
}
