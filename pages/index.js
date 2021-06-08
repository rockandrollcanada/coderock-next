import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Coderock | Home</title>
        <meta name="keywords" content="coderock" />
      </Head>

      <div className="jumbotron text-center">
        <h1>Learning at Coderock Canada</h1>
        <Image
          src="/coderock-canada-leaf-logo.png"
          className="rounded img-fluid"
          alt="Paul Gilmore"
          width={1920}
          height={1080}
        />
      </div>
      <p>Resize this responsive page to see the effect!</p>
    </div>
  );
}
