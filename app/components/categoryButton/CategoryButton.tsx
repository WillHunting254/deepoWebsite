import React from 'react'
import { categoryStore } from '../store/category'

interface Props{
  name: string,
  _id: string
}

const CategoryButton = ({name}: Props) => {
  const selectedCategory = categoryStore((state) => state.category)
  const setCategory = categoryStore((state) => state.setCategory)
  return (
    <div>
      <button className="btn btn-sm btn-outline m-1" onClick={() => setCategory(name)} >Button</button>
    </div>
  )
}

export default CategoryButton
