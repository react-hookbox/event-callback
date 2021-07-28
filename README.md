# @react-hookbox/event-callback

> Material UI's useEventCallback with better type definitions.

[![NPM][npm-image]][npm-link]
[![Minzipped Bundle Size][bundlephobia-image]][bundlephobia-link]

## Install

```bash
npm install --save @react-hookbox/event-callback
```
or
```bash
yarn add @react-hookbox/event-callback
```


## Usage

both for JavaScript and Typescript:
```typescript
import { useEventCallback } from '@react-hookbox/event-callback';
// OR
// import useEventCallback from '@react-hookbox/event-callback';

// then
const myCallback = useEventCallback((num, str) => {
  return str.repeat(Math.min(num, 2));
});
```

`useEventCallback` updates the callback it's using after
an "effective-time". So make sure to use it as a callback
or in a `useEffect` which is placed after `useEventCallback`;

## Params

* `fn`. This is a required function parameter.
  The returned value will have the same type.

  > ***Note:*** The return value will be updated after an
  "effect-ive time".

  That means the returned value should be used as an event
  callback or in an event callback.

## License

MIT © [hakobpogh][github-hakobpogh]

[npm-image]: https://img.shields.io/npm/v/@react-hookbox/event-callback.svg
[npm-link]: https://www.npmjs.com/package/@react-hookbox/event-callback
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@react-hookbox/event-callback
[bundlephobia-link]: https://bundlephobia.com/result?p=@react-hookbox/event-callback
[github-hakobpogh]: https://github.com/hakobpogh
