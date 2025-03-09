'use client'

import React from 'react'
import { categoryStore } from '../store/category'

interface Category{
  name: string,
  _id: string
}
interface CategoryBarProps {
  categories: Category[];
}

const CategoryBar = ({categories}: CategoryBarProps) => {
  const selectedCategory = categoryStore((state) => state.category)
  const setCategory = categoryStore((state) => state.setCategory)
  
  return (
    <div className='flex-row my-3'>
      <button key={1} className={`btn btn-sm m-1 ${"Alle" === selectedCategory  ? 'btn-primary' : 'btn-outline'}`} onClick={() => setCategory("Alle")}>Alle</button>
      {categories.map((category) => (
        <button key={category._id} className={`btn btn-sm m-1 ${category.name === selectedCategory  ? 'btn-primary' : 'btn-outline'}`} onClick={() => setCategory(category.name)}>{category.name}</button>
      ))}
    </div>
  )
}

export default CategoryBar
