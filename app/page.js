import Head from "next/head";

export default function Home() {
  return (
    <>
       <Head>
        <title>SASOne Movie Portal</title>
        <meta property="og:title" content="SASOne Movie Portal" />
        <meta property="og:description" content="Watch Movies On Demand" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/28/full/1695891993-0587.jpg" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url('https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/28/full/1695891993-0587.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // filter: 'blur(10px)'
        }}
      >
        <video
          className="rounded-lg h-auto sm:w-[780px] w-[320px] shadow-xl"
          autoPlay
          controls
        >
          <source
            src="https://ravenstore.s3.ap-southeast-1.amazonaws.com/Animal+2023.mkv"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}
