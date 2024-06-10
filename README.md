### コマンド

docker 立ち上げ
`make init`

next 開発環境 立ち上げ
`make dev`

next build 環境立ち上げ
`make run-build`

http://localhost:3000/

### ディレクトリ構成

```
├── app ... ルーティングに関するコンポーネント
├── features ... ロジック + コンポーネントをまとめたもの(機能別コンポーネント)
│   ├── common ... 共通部分
│   └── routes ... 特定のページで使うもの
├── components ... ロジックがない汎用コンポーンネント
├── hooks ... 共通ロジックの内、React Hooks が「ある」もの
├── functions ... 共通ロジックの内、React Hooks が「ない」もの
└── constants ... 定数を定義したファイル
```
