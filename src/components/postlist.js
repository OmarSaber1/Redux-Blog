import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { useEffect } from "react";
import UserHeader from "./userHeader";

const PostList = (props) => {
  //use Effect Call Api Posts Fetched

  useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <div className="container">
      {props.posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <UserHeader userId={post.userId} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postReducer,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
