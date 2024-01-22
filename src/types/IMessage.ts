export interface IMessage {
    type: "get" | "add";
    label:string, 
    data?: any;
    response?: any;
  }
  