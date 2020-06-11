import http from "./http.services";
import config from "../config/config";
export default class BuyRequestService {
  static get(page = 1, search = "", min = 1, max = 9999) {
    return http.get(
      config.apiBaseUrl +
        `buy?page=${page}&search=${search}&min=${min}&max=${max}`
    );
  }
}
