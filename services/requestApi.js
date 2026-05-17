import { http } from "./http-common";

class DataService {
  
  FindMediaFiles(data) {
    return http.get("admin/findMediaFiles", data)
  }

}

export default new DataService();