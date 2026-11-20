# 渓水寮ウェブサイト

Next.jsで構築した渓水寮ウェブサイトです。`pages/` はURLの入口、`src/` は画面表示や処理の実装、`content/` はWiki記事などの原稿を置く場所です。

## フォルダ構成

```text
pages/                         URLルート入口
├── index.js                   トップページ /
├── wiki.js                    Wikiホーム /wiki/
├── [...slug].js               Markdown記事の表示ルート
├── about.js・life.js・...      既存ページのURL
└── messages/                  寮生の声のURL

src/
├── home/                      トップページの表示
├── site/
│   ├── components/            共通ナビ・ヘッダー・フッターなど
│   └── pages/                 既存ページの本文・表示実装
└── wiki/
    ├── components/            Wiki記事の表示部品
    ├── WikiHomePage.js        Wikiホームの表示
    └── loadWikiData.js        分類と記事の読み込み

content/
├── wiki/                      Wiki分類とMarkdown記事
└── legacy-voices.json         寮生の声の既存データ

docs/wiki/                     Wiki台帳・参考資料
public/                        画像・配布文書などの公開素材
styles/                        サイト全体・ページ別のスタイル
```

既存ページのURL入口と本文実装は分けています。ページを整理・修正するときも、`pages/` のファイル名と `next.config.js` の出力設定を確認し、既存URLを変えないでください。

## Wikiのフォルダ構成

`content/wiki/` の分類フォルダがWikiホームの分類に対応します。

```text
content/wiki/
├── 理念・背景/
│   ├── _category.json
│   ├── pages.json                 # Markdownではない既存ページへのリンク（必要な場合）
│   ├── 渓水寮の理念.md
│   ├── 東北大学基督教青年会寄宿舎の精神.md
│   └── なぜ渓水寮か.md
├── 暮らし/
│   ├── _category.json
│   └── pages.json
├── 費用・入寮/
│   ├── _category.json
│   ├── pages.json
│   └── 住まいと生活費の比較.md
└── つぶやき/
    ├── _category.json
    ├── pages.json
    └── 新寮の想い.md
```

分類は `_category.json` の `title` と `order` で定義します。フォルダ内のMarkdown記事は自動で読み込まれ、Wikiホームの分類一覧と静的記事ページに反映されます。分類フォルダを追加するときは `_category.json` が必要です。Markdown記事だけの分類には `pages.json` は要りません。

## Markdown記事を追加する

1. 掲載したい分類のフォルダに、新しい `.md` ファイルを作ります。
2. ファイル先頭に、次のJSON形式のfront matterを記入します。
3. 本文を書き、関連記事や本文中の内部リンクを設定します。
4. `public/sitemap.xml` に記事URLを追加します。
5. `npm run build` を実行し、Wikiホーム・記事ページ・リンクを確認します。

例：

```markdown
---
{
  "id": "example-article",
  "title": "記事タイトル",
  "route": "/example-article/",
  "description": "Wikiホームと記事冒頭に表示する紹介文",
  "related": [
    { "href": "/life/", "title": "寮生活" }
  ]
}
---

# 記事タイトル

記事本文です。別の記事へは[記事タイトル](/keisui-philosophy/)の形式でリンクできます。
```

必須項目は `id`、`title`、`route`、`description`、`related` です。`id` と `route` は既存記事と重複させないでください。`route` は先頭と末尾に `/` を付けます。`related` は関連記事がない場合も空配列 `[]` を指定します。`author`、`date`、`stripFirstHeading`、`linkReplacements` は必要に応じて指定できます。記事ページは公開したままWikiホームの一覧に載せない場合は、`"listInIndex": false` を設定します。サイトマップや本文中のリンクには影響しません。

記事を追加すると、Wikiホームの一覧と記事URLはビルド時に生成されます。サイトマップは現在手動管理のため、記事追加時に更新してください。

## 既存ページをWikiホームに載せる

既存ページの本文はMarkdownへ移さず、現行URLを使います。掲載先の分類に `pages.json` を作成または編集し、`id`、`title`、`route` を登録します。`description` は任意です。

```json
[
  {
    "id": "about",
    "title": "東北地区YMCA寮とは",
    "route": "/about/"
  }
]
```

Wiki側の掲載情報を追加しても、既存ページそのものやURLは変更されません。

## 分類を追加する

1. `content/wiki/` の下に分類名のフォルダを作ります。
2. `_category.json` を作り、`title` と他分類と重ならない数値の `order` を指定します。
3. 必要なら `pages.json` を置き、既存ページのリンクを登録します。
4. Markdown記事を置けば、その分類の記事として自動で表示されます。

例：

```json
{
  "title": "新しい分類",
  "order": 50
}
```

## 新しい既存形式ページを追加する

Reactで作る新しい通常ページは、本文実装を `src/site/pages/` に置き、`pages/` にURLルート入口を追加します。静的サイト出力に含めるため `next.config.js` の `exportPathMap` にもルートを登録してください。Wikiホームにも載せる場合は、分類の `pages.json` にそのURLを加えます。公開URLを変更する場合は、公開前にリダイレクトと検索影響を別途確認してください。

## 主なコマンド

```bash
npm run dev -- --port 3001  # ローカルプレビュー
npm run build               # 静的サイトを生成
```

Wiki全体の運用方針、現行分類、記事確認事項は [`docs/wiki/台帳.md`](docs/wiki/台帳.md) を参照してください。
