class Utils {
  static parseRequestURL() {
      const url = location.hash.slice(2);
      // console.log('url: ', url);
      const request = {};

      [request.resource] = url.split('/');

      return request;
  }
}

export default Utils;