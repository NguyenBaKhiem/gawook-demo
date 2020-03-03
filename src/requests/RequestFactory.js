import MasterdataRequest from './MasterdataRequest';
import NotificationRequest from './NotificationRequest';
import UserRequest from './UserRequest';

const requestMap = {
  MasterdataRequest,
  NotificationRequest,
  UserRequest
};

const instances = {};

export default class RequestFactory {

  static getRequest(classname) {
    let RequestClass = requestMap[classname];
    if (!RequestClass) {
      throw new Error('Invalid request class name: ' + classname);
    }

    let requestInstance = instances[classname];
    if (!requestInstance) {
        requestInstance = new RequestClass();
        instances[classname] = requestInstance;
    }

    return requestInstance;
  }

}