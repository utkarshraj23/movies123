// import Header from "./components/Header";


// export default function Home() {
//       return (
// <>
// {/* <Header /> */}
// <div className="w-full flex justify-center  h-screen items-center">
// <video className="rounded-lg h-auto sm:w-[780px] w-[320px] shadow-xl" poster="https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/28/full/1695891993-0587.jpg?im=FeatureCrop,size=(826,465)" autoPlay controls > 
//   <source src="Animal (2023) Hindi 1080p HDTS x264 AAC 2GB - QRips.mkv"  type="video/mp4" />
// </video>
// </div></>
//       )

// }


import Header from "./components/Header";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url('https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/28/full/1695891993-0587.jpg?im=FeatureCrop,size=(826,465)')`,
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
            src="https://ravenstore.s3.ap-southeast-1.amazonaws.com/Animal.mkv"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}
