export class Quote {
  public showMeta:boolean | undefined;
  constructor(public quoteID:number, public message:string, public author:string,public upVote:number, public downVote:number, public dateAdded:Date){
      this.showMeta = false
  }
}