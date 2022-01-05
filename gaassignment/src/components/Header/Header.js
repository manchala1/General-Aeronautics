import React, { useState, useEffect } from "react";
import axios from "axios";

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import Usersummary from "./usersummary";

const Header = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getPosts = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=2`)
      .then((res) => {
        console.log("post", res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  };
  const getComments = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      .then((res) => {
        console.log("post", res);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  };
  return (
    <>
      <div id="header">
        <div>
          {users.map((users) => (
            <div>
              <button onClick={getPosts(users.id)}>{users.username}</button>
              <button onClick={getComments(users.id)}>{users.username}</button>
            </div>
          ))}
        </div>
        <div>
          {posts.map((posts) => (
            <div>
              <h2>Posts</h2>
              <h3>{posts.title}</h3>
              <p>{posts.body}</p>
            </div>
          ))}
        </div>
        <div>
          {comments.map((comments) => (
            <div>
              <h2>Comments</h2>
              <h3>{comments.name}</h3>
              <p>{comments.body}</p>
            </div>
          ))}
        </div>
        <Usersummary />
      </div>
    </>
  );
};

export default Header;
