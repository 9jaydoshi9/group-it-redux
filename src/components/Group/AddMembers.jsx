import { Button, Col, Input, Row } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMembers } from "../../features/group/groupSlice";
import "./Button.css";

const AddMembers = () => {
  const [membersInput, setMembersInput] = useState("");
  const dispatch = useDispatch();

  const handleAddMembers = () => {
    if (membersInput) {
      dispatch(addMembers(membersInput));
    }
    setMembersInput("");
  };

  return (
    <div>
      <Row
        justify={"center"}
        gutter={10}
        style={{ padding: "6px", margin: "16px 0px" }}
      >
        <Col span={12}>
          <Input
            value={membersInput}
            type="text"
            placeholder="e.g : Jim, Alice, Bravo"
            onChange={(e) => setMembersInput(e.target.value)}
          />
        </Col>
        <Col span={3}>
          <Button className="btn-1" onClick={handleAddMembers} type="primary">
            Add Members
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddMembers;
