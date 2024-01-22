//class to create router it push the object with the label and the path
export class Router {
  private routes: { type:string,label: string, callback: Function }[];

  constructor() {
    this.routes = [];
  }

  get(label: string, callback: Function) {
    this.routes.push({ label, callback,type:'get' });
  }
  add(label: string, callback: Function) {
    this.routes.push({ label, callback, type: 'add' });
  }
  getRoutes() {
    return this.routes;
  }

}


