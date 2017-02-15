export const DO_SOMETHING = 'DO_SOMETHING';

export function doSomething(data) {
  return { type: DO_SOMETHING, data };
}