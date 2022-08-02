import * as React from "react";
import Card from "./card";

interface Item {
  key: string;
  title: string;
}

interface PropsType {
  items: Item[];
  renderer: (item: Item) => React.ReactNode;
}

export default function ListCards(props: PropsType) {
  return (
    <ul>
      {props.items.map((item) => {
        return <li><Card key={item.key}> {props.renderer(item)} </Card></li>
      })}
    </ul>
  );
}