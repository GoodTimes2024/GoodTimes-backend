import { type outputRouter } from './types'

export const HTTP_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
  BAD_GATEWAY: 502
}

export const outputMessageSuccess = (httpCode: number): string => {
  switch (httpCode) {
    case 200:
      return 'Success'
    case 201:
      return 'Created'
    case 202:
      return 'Accepted'
    case 203:
      return 'Non-Authoritative Information'
    case 204:
      return 'No Content'
    case 205:
      return 'Reset Content'
    case 206:
      return 'Partial Content'
    case 207:
      return 'Multi-Status'
    case 208:
      return 'Already Reported'
    case 226:
      return 'IM Used'
    default:
      return 'Success'
  }
}

export const outputMessageError = (httpCode: number): string => {
  switch (httpCode) {
    case 400:
      return 'Bad Request'
    case 401:
      return 'Unauthorized'
    case 402:
      return 'Payment Required'
    case 403:
      return 'Forbidden'
    case 404:
      return 'Not Found'
    case 405:
      return 'Method Not Allowed'
    case 406:
      return 'Not Acceptable'
    case 407:
      return 'Proxy Authentication Required'
    case 408:
      return 'Request Timeout'
    case 409:
      return 'Conflict'
    case 410:
      return 'Gone'
    case 411:
      return 'Length Required'
    case 412:
      return 'Precondition Failed'
    case 413:
      return 'Payload Too Large'
    case 414:
      return 'URI Too Long'
    case 415:
      return 'Unsupported Media Type'
    case 416:
      return 'Range Not Satisfiable'
    case 417:
      return 'Expectation Failed'
    case 418:
      return 'I\'m a teapot'
    case 421:
      return 'Misdirected Request'
    case 422:
      return 'Unprocessable Entity'
    case 423:
      return 'Locked'
    case 424:
      return 'Failed Dependency'
    case 425:
      return 'Too Early'
    case 426:
      return 'Upgrade Required'
    case 428:
      return 'Precondition Required'
    case 429:
      return 'Too Many Requests'
    case 431:
      return 'Request Header Fields Too Large'
    case 451:
      return 'Unavailable For Legal Reasons'
    case 500:
      return 'Internal Server Error'
    case 501:
      return 'Not Implemented'
    case 502:
      return 'Bad Gateway'
    case 503:
      return 'Service Unavailable'
    case 504:
      return 'Gateway Timeout'
    case 505:
      return 'HTTP Version Not Supported'
    case 506:
      return 'Variant Also Negotiates'
    case 507:
      return 'Insufficient Storage'
    case 508:
      return 'Loop Detected'
    case 510:
      return 'Not Extended'
    case 511:
      return 'Network Authentication Required'
    default:
      return 'Internal Server Error'
  }
}

export const responseData = (httpCode: number, message: string, data: any): outputRouter => {
  return {
    httpCode,
    message,
    data
  }
}
