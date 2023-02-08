export class GetListDTO<T> {
  items: T[] = [];
  hasNext = false;
  total = 0;
}
