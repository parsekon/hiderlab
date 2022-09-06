import Head from "next/head";
import Image from "next/image";
import Start from "../components/Start";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Start />
    </div>
  );
}
