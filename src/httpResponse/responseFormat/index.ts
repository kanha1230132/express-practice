interface IResponseInput<T> {
  statusCode: number;
  httpStatus: string;
  message?: string;
  data?: T;
}

class HTTPResponse<T> {
  timeStamp: string;
  httpStatus: string;
  statusCode: number;
  message?: string;
  data?: T;
  constructor(params: IResponseInput<T>) {
    this.timeStamp = new Date().toString();
    this.httpStatus = params.httpStatus;
    this.statusCode = params.statusCode;
    this.message = params.message;
    this.data = params.data;
  }
}

export default HTTPResponse;
