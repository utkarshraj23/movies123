

export default function Home() {
  return (
    <>
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
