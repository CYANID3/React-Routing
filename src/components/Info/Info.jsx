import React from 'react'
import Title from '../UI/Title/Title'
import Text from '../UI/Text/Text'

function Info(props) {
  return (
    <>
    <Title text={props.title} size="xxl" side="center" m="20"/>
    <Text text={props.text}/>
    </>
  )
}

export default Info