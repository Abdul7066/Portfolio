import { useCursor } from '../hooks/useCursor';

/**
 * Cursor — renders the custom dot and lagging ring cursor.
 * Hover-scale logic is handled inside the useCursor hook.
 */
export default function Cursor() {
  const { cursorRef, ringRef } = useCursor();

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
