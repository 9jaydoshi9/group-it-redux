import React from "react";
import AddMembers from "./AddMembers";
import CreateShuffle from "./CreateShuffle";
import GroupsList from "./GroupsList";
import ShuffleButton from "./ShuffleButton";
import MembersList from "./MembersList";

const GroupPage = () => {
  return (
    <div>
      <AddMembers />
      <CreateShuffle />
      <ShuffleButton />
      <GroupsList />
      <MembersList />
    </div>
  );
};

export default GroupPage;
