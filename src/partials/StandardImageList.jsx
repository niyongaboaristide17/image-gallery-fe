import React from 'react'
import ImageItem from './ImageItem';

const StandardImageList = () => {
  return (
    <div class="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-2 p-2 md:p-4">
      {
        itemData.map(item => <ImageItem key={item.id} item={item}/>)
      }
    </div>
  )
}

export default StandardImageList

const itemData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    description: 'This is the first time you can break your favorite restaurant'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    description: 'This is the first time you can break your favorite restaurant'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    description: 'This is the first time you can break your favorite restaurant'
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    description: 'This is the first time you can break your favorite restaurant'
  },

];