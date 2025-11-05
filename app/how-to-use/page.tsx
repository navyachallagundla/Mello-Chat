import React from "react";

export default function HowToUseMello() {
  return (
    <div className="min-h-screen mt-8 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10 space-y-8 border border-gray-100">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          How to Use <span className="text-orange-600">Mello Chat</span>
        </h1>
        <p className="text-center text-gray-600 text-lg">
          Mello is an emotionally intelligent AI chat experience. Follow these
          simple steps to begin your conversation.
        </p>

        <div className="space-y-6">
          <Step
            number="1"
            title="Visit the Home Page"
            description="Go to the root page (/) to start — usually at http://localhost:3000/ when running locally."
          />

          <Step
            number="2"
            title="Start a Real-Time Chat"
            description="Click on the 'Talk to Mello' button to begin an emotionally-aware voice conversation."
          />

          <Step
            number="3"
            title="Be Patient While Speaking"
            description="Wait a couple of seconds before speaking again. Mello listens deeply and responds with emotional intelligence."
          />
        </div>

        <p className="text-center text-gray-500 text-sm italic">
          Tip: Speak naturally — Mello adapts to emotion, tone, and pauses.
        </p>
      </div>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="flex items-start space-x-5">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-bold shadow-md">
        {number}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-md mt-1">{description}</p>
      </div>
    </div>
  );
}
