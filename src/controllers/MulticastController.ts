import { Service } from 'typedi';
import { MulticastService } from '../services/MulticastService';
import { IMessage } from '../types/IMessage';
import router from '../router/api';

@Service()
export class MulticastController {
  constructor(private multicastService: MulticastService) {}

  async get(label:string): Promise<void> {
    const route = this.findRouteByLabelAndType(label, 'get');
    if(!route){
        throw new Error('Route not found');
    }
    route.callback();
  }

  async add(data: any,label:string,): Promise<void> {
    const route = this.findRouteByLabelAndType(label, 'add');
    if(!route){
        throw new Error('Route not found');
    }
    route.callback(data);
  }


  private findRouteByLabelAndType(label: string, type: string): any {
    const routes = router.getRoutes();
    for (const route of routes) {
      if (route.label === label && route.type === type) {
        return route;
      }
    }
    return null;
  }

}
