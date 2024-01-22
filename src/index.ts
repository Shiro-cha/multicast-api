import 'reflect-metadata';
import { Container } from 'typedi';
import { MulticastService } from './services/MulticastService';
import { routes } from './route';
import { config } from './config';

const main = async () => {
  Container.set(MulticastService, new MulticastService(config.multicastAddress, config.port));

  const multicastService = Container.get(MulticastService);

  multicastService.handleMessage((message) => {
    routes.processMessage(message);
  });
  
  multicastService.sendMessage({ type: 'get', label:"hello",data: 'Request data' });
};

main().catch((err) => {
  console.error('Application failed to start', err);
});
