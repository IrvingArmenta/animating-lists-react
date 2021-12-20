import { FC } from 'react';
import { AnimationListCompType } from '../typings';
import isOutOfViewport from '../../../utils/isOutOfViewport';
import { ReactComponent as DeleteIcon } from '../delete-icon.svg';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import NameHolder from '../NameHolder';

const FramerMotionList: FC<AnimationListCompType> = ({
  duration = { enter: 800, exit: 800 },
  ...props
}) => {
  const { items, remove, setCantPush, viewportPadding, parentUlRef } = props;

  const onFramerAnimationStart = (id: string) => {
    if (parentUlRef.current) {
      if (isOutOfViewport(parentUlRef.current, viewportPadding)) {
        remove(id);
        setCantPush(true);
      } else {
        setCantPush(false);
      }
    }
  };

  return (
    <>
      <AnimateSharedLayout>
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { default: duration.enter / 1000 }
                }}
                exit={{
                  opacity: 0,
                  transition: { default: duration.exit / 1000 }
                }}
                layout={true}
                onAnimationStart={() => onFramerAnimationStart(item.id)}
              >
                <NameHolder i={index} />
                <p>key: {item.id}</p>
                <button onClick={() => remove(item.id)}>
                  <DeleteIcon />
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
};

export default FramerMotionList;
