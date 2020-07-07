import React from 'react';

const CustomText = ({children, styleClass}) => (
  <p className={styleClass}>{children}</p>
); 

export default CustomText;