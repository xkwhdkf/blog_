import React from "react";

const  Info = {
  picture: 'https://i.ibb.co/Sykjn9Y/Kakao-Talk-20230619-000707392.jpg',
  name: '김진향',
  englishName: 'Kim JinHyang'
};


export default function Profile(){
  return (
    <>
      <img src={Info.picture} alt="profile" />
      <span>{Info.name}</span>
      <span>{Info.englishName}</span>
    </>
  )
}