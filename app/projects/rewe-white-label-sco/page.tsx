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

          {/* PROBLEM */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Problem</h2>

            <p className="text-gray-700 leading-relaxed mb-6 dark:text-white/70">
              The challenge wasn't just poor UX. The system was fragmented
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
                  <li>
                    • Cart visibility directly impacts user confidence
                  </li>
                  <li>
                    • Hardware feedback must guide user behavior
                  </li>
                  <li>
                    • Payment stage dominates attention
                  </li>
                  <li>
                    • Delayed staff intervention improves autonomy
                  </li>
                  <li>
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

          {/* KEY DECISIONS */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Key Design Decisions and Impact
            </h2>

            <ul className="space-y-4 text-gray-700 dark:text-white/70 ">
              <li>
                <strong>
                  Make cart state always visible and Making cart the focus while
                  scanning
                </strong>
                <br />→ Reduced confusion and repeated scans
                <br />→ Reduced need to call employees
              </li>

              <li>
                <strong>Delay staff intervention until payment</strong>
                <br />→ Increased user autonomy without increasing errors
                <br />→ Saved employee time, now they intervene once instead of
                multiple times during the process
              </li>

              <li>
                <strong>Multicart editing without intervention </strong>
                <br />→ Faster completion and fewer abandoned purchases
              </li>

              <li>
                <strong>Simplify search & typing interactions</strong>
                <br />→ Reduced friction for non-barcode flows
                <br />→ Reduced time to find items
              </li>

              <li>
                <strong>More transparency on customer benefits </strong>
                <br />→ less confusion around customer card and available
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
                Picture 1: Scan an item to start animation
                <br></br>
                Picture 2: Card payment animation
                <br></br>
                Picture 3: Cash payment animation
                <br></br>
                Picture 4: Empties receipt animation. (Users are required to put
                the receipt in the coupon box when they scan an empties receipt)
                <br></br>
                Picture 5: Receipt printing animation
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
                one popup where the user can just scan their customer card.
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
              <li>
                • Designed for scanner latency and failure states
              </li>
              <li>
                • Adapted flows to weight sensor behavior
              </li>
              <li>
                • Synced UI states with backend system logic and error states
              </li>
              <li>
                • Tested designs in real hardware environments
              </li>
            </ul>
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

            <div className="relative aspect-[1/1] mb-4">
              <Image
                src="/rewe-23.png"
                alt=""
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </section>

          {/* VALIDATION */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Alpha Test Results</h2>

            <p className="text-gray-700 mb-6 dark:text-white/70">
              We went to Billa Praterstern and tested with over 300 Customers
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

          {/* IMPACT METRICS */}
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

          {/* IMPACT */}
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
