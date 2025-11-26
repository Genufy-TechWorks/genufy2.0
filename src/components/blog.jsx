// import { NavLink } from "react-router-dom";
// import informsales from "../assets/img/Infor&sales.webp";
// function blog(){
//     return (
//         <>
//         <section className="blog-section px-4 lg:px-30 mt-10 mb-15">
//                 <div className="text-center mb-8">
//                   <h3 className="text-3xl lg:text-4xl font-semibold">Our Blog</h3>
//                   <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#85E669] to-[#2CBDA7] bg-clip-text text-transparent mt-2">Resources and insights</h2>
//                   <p className="text-sm lg:text-base text-gray-600 mt-2">The latest industry news, interviews, technologies, and resources.</p>
//                 </div>
        
//                 <div className="grid grid-cols-1 pt-6 md:grid-cols-3 gap-8">
//                   {/* Card 1 */}
//                   <NavLink to="/blog/firstblog">
//                   <article className="bg-white rounded-lg shadow-lg overflow-hidden">
//                     <img src={informsales} alt="blog-1" className="w-full h-44 object-cover" />
//                     <div className="p-6">
//                       <span className="text-xs text-[#7b61ff]">Design</span>
//                       <div className="flex gap-10">
//                       <h4 className="mt-3 text-lg font-semibold text-[#0D0C41]">UX review presentations</h4>
//                       <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 640 640" className="mt-3">
//                       <path fill="#0D0C41" d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"/>
//                       </svg>
//                       </div>
//                       <p className="mt-2 text-sm text-gray-600 leading-[24px]">
//                         How do you create compelling presentations that wow your colleagues and impress your managers?
//                       </p>
//                     </div>
//                   </article>
//                   </NavLink>
        
//                   {/* Card 2 */}
//                   <article className="bg-white rounded-lg shadow-lg overflow-hidden">
//                     <img src={informsales} alt="blog-2" className="w-full h-44 object-cover" />
//                     <div className="p-6">
//                       <span className="text-xs text-[#7b61ff]">Design</span>
//                       <div className="flex gap-10">
//                       <h4 className="mt-3 text-lg font-semibold text-[#0D0C41]">UX review presentations</h4>
//                       <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 640 640" className="mt-3">
//                       <path fill="#0D0C41" d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"/></svg>
//                       </div>
//                       <p className="mt-2 text-sm text-gray-600 leading-[24px]">
//                         How do you create compelling presentations that wow your colleagues and impress your managers?
//                       </p>
//                     </div>
//                   </article>
        
//                   {/* Card 3 */}
//                   <article className="bg-white rounded-lg shadow-lg overflow-hidden">
//                     <img src={informsales} alt="blog-3" className="w-full h-44 object-cover" />
//                     <div className="p-6">
//                       <span className="text-xs text-[#7b61ff]">Design</span>
//                       <div className="flex gap-10">
//                       <h4 className="mt-3 text-lg font-semibold text-[#0D0C41]">UX review presentations</h4>
//                       <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 640 640" className="mt-3">
//                       <path fill="#0D0C41" d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"/>
//                       </svg>
//                       </div>
//                       <p className="mt-2 text-sm text-gray-600 leading-[24px]">
//                         How do you create compelling presentations that wow your colleagues and impress your managers?
//                       </p>
//                     </div>
//                   </article>
//                 </div>
//               </section>
//         </>
//     );
// }
// export default blog;

// import { Link } from "react-router-dom";
// import informsales from "../assets/img/Infor&sales.webp";
// // import bgline from "../assets/img/common-underline.svg";

// function Blog(){
//     const blogPosts = [
//         {
//             title: "Design",
//             subtitle: "UX review presentations",
//             img:informsales,
//             description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
//             url:"blog1"
//         },
//         {
//             title: "Design",
//             subtitle: "UX review presentations",
//             img:informsales,
//             description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
//             url:"blog2"
//         },
//         {
//             title: "Design",
//             subtitle: "UX review presentations",
//             img:informsales,
//             description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
//             url:"blog3"
//         }
//     ];

