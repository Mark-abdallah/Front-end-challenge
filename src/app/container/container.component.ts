import { Component, OnInit } from '@angular/core';
import { __await } from 'tslib';
import { Repo } from '../interfaces/repo';
import { RepoService } from '../Services/repo.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private repoService:RepoService) { }
  allRepos:Repo[]=[]
  dayes:any;

  pageNumber=1;
  throttle = 300;  
  scrollDistance = 1;  
  scrollUpDistance = 2;  
  direction = "";  
  modalOpen = false;  

   ngOnInit():void{
       this.fillData();
     }

     async fillData(){
      this.repoService.getAll().subscribe(data=> { this.allRepos=data.items})
       await new Promise<void>(done => setTimeout(() => done(), 1500));  
      this.filterData();
     }

    filterData():void{
      var filteredRepos=this.allRepos.filter((el)=>-Date.parse(el.pushed_at) +Date.now() <= (30*1000*60*60*24))
      this.allRepos=filteredRepos;
    }
    getRepoByPageNumber(){
      this.repoService.getByPageNumber(this.pageNumber).subscribe(data =>{this.allRepos.push(...data.items) })
      this.filterData();
    }
   
    onScrollDown() {  
      this.pageNumber += 1;  
      this.getRepoByPageNumber();  
      this.direction = "down";  
    }  
  }
  



 
 
   
    
  




