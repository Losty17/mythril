export enum FetchErrorCodes {}

export type FetchError = {
  code: FetchErrorCodes;
  message: string;
};

export type FetchResponse<T> = Promise<
  | {
      success: true;
      data: T;
      error?: undefined;
    }
  | {
      success: false;
      data?: undefined;
      error: FetchError;
    }
>;

export type FetchOptions = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, unknown>;
};
