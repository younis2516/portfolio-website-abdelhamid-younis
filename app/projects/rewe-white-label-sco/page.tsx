// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { FiArrowLeft } from "react-icons/fi";

// export default function BillaSelfCheckoutPage() {
//   return (
//     <main className="flex flex-col items-center px-0 pb-16">
//       {/* Banner */}
//       <div className="relative z-0 w-full mx-auto overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
//         <picture>
//           <source media="(max-width: 640px)" srcSet="/rewe-hero.png" />
//           <img
//             src="/rewe-hero.png"
//             alt="BILLA Self Checkout banner"
//             className="w-full h-auto object-contain"
//           />
//         </picture>

//         <div className="pointer-events-none absolute inset-0 flex justify-center z-10">
//           <div className="relative w-full sm:max-w-[73rem] px-4">
//             <Link
//               href="/"
//               className="pointer-events-auto absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 transition dark:bg-gray-900 dark:border-gray-700 dark:text-white/80 dark:hover:bg-gray-800"
//             >
//               <FiArrowLeft />
//               <span>Back</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
//         <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">
//           {/* HERO */}
//           <header className="mb-16">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
//               REWE Group — BILLA Self-Checkout Platform Redesign
//             </h1>

//             <p className="text-gray-700 dark:text-white/70 leading-relaxed">
//               Enterprise-scale redesign of a nationwide self-service checkout
//               platform used daily by millions of customers across Austria.
//               Designed as a scalable multi-brand system supporting REWE Group
//               retail operations.
//             </p>

//             <div className="mt-6 space-y-2 text-gray-700 dark:text-white/70">
//               <p>
//                 <strong>Company:</strong> REWE International
//               </p>
//               <p>
//                 <strong>Role:</strong> Senior UX/UI Designer (Solo Designer)
//               </p>
//               <p>
//                 <strong>Scope:</strong> End-to-end UX, UI, motion design,
//                 research, usability testing, system design
//               </p>
//             </div>
//           </header>

//           {/* IMPACT */}
//           <section className="mb-16">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//               Impact at Scale
//             </h2>

//             <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70">
//               <li>Live across all BILLA Austria stores with self-checkout</li>
//               <li>Used daily by millions of real customers</li>
//               <li>10–15 seconds faster average transaction time</li>
//               <li>Reduced staff intervention and improved learnability</li>
//               <li>
//                 Estimated operational efficiency improvement worth millions
//                 annually at scale
//               </li>
//             </ul>
//           </section>

//           {/* OVERVIEW */}
//           <section className="mb-16">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//               Problem Overview
//             </h2>

//             <p className="text-gray-700 dark:text-white/70 leading-relaxed">
//               Legacy checkout interfaces from multiple vendors created
//               inconsistent UX, slower transactions, and increased operational
//               friction. I redesigned the entire interaction layer to create a
//               unified, scalable white-label platform optimized for speed,
//               clarity, and real-world retail environments.
//             </p>

//             <ul className="list-disc list-inside text-sm mt-2 sm:text-base text-gray-700 dark:text-white/70 space-y-2">
//               <li>Frequent staff intervention</li>
//               <li>Unclear cart state</li>
//               <li>Complex search experience</li>
//               <li>Old inconsistent UI from different providers</li>
//               <li>Hard to use for first-time users</li>{" "}
//             </ul>

//             <div className="grid gap-6 sm:grid-cols-3 mt-8">
//               {["/rewe-1.png", "/rewe-2.png", "/rewe-3.png"].map((src, i) => (
//                 <div
//                   key={i}
//                   className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
//                 >
//                   <Image
//                     src={src}
//                     alt="Old UI"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>

//           <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//             Project timeline:
//           </h2>
//           <br />
//           <div className="grid gap-6 sm:grid-cols-1">
//             <div className="relative w-full aspect-[3/1.5] rounded-xl overflow-hidden">
//               <Image
//                 src="/rewe-4.png"
//                 alt="Old UI"
//                 fill
//                 className="object-contain rounded-xl"
//               />
//             </div>
//           </div>

//           {/* RESEARCH */}
//           <section className="mb-16">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//               Research & Discovery
//             </h2>

