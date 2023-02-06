import React from 'react'
import { Image,Link,Spacer,Text } from '@nextui-org/react'
import filter from '../styles/Filter.module.css'
function Filter() {
  return (
    <div className={filter.container}>
      <Link href="/" className={filter.images}>
        <Image width={30} height={30} src="/images/view.jpg"/>
        <Text className={filter.text}>Güzel manzaralar</Text>
      </Link>
      <Link href="/" className={filter.images}>
        <Image width={30} height={30} src="/images/tinyHouse.jpg"/>
        <Text className={filter.text}>Küçük evler</Text>
      </Link>
      <Link href="/" className={filter.images}>
        <Image width={30} height={30} src="/images/sea.jpg"/>
        <Text className={filter.text}>Denize sıfır</Text>
      </Link>
      <Link href="/" className={filter.images}>
        <Image width={30} height={30} src="/images/popular.jpg"/>
        <Text className={filter.text}>Popüler</Text>
      </Link>
      <Link href="/" className={filter.images}>
        <Image width={30} height={30} src="/images/farm.jpg"/>
        <Text className={filter.text}>Çiftlikler</Text>
      </Link>
      <Link href="/" className={filter.images}>
        <Image width={30} height={30} src="/images/room.jpg"/>
        <Text className={filter.text}>Özel odalar</Text>
      </Link>
      <Link href="/" className={filter.images}>
        <Image width={30} height={30} src="/images/boat.jpg"/>
        <Text className={filter.text}>Tekneler</Text>
      </Link>
      <Link href="/" className={filter.images}>
        <Image width={30} height={30} src="/images/sato.jpg"/>
        <Text className={filter.text}>Şatolar</Text>
      </Link>
      <Link href="/" className={filter.images}>
        <Image width={30} height={30} src="/images/luxe.jpg"/>
        <Text className={filter.text}>Luxe</Text>
      </Link>
      <Link href="/" className={filter.images}>
        <Image width={30} height={30} src="/images/triangleHouse.jpg"/>
        <Text className={filter.text}>Üçgen evler</Text>
      </Link>
    </div>
  )
}

export default Filter
