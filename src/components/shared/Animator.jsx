import { CSSTransitionGroup } from "react-transition-group-v1";

export default function Animator({ children, animation }) {
  return (
    <CSSTransitionGroup
      transitionName={animation}
      transitionAppear={true}
      transitionAppearTimeout={1000}
    >
      {children}
    </CSSTransitionGroup>
  );
}
