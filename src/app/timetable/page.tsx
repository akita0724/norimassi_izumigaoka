import { LinkButton } from "@/components/button";
import { Card } from "@/components/card";
import { SetStar } from "@/components/setStar";
import { Dataset } from "@/data/dataset";
import { generateTimetable } from "@/lib/generateTimetable";
import { verifyParam } from "@/lib/verifyParam";
import { SearchParam } from "@/types/params";

const BackButton = ({ stop }: { stop: number }) => {
  if (stop == 1) {
    return <LinkButton href="/star">戻る</LinkButton>;
  } else {
    return <LinkButton href="/">戻る</LinkButton>;
  }
};

const Timetable = async ({ searchParams }: { searchParams: SearchParam }) => {
  const dataset = "timetable-2023-12";
  const param = verifyParam(searchParams);

  if (!param) {
    return (
      <div className="flex flex-col space-y-5">
        <p className="text-2xl">パラメータが不正です。</p>
        <p className="text-2xl">
          2023/12/22に実施されたアップデートにより、それ以前に登録されたブックマークなどが利用できなくなっています。
        </p>
        <BackButton stop={searchParams.stop} />
      </div>
    );
  }
  const data = await generateTimetable(param, dataset);

  // const res: Array<searchResult> = [
  //   {
  //     serviceId: "00300001",
  //     depaTime: 1900,
  //   },
  // ];

  if (data.length === 0) {
    return (
      <div className="flex flex-col space-y-5">
        <p className="text-2xl">バスがありません。</p>
        <BackButton stop={searchParams.stop} />
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center space-y-4 flex-col m-auto items-center">
        {data.map((r, i) => (
          <Card key={i} result={r} />
        ))}
      </div>
      <div className="text-lg m-20 space-y-4">
        <SetStar value={param} />
        <p>本アプリは北陸鉄道株式会社が提供しているものではありません。</p>
        <p>{Dataset[dataset]}時点の時刻</p>
        <BackButton stop={searchParams.stop} />
        <p>
          フィードバックフォームは
          <a
            className="text-blue-600"
            target="_blank"
            href="https://forms.gle/NdDpDjRahMHMFCLT9"
          >
            こちら
          </a>
        </p>
      </div>
    </div>
  );
};

export default Timetable;
