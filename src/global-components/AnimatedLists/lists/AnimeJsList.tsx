import React, { createRef, FC } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import anime from 'animejs';
import { AnimationListCompType } from '../typings';
import isOutOfViewport from '../../../utils/isOutOfViewport';
import { ReactComponent as DeleteIcon } from '../delete-icon.svg';
import NameHolder from '../NameHolder';
import { useUpdateEffect } from 'react-use';

const AnimeJsList: FC<AnimationListCompType> = ({
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
                    anime({
                      targets: liRef.current,
                      opacity: [0, 1],
                      height: [0, liRef.current.offsetHeight],
                      marginTop: [0, 8],
                      duration: duration.enter
                    });
                  } else {
                    remove(item.id);
                    setCantPush(true);
                  }
                }
              }}
              onExit={() => {
                if (liRef.current) {
                  anime({
                    targets: liRef.current,
                    duration: duration.exit,
                    opacity: 0,
                    height: 0,
                    marginTop: 0,
                    translateY: 0
                  });
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

export default AnimeJsList;
