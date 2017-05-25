# neutrino-preset-react-require

Auto import React when JSX is detected.

## Installation

```
$ yarn add -D neutrino-preset-react-require
```

## Example

Instead of:

```js
import React from 'react'

export default function Spinner({ size = 'small' }) {
  return <div className={`Spinner size-${size}`}></div>
}
```

Just write:

```js
export default function Spinner({ size = 'small' }) {
  return <div className={`Spinner size-${size}`}></div>
}
```

---

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

<a href="https://apex.sh"><img src="http://tjholowaychuk.com:6000/svg/sponsor"></a>
