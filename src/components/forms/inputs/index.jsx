import { forwardRef } from "react";

export const StdInput = forwardRef(({ error, ...rest }, ref) => {
  return (
    <>
      <input {...rest} ref={ref} />
      {error && <small>{error.message}</small>}
    </>
  );
});

export const StdTextArea = forwardRef(({ error, ...rest }, ref) => {
  return (
    <>
      <textarea></textarea>
      {error && <small>{error.message}</small>}
    </>
  );
});
