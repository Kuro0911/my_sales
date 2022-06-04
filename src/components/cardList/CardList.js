import React from "react";
import Card from "../card/Card";
import { TreeWrapper } from "./CardList.style";

export const CardList = ({ data }) => {
  return (
    <TreeWrapper>
      {data.map((node) => {
        return (
          <Card
            head={node.name}
            total={node.total}
            target={node.target}
            child={node.child}
          />
        );
      })}
    </TreeWrapper>
  );
};
