import React, { Dispatch, HTMLProps, SetStateAction } from 'react';

export type ListItemType = {
  id: string;
  title: string;
};

export type AnimationTypes =
  | 'animejs'
  | 'motionjs'
  | 'framerMotion'
  | 'flipMove';

export type AnimationListCompType = {
  items: ListItemType[];
  remove: (id: string) => void;
  animationType?: AnimationTypes;
  setCantPush: Dispatch<SetStateAction<boolean>>;
  duration?: { enter: number; exit: number };
  parentUlRef: React.RefObject<HTMLUListElement>;
  viewportPadding: number;
};

export type MainAnimationListType = Omit<
  AnimationListCompType,
  'parentUlRef' | 'viewportPadding'
> &
  HTMLProps<HTMLUListElement>;
