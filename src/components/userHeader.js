import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

const UserHeader = (props) => {
  useEffect(() => {
    props.fetchUser(props.userId);
  }, []);

  let Author = props.users.find((user) => user.id === props.userId);

  if (!Author) {
    Author = <div>Loading...</div>;
  }
  console.log(Author);
  return <div>{Author.name}</div>;
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
