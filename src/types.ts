// クライアントから送るデータ！
export type RequestData = {
  game: GachaKey[];
  moneyValue: number;
  min: GachakeyPriorityData; // それぞれのガチャの最低draw回数
  mode: 0 | 1 | 2;
  c?: GachakeyPriorityData; // mode === 0　の時に入力される、ユーザー任意の優先度。
};

/*
 GachaKey:
・馬娘：0
・バンドリ：1
・原神：2
・プロジェクトセカイ：3
・パズドラ；4
*/
type GachaKey = 0 | 1 | 2 | 3 | 4;

type GachakeyPriorityData = {
  [gacha_key: string]: number;
};

/***************
 exampleData 
***************/
// mode1の時
const sample1: RequestData = {
  game: ["0", "1", "2", "3", "4"], // 馬娘、バンドリ、原神、プロジェクト世界、パズドラ
  moneyValue: 2500,
  minimumDraw: {
    0: 2,
    1: 1,
    2: 0,
    3: 2,
  },
  mode: "1",
};

// mode0の時(optionPriorityあり)
const sample2: RequestData = {
  game: ["0", "1", "2", "3", "4"], // 馬娘、バンドリ、原神、プロジェクト世界、パズドラ
  moneyValue: 20000,
  minimumDraw: {
    0: 4,
    1: 4,
    2: 0,
    3: 1,
  },
  mode: "0",
  optionPriority: {
    0: 1,
    1: 0,
    2: 3,
    3: 2,
  },
};

export type ResponseData = GachakeyPriorityData;
