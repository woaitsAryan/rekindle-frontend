"use client";

import { useState, useEffect } from "react";
import EmotionCard from "../components/EmotionCard";
import axios from "axios";
import Modal from "../components/Modal";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
interface JournalData {
  text: string;
  date: string;
  emotion1: string;
  emotion2: string;
  emotion3: string;
  response: string;
}
interface ModalData {
  prompt: string;
  outputData: string;
  date: Date;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Emotion() {
  const [inputValue, setInputValue] = useState<string>("");
  const [emotion, setEmotion] = useState<string>("");
  const [journalData, setJournalData] = useState<JournalData[]>([]);
  const [modal, showModal] = useState<boolean>(false);
  const [selectedModalData, setSelectedModalData] = useState<ModalData>({
    prompt: "",
    outputData: "",
    date: new Date(),
    showModal: showModal,
  });
  const validEmotions = [
    "admiration",
    "amusement",
    "anger",
    "annoyance",
    "approval",
    "caring",
    "confusion",
    "curiosity",
    "desire",
    "disappointment",
    "disapproval",
    "disgust",
    "embarrassment",
    "excitement",
    "fear",
    "gratitude",
    "grief",
    "joy",
    "love",
    "nervousness",
    "optimism",
    "pride",
    "realization",
    "relief",
    "remorse",
    "sadness",
    "surprise",
    "neutral",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/journal`
      );
      setJournalData(response.data.response);
    };
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    for (const word of validEmotions) {
      if (e.target.value.includes(word)) {
        setEmotion(word);
        break;
      }
    }
    setInputValue(e.target.value);
  };

  const handleButtonClick = async () => {
    if (!emotion) {
      alert("Invalid emotion");
      return;
    }
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/journal?emotion=${emotion}`
    );
    setJournalData(response.data.response);
  };

  return (
    <div className="w-full min-h-screen bg-bg_primary flex flex-col  items-center gap-[2rem] p-8  relative">
      <Navbar />
      {modal && <Modal {...selectedModalData} />}
      <div className="heading  tab:text-6xl mobile:text-3xl mobile:leading-[3rem] w-full flex justify-center items-center  py-2 text-center font-coperHead z-[1000]">
        Personal diary
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center z-20 gap-4">
        <input
          className="z-20 resize-none text-primary_text px-[1rem] py-[0.5rem] bg-white outline-none rounded-xl border-outline no-scrollbar  focus:border-primary_text break-words whitespace-pre-wrap  leading-[1.75rem] w-full border-2 min-w-[90vw] md:min-w-[40vw] h-12"
          placeholder="Search in your diary..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={handleButtonClick}
          className="ml-2 rounded-[.5rem] text-white px-4 md:px-6 py-1 md:py-2 bg-btn w-fit text-nowrap h-10 md:h-12"
        >
          Search &nbsp;&rarr;
        </button>
      </div>{" "}
      <div className="w-full gap-[1rem] tab:grid-cols-3 mobile:grid-cols-1 grid">
        {journalData.map((data, index) => (
          <EmotionCard
            key={index}
            response={data.response}
            text={data.text}
            date={data.date}
            setSelectedModalData={setSelectedModalData}
            showModal={showModal}
          />
        ))}
      </div>
    </div>
  );
}
