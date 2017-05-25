// tslint:disable:no-magic-numbers

const balanced: (
    left_pair: RegExp | string,
    right_pair: RegExp | string,
    str: string,
) => undefined | {
  start: number;
  end: number;
  pre: string;
  body: string;
  post: string;
// tslint:disable-next-line:no-require-imports no-var-requires
} = require('balanced-match');

// tslint:disable-next-line:no-empty-interface
interface IHierarchies extends Array<string | IHierarchies> {}

const trim_left = (str: string) => str.replace(/^\s*/, '');
const semicolon_regex = /\s*(;)\s*/g;

const parse = (content: string, hierarchies: IHierarchies = []) => {
  const match = balanced('{', '}', content);
  if (match === undefined) {
    hierarchies.push(...content.split(semicolon_regex));
  } else {
    hierarchies.push(
      ...match.pre.split(semicolon_regex),
      '{',
      parse(match.body),
      '}',
    );
    if (match.post[0] === ';') {
      hierarchies.push(';');
      match.post = match.post.slice(1);
    }
    parse(match.post, hierarchies);
  }
  return hierarchies
    .filter(hierarchy => !(typeof hierarchy === 'string' && hierarchy.trim() === ''))
    .map(hierarchy => (typeof hierarchy === 'string') ? trim_left(hierarchy) : hierarchy);
};

const stringify = (hierarchies: IHierarchies, indent = 0): string => {
  const contents = [];
  for (let i = 0; i < hierarchies.length; i++) {
    const hierarchy = hierarchies[i];
    if (typeof hierarchy === 'string') {
      contents.push(hierarchy);
      if (hierarchy === ';' && i !== hierarchies.length - 1) {
        contents.push('\n', ' '.repeat(indent));
      }
    } else {
      contents.push(
        '\n',
        ' '.repeat(indent + 2),
        stringify(hierarchy, indent + 2),
        '\n',
        ' '.repeat(indent),
      );
    }
  }
  return contents.join('');
};

const formatter = (snapshot: string, kind: 'error' | 'type') =>
  (kind === 'error')
    ? snapshot
    : stringify(parse(snapshot));

export = formatter;
