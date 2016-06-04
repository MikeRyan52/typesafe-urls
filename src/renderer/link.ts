import { Properties } from '../route';
import { stringify } from 'query-string';

export function link<P>(params: P): string {
  const props: Properties = this.renderProperties();
  const queryString = props['queryString'];

  return '/'
    + this.parts.map((part) => part[0] == ':' ? props[part.substr(1)] : part).join('/')
    + (queryString != null ? stringify(queryString) : '');
}
