export interface RequestBodyHeader extends Record<string, any> {}
export interface RequestBodyMeta extends Record<string, any> {}
export interface RequestBodyData extends Record<string, any> {}

export interface RequestBody {
  header?: RequestBodyHeader;
  meta?: RequestBodyMeta;
  data?: RequestBodyData;
}
