'use client';

import React from 'react';
import Card from '../../component/card';
import Layout from '../../component/layout';
import Header from '../../component/header';


import img from '../../../public/images/Icon Strategy.svg'
const ParentComponent: React.FC = () => {
  const data = [
    { id: 1, name: 'Alice', work: 'Software Engineer', defaultValue: 4.5, precision: 0.5, readOnly: true ,img:img,text:'I ve been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended',},
    { id: 2, name: 'Bob', work: 'Designer', defaultValue: 3.5, precision: 0.5, readOnly: false ,img:img,text:'I ve been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended',},
    { id: 3, name: 'Charlie', work: 'Product Manager', defaultValue: 5, precision: 1, readOnly: true ,img:img,text:'I ve been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended',},
  ];

  return (
   <div className='flex flex-row'>
     <Layout></Layout>
   <div className='w-full'>
     <Header></Header>
   <div className='flex'>
    <div className="w-full h-[270px] flex  gap-x-5 ">
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          work={item.work}
          defaultValue={item.defaultValue}
          precision={item.precision}
          readOnly={item.readOnly}
          img = {item.img}
          text={item.text}
        />
      ))}
     
    </div>
   </div>
   </div>
   </div>
  );
};

export default ParentComponent;
