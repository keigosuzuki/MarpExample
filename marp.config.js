import path from 'path';
import os from 'os';

// ホームディレクトリ（ユーザーディレクトリ）のパスを取得
const homeDir = os.homedir();

export default {
  themeSet: [
    path.join(homeDir, 'Documents/Repositories/MarpExample/css')
  ],
  allowLocalFiles: true // 外部CSSやローカル画像の読み込みを許可
}

