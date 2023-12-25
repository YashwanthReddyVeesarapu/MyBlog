"use client";

import MainLayout from "@/layouts/MainLayout";
import {
  Button,
  CircularProgress,
  Input,
  TextareaAutosize,
} from "@mui/material";
import styles from "../styles.module.scss";
import React, { useState } from "react";
import { apiInstance } from "@/utils/apiInstance";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = await apiInstance
      .post("/blogs", {
        title,
        description,
        info,
      })
      .catch((e) => alert(e));
    setLoading(false);
  };

  return (
    <MainLayout>
      <div className={styles.hellobello}>
        <div className={styles.hello}>
          <h2>Create Blog</h2>
          <form
            onSubmit={(e: any) => handleSubmit(e)}
            className={styles.container}
          >
            <Input
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextareaAutosize
              name="info"
              placeholder="Html"
              onChange={(e) => setInfo(e.target.value)}
              minRows={3}
            />

            {/* Submit Button */}
            <Button
              variant={"contained"}
              type="submit"
              value="Submit"
              className="submit-button"
            >
              {loading ? <CircularProgress /> : "Submit"}
            </Button>
          </form>
        </div>

        <div className={styles.viewer}>
          <div dangerouslySetInnerHTML={{ __html: info || "" }} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
