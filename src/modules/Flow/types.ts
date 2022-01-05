export interface IFlowState {
  loading: 'idle' | 'pending';
  currentRequestId: string | undefined;
  error: any;
}
