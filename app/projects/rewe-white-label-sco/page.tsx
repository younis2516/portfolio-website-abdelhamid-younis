"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

function ImagePlaceholder({
  label,
  ratio = "aspect-[16/9]",
}: {
  label: string;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} w-full rounded-xl border border-dashed grid place-items-center text-sm text-gray-500 dark:text-white/70`}
      aria-label={`${label} (placeholder)`}
      role="img"
    >
      <div className="p-4 text-center">
        <div className="font-medium mb-1">Image placeholder</div>
        <div className="opacity-80">{label}</div>
      </div>
    </div>
  );
}

export default function BillaSelfCheckoutPage() {
  return (
    <main className="flex flex-col items-center px-0 pb-16">
      {/* Banner */}
      <div className="relative z-0 w-full mx-auto overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source media="(max-width: 640px)" srcSet="/billa-sco-banner-mobile.png" />
          <img
            src="/rewe-hero.png"
            alt="BILLA Self Checkout banner"
            className="w-full h-auto object-contain"
          />
        </picture>

        {/* Back button */}
        <div className="pointer-events-none absolute inset-0 flex justify-center z-10">
          <div className="relative w-full sm:max-w-[73rem] px-4">
            <Link
              href="/"
              className="pointer-events-auto absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 transition dark:bg-gray-900 dark:border-gray-700 dark:text-white/80 dark:hover:bg-gray-800"
            >
              <FiArrowLeft />
              <span>Back to home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">

          {/* Hero */}
          <header className="mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
              REWE Group — Self-Checkout Terminal (White-Label UI)
            </h1>

            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
              <strong>Company:</strong><br />
              REWE International
            </p>
            <br />

            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
              <strong>Brands & Markets:</strong><br />
              BILLA, PENNY - Austria
            </p>
            <br />

            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
              <strong>Role:</strong><br />
              UX/UI Designer — Customer Self-Service (POS)
            </p>
          </header>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Project Overview</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
              REWE International operates thousands of self-checkout terminals across multiple
              countries. Many of them were supplied by external vendors, resulting
              in inconsistent UX, limited brand flexibility, and higher operational cost.
              <br /><br />
              This project focused on designing a scalable, white-label self-checkout UI that
              reduces customer friction, minimizes staff intervention, and adapts cleanly to
              multiple REWE Group brands.
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mt-4">
              <strong>OLD UI:</strong><br />
            </p>
            <br />
             <div className="grid gap-6 sm:grid-cols-3">
                        <div className="relative w-full aspect-[8/4] sm:aspect-[8/4] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-1.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                        <div className="relative w-full aspect-[8/4] sm:aspect-[8/4] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-2.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                        <div className="relative w-full aspect-[8/4] sm:aspect-[8/4] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-3.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                      </div>
          </section>

          {/* Problem */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Problem</h2>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-2">
              <li>Frequent staff intervention</li>
              <li>Unclear cart state</li>
              <li>Complex search experience</li>
              <li>Old inconsistent UI from different providers</li>
              <li>Hard to use for first-time users</li>
            </ul>
             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mt-8">
              <strong>Project timeline:</strong><br />
            </p>
            <br />
            <div className="grid gap-6 sm:grid-cols-1">
                        <div className="relative w-full aspect-[8/2] sm:aspect-[8/2] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-4.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>        
            </div>
          </section>

          {/* Research */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Research & Discovery</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              We Conducted competitor analysis across 20+ self-checkout systems in 7 European
              countries. Combined internal usability reports, stakeholder interviews, and
              in-store observations.
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mt-4">
              <strong>User pains :</strong><br />
            </p>
            <br />
            <div className="grid gap-6 sm:grid-cols-2">
                        <div className="relative w-full aspect-[8/3] sm:aspect-[8/3] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-6.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>        
            </div>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mt-4">
              <strong>Compeitor research Findings :</strong><br />
            </p>
            <br />
            <div className="grid gap-10 sm:grid-cols-2">
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-2">
              <li>Cart is the focus of the screen</li>
              <li>Actionable start screen, show users what can they do on the start screen</li>
              <li>Use animations to show how to interact with hardware</li>
              <li>Clear hardware guidance (scanner, scale, payment)</li>
              <li>Show steps from start to checkout </li>
              <li>Once in checkout stage make payment the focus of the screen</li>
              <li>Delayed staff interventions until payment</li>
            </ul>
                        <div className="relative w-full aspect-[1/1] sm:aspect-[1/1] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-5.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
            </div>
          </section>


          {/* Solution */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">1st Prototype</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-6">
              I made a first design for the full self-checkout flow and we tested it internally with supermarket staff, help desk, and other internal teams fro. different age groups.
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mt-4">
              <strong>First user feedback :</strong><br />
            </p>
            <br />
            <div className="grid gap-4 sm:grid-cols-2">
              <ul className="list-disc list-none list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-2">
              <li>✅ Better cart visibility</li>
              <li>✅ Clear way to remove items</li>
              <li>✅ Less cluttered payment page and good contrast</li>
              <li>✅ Delayed staff interventions until payment</li>
              <li>💡 Users want to type, when they open the picklist</li>
              <li>💡 Business wanted to display ADs on the start screen</li>
              <li>💡 Users want to see the cart summary before they pay</li>
              <li>💡 Users want to see available loyaloty points to redeemn in checkout</li>
            </ul>
             <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-18.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
             <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-8.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                          <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-9.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                        <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe10.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                         <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-15.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                         <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-16.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                         <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-17.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Final user testing before release</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-6">
            <strong>Testing focus:</strong><br></br>Do they have past experience with SCOs ,Is iteasy to navigate, Can they recognize of GUI elements, Can they delete items, Do they need staff assistance, Whether there are issues with item search, How many Abandoned purchases            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mt-4">
              <strong>Key findings :</strong><br />
            </p>
            <br />
            <div className="grid gap-4 sm:grid-cols-2">
             <div className="relative w-full aspect-[3/2.5] sm:aspect-[3/2.5] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-11.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                        
            </div>
           
          </section>

          {/* Component Library */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              Component Library & White-Label System
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Built a reusable component system adaptable to multiple brands while
              maintaining consistent UX across markets.
            </p>

            <div className="grid gap-4 sm:grid-cols-1">
             <div className="relative w-full aspect-[2.5/1] sm:aspect-[2.5/1] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-12.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                        <div className="relative w-full aspect-[2.5/1] sm:aspect-[2.5/1] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-13.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                        <div className="relative w-full aspect-[2.5/1] sm:aspect-[2.5/1] rounded-xl overflow-hidden">
                          <Image
                            src="/rewe-14.png"
                            alt="Old UI"
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                        
            </div>
            
          </section>

          

          {/* Outcome */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Outcome</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
              The redesigned self-checkout UI is now live across all BILLA Austria stores
              and is going to be rolled out to additional REWE Group brands soon.
              <br /><br />
              The system quietly serves millions of customers, improving checkout speed,
              confidence, and operational efficiency without requiring explanation.
            </p>
          </section>

          {/* Reflection */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Reflection</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
              Designing for self-checkout reinforced a core UX lesson: when no one notices,
              struggles, or asks for help — the system is doing its job.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
