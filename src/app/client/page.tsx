'use client';
import React from 'react';
import Card from '../../component/card';

const ParentComponent: React.FC = () => {
  const data = [
    { id: 1, name: 'Alice', work: 'Software Engineer', defaultValue: 4.5, precision: 0.5, readOnly: true },
    { id: 2, name: 'Bob', work: 'Designer', defaultValue: 3.5, precision: 0.5, readOnly: false },
    { id: 3, name: 'Charlie', work: 'Product Manager', defaultValue: 5, precision: 1, readOnly: true },
  ];

  return (
    <div className="cards">
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          work={item.work}
          defaultValue={item.defaultValue}
          precision={item.precision}
          readOnly={item.readOnly}
        />
      ))}
    </div>
  );
};