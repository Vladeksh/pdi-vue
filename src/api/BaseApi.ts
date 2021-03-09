import { ApiInterface } from "@/types/types";

export class BaseApi implements ApiInterface {
  protected baseUrl = process.env.VUE_APP_API_BASE_URL;
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
  async fetch(url: string): Promise<any> {}
}
