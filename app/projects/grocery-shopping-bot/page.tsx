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

export default function GroceryBot2020Page() {
  return (
    <main className="flex flex-col items-center px-0 sm:px-0 pb-16">
      {/* Banner */}
      <div className="relative z-0 w-[100%] mx-auto overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source media="(max-width: 640px)" srcSet="/hci-banner-mobile.png" />
          <img
            src="/hci-banner.png"
            alt="HCI grocery bot banner"
            className="w-full h-auto object-contain"
          />
        </picture>
        {/* Back button overlay */}
        <div className="pointer-events-none absolute inset-0 flex justify-center z-10">
          <div className="relative w-full sm:max-w-[73rem] px-4">
            <Link href="/" className="pointer-events-auto absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition dark:bg-gray-900 dark:border-gray-700 dark:text-white/80 dark:hover:bg-gray-800">
              <FiArrowLeft />
              <span>Back to home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content container overlapping banner */}
      <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">
          {/* Hero */}
          <header className="mb-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">HCI Project — Grocery Shopping Bot (2020)</h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
              Student project for the master Program Human Computer Interaction at the University of Salzburg 
            </p>
          </header>

          

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Project Overview</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
              During the COVID-19 lockdown in Austria, many people—especially in rural
              Salzburg—avoided crowded supermarkets. This HCI project explored how a
              conversational interface (similar to WhatsApp) could help users create a
              shopping list, accept substitutes, pick delivery slots, and place orders
              with minimal friction.
            </p>
          </section>

          {/* Research */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Step 1 — User Research</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            We did not have a solid idea on what to do at first. This project was done during the pandemic, when there was a total lockdown in Austria except for going to grocery stores. We noticed that many people did not want to go out even to supermarkets because they live in household with people in risk groups, we focused on the area of Salzburg in Austria, in which the popuplation is distributed among multiple villages distances apart and most households need a car to go to the nearest supermarkets. <br></br> <br></br>  So, our research question was 
            <br></br>
            <strong> How technology could help people in rural and new developed areas to shop for grocerieres during the pandemic?  </strong>
            <br></br>
              Study Focus: Rural areas of Salzburg, older and non–tech-savvy users who commonly
              coordinate shopping over WhatsApp with family. 6 participants were recruited
              via classmates and their families. 6 participants took part in the study in total. <br></br>
              <br></br>
              <strong>Interview Questions </strong>
              <br></br>
              1. How often do you go to the grocery store? <br></br>
2. If more than one time per week? Why do you do this instead of getting the studd for the whole week and restore it in the fridge?<br></br>
3. If you do this weekly why is it the case?<br></br>
4. Before you go to the supermarket what kind of preperations do you do? (ex: shopping list, search for offers, search for recipies and get igredients accordingly)
Follow up: how often do you do that?<br></br>
5. Are you loyal to certain brands/local supermarkets or whatever is convenient for you?  
Followup: What made you loyal to that brand? <br></br>
6. what is the thing you wish to be implemented in every supermarket you go to?
Followup: Describe your best shopping experience? <br></br>
7. To what extent are you satisfied about the packaging of the fresh products you get from the supermarket? <br></br>
8. Describe your worst shopping experience?<br></br>
9. Did you do any grocery shopping online service before?<br></br>
Follow up: Are you a frequent user?<br></br>
Followup: If not why you stopped using it?<br></br>
Followup: Describe your experience with the online store, what did you like and what frustrated you?  <br></br>
Followup: What kind of products do you buy from the grocery shop all the daily needs or just secondary products?  <br></br>
10. What barriers could be there for online shopping compared to instore shopping? <br></br> <br></br>
            </p>
            <div className="grid gap-6 sm:grid-cols-2 mb-6">
              <div className="relative w-full aspect-[16/9] sm:aspect-[5/4] rounded-xl overflow-hidden">
                <Image
                  src="/hci-1.jpg"
                  alt="Interview recruitment & screening"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="mb-12 relative w-full aspect-[5/4] rounded-xl overflow-hidden">
            <Image
              src="/hci-2.jpg"
              alt="Hero — Messaging-style grocery bot mockup"
              fill
              className="object-contain rounded-xl"
            />
          </div>
            </div>

            

            <div className="grid gap-10 sm:grid-cols-2 mt-10">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Key Pains</h3>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
                  <li>Stores close early; weekend congestion</li>
                  <li>Online stores feel complex; deliveries delayed</li>
                  <li>Lack of trust in produce quality & substitutions</li>
                  <li>Safety concerns (pandemic), poor ventilation, tight aisles</li>
                </ul>
                
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">User Needs</h3>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
                  <li>Simple flow: "give a list, you buy it"</li>
                  <li>Price transparency, faster delivery (≤ next day)</li>
                  <li>Choose packaging and acceptable substitutes</li>
                  <li>Save previous items; direct contact with picker</li>
                  <li>Multiple delivery windows; no forced scheduling</li>
                </ul>
                
              </div>
            </div>
          </section>

          {/* Ideation */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Step 2 — Ideation</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Explored three concepts and down-selected based on feasibility and user
              fit.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            <strong>Idea 1:</strong> <br></br>  Make an app for people living in the same area within 1 km, whoever is going for shopping can announce it on the app, and someone can chat with him to request an order. There shoulf be a maximum weight for the order in case the picker does not have a car, and the picker recieve 5-10 euro delivery fee depending on order size. 
            </p>
              <div className="relative w-full aspect-[16/9] sm:aspect-[10/9] rounded-xl overflow-hidden">
              
                <Image
                  src="/hci-3.jpg"
                  alt="Idea 1 — Neighbor runner (local delivery within 1km)"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[10/9]  rounded-xl overflow-hidden">
              
                <Image
                  src="/hci-4.jpg"
                  alt="Idea 1 — Neighbor runner (local delivery within 1km)"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 mt-10">
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            <strong>Idea 2:</strong> <br></br>  VR tour in the supermarket. This was very hard to implement because of the technological complexity of building VR products on 1 hand and it will be difficult for supermarkets to provide products as 3D opjects for the VR glasses 
            </p>
              <div className="relative w-full aspect-[16/9] sm:aspect-[11/9] rounded-xl overflow-hidden">
              
                <Image
                  src="/hci-5.jpg"
                  alt="Idea 1 — Neighbor runner (local delivery within 1km)"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              
            </div>
            <div className="grid gap-6 sm:grid-cols-3 mt-10">
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            <strong>Idea 3:</strong> <br></br>  conversational grocery shopping app, it works like whatsapp, first it asks u to upload a shopping list or scan it, then confirm or adjust the amounts, then it will aggregate the products from different grocery stores, you can choose your favorite one, then choose the delivery time window and pay. </p>
              <div className="relative w-full aspect-[16/9] sm:aspect-[11/9] rounded-xl overflow-hidden">
              
                <Image
                  src="/hci-6.jpg"
                  alt="Idea 1 — Neighbor runner (local delivery within 1km)"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[16/9] sm:aspect-[11/9] rounded-xl overflow-hidden">
              
                <Image
                  src="/hci-7.jpg"
                  alt="Idea 1 — Neighbor runner (local delivery within 1km)"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[16/9] sm:aspect-[11/9] rounded-xl overflow-hidden">
              
              
              </div>
              <div className="relative w-full aspect-[16/9] sm:aspect-[11/9] rounded-xl overflow-hidden">
              
              <Image
                src="/hci-8.jpg"
                alt="Idea 1 — Neighbor runner (local delivery within 1km)"
                fill
                className="object-contain rounded-xl"
              />
            </div>
              
            </div>
          </section>

          {/* Design & Prototype */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Step 3 — UI Design & Prototyping</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Built a conversational prototype: upload/scan list → confirm amounts →
              select substitutes → pick store → choose time window → pay. Tested
              internally; planned to validate with earlier interviewees but couldn't due
              to scope/time.
            </p>

            <div className="grid gap-6 sm:grid-cols-3 mb-6">
            
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
                <Image
                  src="/hci-9.jpg"
                  alt="Wireframes — core conversation screens"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
                <Image
                  src="/hci-10.jpg"
                  alt="Hi-fi mockups — chat UI"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
                <Image
                  src="/hci-11.jpg"
                  alt="Prototype — flow map"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
                <Image
                  src="/hci-12.jpg"
                  alt="Prototype — flow map"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
                <Image
                  src="/hci-13.jpg"
                  alt="Prototype — flow map"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
                <Image
                  src="/hci-14.jpg"
                  alt="Prototype — flow map"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
                <Image
                  src="/hci-15.jpg"
                  alt="Prototype — flow map"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
                <Image
                  src="/hci-16.jpg"
                  alt="Prototype — flow map"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/9] rounded-xl overflow-hidden">
                <Image
                  src="/hci-17.jpg"
                  alt="Prototype — flow map"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Feedback & References */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Feedback & Next Steps</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            When I pitched this product in salzburg startup weekend competition in 2022, I got the feedback from the judge panel that supermarkets would be quite tentative to give me these data, so it is better to focus on 1 supermarket rather than agregatting the data from multiple supermarkets. 2 years later on August 2022, Meta launched this feature on whatsapp which enables Whatsapp users in India to order their groceries from whatsapp. https://about.fb.com/news/2022/08/shop-on-whatsapp-with-jiomart-in-india/

This would have been already a prrof of concept for the idea. I had the chance to test the prototype internally with the panel of judges, but I didnt have the chance to test it with the users I have already talked to in the user research phase, which would have been a crucial step to validate if the solution prototype would solve the problems they mentioned and whether they would consider using something like this in the future. 
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
