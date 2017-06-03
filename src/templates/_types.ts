import * as dts from 'dts-element';
import * as _ from '../constants';
import {create_curried_interfaces} from '../utils/create-curried-interfaces';

// tslint:disable:max-line-length

export default [
  ...dts.parse(`
    type ${_.Property()} = number | string | symbol;
    type ${_.Object()} = {};
    type ${_.Ordered()} = number | string;

    type ${_.Morphism('T', 'U')} = (${_.value}: T) => U;
    type ${_.IndexedMorphism('T', 'U')} = (${_.value}: T, ${_.index}: number, ${_.list}: ${_.List('T')}) => U;
    type ${_.Predicate('T')} = ${_.Morphism('T', 'boolean')};

    type ${_.ListMapper('T', 'U')} = (${_.morphosm}: ${_.Morphism('T', 'U')}, ${_.list}: ${_.List('T')}) => U[];
    type ${_.DictionaryMapper('T', 'U')} = (${_.morphosm}: ${_.Morphism('T', 'U')}, ${_.dictionary}: ${_.Dictionary('T')}) => ${_.Dictionary('U')};

    interface ${_.List('T')} {
      length: number;
      [${_.index}: number]: T;
    }
    interface ${_.Dictionary('T')} {
      [${_.key}: string]: T;
    }
  `).members,
  ...create_curried_interfaces(),
];
