
"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import api from "@/api/api";
import { API_ENDPOINTS } from "@/api/api-endpoints";

type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: {
    id: number;
    name: string;
  };
};

const Faq = () => {
  const [questions, setQuestions] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await api.get(API_ENDPOINTS.PUBLIC.FAQ);

        setQuestions(response.data.data);
      } catch (err) {
        console.error("Failed to fetch FAQs:", err);
        setError("Failed to load frequently asked questions.");
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  return (
    <>
      <hr className="border-black" />

      <div className="w-full min-h-screen flex items-center justify-center p-6">
        <div className="border border-gray-400 w-250 max-w-full text-center p-6 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#003773] text-2xl font-medium font-sans text-center mb-2">
              Frequently Asked Questions <br /> About StockNep
            </h1>

            <p className="text-[#003773] font-sans text-center text-sm">
              Find quick answers about StockNep and learn how it can simplify inventory, sales,
              <br />
              purchases, and everyday business management—all in one place.
            </p>
          </div>

          <div className="mt-6">
            {loading && (
              <p className="text-[#003773] py-6">
                Loading FAQs...
              </p>
            )}

            {error && (
              <p className="text-red-500 py-6">
                {error}
              </p>
            )}

            {!loading &&
              !error &&
              questions.map((question) => (
                <div
                  key={question.id}
                  className="w-full flex flex-col text-left border-t border-gray-300 py-4 px-10"
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="text-[#003773] font-semibold text-md">
                      {question.question}
                    </span>

                    <ChevronDown className="text-[#003773] w-5 h-5 shrink-0 ml-4" />
                  </div>

                  <span className="text-[#003773] text-sm mt-1">
                    {question.answer}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

