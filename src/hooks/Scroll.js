import { useRef } from "react";

function Scroll() {
  const ref = useRef(null);
  const state = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const onMouseDown = (e) => {
    const el = ref.current;
    state.current.isDown = true;
    state.current.startX = e.pageX - el.offsetLeft;
    state.current.scrollLeft = el.scrollLeft;
  };

  const onMouseLeave = () => {
    state.current.isDown = false;
  };

  const onMouseUp = () => {
    state.current.isDown = false;
  };

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!state.current.isDown || !el) return;

    e.preventDefault();

    const x = e.pageX - el.offsetLeft;
    const walk = (x - state.current.startX) * 1.2;

    el.scrollLeft = state.current.scrollLeft - walk;
  };

  return {
    ref,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onMouseMove,
  };
}

export default Scroll;