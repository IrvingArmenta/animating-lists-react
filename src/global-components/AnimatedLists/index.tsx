import React, { FC, useRef } from 'react';
import { MainAnimationListType } from './typings';
import { styled } from '../../styles/stitches.config';
import AnimeJsList from './lists/AnimeJsList';
import MotionJsList from './lists/MotionJsList';
import FramerMotionList from './lists/FramerMotionList';
import FlipMoveList from './lists/FlipMoveList';

export const UnordererList = styled('ul', {
  width: '100%',
  maxWidth: '650px',
  minWidth: '400px',
  position: 'relative',
  transition: 'opacity 300ms ease-in-out',
  li: {
    height: '50px',
    backdropFilter: 'blur(1.5px)',
    boxShadow: '0 0 2px rgba(0,0,0,0.4)',
    borderRadius: '4px',
    padding: '0 8px',
    overflow: 'hidden',
    border: '1px solid rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:not(:first-child)': {
      marginTop: 8
    },
    h4: {
      color: '$secondary',
      padding: 8,
      backgroundColor: '$siteBg',
      borderRadius: '4px'
    },
    p: {
      textAlign: 'right',
      fontSize: '11px'
    },
    '&::before': {
      position: 'absolute',
      zIndex: '-1',
      content: '',
      top: '8px',
      bottom: '8px',
      left: '8px',
      right: '8px',
      backgroundColor: '$secondary',
      opacity: 0.2,
      filter: 'blur(8px)'
    },
    button: {
      color: '$danger',
      width: 35,
      height: 35,
      textAlign: 'center',
      transition: 'all 200ms ease-in-out',
      outline: '1px solid transparent',
      borderRadius: '4px',
      '&:hover': {
        outline: '1px solid $danger'
      },
      '&:focus-visible': {
        outline: '1px solid $danger'
      }
    }
  }
});

const MainList: FC<MainAnimationListType> = ({
  animationType = 'animejs',
  duration = { enter: 800, exit: 800 },
  ...props
}) => {
  const { items, remove, setCantPush, ...rest } = props;
  const ulRef = useRef<HTMLUListElement>(null);
  const viewportPadding = 60;

  return (
    <UnordererList ref={ulRef} id={rest.id}>
      {animationType === 'animejs' && (
        <AnimeJsList
          items={items}
          duration={duration}
          remove={remove}
          setCantPush={setCantPush}
          parentUlRef={ulRef}
          viewportPadding={viewportPadding}
        />
      )}
      {animationType === 'motionjs' && (
        <MotionJsList
          items={items}
          remove={remove}
          duration={duration}
          setCantPush={setCantPush}
          parentUlRef={ulRef}
          viewportPadding={viewportPadding}
        />
      )}
      {animationType === 'framerMotion' && (
        <FramerMotionList
          items={items}
          remove={remove}
          setCantPush={setCantPush}
          duration={duration}
          parentUlRef={ulRef}
          viewportPadding={viewportPadding}
        />
      )}
      {animationType === 'flipMove' && (
        <FlipMoveList
          items={items}
          remove={remove}
          setCantPush={setCantPush}
          duration={duration}
          parentUlRef={ulRef}
          viewportPadding={viewportPadding}
        />
      )}
    </UnordererList>
  );
};

export default MainList;
