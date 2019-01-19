## 概要

Electron アプリケーションやパッケージのバージョンとして git のハッシュ値を利用するようにした
テストアプリケーション。

## バージョン取得

`package.json` の `version` に値を記載した状態で、`version.js`を実行すると、
git ハッシュ値（先頭８桁）を付け加えたバージョンを返す。

```bash
$ node version.js
0.0.1+bf1894c3
```

## パッケージへのバージョン指定

`electron-builder` の `build` 実行時に、以下のようなオプションを渡して、`version.js`が返すバージョンを指定する。

```
    "package-linux": "yarn build && electron-builder build --linux -c.extraMetadata.version=`node ./version.js`",
```

## Electron renderer process からのバージョン取得

`app.getVersion()` で取得。

app/components/Home.js

```javascript
// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { remote } from 'electron';
import routes from '../constants/routes';
import styles from './Home.css';

const { app } = remote;

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <p>version {app.getVersion()}</p>
      </div>
    );
  }
}
```
