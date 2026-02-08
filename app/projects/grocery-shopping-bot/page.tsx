// export default function GroceryBot2020Page() {
//   return (
//     <main className="flex flex-col items-center px-0 sm:px-0 pb-16">

//       {/* Content container overlapping banner */}
//       <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
//         <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">
//           {/* Hero */}
//           <header className="mb-10">
//             <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">HCI Project — Grocery Shopping Bot (2020)</h1>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
//               Student project for the Master's Program in Human Computer Interaction at the University of Salzburg
//             </p>
//           </header>

//           {/* Overview */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-3">Project Overview</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
//               During the COVID-19 lockdown in Austria, many people—especially in rural
//               Salzburg—avoided crowded supermarkets. This HCI project explored how a
//               conversational interface (similar to WhatsApp) could help users create a
//               shopping list, accept substitutes, pick delivery slots, and place orders
//               with minimal friction.
//             </p>
//           </section>

//           {/* Research */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">Step 1 — User Research</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//             We didn't have a solid idea of what to do at first. This project was done during the pandemic, when there was a total lockdown in Austria except for going to grocery stores. We noticed that many people did not want to go out even to supermarkets because they live in households with people in risk groups. We focused on the area of Salzburg in Austria, in which the population is distributed among multiple villages distances apart, and most households need a car to go to the nearest supermarkets. <br></br> <br></br>  So, our research question was
//             <br></br>
//             <strong> How could technology help people in rural and newly developed areas shop for groceries during the pandemic?  </strong>
//             <br></br>
//               Study Focus: Rural areas of Salzburg, older and non-tech-savvy users who commonly
//               coordinate shopping over WhatsApp with family. 6 participants were recruited
//               via classmates and their families. 6 participants took part in the study in total. <br></br>
//               <br></br>
//               <strong>Interview Questions </strong>
//               <br></br>
//               1. How often do you go to the grocery store? <br></br>
// 2. If more than once per week, why do you do this instead of getting the stuff for the whole week and storing it in the fridge?<br></br>
// 3. If you do this weekly, why is it the case?<br></br>
// 4. Before you go to the supermarket, what kind of preparations do you do? (ex: shopping list, search for offers, search for recipes and get ingredients accordingly)
// Follow-up: How often do you do that?<br></br>
// 5. Are you loyal to certain brands/local supermarkets, or do you go to whatever is convenient for you?
// Follow-up: What made you loyal to that brand? <br></br>
// 6. What is one thing you wish would be implemented in every supermarket you go to?
// Follow-up: Describe your best shopping experience.<br></br>
// 7. To what extent are you satisfied with the packaging of the fresh products you get from the supermarket? <br></br>
// 8. Describe your worst shopping experience.<br></br>
// 9. Have you used any online grocery shopping service before?<br></br>
// Follow-up: Are you a frequent user?<br></br>
// Follow-up: If not, why did you stop using it?<br></br>
// Follow-up: Describe your experience with the online store. What did you like and what frustrated you?  <br></br>
// Follow-up: What kind of products do you buy from the grocery shop—all the daily needs or just secondary products?  <br></br>
// 10. What barriers could there be for online shopping compared to in-store shopping? <br></br> <br></br>
//             </p>
//             <div className="grid gap-6 sm:grid-cols-2 mb-6">
//               <div className="relative w-full aspect-[16/9] sm:aspect-[5/4] rounded-xl overflow-hidden">
//                 <Image
//                   src="/hci-1.jpg"
//                   alt="Interview recruitment & screening"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="mb-12 relative w-full aspect-[5/4] rounded-xl overflow-hidden">
//             <Image
//               src="/hci-2.jpg"
//               alt="Hero — Messaging-style grocery bot mockup"
//               fill
//               className="object-contain rounded-xl"
//             />
//           </div>
//             </div>

//             <div className="grid gap-10 sm:grid-cols-2 mt-10">
//               <div>
//                 <h3 className="text-base sm:text-lg font-semibold mb-2">Key Pains</h3>
//                 <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
//                   <li>Stores close early; weekend congestion</li>
//                   <li>Online stores feel complex; deliveries delayed</li>
//                   <li>Lack of trust in produce quality & substitutions</li>
//                   <li>Safety concerns (pandemic), poor ventilation, tight aisles</li>
//                 </ul>

//               </div>
//               <div>
//                 <h3 className="text-base sm:text-lg font-semibold mb-2">User Needs</h3>
//                 <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
//                   <li>Simple flow: "give a list, you buy it"</li>
//                   <li>Price transparency, faster delivery (≤ next day)</li>
//                   <li>Choose packaging and acceptable substitutes</li>
//                   <li>Save previous items; direct contact with picker</li>
//                   <li>Multiple delivery windows; no forced scheduling</li>
//                 </ul>

//               </div>
//             </div>
//           </section>

