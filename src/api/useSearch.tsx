/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { sumBy, orderBy } from "lodash";

interface PropUseSearch {
  inputText: string;
}
export default function useSearch({ inputText }: PropUseSearch) {
  const [data, setData] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);

  const { isLoading, error } = useQuery(
    "dataOffice",
    async () =>
      axios.get(
        "https://boiling-mountain-49639.herokuapp.com/desafio-frontend"
      ),
    {
      onSuccess: (res) => {
        const data = res.data;
        const serializeData = data.map((item: any, index: number) => {
          return {
            ...item,
            lines: {
              waiting: sumBy(Object.values(item.lines), "waiting"),
              elapsed: sumBy(Object.values(item.lines), "elapsed"),
            },
            id: index,
          };
        });

        const order = orderBy(serializeData, "online", "desc");
        setData(order);
        setFilterData(order);
      },
      onError: () => {
        setData([]);
      },
    }
  );

  useEffect(() => {
    const filter = data.filter((row: { name: string }) => {
      return row.name.toLowerCase().includes(inputText.toLowerCase());
    });
    setFilterData(filter);
  }, [inputText]);

  return { isLoading, error, filterData };
}
