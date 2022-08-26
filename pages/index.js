import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
	<div className="flex h-screen items-center justify-center">
    <div className="flex justify-center items-center ">
    <h1 className="text-3xl font-bold uppercase">
      Hider<span className="text-red-600">Lab</span>
    </h1>
	</div>
</div>
  )
}
