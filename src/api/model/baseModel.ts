export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface BasicFetchResult<T extends any> {
  items: T[];
  total: number;
}

export interface BasicPageResult<T extends any> {
  records: T[];
  total: number;
  current: number;
  orders: any[];
  optimizeCountSql: boolean;
  searchCount: boolean;
  countId: number;
  maxLimit: number;
  pages: number;
}
