import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { useEffect } from "react";

const PostList = (props) => {
  //use Effect Call Api Posts Fetched

  useEffect(() => {
    props.fetchPosts();
  }, []);
  return <div>Post List</div>;
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
