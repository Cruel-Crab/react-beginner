import React from 'react'
import MobileList from './MobileList'
import data from '../../data.json'

export default function Mobile() {
  return (
    <>
      {data.map(ele => {
        return (
          <MobileList
            deviceName={ele.deviceName}
            price={ele.price}
            imgUrl={ele.imgUrl}
          />
        );
      })}
    </>
  );
}
