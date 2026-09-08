# MarpExample

Markdownスライド生成ツール Marp の共通スタイルシート（CSS）、設定ファイル、およびテンプレートを管理する。

---

## 1. 構成と主要ファイル

- `marp.config.js`: Marp CLI の共通設定（HTMLレンダリング許可 `html: true` 等）
- `css/`: スライドテーマCSS（`am_template.css` など）
- `fig/`: 共通図版・ロゴ等
- `template_my-am.md`: テンプレートスライド

---

## 2. スライド作成・スタイル規約

### OS間（Mac / Linux）互換性
- **Font Awesome の指定**:
  Ubuntu/Linux環境でアイコンの文字化け（豆腐化）を防ぐため、`font-family: "Font Awesome 6 Free"` のようにバージョンを明示した正式名称を使用し、Solidアイコンは `font-weight: 900` を指定すること。
- **メインフォント**:
  `Source Han Sans JP` (源ノ角ゴシック) を標準とする。Linux環境では `fonts-noto-cjk` または `fonts-adobe-source-han-sans-jp` を利用。
- **HTMLタグ利用**:
  スライド内で `<i>` タグ等のHTML要素を使用する場合は、必ず `marp.config.js` で `html: true` が有効になっていること。

### ビルドコマンド
```bash
# HTML / PDF 出力例
npx @marp-team/marp-cli template_my-am.md -o template_my-am.pdf --allow-local-files
```
