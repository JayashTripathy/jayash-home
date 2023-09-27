import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Now({ latestNow }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/now/${latestNow}`);
  }, [latestNow]);

  return null;
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");

  const files = fs.readdirSync(path.join("content/pages/now"));

  const sortedDateStrings = files.sort((a, b) => {
    const dateA = new Date(a.split(".")[0]).getTime();
    const dateB = new Date(b.split(".")[0]).getTime();
    return dateB - dateA;
  });

  const latestNow = sortedDateStrings[0].split(".")[0];

  return {
    props: {
      latestNow,
    },
  };
}
