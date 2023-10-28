import { forwardRef } from "react";

export const StdInput = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input {...rest} ref={ref} />
      {error && <small>{error?.message}</small>}
    </>
  );
});