//           {/* Ideation */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">Step 2 — Ideation</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//               Explored three concepts and down-selected based on feasibility and user
//               fit.
//             </p>
//             <div className="grid gap-6 sm:grid-cols-3">
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//             <strong>Idea 1:</strong> <br></br>  Create an app for people living in the same area within 1 km. Whoever is going shopping can announce it on the app, and someone can chat with them to request an order. There should be a maximum weight for the order in case the picker does not have a car, and the picker receives a 5-10 euro delivery fee depending on order size.
//             </p>
//               <div className="relative w-full aspect-[16/9] sm:aspect-[10/9] rounded-xl overflow-hidden">

//                 <Image
//                   src="/hci-3.jpg"
//                   alt="Idea 1 — Neighbor runner (local delivery within 1km)"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[10/9]  rounded-xl overflow-hidden">

//                 <Image
//                   src="/hci-4.jpg"
//                   alt="Idea 1 — Neighbor runner (local delivery within 1km)"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//             </div>
//             <div className="grid gap-6 sm:grid-cols-3 mt-10">
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//             <strong>Idea 2:</strong> <br></br>  VR tour in the supermarket. This was very hard to implement because of the technological complexity of building VR products on one hand, and it would be difficult for supermarkets to provide products as 3D objects for the VR glasses.
//             </p>
//               <div className="relative w-full aspect-[16/9] sm:aspect-[11/9] rounded-xl overflow-hidden">

//                 <Image
//                   src="/hci-5.jpg"
//                   alt="Idea 1 — Neighbor runner (local delivery within 1km)"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>

//             </div>
//             <div className="grid gap-6 sm:grid-cols-3 mt-10">
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//             <strong>Idea 3:</strong> <br></br>  Conversational grocery shopping app that works like WhatsApp. First, it asks you to upload a shopping list or scan it, then confirm or adjust the amounts. Then it will aggregate products from different grocery stores, you can choose your favorite one, then choose the delivery time window and pay.</p>
//               <div className="relative w-full aspect-[16/9] sm:aspect-[11/9] rounded-xl overflow-hidden">

//                 <Image
//                   src="/hci-6.jpg"
//                   alt="Idea 1 — Neighbor runner (local delivery within 1km)"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[16/9] sm:aspect-[11/9] rounded-xl overflow-hidden">

//                 <Image
//                   src="/hci-7.jpg"
//                   alt="Idea 1 — Neighbor runner (local delivery within 1km)"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[16/9] sm:aspect-[11/9] rounded-xl overflow-hidden">

//               </div>
//               <div className="relative w-full aspect-[16/9] sm:aspect-[11/9] rounded-xl overflow-hidden">

//               <Image
//                 src="/hci-8.jpg"
//                 alt="Idea 1 — Neighbor runner (local delivery within 1km)"
//                 fill
//                 className="object-contain rounded-xl"
//               />
//             </div>

//             </div>
//           </section>

//           {/* Design & Prototype */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">Step 3 — UI Design & Prototyping</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//               Built a conversational prototype: upload/scan list → confirm amounts →
//               select substitutes → pick store → choose time window → pay. Tested
//               internally; planned to validate with earlier interviewees but couldn't due
//               to scope/time.
//             </p>

//             <div className="grid gap-6 sm:grid-cols-3 mb-6">

//               <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
//                 <Image
//                   src="/hci-9.jpg"
//                   alt="Wireframes — core conversation screens"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
//                 <Image
//                   src="/hci-10.jpg"
//                   alt="Hi-fi mockups — chat UI"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
//                 <Image
//                   src="/hci-11.jpg"
//                   alt="Prototype — flow map"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
//                 <Image
//                   src="/hci-12.jpg"
//                   alt="Prototype — flow map"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
//                 <Image
//                   src="/hci-13.jpg"
//                   alt="Prototype — flow map"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
//                 <Image
//                   src="/hci-14.jpg"
//                   alt="Prototype — flow map"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
//                 <Image
//                   src="/hci-15.jpg"
//                   alt="Prototype — flow map"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
//                 <Image
//                   src="/hci-16.jpg"
//                   alt="Prototype — flow map"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
//                 <Image
//                   src="/hci-17.jpg"
//                   alt="Prototype — flow map"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Feedback & References */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-3">Feedback & Next Steps</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//             When I pitched this product at the Salzburg Startup Weekend competition in 2022, I received feedback from the judge panel that supermarkets would be quite hesitant to provide this data, so it's better to focus on one supermarket rather than aggregating the data from multiple supermarkets. 2 years later, in August 2022, Meta launched this feature on WhatsApp which enables WhatsApp users in India to order their groceries from WhatsApp. https://about.fb.com/news/2022/08/shop-on-whatsapp-with-jiomart-in-india/

