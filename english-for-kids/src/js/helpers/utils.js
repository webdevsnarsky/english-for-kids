class Utils {
  
  static parseRequestURL() {
      // eslint-disable-next-line no-restricted-globals
      const url = location.hash.slice(2);
      const request = {};

      [request.resource] = url.split('/');

      return request;
  }
}

export default Utils;