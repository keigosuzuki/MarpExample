# MarpExample

## OS（Mac / Linux）間での互換性に関する注意点

Mac環境とUbuntu（Linux）環境では、フォントのレンダリングやMarpの設定に関して以下の差異に注意してください。

### 1. Font Awesome の指定方法
Ubuntu 24.04 等の Linux 環境では、システムに古いバージョンの Font Awesome（例: 4.7.0）がインストールされている場合、CSS で単に `font-family: "FontAwesome"` と指定すると、古いフォントが優先されてアイコンが文字化け（豆腐化）することがあります。

- **解決策**:
    - `font-family` は `"Font Awesome 6 Free"` のようにバージョンを明示した正式名称を使用してください。
    - Solid アイコンを表示する場合、`font-weight: 900` の指定が必須です。
    - 確実に意図したフォントを適用するため、CSS で `!important` を付与することを推奨します。

### 2. HTML要素の使用 (`<i>` タグ等)
スライド内で `<i>` タグを用いたアイコン表示を行う場合、Marp CLI の設定で HTML レンダリングを許可する必要があります。

- **設定内容**: `marp.config.js` に `html: true` を含める必要があります。本プロジェクトでは既に設定済みです。

### 3. フォントの有無
本テーマでは `Source Han Sans JP` (源ノ角ゴシック) をメインフォントとして使用しています。
- **Ubuntu**: `fonts-noto-cjk` や `fonts-adobe-source-han-sans-jp` パッケージが必要です。
- **Mac**: 標準、または Adobe 公式からダウンロードしたフォントがインストールされている必要があります。

### 4. 外部リソース（CDN）
Ubuntu環境のブラウザ（Chromium等）でコンパイルする場合、一部の CDN が不安定な場合があります。アイコンが表示されない場合は、`am_template.css` 内の `@import` 先を `cdnjs` など信頼性の高いものに変更するか、フォントをローカルに配置してください。
