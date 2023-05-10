import { Badge, Card, Divider, List } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const MembersList = () => {
  const sortedMembers = useSelector((state) => {
    const sortedList = [...state?.group?.data].sort((a, b) => {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    return sortedList || [];
  });

  return (
    <>
      <Divider orientation="center" />
      <div
        style={{
          margin: "32px 40%",
        }}
      >
        <Badge.Ribbon text={`${sortedMembers?.length || 0}`} color="#005c0d">
          <Card
            title={"All Members"}
            headStyle={{
              backgroundColor: "#43ffb2",
            }}
            bodyStyle={{
              backgroundColor: "#d6ffdd",
              padding: "4px 8px",
            }}
          >
            <List
              style={{
                height: 250,
                overflow: "auto",
              }}
              size="small"
              // bordered
              dataSource={sortedMembers}
              renderItem={(item) => <List.Item>{item.name}</List.Item>}
            />
          </Card>
        </Badge.Ribbon>
      </div>
    </>
  );
};

export default MembersList;