//     return(
//         <>
//         <div className="text-center">
//         <h1 className="text-3xl lg:text-4xl font-semibold">Our Blog</h1>
//         <p className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#85E669] to-[#2CBDA7] bg-clip-text text-transparent mt-2">Resources and Insights</p>
//         <p className="text-sm lg:text-base text-gray-600 mt-2">The latest industry news, interviews, technologies and resources.</p>
//         </div>
//         <div>
//             <div className="grid grid-cols-1 px-6 gap-4 pt-10 pb-10 md:grid-cols-3 lg:px-16 pb-16 gap-8">
//                 {blogPosts.map((card, index) => (
//               <div
//                 key={index} 
//               >
//                 {/* Top Image */}
//                 <article className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
//                 <img
//                   src={card.img}
//                     alt={card.title}
//                   className="w-full h-44 object-cover" 
//                 />

//                 {/* Content */}
//                 <div className="flex flex-col gap-4">
//                   <h3 className="pt-6 text-xs text-[#7b61ff]">
//                     {card.title}
//                   </h3>
//                   </div>

//                   <p className="mt-3 text-lg font-semibold text-[#0D0C41]">
//                     {card.subtitle}
//                   </p>

//                   <p className="mt-2 text-sm text-gray-600 leading-[24px]">
//                     {card.description}
//                   </p>
                

//                 {/* Bottom Button
//                 <Link
//                   to={`/services/${card.route}`}
//                   className="mt-auto w-full text-center font-semibold tracking-wide uppercase text-sm
//              py-4 bg-white
//              bg-gradient-to-r from-[#30BFA4] to-[#85E668] bg-clip-text text-transparent
//              transition-all duration-300
//              hover:bg-gradient-to-r hover:from-[#30BFA4] hover:to-[#85E668] hover:text-white hover:bg-clip-border hover:border-transparent"
//                 >
//                   Learn Now
//                 </Link> */}
//                 </article>
//               </div>
//             ))}
//                {/* <article className="bg-white rounded-lg shadow-lg overflow-hidden">
//                      <img src={informsales} alt="blog-1" className="w-full h-44 object-cover" />
//                      <div className="p-6">
//                        <span className="text-xs text-[#7b61ff]">Design</span>
//                        <div className="flex gap-10">
//                        <h4 className="mt-3 text-lg font-semibold text-[#0D0C41]">UX review presentations</h4>
//                        <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 640 640" className="mt-3">
//                        <path fill="#0D0C41" d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"/>
//                        </svg>
//                        </div>
//                        <p className="mt-2 text-sm text-gray-600 leading-[24px]">
//                          How do you create compelling presentations that wow your colleagues and impress your managers?
//                        </p>
//                      </div>
//                    </article>  */}
//             </div>
//         </div>
//         </>
//     );
// }

// export default Blog;

// src/pages/Blog.jsx
import { NavLink } from "react-router-dom";
import informsales from "../assets/img/Infor&sales.webp";
// optional: use uploaded image file if you prefer
// const informsales = "/mnt/data/864a7d91-d3d0-4ce5-a933-17ef8cec106e.png";

function Blog() {
  const cards = [
    {
      tag: "Design",
      title: "UX review presentations",
      desc:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      img: informsales,
      to: "/blog/firstblog",
    },
  
    { tag: "Design", 
      title: "UX review presentations", 
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?", 
      img: informsales, to: "/blog/secondblog" 
    },

    { tag: "Design", 
      title: "UX review presentations", 
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?", 
      img: informsales, to: "/blog/thirdblog" 
    },
  ];

  return (
    <section className="blog-section px-4 lg:px-0 mt-10 mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl lg:text-4xl font-semibold">Our Blog</h3>
        <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#85E669] to-[#2CBDA7] bg-clip-text text-transparent mt-2">
          Resources and insights
        </h2>
        <p className="text-sm lg:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <NavLink key={i} to={c.to} className="block">
              <article
                className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col
                           transition-transform transform hover:-translate-y-2 duration-300"
              >
                {/* Image area: keeps consistent aspect ratio */}
                <div className="w-full aspect-[16/9] lg:aspect-[4/2] overflow-hidden bg-gray-100">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content area: equal heights -> flex-grow */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#7b61ff]">{c.tag}</span>

                    <h4 className="mt-3 text-xl lg:text-2xl font-semibold text-[#0D0C41]">
                      {c.title}
                    </h4>

                    <p className="mt-3 text-sm text-gray-600 leading-7">
                      {c.desc}
                    </p>
                  </div>

                  {/* small arrow / action row kept bottom */}
                  {/* <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      className="text-gray-700"
                    >
                      <path fill="currentColor" d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8z" />
                    </svg>
                  </div> */}
                </div>
              </article>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
