import { Button, Col, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { shuffleGroups } from "../../features/group/groupSlice";
import "./Button.css";

const ShuffleButton = () => {
  const dispatch = useDispatch();

  return (
    <Row
      justify={"center"}
      gutter={10}
      style={{ padding: "6px", margin: "16px 0px" }}
    >
      <Col>
        <Button
          className="custom-btn btn-9"
          onClick={() => dispatch(shuffleGroups())}
          type="dashed"
        >
          SHUFFLE
        </Button>
      </Col>
    </Row>
  );
};

export default ShuffleButton;
