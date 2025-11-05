"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  MessageCircleHeart,
  Sparkles,
  ShieldCheck,
  Globe2,
  Rocket,
  HandHeart,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// About page for Mello Chat — a fork of the Hume EVI Next.js Starter
// Tailwind + shadcn/ui + Framer Motion

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-clip bg-gradient-to-b from-neutral-50 via-white to-neutral-50 text-neutral-900">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-100/40 blur-3xl" />
        <div className="absolute right-0 top-[10rem] h-[32rem] w-[32rem] rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-10 pt-24 sm:pt-28">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-600 shadow-sm">
            <Waves className="h-4 w-4" />
            Emotionally intelligent conversations
          </div>
          <h1 className="mt-5 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Meet <span className="whitespace-nowrap text-orange-600">Mello Chat</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-neutral-600">
            Human-centered chat experience that listens beyond words— refined to sense, adapt, and respond with empathy.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-2xl">
              <Link href="/">Start a Conversation</Link>
            </Button>
          </div>
        </motion.div>

        {/* At-a-glance */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { icon: <Heart className="h-5 w-01 text-orange-600" />, label: "Empathy-first", desc: "Emotion-aware replies that adapt to tone, pace, and sentiment." },
            { icon: <ShieldCheck className="h-5 w-5 text-orange-600" />, label: "Private by design", desc: "Thoughtful defaults and control over what you share." },
          ].map((f, i) => (
            <motion.div key={f.label} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
              <Card>
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="grid h-9 w-9 place-items-center rounded-xl">{f.icon}</div>
                  <CardTitle className="text-base">{f.label}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-neutral-600">{f.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold sm:text-3xl">Our mission</h2>
              <p className="mt-3 text-neutral-600">
                We believe technology should feel more human. Mello Chat helps people be heard—
                not just understood. By combining conversational AI with real-time emotional cues,
                we make interactions warmer, clearer, and more effective.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <Brain className="mt-0.5 h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Sense</p>
                    <p className="text-sm text-neutral-600">Leverages EVI's signals to pick up affect, prosody, and context.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <MessageCircleHeart className="mt-0.5 h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Respond</p>
                    <p className="text-sm text-neutral-600">Tunes replies to your energy—supportive when needed, concise when asked.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <HandHeart className="mt-0.5 h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Respect</p>
                    <p className="text-sm text-neutral-600">Built with privacy in mind and clear controls over data retention.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <Globe2 className="mt-0.5 h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Share</p>
                    <p className="text-sm text-neutral-600">Share with team member to have meaning full group chat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-2xl font-semibold sm:text-3xl">
          What’s inside
        </motion.h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              title: "Emotion-aware turns",
              desc: "Use EVI’s affective signals to guide tone, pacing, and content of responses.",
            },
            {
              title: "Real-time voice & text",
              desc: "Bring warmth to chat or voice with smooth handoff between modes.",
            },
          ].map((item, i) => (
            <motion.div key={item.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600">{item.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600">Principles we build by</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li><span className="font-medium text-neutral-900">People before product</span> — empathy is a constraint, not a feature.</li>
                <li><span className="font-medium text-neutral-900">Clarity over cleverness</span> — say what matters, in the fewest words possible.</li>
                <li><span className="font-medium text-neutral-900">Privacy by default</span> — you decide what stays, what's shared, and when.</li>
                <li><span className="font-medium text-neutral-900">Accessible for all</span> — inclusive design for language, ability, and bandwidth.</li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </section>

      <div className="h-48"></div>
    </div>
  );
}
