import React from "react";
import { Metadata } from "next";
import Page from './sonicxi';

export const metadata: Metadata = {
  title: "Sonic Promo - Exclusive Access & Rewards",
  description:
    "Join the Sonic adventure! Follow on Twitter, download the game, and enter the exclusive access code 'SonicLumi' to earn Sonic Rings. Available on Win, Mac, and Android.",
  //ogTitle:'...'
};

export default function SonicxiPage() {
  return <Page />;
}
