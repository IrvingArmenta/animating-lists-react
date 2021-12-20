import { nanoid } from 'nanoid';
import { ListItemType } from './typings';

const dummyItems: ListItemType[] = new Array(4)
  .fill({ id: 'null' })
  .map((_, i) => ({ id: nanoid(), title: `Item ${i}` }));

export default dummyItems;
