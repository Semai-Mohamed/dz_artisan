import React from 'react';
import Rating from '@mui/material/Rating';
interface NajmaProps {
  defaultValue: number;
  precision: number;
  readOnly?: boolean; 
}
const Najma: React.FC<NajmaProps> = ({ defaultValue, precision, readOnly = false }) => {
  return (
    <div>
      <Rating 
        name="dynamic-rating" 
        defaultValue={defaultValue} 
        precision={precision} 
        readOnly={readOnly} 
      />
    </div>
  );
};

export default Najma;
