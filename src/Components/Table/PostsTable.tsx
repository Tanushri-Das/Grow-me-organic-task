
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {CircularProgress } from "@mui/material";
import Post from "./Post";
import "./PostsTable.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostsTable: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkFormData = async () => {

      const formData = localStorage.getItem("formData");
      if (!formData) {
        setTimeout(() => {
          navigate("/");
          if (!toast.isActive("formWarning")) {
            toast.error("Please fill up the form before accessing the next page.", {
              toastId: "formWarning",
              position: toast.POSITION.TOP_CENTER,
            });
          }
        }, 0);
      }
    };

    checkFormData();
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data: Post[] = response.data;
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "body", headerName: "Body", width: 400 },
  ];

  return (
    <div
      className="post-table"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1000px", height: "100%" }}>
        {isLoading ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <DataGrid columns={columns} rows={posts} autoPageSize pagination />
        )}
      </div>
    </div>
  );
};

export default PostsTable;
