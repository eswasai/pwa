import React, { useState, useEffect } from "react";
import Image from "next/image";
import VideoPopup from "@/modals/video-popup";
import "@/assets/css/Manualcss/learningvideos.css";
import NoDataFound from "@/assets/img/learning-videos/no-data-found.svg";
import SearchIcon from "@/assets/img/learning-videos/search-icon.svg";
import { api } from "@/data/main-endpoint";
import axios from "axios";

const API_URL = `${api}/api/webapp/learningvideos/`;

const LearningVideosGrid = () => {
  const phrases = [
    "How to upload data...",
    "How to use vision camera...",
    "How to scan Qr...",
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");
  const [categories, setCategories] = useState(["All"]);
  const [isMobile, setIsMobile] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopIndex];
      if (!isDeleting) {
        setCurrentText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentPhrase.length) {
          setIsDeleting(true);
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setLoopIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(200);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopIndex, phrases, typingSpeed]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;
        const uniqueCategories = [
          "All",
          ...new Set(data.map((video) => video.language)),
        ];
        setCategories(uniqueCategories);
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching videos:", error.message);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const filtered = items.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.language === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.language.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredItems(filtered);
  }, [activeCategory, searchQuery, items]);

  const openVideoPopup = (videoLink) => {
    const videoId = videoLink.split("v=")[1];
    setCurrentVideoId(videoId);
    setIsVideoOpen(true);
  };

  return (
    <>
      <div className="portfolio blog-grid-inner mb-80">
        <div className="container">
          <div className="row">
            <div className="searchContainer text-center mt-40 w-60 d-flex align-items-center justify-content-center">
              <div
                className="searchInnerContainer"
                style={{
                  width: isMobile ? "80%" : "60%",
                  padding: isMobile ? "1.8% 4%" : "0.9% 1.7%",
                  borderRadius: "2rem",
                  border: "1px solid #bfbfbf",
                  backgroundColor: "#fff",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type="text"
                  placeholder={currentText}
                  className="transition-all duration-500 ease-in-out placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "90%",
                    padding: isMobile ? "2.3% 3%" : "1% 2%",
                    borderRadius: "2rem",
                    border: "none",
                    fontSize: isMobile ? "0.9rem" : "1rem",
                  }}
                />
                <Image
                  src={SearchIcon}
                  alt="Search"
                  width={30}
                  height={30}
                  style={{
                    objectFit: "contain",
                    marginLeft: "1%",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div className="col-xl-12 mt-50">
              <div className="portfolio-filter masonary-menu text-center mb-35">
                {categories.map((category, i) => (
                  <button
                    onClick={() => setActiveCategory(category)}
                    key={i}
                    className={`${category === activeCategory ? "active" : ""}`}
                  >
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="no-data-container text-center">
              <Image
                src={NoDataFound}
                alt="No videos found"
                width={500}
                height={300}
                style={{ objectFit: "contain" }}
              />
              <p>No videos found for your search.</p>
            </div>
          ) : (
            <div className="row grid blog-grid-inner">
              {filteredItems.map((item, i) => {
                const delay = (i % 9) * 0.1 + 0.1;
                return (
                  <div
                    key={i}
                    data-index={i}
                    className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item wow fadeInUp"
                    data-wow-duration=".9s"
                    data-wow-delay={`${delay}s`}
                  >
                    <div className="tp-blog-item">
                      <div
                        className="tp-blog-thumb fix"
                        style={{ position: "relative" }}
                      >
                        <Image
                          style={{ backgroundColor: "rgba(54, 13, 13, 0.5)" }}
                          src={item.thumbnail}
                          alt={item.title}
                          width={500}
                          height={300}
                        />
                        <div
                          onClick={() => openVideoPopup(item.videoLink)}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "50%",
                            padding: "15px",
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="40"
                            height="40"
                            fill="white"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="tp-blog-content">
                        <div className="tp-blog-meta d-flex align-items-center">
                          <div className="tp-blog-category category-color-1">
                            <span>{item.language}</span>
                          </div>
                        </div>
                        <div className="tp-blog-title-box">
                          <p
                            className="tp-blog-title-sm"
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={currentVideoId}
      />
    </>
  );
};

export default LearningVideosGrid;
