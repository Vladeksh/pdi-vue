import { ApiInterface } from "@/types/types";

export class BaseApi implements ApiInterface {
  protected baseUrl = "http://localhost:3000/";
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
  async fetch(url: string): Promise<any> {}
}
