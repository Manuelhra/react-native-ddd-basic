export interface HttpAdapter {
  get<Response>(
    url: string,
    options?: Record<string, unknown>,
  ): Promise<Response>;
}
