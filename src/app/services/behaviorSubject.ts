export class BehaviorSubject {

  private data:any;

  private observable = {
    cbs: [],
    subscribe(cb){
      this.cbs.push(cb)
    }
  }

  constructor() {}

  next(data:any){
    this.data = data;
    this.observable.cbs.map(cb => {
      cb(data)
    })
  }

  asObservable(){
    return this.observable;
  }
}