//             <p className="text-gray-700 dark:text-white/70 mb-6">
//               As the solo designer, I conducted 80+ usability tests across
//               different countries and user groups. Combined competitor analysis
//               of 20+ European systems, stakeholder workshops, and in-store
//               observations.
//             </p>

//             <div className="grid gap-6 md:grid-cols-2">
//               <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70">
//                 <li>Cart visibility is critical to user confidence</li>
//                 <li>Hardware guidance reduces errors</li>
//                 <li>Payment stage should dominate visual hierarchy</li>
//                 <li>Delayed staff intervention improves autonomy</li>
//                 <li>Animations guide interaction intuitively</li>
//               </ul>

//               <div className="relative w-full aspect-square rounded-xl overflow-hidden">
//                 <Image
//                   src="/rewe-5.png"
//                   alt="Research"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Research */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//               User pains
//             </h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//               I interviewed over 80 users and these are the biggest user pains
//               with current self checkout, not just in Billa but in general.
//             </p>

//             <div className="grid gap-6 sm:grid-cols-1">
//               <div className="relative w-full aspect-[8/3] sm:aspect-[8/3] rounded-xl overflow-hidden">
//                 <Image
//                   src="/rewe-6.png"
//                   alt="Old UI"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//             </div>
//           </section>
//           {/* DESIGN */}
//           <section className="mb-16">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//               First Design Iteration
//             </h2>

//             <p className="text-gray-700 dark:text-white/70 mb-6">
//               {" "}
//               I made a first design for the full self-checkout flow and we
//               tested it internally with supermarket staff, help desk, and other
//               internal teams fro. different age groups.
//             </p>

//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mt-4 mb-2">
//               <strong>User feedback :</strong>
//               <br />
//             </p>
//             <ul className="list-disc list-none list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-2 mb-8">
//               <li>✅ Better cart visibility</li>
//               <li>✅ Clear way to remove items</li>
//               <li>✅ Less cluttered payment page and good contrast</li>
//               <li>✅ Delayed staff interventions until payment</li>
//               <li>💡 Users want to type, when they open the picklist</li>
//               <li>💡 Business wanted to display ADs on the start screen</li>
//               <li>💡 Users want to see the cart summary before they pay</li>
//               <li>
//                 💡 Users want to see available loyaloty points to redeemn in
//                 checkout
//               </li>
//             </ul>
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//               Design Solution
//             </h2>

//             <p className="text-gray-700 dark:text-white/70 mb-6">
//               Designed a full end-to-end checkout flow balancing user clarity
//               with operational constraints such as hardware limitations, store
//               workflows, and scalability across brands.
//             </p>

//             <div className="grid gap-6 md:grid-cols-2">
//               {[
//                 "/rewe-18.png",
//                 "/rewe-8.png",
//                 "/rewe-9.png",
//                 "/rewe10.png",
//                 "/rewe-15.png",
//                 "/rewe-16.png",
//                 "/rewe-17.png",
//               ].map((src, i) => (
//                 <div
//                   key={i}
//                   className="relative w-full aspect-[3/2] rounded-xl overflow-hidden"
//                 >
//                   <Image
//                     src={src}
//                     alt="Design UI"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Solution */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//               Final user testing before release
//             </h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-6">
//               <strong>Testing focus:</strong>
//               <br></br>Do they have past experience with SCOs ,Is iteasy to
//               navigate, Can they recognize of GUI elements, Can they delete
//               items, Do they need staff assistance, Whether there are issues
//               with item search, How many Abandoned purchases{" "}
//             </p>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mt-4">
//               <strong>Key findings :</strong>
//               <br />
//             </p>
//             <br />
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div className="relative w-full aspect-[3/2.5] sm:aspect-[3/2.5] rounded-xl overflow-hidden">
//                 <Image
//                   src="/rewe-11.png"
//                   alt="Old UI"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//             </div>
//           </section>

//           {/* SYSTEM */}
//           <section className="mb-16">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//               White-Label Component System
//             </h2>

//             <p className="text-gray-700 dark:text-white/70 mb-6">
//               Built a reusable component architecture enabling brand
//               customization while maintaining consistent UX patterns.
//             </p>

