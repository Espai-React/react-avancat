import { FC, useCallback, useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Item 1",
  },
  {
    id: 2,
    name: "Item 2",
  },
  {
    id: 3,
    name: "Item 3",
  },
  {
    id: 4,
    name: "Item 4",
  },
  {
    id: 5,
    name: "Item 5",
  },
];

type TItem = {
  id: number;
  name: string;
};

type TRemove = (id: number) => void;

const EsborrarItems = () => {
  const [items, setItems] = useState<TItem[]>(initialItems);

  const onRemove: TRemove = useCallback(
    (id) => {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
    },
    [items]
  );

  return (
    <div>
      <h3>EsborrarItems</h3>
      {items.map((item) => {
        const { id } = item;
        return <Child key={id} onRemove={onRemove} item={item} />;
      })}
    </div>
  );
};

export default EsborrarItems;

type TChild = {
  onRemove: TRemove;
  item: TItem;
};

const Child: FC<TChild> = ({ onRemove, item }) => {
  console.log("Rendering...", item);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}>
      <p>Item: {item.name}</p>
      <button onClick={() => onRemove(item.id)}>Esborrar</button>
    </div>
  );
};
