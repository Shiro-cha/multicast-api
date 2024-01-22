import { Service } from 'typedi';
import dgram from 'dgram';
import { IMessage } from '../types/IMessage';

@Service()
export class MulticastService {
  private udpClient: dgram.Socket;
  private multicastAddress: string;
  private port: number;

  constructor(multicastAddress: string, port: number) {
    this.multicastAddress = multicastAddress;
    this.port = port;
    this.udpClient = dgram.createSocket({ type: 'udp4', reuseAddr: true });
    
    this.udpClient.bind(port);
    this.udpClient.on('listening', () => {
        console.log("listening.....")
      this.udpClient.addMembership(multicastAddress);
    });
  }
  
  sendMessage(message: IMessage): void {
    const messageBuffer = Buffer.from(JSON.stringify(message));
    this.udpClient.send(messageBuffer, 0, messageBuffer.length, this.port, this.multicastAddress);
  }

  handleMessage(callback: (message: IMessage, rinfo: dgram.RemoteInfo) => void): void {
    this.udpClient.on('message', (msgBuffer, rinfo) => {
      const message = JSON.parse(msgBuffer.toString()) as IMessage;
      callback(message, rinfo);
    });
  }

}
