import React from 'react';
import Image from 'next/image';

const data = [
  {
    title: "Automatic Payment Reminders.",
    description: "Never Miss a Payment Again! Stay ahead of your subscription payments with timely reminders for upcoming due dates.",
    img: "/polar.svg"
  },
  {
    title: "Expense Tracking & Analytics",
    description: "Understand Your Spending Habits. Get detailed insights into your recurring expenses and identify opportunities to save money.",
    img: "/crocodile.svg"
  },
  {
    title: "Cross-Platform Access",
    description: "Track Subscriptions Anywhere. Whether on your phone, tablet, or desktop, access your subscription manager seamlessly.",
    img: "/whale.svg"
  },
  {
    title: "Notifications for Expiry Dates",
    description: "Renew or Cancel with Confidence. Get notified when your subscriptions are about to expire, so you're always in control.",
    img: "/fox.svg"
  },
  {
    title: "Secure and Private right now!",
    description: "Your Data, Your Privacy. We prioritize your security with robust encryption, ensuring your sensitive information stays safe.",
    img: "/cow.svg"
  },
  {
    title: "Customizable Dashboard",
    description: "See What Matters Most. Personalize your dashboard to display the subscriptions and metrics that matter to you.",
    img: "/bear.svg"
  }
];

const Card = () => {
  return (
<div className='flex flex-wrap gap-10 justify-center items-center md:justify-between'>
      {data.map((item, index) => (
        <div
          key={index}
          className='max-w-80 border border-white rounded-2xl bg-[#2EA0DD] text-white px-2 py-5 mt-12'
        >
          <div className='flex'>
            <div>
              <h1 className='text-2xl text-start font-bold'>{item.title}</h1>
              {/* <p className='text-[0.6rem] mt-2'>Never Miss a Payment Again!</p> */}
            </div>
            <div>
              <Image
                src={item.img}
                alt="Logo"
                height={10} // Automatically maintains aspect ratio
                width={80}  // Automatically maintains aspect ratio
              />
            </div>
          </div>
          <p className='text-[0.7rem] text-start mt-5'>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
