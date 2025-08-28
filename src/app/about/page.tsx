import Image from "next/image";

export default function About_Us_Page() {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-[40px]">
      {/*Section Banner*/}
      <div className="w-full mb-[40px] h-[622px] flex justify-center items-center p-9 bg-center" style={{backgroundImage:`url(https://res.cloudinary.com/dghqvxueq/image/upload/v1756349964/about_t7dn3q.jpg)`}}>
        {/*Content*/}
        <div className="flex flex-col gap-4 justify-center items-center">
            {/*Header*/}
            <h1 className="text-white text-[60px] font-[600]" style={{lineHeight:'72px'}}>About for Bacola</h1>
            <h6 className="text-white text-[12px] font-[600] uppercase" style={{lineHeight:'14.4px',letterSpacing:'4px'}}>We can do more for you</h6>
        </div>
      </div>
      {/*Section About*/}
      <div className="w-[90%] flex flex-col justify-center items-center gap-5 ">
        <p className="text-[#202435] text-[14px] font-[400] " style={{lineHeight:'24px'}}>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.</p>
        {/*Header*/}
        <div className="w-[70%] flex flex-col justify-center items-center">
          <h2 className="text-[#202435] text-[32px] font-[600] my-[40px]" style={{lineHeight:'38.4px'}}>Quisque erat urna, congue et libero in eleifend euismod velit.</h2>
          <p className="text-[#202435] text-[14px] font-[400] my-[40px]" style={{lineHeight:'24px'}}>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.</p>
        </div>
        {/*Image & Content*/}
        <div className="w-full flex justify-start items-start gap-5 relative">
          {/*Image*/}
          <div className="w-[50%]">
            <Image className="w-full" src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756349956/about_qzg4r9.png'} alt="" width={650} height={900} />
          </div>
          {/*Content*/}
          <div className="w-[50%] flex flex-col justify-start items-start py-[40px] gap-12">
            {/*Information Of CEO*/}
            <h4 className="pl-[40px] text-[#202435] text-[16px] font-[600] " style={{lineHeight:'24px',letterSpacing:'-0.1px'}}>Rachel Leonard - Bacola CEO</h4>
            <h2 className="w-[80%] text-[#202435] text-[28px] font-[600] " style={{lineHeight:'33.6px'}}>Duis convallis luctus pretium. Pellentesque habitant morbi</h2>
            <h6 className="pl-[40px]  text-[#202435] text-[14px] font-[400] " style={{lineHeight:'24px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</h6>
            <h6 className="pl-[40px]  text-[#202435] text-[14px] font-[400] " style={{lineHeight:'24px'}}>In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida,
dui eget aliquet tempus, turpis orci vehicula ipsum, eget porttitor sapien tortor
at neque. Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo
bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet, interdum
dictum felis. In semper laoreet dui vitae pharetra. Etiam sit amet molestie nulla,
eu efficitur orci. Praesent rutrum ante justo, eget malesuada ante ornare ac. Ut
dignissim blandit urna, eget euismod leo rhoncus nec. Vestibulum ante ipsum
primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lobortis
libero ante. Nullam in feugiat erat. Aenean sed justo dapibus, sodales nisi ut,
fringilla lorem. Vestibulum in orci ac nisl condimentum fermentum at et sem.
Curabitur fermentum dolor eu lacus consectetur varius.</h6>
            {/*Absolute Section*/}
          <h6 className="w-[90%] text-[#202435] text-[14px] font-[400] absolute left-[15%] pt-[40px] pl-[40px] bg-white rounded-tl-lg" style={{lineHeight:'24px',bottom:'0px'}}>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit
ante, vel vulputate tortor blandit nec.</h6>
          </div>
        </div>
      </div>
      {/*Footer About*/}
      <h6 className="w-[90%] text-[#202435] text-[14px] font-[400] my-[40px]" style={{lineHeight:'24px'}}>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.</h6>
    </section>
  )
}
