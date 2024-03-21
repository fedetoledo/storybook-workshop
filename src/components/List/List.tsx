import React, { useEffect } from 'react';
import './list.css';
import { Button } from '../Button/Button';

interface ListItem {
  id: number;
  name: string;
  description: string;
}

/**
 * Component to display a list of items
 */

export const List = ({
  items,
  limit = 5,
}: {
  items: ListItem[];
  limit?: number;
}) => {
  const [visibleItems, setVisibleItems] = React.useState(items.slice(0, limit));

  const showAll = () => {
    setVisibleItems(items);
  };

  useEffect(() => {
    setVisibleItems(items.slice(0, limit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  return (
    <div className='list'>
      <p>Number of items: {items.length}</p>
      {visibleItems.map((item) => (
        <div key={item.id} className='item'>
          <div className='content'>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
          <div className='actions'>
            <Button label='Edit' primary />
            <Button label='Delete' />
          </div>
        </div>
      ))}
      {items.length > limit && visibleItems.length !== items.length ? (
        <Button label='Show more' backgroundColor='white' onClick={showAll} />
      ) : (
        <p>No more items to show</p>
      )}
    </div>
  );
};
