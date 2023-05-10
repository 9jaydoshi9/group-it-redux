import { Col, InputNumber, Row, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGroupCount } from "../../features/group/groupSlice";
import { MIN_GROUP_COUNT } from "../../utils/constant";

import "./Button.css";

const { Text } = Typography;

const CreateShuffle = () => {
  const groupCount = useSelector((state) => state.group.groupCount);
  const dispatch = useDispatch();

  const handleGroupCountChange = (num) => {
    if (+num) {
      dispatch(changeGroupCount(+num));
    }
  };

  return (
    <div>
      <Row
        justify={"center"}
        gutter={10}
        style={{ padding: "6px", margin: "16px 0px" }}
      >
        <Col>
          <Text
            strong
            style={{
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: "18px",
              letterSpacing: "0.2px",
              wordSpacing: "0.2px",
              color: "#000000",
              fontWeight: "normal",
              textDecoration: "none",
              fontStyle: "normal",
              fontVariant: "normal",
              textTransform: "none",
            }}
          >
            Number of groups :
          </Text>
        </Col>
        <Col>
          <InputNumber
            value={groupCount || MIN_GROUP_COUNT}
            type="number"
            placeholder="No. of Groups"
            onChange={(num) => handleGroupCountChange(parseInt(num))}
            min={2}
            max={20}
            size="middle"
          />
        </Col>
      </Row>
    </div>
  );
};

export default CreateShuffle;
