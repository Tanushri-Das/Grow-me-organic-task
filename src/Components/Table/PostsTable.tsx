import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Post from "./Post";
import "./PostsTable.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostsTable: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkFormData = async () => {
      // Check if necessary information is available
      const formData = localStorage.getItem("formData");
      if (!formData) {
        // Delay the redirect to ensure the toast message is displayed
        setTimeout(() => {
          navigate("/");
          if (!toast.isActive("formWarning")) {
            toast.error("Please fill out the form before accessing this page.", {
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
        <DataGrid columns={columns} rows={posts} autoPageSize pagination />
      </div>
    </div>
  );
};

export default PostsTable;
