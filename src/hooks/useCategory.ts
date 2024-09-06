import { useCallback, useState } from "react";

export const useCategory = () => {
  const [options, setOptions] = useState<Array<string | number>>([]); //プルダウンのリスト
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); //APIエラーの時のState

  //カテゴリ生成用
  const categoryapiUrl: string = "http://localhost:8000/ragapp/category/";

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(categoryapiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // クッキーを含めるために必要
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      // レスポンスをJSON形式に変換
      const data = await response.json();

      // `category`配列から`h3`の値だけを取り出して`options`にセット
      const categoryOptions = Array.from(
        new Set<string>(data.category.map((item: { h2: string }) => item.h2))
      );

      setOptions(categoryOptions);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchData, options, loading, error };
};
