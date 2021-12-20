import React, { FC, useState } from 'react';
import MainWrapper from './global-components/MainWrapper';
import MainList from './global-components/AnimatedLists';
import dummyItems from './global-components/AnimatedLists/dummyItems';
import globalStyling from './styles/globalStyle';
import { useList } from 'react-use';
import { nanoid } from 'nanoid';
import shuffle from 'lodash.shuffle';
import { AnimationTypes } from './global-components/AnimatedLists/typings';
import { AnimatePresence, motion } from 'framer-motion';

const App: FC<{ templateText?: string }> = () => {
  // stitches styles
  globalStyling();

  // hooks
  const [list, { push, filter, set }] = useList(dummyItems);
  const [cantPush, setCantPush] = useState(false);
  const [itemTitle, setItemTitle] = useState(list.length);
  const [animationTypes, setAnimation] = useState<AnimationTypes>('animejs');

  const handleRemove = (id: string) => {
    filter((item) => item.id !== id);
  };

  return (
    <MainWrapper>
      <div className="container">
        <AnimatePresence exitBeforeEnter={true}>
          <motion.h1
            key={animationTypes}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            {animationTypes}
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter={true}>
          <motion.div
            key={animationTypes}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <MainList
              items={list}
              remove={handleRemove}
              setCantPush={setCantPush}
              animationType={animationTypes}
              id="animationListId"
            />
          </motion.div>
        </AnimatePresence>
        <nav aria-controls="MainListId">
          <button
            onClick={() => {
              setItemTitle(list.length);
              push({ id: nanoid(), title: `Item ${itemTitle}` });
            }}
            disabled={cantPush}
          >
            Push item
          </button>
          <button
            onClick={() => {
              const shuffled = shuffle(list);
              set(shuffled);
            }}
          >
            Shuffle Items
          </button>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  onChange={(e) => {
                    const t = e.currentTarget.value as AnimationTypes;
                    setAnimation(t);
                  }}
                  name="animationType"
                  checked={animationTypes === 'animejs'}
                  value="animejs"
                />
                <span>Anime JS</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  onChange={(e) => {
                    const t = e.currentTarget.value as AnimationTypes;
                    setAnimation(t);
                  }}
                  name="animationType"
                  value="framerMotion"
                />
                <span>Framer motion</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  onChange={(e) => {
                    const t = e.currentTarget.value as AnimationTypes;
                    setAnimation(t);
                  }}
                  name="animationType"
                  value="motionjs"
                />
                <span>Motion JS</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  onChange={(e) => {
                    const t = e.currentTarget.value as AnimationTypes;
                    setAnimation(t);
                  }}
                  name="animationType"
                  value="flipMove"
                />
                <span>Flip Move</span>
              </label>
            </li>
          </ul>
        </nav>
      </div>
    </MainWrapper>
  );
};

export default App;
