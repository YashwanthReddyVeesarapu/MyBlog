import MainLayout from "@/layouts/MainLayout";
import { apiInstance } from "../../../utils/apiInstance";
import React from "react";

export async function generateStaticParams() {
  let url = apiInstance.getUri() + "blogs";
  const blogs = await fetch(url, {});
  const data: any = await blogs.json();

  return data.map((blog: any) => ({ title: blog.title }));
}

export default async function page({ params }: any) {
  let url = apiInstance.getUri() + `blogs/${params.title}`;
  let blog: any = await fetch(url, {});
  const data = await blog.json();

  return (
    <MainLayout>
      <div className="blog">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.info }} />
      </div>
    </MainLayout>
  );
}
