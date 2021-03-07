import axios from "axios";
import { BaseApi } from "@/api/BaseApi";

export class AxiosApi extends BaseApi {
  constructor() {
    super();
  }

  async fetch(url: string): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}${url}`);
    return data;
  }
}
