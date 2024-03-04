import { achievements } from "../data/achievements";
import { Inter } from "next/font/google";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { Chrono } from "react-chrono";
import Intro from "../components/Intro";
import Tail from "../components/Tail";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdulhamid</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        style={{ backgroundColor: "#d4d4d4" }}
      >
        <Intro />
        <div style={{ height: "100vh" }}>
          <VerticalTimeline>
            {achievements.map((achievement, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: achievement.backgroundColor,
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  white",
                  }}
                  date={achievement.date}
                  iconStyle={{ background: achievement.backgroundColor, color: "#fff" }}
                  icon={achievement.icon}
                >
                  <h1 className="vertical-timeline-element-title">
                    {achievement.cardTitle}
                  </h1>
                  <p className="vertical-timeline-element-subtitle">
                    {achievement.cardSubtitle}
                  </p>
                  <p>
                    {achievement.cardDetailedText}
                  </p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
          <Tail />
        </div>
      </main>
    </div>
  );
}
