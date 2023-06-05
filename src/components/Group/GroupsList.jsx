import { Avatar, Badge, Card, List } from "antd";
import Link from "antd/es/typography/Link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMember, shuffleGroups } from "../../features/group/groupSlice";
import { generateColorHsl } from "../../utils/constant";

const GroupItem = ({ member }) => {
  const dispatch = useDispatch();
  return (
    <List.Item
      actions={[
        <Link
          onClick={() => {
            dispatch(removeMember(member));
            dispatch(shuffleGroups());
          }}
          style={{
            fontSize: "12px",
          }}
        >
          remove
        </Link>,
      ]}
    >
      <List.Item.Meta
        title={member?.name}
        avatar={
          <Avatar
            style={{
              backgroundColor: generateColorHsl(member?.name),
              verticalAlign: "middle",
            }}
            size="small"
          >
            {member?.name?.[0]?.toUpperCase()}
          </Avatar>
        }
      />
    </List.Item>
  );
};

const GroupItems = ({ members }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={members}
      renderItem={(item) => <GroupItem member={item} />}
    />
  );
};

const GroupsList = () => {
  const data = useSelector((state) => state.group.groups);

  return (
    <div
      style={{
        padding: "16px",
        margin: "20px 0px",
      }}
    >
      {!!data?.length && (
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 5,
            xl: 5,
            xxl: 5,
          }}
          dataSource={data}
          renderItem={(membersArray, index) => (
            <List.Item>
              <Badge.Ribbon
                text={`Total - ${data[index]?.length || 0}`}
                color="#00a9a9"
              >
                <Card
                  title={`Group ${index + 1}`}
                  headStyle={{
                    backgroundColor: "#43d7ff",
                  }}
                  bodyStyle={{
                    backgroundColor: "#d6f3ff",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  }}
                >
                  <GroupItems members={membersArray} />
                </Card>
              </Badge.Ribbon>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default GroupsList;
