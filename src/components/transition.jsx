import React from 'react';
import { CSSTransition } from 'react-transition-group';

const TransitionWrapper = ({ children, classNames, timeout }) => (
  <CSSTransition classNames={classNames} timeout={timeout}>
    {children}
  </CSSTransition>
);

export default TransitionWrapper;