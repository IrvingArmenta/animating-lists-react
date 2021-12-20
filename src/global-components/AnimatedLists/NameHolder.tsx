import { memo, FC, useState } from 'react';
import { useEffectOnce } from 'react-use';

const NameHolder: FC<{ i: number }> = ({ i }) => {
  const [name, setName] = useState<number>();

  useEffectOnce(() => {
    setName(i);
  });

  return <h4>Item {name}</h4>;
};

export default memo(NameHolder);
