---
marp: true
size: 16:9
theme: my-am
paginate: true
headingDivider: [2,3]
footer: \ *JAXA/ISAS 統合プレゼンテーマ (my-am)* *Awesome-Marp スタイル網羅テスト*
---

<!-- _class: cover_a -->
<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

# JAXA / ISAS 統合プレゼンテーマ
###### “my-base と Awesome Marp の融合 (Cover A)”

@発表者氏名
所属部署・研究室
2026年7月15日
<contact@jaxa.jp.example>
[JAXA公式サイト](https://www.jaxa.jp/)

## 目次 (Table of Contents)

<!-- _class: cols2_ol_ci fglass toc_a -->
<!-- _footer: "" -->
<!-- _header: "CONTENTS" -->
<!-- _paginate: "" -->

- [カバーページのバリエーション](#3)
- [目次ページのバリエーション](#7)
- [多段組みレイアウト](#9)
- [リスト分欄と装飾バッジ](#18)
- [Beamer風 定理・注意ボックス (Callouts)](#24)
- [ナビゲーションバー](#30)
- [その他のスタイル設定](#32)
- [最後のページ](#38)

## 1. カバーページのバリエーション

<!-- _class: trans -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

---

<!-- _class: cover_b -->
<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

# JAXA / ISAS 統合プレゼンテーマ
###### “ボックス型タイトルバナー (Cover B)”

@発表者氏名
所属部署・研究室
2026年7月15日

---

<!-- _class: cover_c -->
<!-- _paginate: "" -->
<!-- _footer: "JAXA / ISAS" -->
<!-- _header: "Logo Placeholder" -->

# <!-- fit -->JAXA / ISAS 統合プレゼンテーマ
###### “シンプルレイアウト (Cover C)”

@発表者氏名
所属部署・研究室

---

<!-- _class: cover_d -->
<!-- _paginate: "" -->
<!-- _footer: "JAXA / ISAS" -->

# <!-- fit -->JAXA / ISAS 統合プレゼンテーマ
###### “下部配置レイアウト (Cover D)”

@発表者氏名
所属部署・研究室

---

<!-- _class: cover_e -->
<!-- _paginate: "" -->
<!-- _footer: "Footer Logo Placeholder" -->
<!-- _header: "Header Logo Placeholder" -->

# <!-- fit -->JAXA / ISAS 統合プレゼンテーマ
###### “斜めグラデーション (Cover E)”

@発表者氏名
所属部署・研究室

## 2. 目次ページのバリエーション

<!-- _class: trans -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

---

<!-- _header: 目次<br>CONTENTS<br>Logo Placeholder-->
<!-- _class: toc_b -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

- [カバーページのバリエーション](#3)
- [目次ページのバリエーション](#7)
- [多段組みレイアウト](#9)
- [リスト分欄と装飾バッジ](#18)
- [Beamer風 定理・注意ボックス (Callouts)](#24)
- [ナビゲーションバー](#30)
- [その他のスタイル設定](#32)
- [最後のページ](#38)

## 3. 多段組みレイアウト

<!-- _class: trans -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

## 3.1 2カラム均等分割 (50% : 50%)

<!-- _class: cols-2 -->

<div class="ldiv">

#### 左パネル (Left Panel)
- 左右が `50% : 50%` で分割されます。
- テキストと画像を並べるのに最も標準的なレイアウトです。
- リスト項目も自動的に折り返して綺麗に配置されます。

</div>

<div class="rdiv">

#### 右パネル (Right Panel)
- コードブロックの表示テスト
  ```python
  def hello_jaxa():
      mission = "Hayabusa2"
      print(f"Mission: {mission}")
      return True
  ```

</div>

## 3.2 左右非対称カラム (60% : 40%)

<!-- _class: cols-2-64 -->

<div class="ldiv">

#### メイン説明エリア (60%)
- こちらは `cols-2-64`（左6：右4）の例です。
- 主に左側に詳細なテキストや理論、数式を記述し、右側に補足の図表やデータを配置する用途に向いています。

</div>

<div class="rdiv">

#### 補足エリア (40%)
- 右側のコンパクトなエリアです。
- 文字装飾テスト:
  **赤色イタリック強調**
  *緑色強調*
  ***青色太字強調***

</div>

## 3.3 左右非対称カラム (70% : 30%)

<!-- _class: cols-2-73 -->

<div class="ldiv">

#### メイン説明エリア (70%)
- こちらは `cols-2-73`（左7：右3）の例です。
- テキスト領域をさらに広く取りたい場合に使用します。

</div>

<div class="rdiv">

#### 補足エリア (30%)
- 箇条書き
- テスト
- です。

</div>

## 3.4 左右非対称カラム (40% : 60%)

<!-- _class: cols-2-46 -->

<div class="ldiv">

#### 補足エリア (40%)
- こちらは `cols-2-46`（左4：右6）の例です。
- 左側をコンパクトにしたい場合に使用します。

</div>

<div class="rdiv">

#### メイン説明エリア (60%)
- 図表やデータを右側に大きく配置したい場合に有効です。

</div>

## 3.5 左右非対称カラム (30% : 70%)

<!-- _class: cols-2-37 -->

<div class="ldiv">

#### 補足エリア (30%)
- こちらは `cols-2-37`（左3：右7）の例です。

</div>

<div class="rdiv">

#### メイン説明エリア (70%)
- 非常に広い領域を右側に確保します。

</div>

## 3.6 3カラムレイアウト

<!-- _class: cols-3 -->

<div class="ldiv">

#### Step 1: 探査・観測
- 左パネル (`ldiv`)
- 初期データの取得
- 重要パラメータ抽出

</div>

<div class="mdiv">

#### Step 2: 解析・検証
- 中央パネル (`mdiv`)
- シミュレーション
- アルゴリズム最適化

</div>

<div class="rdiv">

#### Step 3: 評価・運用
- 右パネル (`rdiv`)
- 実機テスト
- ミッション達成

</div>

## 3.7 上下2段分割レイアウト

<!-- _class: rows-2 -->

<div class="tdiv">

#### 上段パネル (`tdiv`)
- `rows-2` クラスによる上下配置（上段 `tdiv` / 下段 `bdiv`）
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

## 3.8 ピン型（上1・下2）レイアウト

<!-- _class: pin-3 -->

<div class="tdiv">

#### 上段・全体サマリー (`tdiv`)
- `pin-3` クラスによる品字型（上段全幅＋下段左右2分割）のテスト
- ミッション全体の総括的なメッセージや共通の前提条件を上部に配置します。

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

## 4. リスト分欄と装飾バッジ

<!-- _class: trans -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

## 4.1 リストの2列分欄と装飾バッジ (数値リスト・四角)

<!-- _class: cols2_ol_sq fglass -->

- 偏好和效用
- 预算约束和消费者的最优选择
- 需求函数
- 劳动力和储蓄的供给函数
- 福利经济学：单人模型和多人模型
- 企业理论：单投入品和多投入品模型
- 完全竞争市场
- 完全垄断、垄断竞争与双寡头垄断

## 4.2 リストの2列分欄 (数値リスト・円形)

<!-- _class: cols2_ol_ci fglass -->

- 偏好和效用
- 预算约束和消费者的最优选择
- 需求函数
- 劳动力和储蓄的供给函数
- 福利经济学：单人模型和多人模型
- 企业理论：单投入品和多投入品模型
- 完全竞争市场
- 完全垄断、垄断竞争与双寡头垄断

## 4.3 リストの2列分欄 (箇条書き・四角)

<!-- _class: cols2_ul_sq fglass -->

- 第一章：地方政府的权力与事务 
- 第二章：财税与政府行为 
- 第三章：政府投融资与债务 
- 第四章：工业化中的政府角色 
- 第五章：城市化与不平衡 
- 第六章：债务与风险 
- 第七章：国内国际失衡 
- 第八章：政府与经济发展

## 4.4 リストの2列分欄 (箇条書き・円形)

<!-- _class: cols2_ul_ci fglass -->

- 第一章：地方政府的权力与事务 
- 第二章：财税与政府行为 
- 第三章：政府投融资与债务 
- 第四章：工业化中的政府角色 
- 第五章：城市化与不平衡 
- 第六章：债务与风险 
- 第七章：国内国际失衡 
- 第八章：政府与经济发展

## 4.5 単列リスト (数値・四角 / 円形)

<!-- _class: cols-2 -->

<div class="ldiv col1_ol_sq fglass">

- 数値リスト・四角
- `col1_ol_sq`
- テスト項目 3
- テスト項目 4

</div>

<div class="rdiv col1_ol_ci fglass">

- 数値リスト・円形
- `col1_ol_ci`
- テスト項目 3
- テスト項目 4

</div>

## 5. Beamer風 定理・注意ボックス (Callouts)

<!-- _class: trans -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

## 5.1 Beamer風ボックス: JAXA Blue (基本)

<!-- _class: bq-blue -->

> 定理 1.1 (軌道力学の基本方程式)
> このボックスはヘッダー部が **JAXA Blue** で着色されます。学術発表での「定理 (Theorem)」「定義 (Definition)」などの提示に最適です。

> 注意 (Note)
> 同一スライド内に複数のブロック引用を書くと、それぞれが独立した美しいボックスとしてレンダリングされます。

## 5.2 Beamer風ボックス: JAXA Red (警告・重要)

<!-- _class: bq-red -->

> 警告 / 重要課題 (Warning / Important Problem)
> ヘッダーが **JAXA Red** になるため、特に注目してほしい課題、例外事項、危険な条件などを強調する際に使用します。

- 補足事項のテキストはボックスの外に通常通り記述できます。

## 5.3 Beamer風ボックス: JAXA Green / ISAS Purple

<!-- _class: bq-green cols-2 -->

<div class="ldiv">

> 提案手法 (Proposed Method)
> こちらは `bq-green`（JAXA Green）のテストです。実験結果の考察などに適しています。

</div>

<div class="rdiv bq-purple">

> 考察 (Discussion)
> こちらは `bq-purple`（ISAS Purple）のテストです。

</div>

## 5.4 Beamer風ボックス: Black (標準)

<!-- _class: bq-black -->

> 定義 (Definition)
> こちらは `bq-black` のテストです。`am_template` の基本色（`--color-main` 相当）を使用します。

## 6. ナビゲーションバー

<!-- _class: trans -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

## 6. ナビゲーションバーのテスト

<!-- _class: navbar -->
<!-- _header: \ ***@JAXA/ISAS*** *表紙* *目次* *多段組み* *リスト* *ボックス* **ナビゲーション** *その他*-->

- 上部にナビゲーションバー（境界線と白抜きバッジ）が表示されます。
- `navbar` クラスを付与すると、スライドのタイトル部やヘッダーがコンパクトに上部へ固定され、コンテンツの表示領域を広く取ることができます。
- 現在のセクションを **太字** (`**ナビゲーション**`) にすることで強調できます。

## 7. その他のスタイル設定

<!-- _class: trans -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

## 7.1 固定タイトル行 (fixedtitleA)

<!-- _class: fixedtitleA -->

- 自定義样式：`<!-- _class: fixedtitleA -->`
- タイトルが上部に固定されます。

## 7.1 固定タイトル行 (fixedtitleB)

<!-- _class: fixedtitleB -->

<div class="div">

- 自定義样式：`<!-- _class: fixedtitleB -->`
- タイトルが上部に固定され、背景色（JAXA Blue）が付きます。
- コンテンツは `<div class="div">` で囲む必要があります。

</div>

---

<!-- _class: footnote -->

<div class="tdiv">

#### 7.2 脚注のスタイル (footnote)

- 自定義样式：`<!-- _class: footnote -->`
- メインコンテンツを `<div class="tdiv">` に、脚注を `<div class="bdiv">` に記述します。
- これにより、下部に点線で区切られた脚注エリアが作成されます$^1$。

</div>

<div class="bdiv">

1 JAXA/ISAS 統合プレゼンテーマにおける脚注のテスト記述です。
</div>

## 7.3 文字サイズの調整 (tiny / small / large / huge)

<!-- _class: cols-2 -->

<div class="ldiv smalltext">

- **smalltext (90%)**
- 文字サイズを少し小さくします。
- `tinytext` (80%) もあります。

</div>

<div class="rdiv largetext">

- **largetext (115%)**
- 文字サイズを少し大きくします。
- `hugetext` (130%) もあります。

</div>

## 7.4 図表のキャプション (caption)

<!-- _class: caption -->

<div style="height: 200px; background-color: var(--color-code-bg); display: flex; align-items: center; justify-content: center;">
画像プレースホルダー
</div>

<div class="caption">
図1. キャプションのテスト表示
</div>

## 8. 最後のページ

<!-- _class: trans -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

---

<!-- _class: lastpage -->
<!-- _footer: "" -->
<!-- _paginate: "" -->

###### Thank You / Contact Us

<div class="icons">

- <i class="fa-solid fa-envelope"></i>
  - Email: contact@jaxa.jp.example
- <i class="fa-solid fa-house"></i>
  - Website: [https://www.jaxa.jp/](https://www.jaxa.jp/)
- <i class="fa-solid fa-phone-volume"></i>
  - Tel: 000-000-0000

</div>