// This would have been already a proof of concept for the idea. I had the chance to test the prototype internally with the panel of judges, but I didn't have the chance to test it with the users I had already talked to in the user research phase, which would have been a crucial step to validate if the solution prototype would solve the problems they mentioned and whether they would consider using something like this in the future.
//             </p>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export default function GroceryBot2020Page() {
  return (
    <main className="flex flex-col items-center pb-16">
      {/* Banner */}
      <div className="relative w-full overflow-hidden -z-10 bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source media="(max-width: 640px)" srcSet="/hci-banner-mobile.png" />
          <img
            src="/hci-banner.png"
            alt="HCI grocery bot banner"
            className="w-full h-auto object-contain"
          />
        </picture>

        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-full sm:max-w-[73rem] px-4">
            <Link
              href="/"
              className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border shadow-sm text-gray-700 hover:bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            >
              <FiArrowLeft />
              Back to home
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[73rem] -mt-12 px-4">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">
          {/* HERO */}
          <header className="mb-12">
            <h1 className="text-3xl font-bold mb-6">
              Conversational Grocery Shopping Bot — HCI Research Project
            </h1>

            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
              Master’s project (6 ECTS) during my Human Computer Interaction
              studies at University of Salzburg. Built during COVID lockdown to
              explore how conversational interfaces could simplify grocery
              shopping for rural users.
            </p>

            <p className="mt-6 text-sm text-gray-600 dark:text-white/60">
              🏆 Salzburg Startup Weekend — 1st place prototype · 2nd place
              pitch
            </p>
          </header>

          {/* OVERVIEW */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Problem Context</h2>

            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
              During COVID lockdown, many people in rural Salzburg avoided
              crowded supermarkets. Interviews showed that older users often
              coordinated grocery shopping through WhatsApp rather than using
              complex online stores.
            </p>

            <p className="mt-4 text-gray-700 dark:text-white/70">
              Core research question:
              <strong>
                {" "}
                How could technology help rural households shop safely with
                minimal friction?
              </strong>
            </p>
          </section>

          {/* RESEARCH */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Step 1 — User Research
            </h2>

            <p className="text-gray-700 dark:text-white/70 mb-6">
              Conducted qualitative interviews with 6 participants recruited
              from rural areas around Salzburg. Focused on shopping behaviour,
              barriers to online grocery usage, and decision-making workflows.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative w-full aspect-[5/4]">
                <Image
                  src="/hci-1.jpg"
                  alt="Research board"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>

              <div className="relative w-full aspect-[5/4]">
                <Image
                  src="/hci-2.jpg"
                  alt="Needs mapping"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-10 mt-10">
              <div>
                <h3 className="font-semibold mb-2">Key Insights</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70">
                  <li className="text-wrap">
                    Online grocery flows felt complex and overwhelming
                  </li>
                  <li className="text-wrap">
                    Users wanted “just send a list and done” simplicity
                  </li>
                  <li className="text-wrap">
                    Trust in substitutions and produce quality was low
                  </li>
                  <li className="text-wrap">
                    Safety concerns during pandemic influenced behaviour
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">User Needs</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70">
                  <li className="text-wrap">
                    Conversational interface similar to messaging apps
                  </li>
                  <li className="text-wrap">Clear price transparency</li>
                  <li className="text-wrap">Flexible delivery windows</li>
                  <li className="text-wrap">Ability to approve substitutes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* IDEATION */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Step 2 — Ideation</h2>

            <p className="text-gray-700 dark:text-white/70 mb-6">
              Generated multiple concepts and evaluated feasibility, usability
              and technical constraints.
            </p>

            <div className="grid gap-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <p className="text-gray-700 dark:text-white/70">
                  <strong>Idea 1:</strong> Local neighbour delivery app within
                  1km radius.
                </p>
                <Image
                  src="/hci-3.jpg"
                  alt="Idea sketches"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
                <Image
                  src="/hci-4.jpg"
                  alt="Idea sketches"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <p className="text-gray-700 dark:text-white/70">
                  <strong>Idea 2:</strong> VR supermarket experience (rejected
                  due to complexity).
                </p>
                <Image
                  src="/hci-5.jpg"
                  alt="VR concept"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <p className="text-gray-700 dark:text-white/70">
                  <strong>Final concept:</strong> Conversational shopping
                  assistant similar to WhatsApp.
                </p>
                <Image
                  src="/hci-6.jpg"
                  alt="Sketches"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
                <Image
                  src="/hci-7.jpg"
                  alt="Sketches"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
                <Image
                  src="/hci-8.jpg"
                  alt="Sketches"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
              </div>
            </div>
          </section>

          {/* DESIGN */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Step 3 — UI Design & Prototyping
            </h2>

            <p className="text-gray-700 dark:text-white/70 mb-6">
              Designed a conversational flow: upload list → confirm quantities →
              accept substitutes → choose provider → select delivery window →
              payment.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {["9", "10", "11", "12", "13", "14", "15", "16", "17"].map(
                (img) => (
                  <div key={img} className="relative w-full aspect-[4/9]">
                    <Image
                      src={`/hci-${img}.jpg`}
                      alt="UI screen"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                ),
              )}
            </div>
          </section>

          {/* RESULTS */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Results & Reflection
            </h2>

            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
              The prototype won <strong>1st place prototype</strong> and{" "}
              <strong>2nd place pitch</strong>
              at Salzburg Startup Weekend.
            </p>

            <p className="mt-4 text-gray-700 dark:text-white/70">
              Judges suggested focusing on one supermarket instead of
              aggregating multiple providers due to data integration complexity
              — feedback that shaped future thinking.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
