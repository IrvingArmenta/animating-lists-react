import React, { FC, ReactElement } from 'react';
import { AnimationListCompType } from '../typings';
import isOutOfViewport from '../../../utils/isOutOfViewport';
import { ReactComponent as DeleteIcon } from '../delete-icon.svg';
import FlipMove from 'react-flip-move';
import NameHolder from '../NameHolder';

const FlipMoveList: FC<AnimationListCompType> = ({ ...props }) => {
  const { items, remove, setCantPush, parentUlRef, viewportPadding } = props;

  const onFlipMoveStart = (
    el: ReactElement<
      unknown,
      string | React.JSXElementConstructor<{ entering: boolean }>
    >
  ) => {
    if (parentUlRef.current) {
      const flipMoveEl = el as unknown as { entering: boolean; key: string };
      const id = flipMoveEl.entering
        ? flipMoveEl.key.substring(2, flipMoveEl.key.length)
        : false;
      if (isOutOfViewport(parentUlRef.current, viewportPadding) && id) {
        remove(id);
        setCantPush(true);
      } else {
        setCantPush(false);
      }
    }
  };

  return (
    <>
      <FlipMove typeName={null} onStart={(el) => onFlipMoveStart(el)}>
        {items.map((item, index) => {
          return (
            <li key={item.id}>
              <NameHolder i={index} />
              <p>key: {item.id}</p>
              <button onClick={() => remove(item.id)}>
                <DeleteIcon />
              </button>
            </li>
          );
        })}
      </FlipMove>
    </>
  );
};

export default FlipMoveList;
