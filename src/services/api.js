import { httpClient } from "@/services/httpClient.js";

class Api {
  getTestList() {
    return httpClient.get("https://jsonplaceholder.typicode.com/todos/1");
  }
}

export default new Api();
