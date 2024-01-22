import { Container } from 'typedi';
import { MulticastController } from './controllers/MulticastController';
import { IMessage } from './types/IMessage';

const multicastController = Container.get(MulticastController);

export const routes = {
  'get': (data: any,label:string) => multicastController.get(label),
  'add': (data: any,label:string) => multicastController.add(data,label),
  
  processMessage: (message: IMessage) => {
    const action = routes[message.type];
    if (action) {
      action(message.data,message.label);
    }
  }
};
