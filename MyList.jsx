import { FixedSizeList as List } from "react-window";

function MyList({ items }) {
  const renderRow = ({ index, style }) => (
    <div style={style}>{items[index]}</div>
  );
  return (
    <List height={500} itemCount={items.length} itemSize={120} width={800}>
      {renderRow}
    </List>
  );
}
