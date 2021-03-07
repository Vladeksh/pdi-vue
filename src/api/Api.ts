import { BaseApi } from "@/api/BaseApi";
import { AxiosApi } from "@/api/AxiosApi";
import { ApiInterface } from "@/types/types";

export class Api extends BaseApi implements ApiInterface {
  private provider = new AxiosApi();

  async fetch(url: string): Promise<any> {
    return await this.provider.fetch(url);
  }
}
