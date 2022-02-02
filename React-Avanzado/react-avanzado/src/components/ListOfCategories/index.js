import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

function useCateogriesData (){
  const [ categories, setCategories ] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => 
    setLoading(true),
    fetch('https://petgram-server-24iykciv5.now.sh/categories')
    .then(res => res.json())
    .then(response => {
      setCategories(response)
      setLoading(false)
    }), [])
    return { categories, loading }
}

export const ListOfCategories = () => {
  const {categories, loading} = useCateogriesData()
  const [showFixed, setShowFixed] = useState(false)
  
    //className={fixed ? 'fixed' : ''
  const renderList = (fixed) => (
    <List fixed ={fixed}>     
      {
        loading ? <Item key='loading'> <Category /></Item>
        // eslint-disable-next-line react/jsx-key
        : categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
      }
    </List>
  )
  useEffect(function ()  {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed != newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
