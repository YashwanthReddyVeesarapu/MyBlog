import styles from "./page.module.scss";

import MainLayout from "./../layouts/MainLayout";
import { apiInstance } from "@/utils/apiInstance";

type Blog = {
  info: string;
  title: string;
  description: string;
};

export default async function Home() {
  const data = await getData();

  return (
    <MainLayout>
      <div className={styles.description}>
        <p>Welcome to Blog by REDSOLS</p>
        <div>
          {data.map((element: Blog) => (
            <a
              key={element.title}
              href={`blog/${element.title.split(" ").join("-")}`}
            >
              {element.title}
            </a>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

const getData = async () => {
  const data = await apiInstance.get("/blogs").then((res) => res.data);

  return data;
};
