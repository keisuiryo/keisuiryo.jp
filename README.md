# 渓水寮ウェブサイト

Next.jsで構築した渓水寮ウェブサイトです。`pages/` はURLの入口、`src/` は画面表示や処理の実装、`content/` はWiki記事などの原稿を置く場所です。

## フォルダ構成

```text
pages/                         URLルート入口
├── index.js                   トップページ /
├── [...slug].js               Markdown記事のURL（/wiki/、/life/など）
├── apply.js                   募集要項 /apply/
├── facilities.js              設備 /facilities/
├── location.js                通学・周辺施設 /location/
├── 404.js                     エラーページ
└── _app.js・_document.js      共通設定

src/
├── home/                      トップページの表示
├── site/
│   ├── components/            共通ナビ・ヘッダー・フッターなど
│   └── existing-pages/        既存ページの本文・表示実装
└── wiki/
    ├── articles/               Markdown記事・記事カードの表示部品
    └── data/                   記事、見出し、リスト、パンくずの共通処理
        └── loadWikiData.js

content/
├── site/                      ナビとトップページの記事参照設定
└── wiki/                      Markdown記事とページ一覧設定

archive/                       旧ページ本文・スタイルの保存場所
out/                           ビルドで生成される公開用ファイル（編集しない）

docs/                          SEO移行マニュアルなどの運用資料
public/                        画像・配布文書などの公開素材
styles/                        サイト全体・ページ別のスタイル
```

既存ページのURL入口と本文実装は分けています。ページを整理・修正するときも、`pages/` のファイル名と `next.config.js` の出力設定を確認し、既存URLを変えないでください。

## Wikiのフォルダ構成

Wikiホームと他の記事は同じMarkdown記事として扱います。ナビゲーションは `content/site/navigation.json`、トップページで紹介する記事群の参照元は `content/site/home.json` で管理します。

```text
content/wiki/
├── homepage.md                    Wikiホーム /wiki/
├── 理念・背景/
│   ├── pages.json                 # 既存ページを分類一覧に載せる登録
│   ├── 東北地区YMCA寮とは.md
│   ├── 渓水寮の理念.md
│   └── 東北大学基督教青年会寄宿舎の精神.md
├── 暮らし/
│   ├── pages.json
│   ├── 寮生活.md
│   ├── 行事.md
│   └── 食事と、日常を支える寮母さん.md
├── 費用・入寮/
│   ├── pages.json
│   ├── 住まいと生活費の比較.md
│   ├── なぜ渓水寮か.md
│   ├── よくある質問.md
│   └── 新入寮確認書.md
└── つぶやき/
    ├── pages.json
    ├── 寮生の声・文集.md
    ├── 新寮の想い.md
    └── 文集/
        ├── 場所と活動/
        │   └── ホール.md など
        └── 寮生個人の文章/
            └── 山口.md など
```

`content/wiki/` 以下のMarkdownはすべて再帰的に読み込まれます。フォルダは原稿整理に使い、記事のURLはメタデータの `route` で決めます。

## Markdown記事を追加する

1. `content/wiki/` 内の任意のフォルダに `.md` ファイルを作ります。
2. ファイル先頭にYAML形式のメタデータ（front matter）を書きます。JSON形式も読み込めますが、新規記事はYAMLにそろえます。
3. 本文を書き、必要なら関連記事、内部リンク、一覧掲載設定を加えます。
4. 検索対象として公開する新しいページを `public/sitemap.xml` に追加します。非公開案内、404、検索対象外の記事、配布ファイルは追加しません。
5. ローカル表示で記事ページと一覧リンクを確認します。

例：

```markdown
---
id: example-article
title: 記事タイトル
route: /example-article/
description: 記事冒頭や一覧カードに表示する紹介文
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

記事を識別し、公開URLを作るために `id`、`title`、`route` が必要です。`id` と `route` は既存記事と重複させず、`route` は `/example-article/` のように前後を `/` で囲みます。`description` は推奨項目です。記事冒頭と記事一覧カードに表示されます。関連記事がなければ `related` は省略できます。

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
| `navigation.show` | `false` にするとすべての記事リストから除外する。記事URLには影響しない |
| `navigation.order` | 同じ記事一覧内の表示順。省略時は `0` 扱いで、同じ値ならファイルパス順 |
| `parent` | パンくずの直接の親。`title` と `href` を指定し、親記事の親もたどります |

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
{{list:文集/場所と活動;view=cards;limit=8;expand=button}}
```

これは、その一覧ページのMarkdownファイルがあるフォルダを起点に、`文集/場所と活動/` の記事を集める指定です。記事カードには `title`、`author`、`affiliation`、`description` が表示され、`navigation.order` で並びます。別の文集群も同様に指定できます。

`view` は `list` または `cards`、`limit` は表示件数または `all`、`expand=button` は上限を超えた記事を「もっと見る」ボタンで開く設定です。`{{article-list:文集/場所と活動}}` も互換記法として使用でき、カード表示になります。新しい記事では `list` 記法を使って表示形式を明示してください。

ページ本文や一覧指定に関する記法は、一般的なMarkdown拡張ではなく `src/wiki/articles/MarkdownArticle.js` が処理します。未対応の記法はそのまま意図どおりに表示されないことがあるため、上記の範囲で記述してください。

記事URLはメタデータの `route` からビルド時に生成されます。リストには、指定フォルダ直下にあり、`navigation.show` が `false` でない記事が表示されます。`navigation.show: false` は一覧から隠す設定で、記事URLを無効にはしません。サイトマップは現在手動管理のため、検索対象にするURLだけを追加し、実在するルートと照合してください。

## 既存ページを記事リストに載せる

既存ページの本文はMarkdownへ移さず、現行URLを使います。掲載先の分類に `pages.json` を作成または編集し、`id`、`title`、`route` を登録します。`description` は任意です。

```json
[
  {
    "id": "about",
    "title": "東北地区学生YMCAと渓水寮",
    "route": "/about/"
  }
]
```

掲載登録を追加しても、既存ページそのものやURLは変更されません。

## 新しい既存形式ページを追加する

Reactで作る新しいページは、本文実装を `src/site/existing-pages/` に置き、`pages/` にURLルート入口を追加します。Wikiの記事一覧に載せる場合は、該当する `pages.json` に登録します。公開URLを変更する場合は、公開前にリダイレクトと検索影響を別途確認してください。

## 主なコマンド

```bash
npm run dev -- --port 3001  # ローカルプレビュー
npm run build               # 静的サイトを生成
```

記事の読み込み、特殊記法、一覧生成の説明は [`docs/Wiki表示の仕組み.md`](docs/Wiki表示の仕組み.md) を参照してください。SEO移行資料は2026年10月の調査・移行準備記録です。現在の構成を確認するときは、このREADMEとWiki表示の仕組みを参照してください。
