import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUsers: string;
}
//리액트에서 iframe 기능을 적용하려면 아래와같이..

const Followers = ({}) => {
  const { nameOfMyUsers } = useOutletContext<IFollowersContext>();

  return <h1>Here is {nameOfMyUsers}'s Followers</h1>;
};

export default Followers;
