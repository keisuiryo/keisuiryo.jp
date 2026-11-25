# 渓水寮ウェブサイト

Next.jsで構築した渓水寮ウェブサイトです。`pages/` はURLの入口、`src/` は画面表示や処理の実装、`content/` はWiki記事などの原稿を置く場所です。

## フォルダ構成

```text
pages/                         URLルート入口
├── index.js                   トップページ /
├── wiki.js                    Wikiホーム /wiki/
├── [...slug].js               Wiki・寮生の声などMarkdown記事の表示ルート
├── about.js・life.js・...      既存ページのURL

src/
├── home/                      トップページの表示
├── site/
│   ├── components/            共通ナビ・ヘッダー・フッターなど
│   └── existing-pages/        既存ページの本文・表示実装
└── wiki/
    ├── navigation/            Wikiホームの表示
    │   └── WikiHomePage.js
    ├── articles/               Markdown記事・記事カードの表示部品
    └── data/                   分類と記事の読み込み処理
        └── loadWikiData.js

content/
└── wiki/                      Wiki分類とMarkdown記事

docs/                          SEO移行マニュアルなどの運用資料
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
│   ├── pages.json
│   ├── 寮生活.md
│   ├── 行事.md
│   └── 食事と、日常を支える寮母さん.md
├── 費用・入寮/
│   ├── _category.json
│   ├── pages.json
│   └── 住まいと生活費の比較.md
└── つぶやき/
    ├── _category.json
    ├── pages.json
    ├── 寮生の声・文集.md
    ├── 新寮の想い.md
    └── 文集/
        ├── 場所と活動/
        │   └── ホール.md など
        └── 寮生個人の文章/
            └── 山口.md など
```

`content/wiki/` 直下のフォルダがWiki分類です。その下にあるMarkdownはサブフォルダも含めて読み込まれます。記事の分類は直下の分類フォルダで決まり、サブフォルダは文集などの記事群を整理するために使えます。分類名と分類の表示順は `_category.json` の `title` と `order` で定義します。

## Markdown記事を追加する

1. 掲載したい分類フォルダ、または記事群を整理するサブフォルダに `.md` ファイルを作ります。
2. ファイル先頭にYAML形式のメタデータ（front matter）を書きます。JSON形式も読み込めますが、新規記事はYAMLにそろえます。
3. 本文を書き、必要なら関連記事、内部リンク、一覧掲載設定を加えます。
4. `public/sitemap.xml` に記事URLを追加します。
5. ローカル表示でWikiホーム、記事ページ、一覧リンクを確認します。

例：

```markdown
---
id: example-article
title: 記事タイトル
route: /example-article/
description: Wikiホーム、記事冒頭、一覧カードに表示する紹介文
related:
  - href: /life/
    title: 寮生活
navigation:
  order: 10
---

# 本文の見出し

記事本文です。別の記事へは[渓水寮の理念](/keisui-philosophy/)の形式でリンクできます。
```

### メタデータ

記事を識別し、公開URLを作るために `id`、`title`、`route` が必要です。`id` と `route` は既存記事と重複させず、`route` は `/example-article/` のように前後を `/` で囲みます。`description` は推奨項目です。Wikiホーム、記事冒頭、記事一覧カードに共通で表示されます。関連記事がなければ `related` は省略できます。

| 項目 | 役割 |
|---|---|
| `id` | 記事を内部で識別する値 |
| `title` | 記事の見出し、リンク名、パンくずに表示する題名 |
| `route` | 公開URL |
| `description` | Wiki一覧・記事冒頭・記事カードに共通表示する紹介文 |
| `related` | 記事末尾の関連記事。`href` にURL、`title` にリンク名を指定 |
| `author` | 執筆者名 |
| `affiliation` | 執筆者の所属 |
| `date` | 執筆日。執筆者情報とともに記事冒頭に表示 |
| `metaTitle` | ブラウザーのページタイトルを `title` と変える場合の名称 |
| `recordNote` | 記事冒頭に注記を表示する場合の文章 |
| `navigation.show` | `false` にするとWiki分類一覧から隠す。記事URLや文集一覧には影響しない |
| `navigation.order` | Wiki分類内と記事一覧内の共通表示順。省略時は `0` 扱いで、同じ値ならファイルパス順 |

`navigation` の例：

```yaml
navigation:
  show: false
  order: 10
```

### 本文で使えるMarkdownと特殊記法

本文は一般的なMarkdownすべてではなく、サイト独自の変換処理が対応する記法を使います。

| 記法 | 表示 |
|---|---|
| `# 見出し` 〜 `#### 見出し` | 本文の見出し。記事タイトルはメタデータの `title` に書き、本文の `#` は画面上でH2として表示 |
| `## 見出し {#section-id}` | 指定したIDで見出しにページ内リンク先を付ける |
| `**強調**` | 太字 |
| `[リンク名](/route/)` | サイト内リンク。URLはMarkdownファイル名ではなく公開URLを直接指定 |
| `![説明](/image.webp)` | 画像。単独の行に記述 |
| `- 項目`、`1. 項目` | 箇条書き、番号付きリスト |
| `| 見出し | 内容 |` | 表 |
| `---` | 区切り線 |
| `→ [リンク名](/route/)` | 単独の段落に書くと、強調リンクとして表示 |

寮生の声・文集のように、サブフォルダの記事をカード一覧にするには、一覧ページの本文に次の記法を単独行で置きます。

```markdown
{{article-list:文集/場所と活動}}
```

これは、その一覧ページのMarkdownファイルがあるフォルダを起点に、`文集/場所と活動/` の記事を集める指定です。記事カードには `title`、`author`、`affiliation`、`description` が表示され、`navigation.order` で並びます。別の文集群も同様に指定できます。

ページ本文や一覧指定に関する記法は、一般的なMarkdown拡張ではなく `src/wiki/articles/MarkdownArticle.js` が処理します。未対応の記法はそのまま意図どおりに表示されないことがあるため、上記の範囲で記述してください。

記事URLはメタデータの `route` からビルド時に生成されます。Wikiホームには `navigation.show` が `false` でない記事が表示されます。サイトマップは現在手動管理のため、記事追加時に更新してください。

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

Reactで作る新しい通常ページは、本文実装を `src/site/existing-pages/` に置き、`pages/` にURLルート入口を追加します。静的サイト出力に含めるため `next.config.js` の `exportPathMap` にもルートを登録してください。Wikiホームにも載せる場合は、分類の `pages.json` にそのURLを加えます。公開URLを変更する場合は、公開前にリダイレクトと検索影響を別途確認してください。

## 主なコマンド

```bash
npm run dev -- --port 3001  # ローカルプレビュー
npm run build               # 静的サイトを生成
```

SEOやURL移行の方針は [`docs/SEO移行マニュアル.md`](docs/SEO移行マニュアル.md) を参照してください。
