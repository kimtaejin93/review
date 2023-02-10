import React from 'react';
import { MouseEvent } from 'react';
export interface IPageNationProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  boardsCount?: number;
  page: number;
}

export interface IPageNationUIProps {
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPageMoveDown: () => void;
  onClickPageMoveUp: () => void;
  pageMove: number;
  lastPage: number;
  page: number;
}
