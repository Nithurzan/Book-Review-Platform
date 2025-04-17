import React from 'react'
import Hero from '../components/Hero'
import BookListPage from './BookListPage'


const HomePage = () => {
  return (
    <div className="p-6">
      <Hero/>
      <BookListPage/>
      
    </div>
  )
}

export default HomePage
