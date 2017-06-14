import {isMatch} from 'lodash';

export const has = (source: any, target: any, path: any[] = []): boolean => {
  if (path.indexOf(source) !== -1) {
    return false;
  }
  if (isMatch(source, target)) {
    return true;
  }
  if (source === undefined || source === null) {
    return false;
  }
  return Object.keys(source).some(key => has(source[key], target, [...path, source]));
};
