declare const type: {
  (value: null): 'Null';
  (value: undefined): 'Undefined';
  (value: boolean): 'Boolean';
  (value: number): 'Number';
  (value: string): 'String';
  (value: symbol): 'Symbol';
  (value: any): string;
};