//             <div className="grid gap-6">
//               {["/rewe-12.png", "/rewe-13.png", "/rewe-14.png"].map(
//                 (src, i) => (
//                   <div
//                     key={i}
//                     className="relative w-full aspect-[5/2] rounded-xl overflow-hidden"
//                   >
//                     <Image
//                       src={src}
//                       alt="Design System"
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                 ),
//               )}
//             </div>
//           </section>

//           {/* OUTCOME */}
//           <section>
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">Outcome</h2>

//             <p className="text-gray-700 dark:text-white/70 leading-relaxed">
//               The redesigned system is now deployed nationwide across BILLA
//               Austria. Transaction time improved by approximately 10–15 seconds
//               per customer, translating into significant operational efficiency
//               gains at scale. Retail staff reported faster onboarding and
//               reduced assistance needs, validating the design decisions in
//               real-world usage.
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

export default function BillaSelfCheckoutPage() {
  return (
    <main className="flex flex-col items-center px-0 pb-16">
      {/* HERO */}
      <div className="relative w-full overflow-hidden -mt-28 sm:-mt-36">
        <img
          src="/rewe-hero.png"
          alt="BILLA Self Checkout"
          className="w-full object-contain"
        />

        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow border"
        >
          <FiArrowLeft />
          Back
        </Link>
      </div>

      <div className="w-full sm:max-w-[900px] -mt-12 px-4 z-10">
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-[32px] shadow-xl p-8 sm:p-12 space-y-20">
          {/* CONTEXT */}
          <section>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white">
              Designing & Scaling a Nationwide Self-Checkout System
            </h1>

            <p className="text-gray-600 leading-relaxed dark:text-white/70">
              I led the end-to-end redesign of a self-checkout platform used
              daily by millions across Austria. This required balancing UX
              decisions with hardware constraints, operational workflows, and
              real-world system behavior.
            </p>

            <div className="mt-6 text-sm text-gray-600 space-y-1 dark:text-white/70">
              <p>
                <strong>Company:</strong>
                <br></br> REWE Group (BILLA)
              </p>
              <p>
                <strong>Role:</strong>
                <br></br> Senior UX/UI Designer (Solo)
              </p>
              <p>
                <strong>Scope:</strong>
                <br></br> UX, UI, system design, validation, rollout
              </p>
            </div>
          </section>
          <div className="grid grid-cols-2 sm:grid-cols-4 mb-6">
            <div className="flex flex-col text-center justify-center items-center">
              <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                10-12s
              </p>
              <p className="text-gray-900 leading-relaxed dark:text-white/70">
                faster <br></br> checkout
              </p>
            </div>

            <div className="flex flex-col text-center justify-center items-center">
              <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                13.5%
              </p>
              <p className="text-gray-900 leading-relaxed dark:text-white/70">
                less <br></br> assistance needed
              </p>
            </div>
            <div className="flex flex-col text-center justify-center items-center">
              <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                25%
              </p>
              <p className="text-gray-900 leading-relaxed dark:text-white/70">
                less mistakes in <br></br> product search
              </p>
            </div>
            <div className="flex flex-col text-center justify-center items-center">
              <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                8.5/10
              </p>
              <p className="text-gray-900 leading-relaxed dark:text-white/70">
                customer satisfaction<br></br> score
              </p>
            </div>
          </div>
          {/* IMPACT FIRST */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Impact</h2>

            <ul className="space-y-2 text-gray-700 dark:text-white/70">
              <li>• Live in all BILLA Austria stores</li>
              <li>• Millions of users daily</li>
              <li>• 10–15s faster checkout</li>
              <li>• Reduced staff intervention</li>
              <li>• Measurable operational efficiency gains</li>
            </ul>
          </section>

          {/* PROBLEM */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Problem</h2>

            <p className="text-gray-700 leading-relaxed mb-6 dark:text-white/70 ">
              The challenge wasn’t just poor UX. The system was fragmented
              across vendors, tightly coupled to hardware behavior, and
              inconsistent across stores. This created friction in scanning,
              payment, and error handling.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {["/rewe-1.png", "/rewe-2.png", "/rewe-3.png"].map((src, i) => (
                <div key={i} className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* RESEARCH → INSIGHTS */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white/70">
              Research → Key Insights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 dark:text-white/70">
              <div>
                <p className="text-gray-700 mb-4 dark:text-white/70">
                  I conducted <strong>80+ usability tests</strong> across
                  multiple countries and store environments.
                </p>

                <ul className="space-y-2 text-gray-700 dark:text-white/70">
                  <li className="text-wrap">
                    • Cart visibility directly impacts user confidence
                  </li>
                  <li className="text-wrap">
                    • Hardware feedback must guide user behavior
                  </li>
                  <li className="text-wrap">
                    • Payment stage dominates attention
                  </li>
                  <li className="text-wrap">
                    • Delayed staff intervention improves autonomy
                  </li>
                  <li className="text-wrap">
                    • Animations reduce cognitive load
                  </li>
                </ul>
              </div>
              <div>
                <div className="relative aspect-[1/1]">
                  <Image
                    src={"/rewe-7.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 🔥 KEY DECISIONS (MOST IMPORTANT ADDITION) */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Key Design Decisions and Impact
            </h2>

            <ul className="space-y-4 text-gray-700 dark:text-white/70 ">
              <li className="text-wrap">
                <strong>
                  Make cart state always visible and Making cart the focus while
                  scanning
                </strong>
                <br />→ Reduced confusion and repeated scans
                <br />→ Reduced need to call employees
              </li>

              <li className="text-wrap">
                <strong>Delay staff intervention until payment</strong>
                <br />→ Increased user autonomy without increasing errors
                <br />→ Saved employee time, now they intervene once instead of
                multiple times during the process
              </li>

              <li className="text-wrap">
                <strong>Multicart editing without intervention </strong>
                <br />→ Faster completion and fewer abandoned purchases
              </li>

              <li className="text-wrap">
                <strong>Simplify search & typing interactions</strong>
                <br />→ Reduced friction for non-barcode flows
                <br />→ Reduced time to find items
              </li>

              <li className="text-wrap">
                <strong>More transparency on customer benefits </strong>
                <br />→ less confusion around customer card and avalaible
                credits
              </li>
            </ul>
          </section>

          {/* SOLUTION */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Solution (Before & After)
            </h2>

            <p className="text-gray-700 mb-6 dark:text-white/70">
              I designed a predictable system with clear states, feedback loops,
              and error handling.
            </p>

            <div>
              <p className="text-gray-700 text-lg font-semibold mb-1 dark:text-white/70">
                More visual guidance
              </p>
              <p className="text-gray-700 mb-6 dark:text-white/70">
                I Guide the user how to interact with the POS hardware through
                animations.
                <br></br>
                Picture 1: Scan an itemm to start animation
                <br></br>
                Picture 2: Card payment animation
                <br></br>
                Picture 3: Cash payment animation
                <br></br>
                Picture 4: Empties receipt animation. (Users are required to put
                the receipt in the copoun box when they scan empties receipt)
                <br></br>
                Picture 4: Receipt printing animation
              </p>
              <div className="grid md:grid-cols-3 mb-10 gap-6">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-15.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-16.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-17.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-receipt-animation.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-empties-animation.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-700 text-lg font-semibold mb-1 dark:text-white/70">
                Before & After:Start screen & Cart
              </p>
              <p className="text-gray-700 mb-6 dark:text-white/70">
                I reduced clutter in the start screen, focusing on cart as the
                main element of the screen, and put all secondary actions on a
                side bar
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-before-1.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-8.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-700 text-lg font-semibold mt-8 mb-1 dark:text-white/70">
                Before & After: Item search
              </p>
              <p className="text-gray-700 mb-6 dark:text-white/70">
                In the item search, i made the keybopard visible by default and
                added categories to the start screen. this way users can find
                the item faster and can navigate to the right category. The
                keyboard disappears once the user clicks on a category.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-before-2.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-10.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-21.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-700 text-lg font-semibold mt-8 mb-1 dark:text-white/70">
                Before & After: Payment page & Customer card reminder
              </p>
              <p className="text-gray-700 mb-6 dark:text-white/70">
                I reduced the 3 buttons in the customer card reminder page to
                one popups where the user csn just scan their customer card.
                <br></br> <br></br>In the payment page I made the cart smaller
                to make the payment the focus of the page.
                <br></br> Made card and cash primary payment buttons, and all
                other payment buttons secondary.
                <br></br> Displayed available credits for shopping bonus and
                employee cards
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-before-4.jpg"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-22.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-before-3.jpeg"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={"/rewe-9.png"}
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ENGINEERING */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Constraints & Engineering Collaboration
            </h2>

            <ul className="space-y-2 text-gray-700 dark:text-white/70 ">
              <li className="text-wrap">
                • Designed for scanner latency and failure states
              </li>
              <li className="text-wrap">
                • Adapted flows to weight sensor behavior
              </li>
              <li className="text-wrap">
                • Synced UI states with backend system logic and error states
              </li>
              <li className="text-wrap">
                • Tested designs in real hardware environments
              </li>
            </ul>
          </section>

          {/* VALIDATION */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Alpha Test Results </h2>

            <p className="text-gray-700 mb-6 dark:text-white/70">
              We went to Billa Praterstern and testedf with over 300 Customers
              before rollout.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
              <div className="flex flex-col text-center justify-center items-center">
                <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                  35
                </p>
                <p className="text-gray-900 leading-relaxed dark:text-white/70">
                  Customers <br /> personally interviewed
                </p>
              </div>

              <div className="flex flex-col text-center justify-center items-center">
                <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                  60
                </p>
                <p className="text-gray-900 leading-relaxed dark:text-white/70">
                  Customers <br /> observed
                </p>
              </div>

              <div className="flex flex-col text-center justify-center items-center">
                <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                  303
                </p>
                <p className="text-gray-900 leading-relaxed dark:text-white/70">
                  Receipts processed <br /> with new GUI
                </p>
              </div>

              <div className="flex flex-col text-center justify-center items-center">
                <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                  8
                </p>
                <p className="text-gray-900 leading-relaxed dark:text-white/70">
                  SCO lanes <br /> active
                </p>
              </div>

              <div className="flex flex-col text-center justify-center items-center">
                <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                  80%
                </p>
                <p className="text-gray-900 leading-relaxed dark:text-white/70">
                  Had prior <br /> SCO experience
                </p>
              </div>

              <div className="flex flex-col text-center justify-center items-center">
                <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                  20%
                </p>
                <p className="text-gray-900 leading-relaxed dark:text-white/70">
                  First-time <br /> users
                </p>
              </div>

              <div className="flex flex-col text-center justify-center items-center">
                <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                  13.5%
                </p>
                <p className="text-gray-900 leading-relaxed dark:text-white/70">
                  Fewer staff <br /> calls for help
                </p>
              </div>

              <div className="flex flex-col text-center justify-center items-center">
                <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                  17%
                </p>
                <p className="text-gray-900 leading-relaxed dark:text-white/70">
                  Fewer failed <br /> searches
                </p>
              </div>

              <div className="flex flex-col text-center justify-center items-center">
                <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                  65%
                </p>
                <p className="text-gray-900 leading-relaxed dark:text-white/70">
                  Could intuitively <br /> delete an item
                </p>
              </div>

              <div className="flex flex-col text-center justify-center items-center">
                <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                  8/10
                </p>
                <p className="text-gray-900 leading-relaxed dark:text-white/70">
                  Very positive <br /> satisfaction
                </p>
              </div>
            </div>
          </section>

          {/* SYSTEM */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Design System</h2>

            <p className="text-gray-700 mb-6 dark:text-white/70">
              Built a white-label system supporting multiple brands with shared
              interaction patterns for Billa (Yellow), Penny (Red), IKI (Green),
              and Bipa (Pink)
            </p>

            {["/rewe-12.png", "/rewe-13.png", "/rewe-14.png"].map((src, i) => (
              <div key={i} className="relative aspect-[5/2] mb-4">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            ))}
          </section>

          {/* OUTCOME */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Outcome</h2>

            <p className="text-gray-700 leading-relaxed dark:text-white/70">
              The system is now deployed nationwide. Improvements in speed,
              clarity, and autonomy translated into measurable business impact
              and improved in-store operations.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
