---
marp: true
theme: my-am
paginate: true
header: ""
footer: "© 2026 JAXA/ISAS Presentation Template Test"
---

<!-- _class: title -->
<!-- _paginate: false -->
# JAXA / ISAS 統合プレゼンテーマ
## Awesome-Marp × my-base スタイル網羅テスト
### 発表者氏名 / 所属部署・研究室

---

<!-- _class: cover_a -->
<!-- _paginate: false -->
# 表紙スタイル A (Cover A)
###### 上部グラデーションと白抜きタイトルのテスト
**サブタイトルや発表日時を記述します**
[https://www.jaxa.jp/](https://www.jaxa.jp/)

---

<!-- _class: cover_b -->
<!-- _paginate: false -->
# 表紙スタイル B (Cover B)
###### ボックス型タイトルバナーのテスト
**プレゼンテーションのサブタイトルや詳細情報**
背景とタイトル枠のコントラストを確認します。

---

<!-- _class: toc_a -->
# 目次 (Table of Contents)

- **01.** 文字装飾とタイポグラフィの確認
- **02.** 多段組みレイアウト（2カラム・3カラム）
- **03.** Beamer風 定理・注意ボックス (Callouts)
- **04.** リスト分欄と装飾バッジ
- **05.** 特殊レイアウトとサイズ調整

---

# 1. 文字装飾とタイポグラフィの確認

`my-base.css` 独自の直感的な装飾記法が正しく機能するか確認します。

- **赤色イタリック強調**: `**文字**` と書くと **JAXA Red (bold italic)** になります。
- **緑色強調**: `*文字*` と書くと *JAXA Green* になります。
- **青色太字強調**: `***文字***` と書くと ***JAXA Blue (bold)*** になります。
- **インラインコード**: `var(--jaxa-blue)` のように ISAS Purple で背景付き表示されます。
- **リンクのテスト**: [JAXA公式ウェブサイト](https://www.jaxa.jp/)
- **数式のテスト**: 
  $$E = mc^2, \quad \int_{a}^{b} f(x)dx = F(b) - F(a)$$

---

<!-- _class: cols-2 -->
## 2-1. 2カラム均等分割 (50% : 50%)
### `cols-2` クラスによる左右平行配置のテスト

<div class="ldiv">

#### 左パネル (Left Panel)
- 左右が `50% : 50%` で分割されます。
- テキストと画像を並べるのに最も標準的なレイアウトです。
- リスト項目も自動的に折り返して綺麗に配置されます。

</div>
<div class="rdiv">

#### 右パネル (Right Panel)
    ```python
    # コードブロックの表示テスト
    def hello_jaxa():
        mission = "Hayabusa2"
        print(f"Mission: {mission}")
        return True
    ```

</div>

---

<!-- _class: cols-2-64 -->
## 2-2. 左右非対称カラム (60% : 40%)
### `cols-2-64` や `cols-2-37` による割合調整のテスト

<div class="ldiv">

#### メイン説明エリア (60%)
- こちらは `cols-2-64`（左6：右4）の例です。
- 主に左側に詳細なテキストや理論、数式を記述し、右側に補足の図表やデータを配置する用途に向いています。
- 他にも以下の割合比率クラスが使用可能です：
  - `cols-2-73` (70% : 30%)
  - `cols-2-37` (30% : 70%)
  - `cols-2-46` (40% : 60%)

</div>
<div class="rdiv">

#### 補足エリア (40%)
- 右側のコンパクトなエリアです。
- 画像の配置テスト：
  `![#c](image.png)` で中央揃えになります。

</div>

---

<!-- _class: cols-3 -->
## 2-3. 3カラムレイアウト
### `cols-3` による3分割のテスト

<div class="ldiv">

#### Step 1: 探査・観測
- 左パネル (`ldiv`)
- 初期データの取得
- **重要パラメータ**抽出

</div>
<div class="mdiv">

#### Step 2: 解析・検証
- 中央パネル (`mdiv`)
- シミュレーション
- *アルゴリズム*最適化

</div>
<div class="rdiv">

#### Step 3: 評価・運用
- 右パネル (`rdiv`)
- 実機テスト
- ***ミッション達成***

</div>

---

<!-- _class: bq-blue -->
## 3-1. Beamer風ボックス: JAXA Blue (基本)
### `bq-blue` クラスによる定理・定義ボックスのテスト

> 定理 1.1 (軌道力学の基本方程式)
> このボックスはヘッダー部が **JAXA Blue** で着色されます。学術発表での「定理 (Theorem)」「定義 (Definition)」などの提示に最適です。

> 注意 (Note)
> 同一スライド内に複数のブロック引用を書くと、それぞれが独立した美しいボックスとしてレンダリングされます。

---

<!-- _class: bq-red -->
## 3-2. Beamer風ボックス: JAXA Red (警告・重要)
### `bq-red` クラスによる警告・重要事項ボックスのテスト

> 警告 / 重要課題 (Warning / Important Problem)
> ヘッダーが **JAXA Red** になるため、特に注目してほしい課題、例外事項、危険な条件などを強調する際に使用します。

- 補足事項のテキストはボックスの外に通常通り記述できます。
- 背景のカラーコンビネーションが崩れないことを確認してください。

---

<!-- _class: bq-green -->
## 3-3. Beamer風ボックス: JAXA Green / ISAS Purple
### `bq-green` や `bq-purple` のカラーバリエーション

> 提案手法 / 考察 (Proposed Method / Discussion)
> こちらは `bq-green`（緑色ヘッダー）のテストです。実験結果の考察や、新しいアプローチの提案などに適しています。

- ※ 補足: `bq-purple` を指定すると **ISAS Purple** のボックスになります。

---

<!-- _class: cols2_ol_sq -->
## 4-1. リストの2列分欄と装飾バッジ (数値リスト)
### `cols2_ol_sq` による番号付きリストの2列自動配置

1. **第1段の観測データ収集**：テレメトリ受信と初期解析。
2. **姿勢制御システムの校正**：センサキャリブレーション。
3. **推進系エンジンのテスト**：RCSスラスター噴射試験。
4. **科学観測機器の電源投入**：初期チェックアウトと温度確認。
5. **データリンクの確立**：高利得アンテナによる通信確立。
6. **定常運用フェーズへの移行**：ミッション目的の遂行開始。

---

<!-- _class: cols2_ul_ci -->
## 4-2. リストの2列分欄 (箇条書き・円形バッジ)
### `cols2_ul_ci` によるバッジ装飾テスト

- **探査機システム技術**：自律航法ガイダンス。
- **深宇宙通信ネットワーク**：地上局ネットワーク連携。
- **先進光学的センシング**：マルチバンド分光カメラ。
- **サンプルリターン技術**：小惑星試料採取機構。
- **熱・構造設計**：過酷な宇宙環境に耐える断熱材。
- **科学的成果の創出**：太陽系形成初期の有機物分析。

---

<!-- _class: rows-2 -->
## 5-1. 上下2段分割レイアウト
### `rows-2` クラスによる上下配置（上段 `tdiv` / 下段 `bdiv`）

<div class="tdiv">

#### 上段パネル (`tdiv`)
- 上下で独立したコンテンツエリアを作成します。
- スライドの前半に前提条件をまとめ、後半に結果を掲載する際に便利です。

</div>
<div class="bdiv">

#### 下段パネル (`bdiv`)
- 表の配置テスト：

| 実験フェーズ | 目標値 (Target) | 実測値 (Result) | 評価 (Status) |
| :--- | :---: | :---: | :---: |
| フェーズ A | 95.0% | **98.2%** | ***Success*** |
| フェーズ B | < 10 ms | *8.5 ms* | ***Success*** |

</div>

---

<!-- _class: pin-3 -->
## 5-2. ピン型（上1・下2）レイアウト
### `pin-3` クラスによる品字型（上段全幅＋下段左右2分割）のテスト

<div class="tdiv">

#### 上段・全体サマリー (`tdiv`)
ミッション全体の総括的なメッセージや共通の前提条件を上部に配置します。

</div>
<div class="ldiv">

#### 下段左 (`ldiv`)
- 比較対象 A の特徴
- コストと重量の利点

</div>
<div class="rdiv">

#### 下段右 (`rdiv`)
- 比較対象 B の特徴
- 信頼性と冗長性の利点

</div>

---

<!-- _class: navbar -->
# ナビゲーションバーのテスト
###### スライド上部にカテゴリや進捗状況を表示

- 上部にナビゲーションバー（ブルーの境界線と白抜きバッジ）が表示されます。
- `navbar` クラスを付与すると、スライドのタイトル部やヘッダーがコンパクトに上部へ固定され、コンテンツの表示領域を広く取ることができます。

---

<!-- _class: smalltext -->
## 5-3. フォントサイズの動的変更 (`smalltext` / `largetext`)
### 情報量が多いスライドや、文字を大きく見せたい場合の調整クラス

- このスライドは `smalltext` クラスを適用しているため、標準よりも少し小さい文字（85%）でレンダリングされます。
- `tinytext` (70%)、`largetext` (115%)、`hugetext` (130%) も使用可能です。

    ```bash
    $ git clone [https://github.com/favourhong/Awesome-Marp.git](https://github.com/favourhong/Awesome-Marp.git)
    $ marp --theme ./my-am.css --watch ./test-presentation.md
    ```

---

<!-- _class: trans -->
<!-- _paginate: false -->
# ご清聴ありがとうございました
## 次章：質疑応答 (Q&A)
### テーマカラー全面塗りつぶしのトランジション (`trans`)

---

<!-- _class: lastpage -->
<!-- _paginate: false -->
###### Thank You / Contact Us

<div class="icons">

- **Email**: contact@jaxa.jp.example
- **Website**: [https://www.jaxa.jp/](https://www.jaxa.jp/)
- **Location**: Sagamihara Campus, Kanagawa, Japan

</div>
