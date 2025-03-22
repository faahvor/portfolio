import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col justify-center flex-grow text-center text-sm md:mt-12 animate-fadeInUp mb-16">
      <h1 className="text-left mt-2 mx-[5vw] md:mx-[20vw] text-[2.2rem] md:text-4xl tracking-[0.02em] md:tracking-normal leading-[2.45rem] font-semibold text-[#E2EAFD]">
        Story Time 🌠
      </h1>

      <p className="text-left mx-[5vw] md:mx-[20vw] mt-4 text-[0.85rem] md:text-sm text-[#8994AE] leading-[1.9] md:leading-relaxed">
        Get to know the person behind the code—my background, passions, and what drives me.
      </p>

      <div className="text-left mx-[5vw] md:mx-[20vw] mt-5 space-y-5">
        <h2 className="text-[1rem] md:text-lg font-semibold leading-[1.9] md:leading-relaxed text-[#E2EAFD]">
          The Beginning 🌱
        </h2>
        <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
          Hello, gorgeous stranger! You probably already knew this, but I&apos;m a curiosity-led full-stack <Link to={"/"} className="text-[#1DA1F2] hover:underline">software developer</Link>, mostly proficient in a range of <Link to={"/skill"} className="text-[#1DA1F2] hover:underline">languages</Link>, including JavaScript, HTML, CSS, Tailwind,Reactjs,Nextjs, PHP, WordPress, MongoDB, Bootstrap, and Git.
        </p>

        <h2 className="text-[1rem] md:text-lg font-semibold leading-[1.9] md:leading-relaxed text-[#E2EAFD]">
          Coding as Therapy 🧘‍♂️
        </h2>
        <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
          For me, coding isn&rsquo;t just a job or hobby; it&rsquo;s therapy, a creative outlet, an escape, a sanctuary where I find solace and fulfillment,it is a place where i showcase my superpower a place where i feel good using my brain to come with ideas. I discover a space where my mind can wander freely, exploring endless possibilities.
        </p>

        <h2 className="text-[1rem] md:text-lg font-semibold leading-[1.9] md:leading-relaxed text-[#E2EAFD]">
          The Early Days 🎓
        </h2>
        <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
          i began my journey as a play,while i was studying computer science, but then i fell in love with it,and decided to go deeper into it, i started learning more about web development
        
        </p>

        <h2 className="text-[1rem] md:text-lg font-semibold leading-[1.9] md:leading-relaxed text-[#E2EAFD]">
          Life as a self taught 🔥
        </h2>
        <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
          i upgraded my learning to Udemy,buying courses just to increase my knowledge,youtube was also doing justice
        </p>

        <h2 className="text-[1rem] md:text-lg font-semibold leading-[1.9] md:leading-relaxed text-[#E2EAFD]">
          Learning Journey 🚀
        </h2>
        <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
        I spent countless hours learning and honing my skills, and the more I learned, the more I realized how much there was to learn. I was fascinated by the endless possibilities that coding offered, and I was eager to explore them all.
        </p>

        <h2 className="text-[1rem] md:text-lg font-semibold leading-[1.9] md:leading-relaxed text-[#E2EAFD]">
          The Growth Continues 🌿
        </h2>
        <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
          This initiative not only allowed me to improve my skills but also provided the opportunity to immerse myself extensively in WooCommerce, thereby expanding my proficiency in WordPress and other <Link to={"/skill"} className="text-[#1DA1F2] hover:underline">technologies</Link> organically.
        </p>

        <h2 className="text-[1rem] md:text-lg font-semibold leading-[1.9] md:leading-relaxed text-[#E2EAFD]">
          Embracing Full-Stack Development 🌐
        </h2>
        <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
          Fast-forward to late 2023 and early 2024, I ventured into full-stack <Link to={"/projects"} className="text-[#1DA1F2] hover:underline">software development</Link>, embarking on an exhilarating journey. Despite the inevitable challenges of debugging and troubleshooting, I find joy in every step, seeing each setback as an opportunity to learn and grow.
        </p>

        <h2 className="text-[1rem] md:text-lg font-semibold leading-[1.9] md:leading-relaxed text-[#E2EAFD]">
          The Drive for Greatness 💪
        </h2>
        <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
          Up until now, I have remained driven by a relentless pursuit of greatness. I strive to push the boundaries of what&rsquo;s possible. This journey has been nothing short of remarkable, and I eagerly anticipate the adventures that lie ahead.
        </p>

       
        <h2 className="text-[1rem] md:text-lg font-semibold leading-[1.9] md:leading-relaxed text-[#E2EAFD]">
          Looking Ahead 🔮
        </h2>
        <p className="text-[0.85rem] md:text-sm font-medium leading-[1.9] md:leading-relaxed text-[#8994AE]">
          I am excited about the future, and I appreciate you for taking the time to learn about my story. Feel free to <Link to={"/contact"} className="text-[#1DA1F2] hover:underline">connect with me</Link> on LinkedIn or check out my GitHub for some of my projects.
        </p>
      </div>
    </div>
  );
}

export default About;