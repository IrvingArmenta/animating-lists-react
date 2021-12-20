import React, { createRef, FC } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { AnimationListCompType } from '../typings';
import isOutOfViewport from '../../../utils/isOutOfViewport';
import { ReactComponent as DeleteIcon } from '../delete-icon.svg';
import { animate } from 'motion';
import NameHolder from '../NameHolder';
import { useUpdateEffect } from 'react-use';

const MotionJsList: FC<AnimationListCompType> = ({
  duration = { enter: 800, exit: 800 },
  ...props
}) => {
  const { items, remove, setCantPush, viewportPadding, parentUlRef } = props;

  useUpdateEffect(() => {
    if (parentUlRef.current) {
      if (!isOutOfViewport(parentUlRef.current, viewportPadding)) {
        setCantPush(false);
      }
    }
  }, [items.length]);

  return (
    <>
      <TransitionGroup component={null}>
        {items.map((item, index) => {
          const liRef = createRef<HTMLLIElement>();
          return (
            <Transition
              timeout={{ enter: duration.enter, exit: duration.exit }}
              key={item.id}
              nodeRef={liRef}
              onEntering={() => {
                if (liRef.current && parentUlRef.current) {
                  if (!isOutOfViewport(parentUlRef.current, viewportPadding)) {
                    animate(
                      liRef.current,
                      {
                        opacity: [0, 1],
                        height: [0, `${liRef.current.offsetHeight}px`],
                        marginTop: [0, `${8}px`]
                      },
                      { duration: duration.enter / 1000 }
                    );
                  } else {
                    remove(item.id);
                    setCantPush(true);
                  }
                }
              }}
              onExit={() => {
                if (liRef.current) {
                  animate(
                    liRef.current,
                    {
                      opacity: 0,
                      height: 0,
                      marginTop: 0
                    },
                    { duration: duration.exit / 1000 }
                  );
                }
              }}
            >
              <li ref={liRef} key={item.id}>
                <NameHolder i={index} />
                <p>key: {item.id}</p>
                <button onClick={() => remove(item.id)}>
                  <DeleteIcon />
                </button>
              </li>
            </Transition>
          );
        })}
      </TransitionGroup>
    </>
  );
};

export default MotionJsList;
