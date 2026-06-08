// ─── MOCK DATA ───
const camps = [
  {
    id: 1, name: "Ottawa STEM Explorers", provider: "AcadeCap",
    type: "summer", category: "stem", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 6, ageMax: 12, color: "#EF4444",
    address: "1545 Carling Ave, Ottawa",
    url: "https://www.acadecap.org/camps/",
    hours: "9:00 AM – 4:00 PM", extendedCare: true,
    extendedHours: "7:30 AM – 5:30 PM",
    priceWeekly: 325, priceDaily: 75,
    siblingDiscount: "10%", earlyBird: "$295 before April 1",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 18,
    rating: 4.7, ratingCount: 124,
    description: "Hands-on coding, robotics, and science experiments. Kids build real projects each week — from Arduino circuits to Python games.",
    dates: "Jul 6 – Aug 28 (8 weeks)",
    scoreBreakdown: { cost: 72, commute: 88, coverage: 75, rating: 94, extras: 70 }
  },
  {
    id: 2, name: "Dovercourt Summer Adventure", provider: "City of Ottawa",
    type: "summer", category: "multi", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 4, ageMax: 12, color: "#3B82F6",
    address: "411 Dovercourt Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/courses-and-camps",
    hours: "8:30 AM – 4:30 PM", extendedCare: true,
    extendedHours: "7:00 AM – 6:00 PM",
    priceWeekly: 175, priceDaily: 40,
    siblingDiscount: "15%", earlyBird: "$155 before March 15",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 9, commuteKm: 4.1,
    rating: 4.3, ratingCount: 287,
    description: "Swimming, crafts, sports, and field trips. The City of Ottawa's flagship day camp program with certified counselors.",
    dates: "Jul 6 – Aug 28 (8 weeks)",
    scoreBreakdown: { cost: 95, commute: 95, coverage: 85, rating: 86, extras: 80 }
  },
  {
    id: 3, name: "Artful Adventures Camp", provider: "Ottawa School of Art",
    type: "summer", category: "arts", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-21",
    ageMin: 5, ageMax: 14, color: "#DB2777",
    address: "35 George St, Ottawa",
    url: "https://artottawa.ca/",
    hours: "9:00 AM – 3:30 PM", extendedCare: false,
    extendedHours: null,
    priceWeekly: 280, priceDaily: 65,
    siblingDiscount: "None", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 12.5,
    rating: 4.8, ratingCount: 89,
    description: "Painting, sculpture, digital art, and animation. Small groups (max 12) with professional artist instructors in the Byward Market.",
    dates: "Jul 6 – Aug 21 (7 weeks)",
    scoreBreakdown: { cost: 68, commute: 65, coverage: 60, rating: 96, extras: 65 }
  },
  {
    id: 4, name: "YMCA Neighbourhood Day Camp", provider: "YMCA Ottawa",
    type: "summer", category: "multi", city: "ottawa", province: "ON", startDate: "2026-06-29", endDate: "2026-08-28",
    ageMin: 4, ageMax: 13, color: "#5B4CE0",
    address: "180 Argyle Ave, Ottawa",
    url: "https://www.ymcaottawa.ca/programs-services/camps",
    hours: "9:00 AM – 4:00 PM", extendedCare: true,
    extendedHours: "7:00 AM – 6:00 PM",
    priceWeekly: 245, priceDaily: 55,
    siblingDiscount: "10%", earlyBird: "$220 before Feb 28",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 17, commuteKm: 9.8,
    rating: 4.4, ratingCount: 342,
    description: "Swimming, outdoor games, leadership activities and friendship-building. Financial assistance available for eligible families.",
    dates: "Jun 29 – Aug 28 (9 weeks)",
    scoreBreakdown: { cost: 80, commute: 78, coverage: 80, rating: 88, extras: 85 }
  },
  {
    id: 5, name: "Corona Gymnastics Camp", provider: "Corona Gymnastics",
    type: "summer", category: "gymnastics", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 3, ageMax: 16, color: "#059669",
    address: "1565 Maple Grove Rd, Ottawa",
    url: "https://www.coronagym.ca/pages/birthdays-camps/summer-camps/",
    hours: "9:00 AM – 4:00 PM", extendedCare: true,
    extendedHours: "8:00 AM – 5:00 PM",
    priceWeekly: 295, priceDaily: 68,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 21, commuteKm: 14.3,
    rating: 4.6, ratingCount: 198,
    description: "Gymnastics skills, trampoline, obstacle courses, and active games. Grouped by age and ability. Great for burning energy!",
    dates: "Jul 6 – Aug 28 (8 weeks)",
    scoreBreakdown: { cost: 70, commute: 70, coverage: 75, rating: 92, extras: 72 }
  },
  {
    id: 6, name: "Mad Science Camp Ottawa", provider: "Mad Science",
    type: "summer", category: "stem", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 5, ageMax: 12, color: "#7C3AED",
    address: "2020 Lanthier Dr, Ottawa",
    url: "https://ottawa.madscience.org/",
    hours: "9:00 AM – 4:00 PM", extendedCare: true,
    extendedHours: "8:00 AM – 5:30 PM",
    priceWeekly: 310, priceDaily: 72,
    siblingDiscount: "5%", earlyBird: "$280 before March 31",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 16.1,
    rating: 4.5, ratingCount: 156,
    description: "Explosive experiments, slime labs, rocket launches, and chemistry fun. Different theme each week — kids never repeat a program.",
    dates: "Jul 6 – Aug 28 (8 weeks)",
    scoreBreakdown: { cost: 66, commute: 60, coverage: 78, rating: 90, extras: 68 }
  },
  {
    id: 7, name: "Camp Wilderness Ottawa", provider: "Nature Network",
    type: "summer", category: "nature", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-21",
    ageMin: 5, ageMax: 13, color: "#16A34A",
    address: "Mud Lake Conservation Area, Ottawa",
    url: "https://www.naturenetwork.ca/",
    hours: "8:30 AM – 4:00 PM", extendedCare: false,
    extendedHours: null,
    priceWeekly: 260, priceDaily: 60,
    siblingDiscount: "15%", earlyBird: "$230 before April 15",
    lunchIncluded: true, suppliesIncluded: true,
    commuteMins: 19, commuteKm: 11.0,
    rating: 4.9, ratingCount: 67,
    description: "100% outdoor forest camp. Fire-building, shelter-making, foraging, creek exploration. All-weather — rain or shine. Snack and lunch provided.",
    dates: "Jul 6 – Aug 21 (7 weeks)",
    scoreBreakdown: { cost: 78, commute: 75, coverage: 72, rating: 98, extras: 90 }
  },
  {
    id: 8, name: "Ottawa Soccer Camp", provider: "Ottawa South United",
    type: "summer", category: "sports", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-14",
    ageMin: 5, ageMax: 14, color: "#2563EB",
    address: "Brewer Park, Ottawa",
    url: "https://www.ottawasouthunited.com/",
    hours: "9:00 AM – 3:00 PM", extendedCare: false,
    extendedHours: null,
    priceWeekly: 195, priceDaily: 45,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 5.9,
    rating: 4.5, ratingCount: 203,
    description: "Drills, scrimmages, and skills clinics for all levels. Licensed coaches, small group training. Water and snacks provided.",
    dates: "Jul 6 – Aug 14 (6 weeks)",
    scoreBreakdown: { cost: 88, commute: 90, coverage: 55, rating: 90, extras: 60 }
  },
  {
    id: 9, name: "Digital Media Camp", provider: "Algonquin College Camps",
    type: "summer", category: "stem", city: "ottawa", province: "ON", startDate: "2026-07-13", endDate: "2026-08-14",
    ageMin: 10, ageMax: 16, color: "#DC2626",
    address: "1385 Woodroffe Ave, Ottawa",
    url: "https://www.algonquincollege.com/camps/",
    hours: "9:00 AM – 4:00 PM", extendedCare: false,
    extendedHours: null,
    priceWeekly: 375, priceDaily: 85,
    siblingDiscount: "None", earlyBird: "$340 before May 1",
    lunchIncluded: true, suppliesIncluded: true,
    commuteMins: 16, commuteKm: 12,
    rating: 4.6, ratingCount: 45,
    description: "Video production, game design, 3D modeling, and podcasting. Uses college-grade equipment and software. Final showcase for parents.",
    dates: "Jul 13 – Aug 14 (5 weeks)",
    scoreBreakdown: { cost: 50, commute: 50, coverage: 75, rating: 92, extras: 80 }
  },
  {
    id: 10, name: "Kanata Dance Academy Camp", provider: "Kanata Dance Academy",
    type: "summer", category: "arts", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 4, ageMax: 14, color: "#EC4899",
    address: "500 Earl Grey Dr, Kanata",
    url: "https://www.kanatadanceacademy.com/",
    hours: "9:00 AM – 3:30 PM", extendedCare: true,
    extendedHours: "8:00 AM – 5:00 PM",
    priceWeekly: 255, priceDaily: 58,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 30, commuteKm: 22.0,
    rating: 4.7, ratingCount: 112,
    description: "Ballet, hip-hop, jazz, and contemporary dance. End-of-week mini recital for parents. Great for beginners and experienced dancers.",
    dates: "Jul 6 – Aug 28 (8 weeks)",
    scoreBreakdown: { cost: 76, commute: 48, coverage: 68, rating: 94, extras: 70 }
  },
  {
    id: 11, name: "Camp Rideau Canoe Club", provider: "Rideau Canoe Club",
    type: "summer", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-21",
    ageMin: 7, ageMax: 16, color: "#0891B2",
    address: "1 Donald St, Ottawa",
    url: "https://www.rideaucanoeclubottawa.ca/",
    hours: "9:00 AM – 4:00 PM", extendedCare: false,
    extendedHours: null,
    priceWeekly: 340, priceDaily: 78,
    siblingDiscount: "5%", earlyBird: "$310 before March 1",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 7.2,
    rating: 4.8, ratingCount: 91,
    description: "Canoeing, kayaking, paddle boarding, and swimming on the Rideau River. All equipment provided. NLS-certified lifeguards on duty.",
    dates: "Jul 6 – Aug 21 (7 weeks)",
    scoreBreakdown: { cost: 58, commute: 85, coverage: 75, rating: 96, extras: 65 }
  },
  {
    id: 12, name: "City of Ottawa March Break Camp", provider: "City of Ottawa",
    type: "march", category: "multi", city: "ottawa", province: "ON", startDate: "2026-03-16", endDate: "2026-03-20",
    ageMin: 4, ageMax: 12, color: "#6366F1",
    address: "Multiple locations, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/courses-and-camps",
    hours: "8:30 AM – 4:30 PM", extendedCare: true,
    extendedHours: "7:00 AM – 6:00 PM",
    priceWeekly: 160, priceDaily: 35,
    siblingDiscount: "15%", earlyBird: "$140 before Jan 15",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 10, commuteKm: 4.5,
    rating: 4.2, ratingCount: 415,
    description: "Active games, swimming, crafts, and special guests. Multiple convenient locations across Ottawa. One week program.",
    dates: "Mar 16 – Mar 20",
    scoreBreakdown: { cost: 98, commute: 94, coverage: 85, rating: 84, extras: 82 }
  },
  {
    id: 13, name: "March Break Coding Bootcamp", provider: "Code Ninjas Ottawa",
    type: "march", category: "stem", city: "ottawa", province: "ON", startDate: "2026-03-16", endDate: "2026-03-20",
    ageMin: 7, ageMax: 14, color: "#F97316",
    address: "2269 Riverside Dr, Ottawa",
    url: "https://www.codeninjas.com/ottawa-on",
    hours: "9:00 AM – 4:00 PM", extendedCare: false,
    extendedHours: null,
    priceWeekly: 350, priceDaily: 80,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: true, suppliesIncluded: true,
    commuteMins: 14, commuteKm: 10,
    rating: 4.6, ratingCount: 52,
    description: "Build your own video game in one week! Learn JavaScript, game logic, and design. Take home your finished game on USB.",
    dates: "Mar 16 – Mar 20",
    scoreBreakdown: { cost: 55, commute: 82, coverage: 75, rating: 92, extras: 85 }
  },
  {
    id: 14, name: "Britannia Beach Swim Camp", provider: "City of Ottawa",
    type: "summer", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-21",
    ageMin: 6, ageMax: 14, color: "#0EA5E9",
    address: "Britannia Beach, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/courses-and-camps",
    hours: "9:00 AM – 3:30 PM", extendedCare: false,
    extendedHours: null,
    priceWeekly: 165, priceDaily: 38,
    siblingDiscount: "15%", earlyBird: "$145 before March 15",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 13.0,
    rating: 4.4, ratingCount: 178,
    description: "Red Cross swim lessons in the morning, beach activities and games in the afternoon. Beautiful lakefront location.",
    dates: "Jul 6 – Aug 21 (7 weeks)",
    scoreBreakdown: { cost: 92, commute: 72, coverage: 58, rating: 88, extras: 65 }
  },
  {
    id: 15, name: "Circus Star Camp", provider: "Ottawa Circus School",
    type: "summer", category: "arts", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-21",
    ageMin: 5, ageMax: 15, color: "#A855F7",
    address: "901 Churchill Ave N, Ottawa",
    url: "https://www.ottawacircusschool.com/",
    hours: "9:00 AM – 4:00 PM", extendedCare: true,
    extendedHours: "8:00 AM – 5:30 PM",
    priceWeekly: 310, priceDaily: 72,
    siblingDiscount: "10%", earlyBird: "$280 before April 1",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 10.5,
    rating: 4.9, ratingCount: 73,
    description: "Trapeze, juggling, tightwire, acrobatics, and clowning. Friday showcase performance for families. Absolute blast for active kids.",
    dates: "Jul 6 – Aug 21 (7 weeks)",
    scoreBreakdown: { cost: 66, commute: 78, coverage: 78, rating: 98, extras: 72 }
  },
  // ── YEAR-ROUND ACTIVITIES ──
  {
    id: 16, name: "Ottawa Youth Soccer League", provider: "Ottawa South United",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 17, color: "#16A34A",
    address: "Brewer Park, Ottawa",
    url: "https://www.ottawasouthunited.com/",
    hours: "Tue & Thu 6:00–7:30 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 45, priceDaily: 23,
    siblingDiscount: "15%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 5.9,
    rating: 4.6, ratingCount: 312,
    description: "Competitive and recreational soccer leagues. Fall (Sep–Nov) and spring (Apr–Jun) seasons. Weekly practices + weekend games.",
    dates: "Sep 2026 – Jun 2027 (Fall & Spring)",
    scoreBreakdown: { cost: 95, commute: 90, coverage: 50, rating: 92, extras: 75 }
  },
  {
    id: 17, name: "Ottawa School of Music", provider: "Ottawa School of Music",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-08-31",
    ageMin: 4, ageMax: 17, color: "#8B5CF6",
    address: "174 Stanley Ave, Ottawa",
    url: "https://www.ottawaschoolofmusic.ca/",
    hours: "Flexible scheduling", extendedCare: false, extendedHours: null,
    priceWeekly: 55, priceDaily: 55,
    siblingDiscount: "10%", earlyBird: "$45/wk if paid by term",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 20,
    rating: 4.8, ratingCount: 189,
    description: "Piano, guitar, violin, drums, voice lessons. 30 or 60 min private lessons. Group classes available. RCM exam prep. Recitals twice a year.",
    dates: "Year-round (Sep – Aug)",
    scoreBreakdown: { cost: 78, commute: 82, coverage: 40, rating: 96, extras: 55 }
  },
  {
    id: 18, name: "Kumon Ottawa Centre", provider: "Kumon",
    type: "afterschool", category: "tutoring", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 4, ageMax: 17, color: "#0284C7",
    address: "1547 Merivale Rd, Ottawa",
    url: "https://www.kumon.com/ottawa-centre",
    hours: "Mon & Thu 3:30–6:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 65, priceDaily: 33,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 14, commuteKm: 10,
    rating: 4.3, ratingCount: 156,
    description: "Self-paced math and reading programs. Personalized learning plans. Homework support. Progress tracking with parent portal.",
    dates: "Year-round enrollment",
    scoreBreakdown: { cost: 72, commute: 85, coverage: 45, rating: 86, extras: 70 }
  },
  {
    id: 19, name: "Douvris Martial Arts", provider: "Douvris",
    type: "yearround", category: "martial_arts", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 4, ageMax: 16, color: "#DC2626",
    address: "1200 Bank St, Ottawa",
    url: "https://www.douvris.com/",
    hours: "Mon/Wed/Fri 4:30–5:30 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 50, priceDaily: 17,
    siblingDiscount: "15%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.7, ratingCount: 234,
    description: "Karate and kickboxing for kids. Belt progression system. Builds discipline, confidence, and fitness. Free trial class available.",
    dates: "Year-round (rolling enrollment)",
    scoreBreakdown: { cost: 82, commute: 88, coverage: 50, rating: 94, extras: 60 }
  },
  {
    id: 20, name: "Splash Swim Academy", provider: "Splash Swim",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 14, color: "#06B6D4",
    address: "1980 Ogilvie Rd, Ottawa",
    url: "https://www.splashswim.ca/",
    hours: "Sat 9:00–11:00 AM", extendedCare: false, extendedHours: null,
    priceWeekly: 35, priceDaily: 35,
    siblingDiscount: "10%", earlyBird: "$30/wk for 10-week block",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 14.5,
    rating: 4.5, ratingCount: 198,
    description: "Red Cross swim levels. Small class sizes (max 4:1 ratio). Indoor heated pool. Progress reports every session.",
    dates: "Year-round (10-week terms)",
    scoreBreakdown: { cost: 90, commute: 68, coverage: 35, rating: 90, extras: 55 }
  },
  {
    id: 21, name: "Ottawa Minor Hockey League", provider: "OMHA",
    type: "weekend", category: "sports", city: "ottawa", province: "ON", startDate: "2026-10-01", endDate: "2027-03-31",
    ageMin: 5, ageMax: 17, color: "#1D4ED8",
    address: "Jim Durrell Arena, Ottawa",
    url: "https://www.omha.net/",
    hours: "Sat & Sun various times", extendedCare: false, extendedHours: null,
    priceWeekly: 75, priceDaily: 38,
    siblingDiscount: "5%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 11.0,
    rating: 4.5, ratingCount: 276,
    description: "House league and competitive hockey. Weekly practices + weekend games. Equipment exchange program available for new players.",
    dates: "Oct 2026 – Mar 2027",
    scoreBreakdown: { cost: 68, commute: 78, coverage: 45, rating: 90, extras: 50 }
  },
  {
    id: 22, name: "Allegro Music Academy", provider: "Allegro Academy",
    type: "afterschool", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 16, color: "#D946EF",
    address: "370 Churchill Ave, Ottawa",
    url: "https://www.allegromusicacademy.ca/",
    hours: "Mon–Fri 3:00–8:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 48, priceDaily: 48,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 11, commuteKm: 5.5,
    rating: 4.9, ratingCount: 87,
    description: "Group and private music lessons. Band program, choir, and music theory. Annual concert at NAC Fourth Stage. Instrument rental available.",
    dates: "Sep – Jun (2 terms)",
    scoreBreakdown: { cost: 82, commute: 92, coverage: 40, rating: 98, extras: 58 }
  },
  {
    id: 23, name: "Mathnasium Ottawa", provider: "Mathnasium",
    type: "afterschool", category: "tutoring", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 17, color: "#EA580C",
    address: "2446 Bank St, Ottawa",
    url: "https://www.mathnasium.ca/ottawa",
    hours: "Mon–Thu 3:30–7:00 PM, Sat 10–1", extendedCare: false, extendedHours: null,
    priceWeekly: 85, priceDaily: 22,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 18,
    rating: 4.6, ratingCount: 143,
    description: "Math-only learning centre. Customized learning plans based on diagnostic assessment. Homework help included. Progress every 4 weeks.",
    dates: "Year-round enrollment",
    scoreBreakdown: { cost: 60, commute: 72, coverage: 55, rating: 92, extras: 70 }
  },
  {
    id: 24, name: "Winter Break Adventure Camp", provider: "City of Ottawa",
    type: "winter", category: "multi", city: "ottawa", province: "ON", startDate: "2026-12-22", endDate: "2027-01-02",
    ageMin: 4, ageMax: 12, color: "#0369A1",
    address: "Multiple locations, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/courses-and-camps",
    hours: "8:30 AM – 4:30 PM", extendedCare: true,
    extendedHours: "7:00 AM – 6:00 PM",
    priceWeekly: 170, priceDaily: 38,
    siblingDiscount: "15%", earlyBird: "$150 before Nov 1",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 10, commuteKm: 4.5,
    rating: 4.3, ratingCount: 198,
    description: "Skating, crafts, indoor games, and holiday-themed activities. Two-week program over winter holidays. Multiple locations.",
    dates: "Dec 22 – Jan 2",
    scoreBreakdown: { cost: 92, commute: 94, coverage: 85, rating: 86, extras: 82 }
  },
  // ── OTHER CANADIAN CITIES ──
  {
    id: 25, name: "Toronto Dance Theatre Youth", provider: "TDT",
    type: "yearround", category: "music", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 6, ageMax: 17, color: "#BE185D",
    address: "80 Winchester St, Toronto",
    url: "https://www.tdt.org/school/youth-programs",
    hours: "Sat 10:00 AM – 12:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 40, priceDaily: 40,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 0, commuteKm: 450,
    rating: 4.8, ratingCount: 156,
    description: "Contemporary dance training for youth. Performance opportunities at Cabbagetown Festival. Beginner to advanced levels.",
    dates: "Sep – Jun (2 terms)",
    scoreBreakdown: { cost: 88, commute: 10, coverage: 35, rating: 96, extras: 50 }
  },
  {
    id: 26, name: "Camp Ooh & Aah", provider: "Vancouver Parks",
    type: "summer", category: "multi", city: "vancouver", province: "BC", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 5, ageMax: 12, color: "#059669",
    address: "Stanley Park, Vancouver",
    url: "https://vancouver.ca/parks-recreation-culture/day-camps.aspx",
    hours: "9:00 AM – 4:00 PM", extendedCare: true,
    extendedHours: "8:00 AM – 5:30 PM",
    priceWeekly: 210, priceDaily: 48,
    siblingDiscount: "10%", earlyBird: "$185 before March 1",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 0, commuteKm: 4500,
    rating: 4.7, ratingCount: 289,
    description: "Nature exploration, arts, sports, and beach activities in beautiful Stanley Park. Eco-focused programming.",
    dates: "Jul 6 – Aug 28 (8 weeks)",
    scoreBreakdown: { cost: 85, commute: 5, coverage: 78, rating: 94, extras: 72 }
  },
  {
    id: 27, name: "Montreal STEM Makers Camp", provider: "Concordia University",
    type: "summer", category: "stem", city: "montreal", province: "QC", startDate: "2026-07-06", endDate: "2026-08-14",
    ageMin: 8, ageMax: 16, color: "#7C2D12",
    address: "1455 De Maisonneuve W, Montreal",
    url: "https://www.concordia.ca/camps.html",
    hours: "9:00 AM – 4:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 295, priceDaily: 68,
    siblingDiscount: "5%", earlyBird: "$265 before April 15",
    lunchIncluded: true, suppliesIncluded: true,
    commuteMins: 0, commuteKm: 200,
    rating: 4.6, ratingCount: 98,
    description: "3D printing, robotics, game design, and AI workshops. Use Concordia's engineering labs. Bilingual (EN/FR).",
    dates: "Jul 6 – Aug 14 (6 weeks)",
    scoreBreakdown: { cost: 70, commute: 15, coverage: 75, rating: 92, extras: 82 }
  },
  {
    id: 28, name: "Calgary Flames Hockey School", provider: "Calgary Flames",
    type: "summer", category: "sports", city: "calgary", province: "AB", startDate: "2026-07-13", endDate: "2026-08-07",
    ageMin: 6, ageMax: 16, color: "#DC2626",
    address: "Winsport Arena, Calgary",
    url: "https://www.nhl.com/flames/community/hockey-school",
    hours: "8:30 AM – 3:30 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 425, priceDaily: 95,
    siblingDiscount: "None", earlyBird: "$385 before Feb 28",
    lunchIncluded: true, suppliesIncluded: true,
    commuteMins: 0, commuteKm: 3000,
    rating: 4.9, ratingCount: 342,
    description: "Elite hockey development with Flames coaching staff. On-ice and off-ice training. Jersey and photos included.",
    dates: "Jul 13 – Aug 7 (4 weeks)",
    scoreBreakdown: { cost: 45, commute: 5, coverage: 68, rating: 98, extras: 80 }
  },
  {
    id: 29, name: "Halifax Ocean Discovery Camp", provider: "Maritime Museum",
    type: "summer", category: "nature", city: "halifax", province: "NS", startDate: "2026-07-06", endDate: "2026-08-21",
    ageMin: 7, ageMax: 14, color: "#0E7490",
    address: "1675 Lower Water St, Halifax",
    url: "https://maritimemuseum.novascotia.ca/",
    hours: "9:00 AM – 4:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 225, priceDaily: 52,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: true, suppliesIncluded: true,
    commuteMins: 0, commuteKm: 1300,
    rating: 4.7, ratingCount: 76,
    description: "Marine biology, sailing basics, tide pool exploration, and ocean conservation. Weekly harbor cruise included.",
    dates: "Jul 6 – Aug 21 (7 weeks)",
    scoreBreakdown: { cost: 80, commute: 5, coverage: 75, rating: 94, extras: 85 }
  },
  {
    id: 30, name: "Winnipeg Gymnastics Academy", provider: "WGA",
    type: "yearround", category: "sports", city: "winnipeg", province: "MB", startDate: "2026-09-01", endDate: "2027-08-31",
    ageMin: 3, ageMax: 16, color: "#7C3AED",
    address: "1450 Clarence Ave, Winnipeg",
    url: "https://www.wpggymnastics.ca/",
    hours: "Mon/Wed 5:00–6:30 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 42, priceDaily: 21,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 0, commuteKm: 2100,
    rating: 4.5, ratingCount: 167,
    description: "Recreational and competitive gymnastics. Trampoline, tumbling, and artistic programs. Free trial class.",
    dates: "Year-round (Sep – Aug)",
    scoreBreakdown: { cost: 88, commute: 5, coverage: 45, rating: 90, extras: 62 }
  },
  // ── FREE, EVENTS, COMMUNITY, DANCE, DRAMA ──
  {
    id: 31, name: "Ottawa Public Library Story Time", provider: "Ottawa Public Library",
    type: "yearround", category: "free", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 8, color: "#059669",
    address: "120 Metcalfe St, Ottawa",
    url: "https://biblioottawalibrary.ca/en/program",
    hours: "Sat 10:30–11:30 AM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 13, commuteKm: 6.8,
    rating: 4.6, ratingCount: 245,
    description: "Free weekly story time with songs, crafts, and reading activities. No registration required. Drop in any Saturday.",
    dates: "Every Saturday, year-round",
    scoreBreakdown: { cost: 100, commute: 86, coverage: 30, rating: 92, extras: 95 }
  },
  {
    id: 32, name: "Winterlude Kids Ice Zone", provider: "Canadian Heritage",
    type: "winter", category: "events", city: "ottawa", province: "ON", startDate: "2027-02-06", endDate: "2027-02-22",
    ageMin: 3, ageMax: 14, color: "#0EA5E9",
    address: "Confederation Park, Ottawa",
    url: "https://www.canada.ca/en/canadian-heritage/campaigns/winterlude.html",
    hours: "10:00 AM – 5:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 7.2,
    rating: 4.7, ratingCount: 523,
    description: "Ice slides, snow sculptures, live entertainment, and outdoor play zones. Free festival celebrating Canadian winter. Food vendors on site.",
    dates: "Feb 6 – Feb 22, 2027",
    scoreBreakdown: { cost: 100, commute: 82, coverage: 70, rating: 94, extras: 90 }
  },
  {
    id: 33, name: "Ottawa Fringe Festival Kids Shows", provider: "Ottawa Fringe",
    type: "summer", category: "events", city: "ottawa", province: "ON", startDate: "2026-06-18", endDate: "2026-06-28",
    ageMin: 4, ageMax: 14, color: "#DB2777",
    address: "Arts Court, Ottawa",
    url: "https://ottawafringe.com/",
    hours: "Various times", extendedCare: false, extendedHours: null,
    priceWeekly: 30, priceDaily: 10,
    siblingDiscount: "None", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 9.5,
    rating: 4.8, ratingCount: 134,
    description: "Family-friendly theatre, puppetry, and comedy shows. Pay-what-you-can options available. Multiple shows daily.",
    dates: "Jun 18 – Jun 28",
    scoreBreakdown: { cost: 90, commute: 76, coverage: 40, rating: 96, extras: 80 }
  },
  {
    id: 34, name: "Community Centre Drop-In Sports", provider: "City of Ottawa",
    type: "yearround", category: "community", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 6, ageMax: 17, color: "#2563EB",
    address: "Multiple locations, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/drop-activities",
    hours: "Wed & Fri 4:00–6:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 8, commuteKm: 3.5,
    rating: 4.2, ratingCount: 312,
    description: "Free drop-in basketball, volleyball, and badminton at community centres across Ottawa. Equipment provided. No registration needed.",
    dates: "Year-round (school year)",
    scoreBreakdown: { cost: 100, commute: 96, coverage: 35, rating: 84, extras: 90 }
  },
  {
    id: 35, name: "Ottawa Dance Academy", provider: "ODA",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#BE185D",
    address: "250 City Centre Ave, Ottawa",
    url: "https://www.ottawadanceacademy.com/",
    hours: "Mon/Wed 5:00–6:30 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 42, priceDaily: 21,
    siblingDiscount: "15%", earlyBird: "$36/wk for full year",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 16, commuteKm: 9.0,
    rating: 4.8, ratingCount: 178,
    description: "Ballet, hip-hop, jazz, contemporary, and tap. RAD and Cecchetti certified instructors. Year-end showcase at Centrepointe Theatre.",
    dates: "Sep – Jun (2 terms)",
    scoreBreakdown: { cost: 86, commute: 82, coverage: 42, rating: 96, extras: 62 }
  },
  {
    id: 36, name: "Ottawa Little Theatre Youth Program", provider: "Ottawa Little Theatre",
    type: "yearround", category: "drama", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-05-31",
    ageMin: 7, ageMax: 17, color: "#92400E",
    address: "400 King Edward Ave, Ottawa",
    url: "https://www.ottawalittletheatre.com/",
    hours: "Sat 1:00–4:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 38, priceDaily: 38,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 11.2,
    rating: 4.9, ratingCount: 67,
    description: "Acting, improv, and stagecraft for youth. Two full productions per year. Build confidence and creativity in a supportive environment.",
    dates: "Sep – May (full season)",
    scoreBreakdown: { cost: 88, commute: 72, coverage: 38, rating: 98, extras: 65 }
  },
  {
    id: 37, name: "Parkdale Market Family Saturdays", provider: "Parkdale Market",
    type: "yearround", category: "free", city: "ottawa", province: "ON", startDate: "2026-05-01", endDate: "2026-10-31",
    ageMin: 3, ageMax: 17, color: "#16A34A",
    address: "Parkdale Ave, Ottawa",
    url: "https://www.parkdalemarket.ca/",
    hours: "Sat 8:00 AM – 2:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 6.0,
    rating: 4.5, ratingCount: 189,
    description: "Free kids' activities at the farmers market — face painting, live music, scavenger hunts, and seasonal craft workshops.",
    dates: "May – Oct, every Saturday",
    scoreBreakdown: { cost: 100, commute: 88, coverage: 35, rating: 90, extras: 80 }
  },
  {
    id: 38, name: "Canada Day Kids Festival", provider: "Canadian Heritage",
    type: "summer", category: "events", city: "ottawa", province: "ON", startDate: "2026-07-01", endDate: "2026-07-01",
    ageMin: 3, ageMax: 17, color: "#DC2626",
    address: "Parliament Hill, Ottawa",
    url: "https://www.canada.ca/en/canadian-heritage/campaigns/canada-day.html",
    hours: "10:00 AM – 10:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 17, commuteKm: 8.5,
    rating: 4.8, ratingCount: 1023,
    description: "Canada's biggest birthday party! Live music, kids' zone with inflatables, face painting, cultural performances, and fireworks.",
    dates: "July 1, 2026",
    scoreBreakdown: { cost: 100, commute: 78, coverage: 90, rating: 96, extras: 85 }
  }
  ,{
    id: 39, name: "Saturday STEM Lab", provider: "Canada Science & Tech Museum",
    type: "weekend", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 14, color: "#1E40AF",
    address: "1867 St Laurent Blvd, Ottawa",
    url: "https://ingeniumcanada.org/scitech",
    hours: "Sat 10:00 AM – 12:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 13.5,
    rating: 4.7, ratingCount: 198,
    description: "Free hands-on STEM workshops included with museum admission. Robotics, chemistry experiments, and engineering challenges. Different theme each week.",
    dates: "Every Saturday, year-round",
    scoreBreakdown: { cost: 100, commute: 68, coverage: 30, rating: 94, extras: 85 }
  },
  {
    id: 40, name: "Gatineau Park Family Nature Walks", provider: "NCC",
    type: "yearround", category: "outdoor", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 17, color: "#15803D",
    address: "Gatineau Park Visitor Centre",
    url: "https://ncc-ccn.gc.ca/places/gatineau-park",
    hours: "Sun 10:00 AM – 12:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 18.0,
    rating: 4.8, ratingCount: 276,
    description: "Free guided nature walks for families. Learn about local wildlife, seasonal foraging, and conservation. Snowshoeing in winter, trail hikes in summer.",
    dates: "Every Sunday, year-round",
    scoreBreakdown: { cost: 100, commute: 60, coverage: 30, rating: 96, extras: 80 }
  },
  {
    id: 41, name: "OPL Coding Club for Kids", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 8, ageMax: 14, color: "#92400E",
    address: "Main Branch, 120 Metcalfe St",
    url: "https://biblioottawalibrary.ca/en/program",
    hours: "Wed 4:00–5:30 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 13, commuteKm: 6.8,
    rating: 4.5, ratingCount: 87,
    description: "Free weekly coding sessions using Scratch and Python. Laptops provided. Build games, animations, and interactive stories. No experience needed.",
    dates: "Every Wednesday, Sep – Jun",
    scoreBreakdown: { cost: 100, commute: 86, coverage: 30, rating: 90, extras: 90 }
  },
  {
    id: 42, name: "Easter Egg Hunt & Spring Fair", provider: "City of Ottawa",
    type: "march", category: "holiday", city: "ottawa", province: "ON", startDate: "2026-04-05", endDate: "2026-04-06",
    ageMin: 3, ageMax: 12, color: "#DC2626",
    address: "Lansdowne Park, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks",
    hours: "10:00 AM – 3:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 14, commuteKm: 7.5,
    rating: 4.6, ratingCount: 345,
    description: "Giant egg hunt, bunny visit, spring crafts, face painting, bouncy castles, and live entertainment. $5 suggested donation.",
    dates: "Apr 5 – Apr 6, 2026",
    scoreBreakdown: { cost: 98, commute: 84, coverage: 45, rating: 92, extras: 85 }
  },
  {
    id: 43, name: "Halloween Haunted Trail", provider: "Saunders Farm",
    type: "yearround", category: "holiday", city: "ottawa", province: "ON", startDate: "2026-10-01", endDate: "2026-10-31",
    ageMin: 5, ageMax: 17, color: "#7C2D12",
    address: "7893 Bleeks Rd, Munster",
    url: "https://www.saundersfarm.com/",
    hours: "Fri–Sun 5:00–9:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 25, priceDaily: 25,
    siblingDiscount: "None", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 35, commuteKm: 30.0,
    rating: 4.7, ratingCount: 412,
    description: "Kid-friendly haunted trails, corn maze, pumpkin patch, and hayrides. Less scary afternoon option for younger kids. Food trucks on site.",
    dates: "Oct 1 – Oct 31 (weekends)",
    scoreBreakdown: { cost: 85, commute: 45, coverage: 40, rating: 94, extras: 60 }
  },
  {
    id: 44, name: "Museum of Nature Family Sundays", provider: "Canadian Museum of Nature",
    type: "weekend", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 14, color: "#0E7490",
    address: "240 McLeod St, Ottawa",
    url: "https://nature.ca/en/plan-your-visit",
    hours: "Sun 10:00 AM – 4:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 15, priceDaily: 15,
    siblingDiscount: "Free under 3", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 16, commuteKm: 8.0,
    rating: 4.7, ratingCount: 356,
    description: "Explore dinosaurs, ocean life, and Arctic exhibits. Free kids' activity zone with crafts. Special family rate: $15 for 2 adults + 3 kids.",
    dates: "Every Sunday, year-round",
    scoreBreakdown: { cost: 88, commute: 82, coverage: 50, rating: 94, extras: 75 }
  }
  // ── MOVIES ──
  ,{
    id: 45, name: "Inside Out 3", provider: "Cineplex Lansdowne",
    type: "weekend", category: "movies", city: "ottawa", province: "ON", startDate: "2026-06-05", endDate: "2026-07-31",
    ageMin: 4, ageMax: 14, color: "#6D28D9",
    address: "325 Marche Way, Ottawa",
    url: "https://www.cineplex.com/theatre/cineplex-cinemas-lansdowne",
    hours: "Showtimes: 11am, 1:30pm, 4pm", extendedCare: false, extendedHours: null,
    priceWeekly: 15, priceDaily: 15,
    siblingDiscount: "Family pack: 4 tickets $48", earlyBird: "Tue $8.99 all day",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 7.5,
    rating: 4.8, ratingCount: 1245,
    description: "Rated G. Riley's emotions face a brand new adventure. Perfect for the whole family. 3D and standard showings available. Sensory-friendly screening Sat 10am.",
    dates: "Now playing",
    scoreBreakdown: { cost: 88, commute: 84, coverage: 25, rating: 96, extras: 70 }
  },
  {
    id: 46, name: "Moana 3", provider: "Cineplex South Keys",
    type: "weekend", category: "movies", city: "ottawa", province: "ON", startDate: "2026-06-12", endDate: "2026-08-15",
    ageMin: 3, ageMax: 12, color: "#7C3AED",
    address: "2190 Bank St, Ottawa",
    url: "https://www.cineplex.com/theatre/cineplex-cinemas-south-keys",
    hours: "Showtimes: 10:30am, 1pm, 3:30pm", extendedCare: false, extendedHours: null,
    priceWeekly: 15, priceDaily: 15,
    siblingDiscount: "Family pack: 4 tickets $48", earlyBird: "Tue $8.99 all day",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.7, ratingCount: 876,
    description: "Rated PG. Moana and Maui set sail on a brand new voyage. Beautiful animation and catchy songs. IMAX and standard available.",
    dates: "Opens Jun 12",
    scoreBreakdown: { cost: 88, commute: 72, coverage: 25, rating: 94, extras: 65 }
  },
  {
    id: 47, name: "Minecraft: The Movie", provider: "Cineplex Gloucester",
    type: "weekend", category: "movies", city: "ottawa", province: "ON", startDate: "2026-06-01", endDate: "2026-07-20",
    ageMin: 6, ageMax: 16, color: "#4F46E5",
    address: "1980 Ogilvie Rd, Ottawa",
    url: "https://www.cineplex.com/theatre/cineplex-cinemas-gloucester",
    hours: "Showtimes: 12pm, 3pm, 6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 15, priceDaily: 15,
    siblingDiscount: "Family pack: 4 tickets $48", earlyBird: "Tue $8.99 all day",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 14.5,
    rating: 4.5, ratingCount: 2341,
    description: "Rated PG. The blocky world comes to life! Adventure, humor, and creativity. Great for gamers and non-gamers alike. 3D available.",
    dates: "Now playing",
    scoreBreakdown: { cost: 88, commute: 68, coverage: 25, rating: 90, extras: 60 }
  },
  {
    id: 48, name: "Cineplex Family Favourites", provider: "Cineplex Kanata",
    type: "weekend", category: "movies", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 12, color: "#8B5CF6",
    address: "801 Kanata Ave, Kanata",
    url: "https://www.cineplex.com/promos/family-favourites",
    hours: "Sat & Sun 11:00 AM", extendedCare: false, extendedHours: null,
    priceWeekly: 5, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 28, commuteKm: 21.0,
    rating: 4.4, ratingCount: 567,
    description: "Rated G/PG. $2.99 classic family movies every weekend! Rotating titles — Frozen, Lego Movie, Toy Story, and more. Popcorn combo $5.",
    dates: "Every Sat & Sun morning",
    scoreBreakdown: { cost: 98, commute: 52, coverage: 20, rating: 88, extras: 60 }
  },
  // ── THEATRE & SHOWS ──
  {
    id: 49, name: "Baby Theatre: Sensory Stories", provider: "Ottawa Children's Theatre",
    type: "yearround", category: "theatre", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 3, color: "#EC4899",
    address: "245 Centrum Blvd, Orleans",
    url: "https://www.ottawachildrenstheatre.ca/",
    hours: "Tue & Thu 10:00 AM", extendedCare: false, extendedHours: null,
    priceWeekly: 12, priceDaily: 12,
    siblingDiscount: "Free for babies under 1", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 17.0,
    rating: 4.9, ratingCount: 134,
    description: "Immersive sensory theatre for babies and toddlers. Soft lights, gentle music, textures, and bubbles. 30-minute shows designed for tiny attention spans. Parents participate!",
    dates: "Year-round, Tue & Thu",
    scoreBreakdown: { cost: 90, commute: 58, coverage: 20, rating: 98, extras: 70 }
  },
  {
    id: 50, name: "The Wizard of Oz — Kids Edition", provider: "Orpheus Musical Theatre",
    type: "weekend", category: "theatre", city: "ottawa", province: "ON", startDate: "2026-06-19", endDate: "2026-06-28",
    ageMin: 4, ageMax: 14, color: "#BE185D",
    address: "Meridian Theatres, Centrepointe",
    url: "https://www.orpheus-theatre.ca/",
    hours: "Sat 2pm & Sun 2pm", extendedCare: false, extendedHours: null,
    priceWeekly: 18, priceDaily: 18,
    siblingDiscount: "Family 4-pack: $60", earlyBird: "$15 early bird before Jun 1",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 10,
    rating: 4.8, ratingCount: 89,
    description: "A magical 90-minute musical performed by talented youth actors. Sing-along finale! Meet the cast after the show. Perfect for ages 4–14.",
    dates: "Jun 19 – Jun 28 (weekends)",
    scoreBreakdown: { cost: 86, commute: 76, coverage: 25, rating: 96, extras: 72 }
  },
  {
    id: 51, name: "Puppet Show Saturdays", provider: "Arts Court Theatre",
    type: "yearround", category: "theatre", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 2, ageMax: 8, color: "#F472B6",
    address: "2 Daly Ave, Ottawa",
    url: "https://artscourt.ca/",
    hours: "Sat 11:00 AM & 1:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 10, priceDaily: 10,
    siblingDiscount: "2nd child $7", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 9.5,
    rating: 4.7, ratingCount: 213,
    description: "Delightful 45-minute puppet shows with different stories each month. Interactive — kids help the characters! Snack bar available. Great for toddlers through early readers.",
    dates: "Every Saturday, year-round",
    scoreBreakdown: { cost: 92, commute: 78, coverage: 20, rating: 94, extras: 65 }
  },
  {
    id: 52, name: "Teen Improv Night", provider: "Crush Improv",
    type: "yearround", category: "theatre", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 12, ageMax: 17, color: "#9D174D",
    address: "2589 Carling Ave, Ottawa",
    url: "https://crushimprov.com/",
    hours: "Fri 7:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 12, priceDaily: 12,
    siblingDiscount: "None", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.6, ratingCount: 98,
    description: "PG-13 improv comedy shows BY teens FOR teens. Audience participation encouraged. Great Friday night out. Snack bar and mocktails.",
    dates: "Every Friday, year-round",
    scoreBreakdown: { cost: 90, commute: 80, coverage: 20, rating: 92, extras: 55 }
  },
  // ── COMMUNITY FAIRS ──
  {
    id: 53, name: "Glebe Neighbourhood Fair", provider: "Glebe Community Association",
    type: "summer", category: "fairs", city: "ottawa", province: "ON", startDate: "2026-06-20", endDate: "2026-06-20",
    ageMin: 3, ageMax: 17, color: "#B45309",
    address: "Bank St & Fifth Ave, Ottawa",
    url: "https://www.glebeca.ca/",
    hours: "10:00 AM – 5:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.6, ratingCount: 456,
    description: "Free community street fair with bouncy castles, face painting, live music, food vendors, crafts, and local vendor booths. Annual tradition since 1972.",
    dates: "June 20, 2026",
    scoreBreakdown: { cost: 100, commute: 90, coverage: 55, rating: 92, extras: 80 }
  },
  {
    id: 54, name: "Orleans Ribfest & Family Carnival", provider: "Orleans Chamber of Commerce",
    type: "summer", category: "fairs", city: "ottawa", province: "ON", startDate: "2026-07-10", endDate: "2026-07-12",
    ageMin: 3, ageMax: 17, color: "#92400E",
    address: "Ray Friel Recreation Complex",
    url: "https://www.orleanschamber.ca/",
    hours: "Fri 4–10pm, Sat–Sun 11am–10pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 10,
    siblingDiscount: "Ride bracelets $25/child", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 24, commuteKm: 16.0,
    rating: 4.5, ratingCount: 678,
    description: "3-day family festival with carnival rides, BBQ ribbers, live bands, kids' zone, magic shows, and fireworks Sunday night. Free admission, pay for rides and food.",
    dates: "Jul 10 – Jul 12",
    scoreBreakdown: { cost: 85, commute: 62, coverage: 60, rating: 90, extras: 70 }
  },
  {
    id: 55, name: "Barrhaven Fall Fair", provider: "Barrhaven BIA",
    type: "yearround", category: "fairs", city: "ottawa", province: "ON", startDate: "2026-09-19", endDate: "2026-09-20",
    ageMin: 3, ageMax: 17, color: "#D97706",
    address: "Fallowfield Rd & Strandherd",
    url: "https://www.barrhaven.ca/",
    hours: "Sat–Sun 10:00 AM – 6:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 28, commuteKm: 20.0,
    rating: 4.4, ratingCount: 234,
    description: "Free fall fair with pumpkin patch, hay rides, petting zoo, corn maze, and harvest crafts. Apple cider and pie from local farms.",
    dates: "Sep 19 – Sep 20",
    scoreBreakdown: { cost: 100, commute: 52, coverage: 50, rating: 88, extras: 75 }
  },
  // ── TOP THIS WEEKEND (curated picks) ──
  {
    id: 56, name: "Weekend Pick: Sunset Paddle + Picnic", provider: "Rideau Canoe Club",
    type: "weekend", category: "weekend_top", city: "ottawa", province: "ON", startDate: "2026-06-06", endDate: "2026-06-07",
    ageMin: 5, ageMax: 17, color: "#B45309",
    address: "1 Donald St, Ottawa",
    url: "https://www.rideaucanoeclubottawa.ca/",
    hours: "Sat 5:00–7:30 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 20, priceDaily: 20,
    siblingDiscount: "Family rate: $45 for 4", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 7.2,
    rating: 4.9, ratingCount: 45,
    description: "This weekend only! Guided sunset paddle on the Rideau River followed by a riverside picnic. Equipment and snacks included. Book early — only 20 spots.",
    dates: "Jun 6 – Jun 7 only",
    scoreBreakdown: { cost: 85, commute: 85, coverage: 25, rating: 98, extras: 82 }
  },
  {
    id: 57, name: "Weekend Pick: NAC Family Concert", provider: "National Arts Centre",
    type: "weekend", category: "weekend_top", city: "ottawa", province: "ON", startDate: "2026-06-07", endDate: "2026-06-07",
    ageMin: 3, ageMax: 14, color: "#F59E0B",
    address: "1 Elgin St, Ottawa",
    url: "https://nac-cna.ca/en/families",
    hours: "Sun 2:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 15, priceDaily: 15,
    siblingDiscount: "Kids under 5 free", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 17, commuteKm: 8.5,
    rating: 4.8, ratingCount: 189,
    description: "This Sunday! NAC Orchestra plays a family-friendly concert featuring movie soundtracks. Instrument petting zoo in the lobby after the show. 60 minutes.",
    dates: "Sun Jun 7 only",
    scoreBreakdown: { cost: 88, commute: 78, coverage: 20, rating: 96, extras: 68 }
  },
  {
    id: 58, name: "Ottawa Gymnastics Centre", provider: "OGC",
    type: "yearround", category: "gymnastics", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 16, color: "#4338CA",
    address: "2415 Holly Lane, Ottawa",
    url: "https://www.ottawagymnasticscentre.ca/",
    hours: "Mon/Wed 5:00–6:30 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 48, priceDaily: 24,
    siblingDiscount: "10%", earlyBird: "$42/wk full year",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 11.0,
    rating: 4.7, ratingCount: 234,
    description: "Recreational and competitive gymnastics for all levels. Trampoline, tumbling, bars, beam, and floor. Free trial class available.",
    dates: "Sep – Jun (year-round)",
    scoreBreakdown: { cost: 82, commute: 76, coverage: 42, rating: 94, extras: 68 }
  },
  {
    id: 59, name: "Minto Skating Club", provider: "Minto Skating Club",
    type: "yearround", category: "skating", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-03-31",
    ageMin: 4, ageMax: 17, color: "#0E7490",
    address: "1005 Bank St, Ottawa",
    url: "https://www.mintoskatingclub.com/",
    hours: "Sat 9:00–10:30 AM", extendedCare: false, extendedHours: null,
    priceWeekly: 38, priceDaily: 38,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.8, ratingCount: 189,
    description: "Learn-to-skate through competitive figure skating. CanSkate and STARSkate programs. Skate rental available. Indoor arena year-round.",
    dates: "Sep – Mar (fall/winter)",
    scoreBreakdown: { cost: 86, commute: 84, coverage: 35, rating: 96, extras: 58 }
  },
  {
    id: 60, name: "Rideau Canal Skateway Family Skate", provider: "NCC",
    type: "winter", category: "skating", city: "ottawa", province: "ON", startDate: "2027-01-15", endDate: "2027-03-01",
    ageMin: 3, ageMax: 17, color: "#0891B2",
    address: "Rideau Canal, Ottawa",
    url: "https://ncc-ccn.gc.ca/places/rideau-canal-skateway",
    hours: "Daily 8:00 AM – 10:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 7.2,
    rating: 4.9, ratingCount: 1567,
    description: "World's largest skating rink! Free skating on the Rideau Canal. BeaverTails and hot chocolate along the way. Skate rentals available at multiple locations.",
    dates: "Jan – Mar (weather dependent)",
    scoreBreakdown: { cost: 100, commute: 82, coverage: 80, rating: 98, extras: 75 }
  },
  {
    id: 61, name: "Broadway Bound Youth Musical Theatre", provider: "BBYMT",
    type: "yearround", category: "theatre", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#9D174D",
    address: "Ottawa (multiple locations)",
    url: "https://bbymt.ca/",
    hours: "1–2x per week (varies by program)", extendedCare: false, extendedHours: null,
    priceWeekly: 35, priceDaily: 35,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 8.0,
    rating: 4.9, ratingCount: 78,
    description: "10–12 week musical theatre training ending in a costumed showcase. Programs for JK through Grade 12 — no prior experience needed. Build confidence, voice, and teamwork. Currently presenting Matilda Jr.",
    dates: "Year-round (10–12 week terms)",
    scoreBreakdown: { cost: 88, commute: 82, coverage: 35, rating: 98, extras: 70 }
  }
  ,{
    id: 62, name: "Pirouette Rhythmic Gymnastics Club", provider: "Pirouette RGC",
    type: "yearround", category: "gymnastics", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#7C3AED",
    address: "3500 Fallowfield Rd Unit 1D, Nepean",
    url: "https://www.pirouetterg.com/",
    hours: "Various (see schedule)", extendedCare: false, extendedHours: null,
    priceWeekly: 45, priceDaily: 45,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 18.5,
    rating: 4.8, ratingCount: 145,
    description: "Rhythmic gymnastics for all ages and levels — recreational, pre-competitive, competitive, and AGG. FIG certified carpets, ballet bars, and full apparatus. Founded 1996. Summer camps also available.",
    dates: "Year-round (Sep – Jun + summer camps)",
    scoreBreakdown: { cost: 82, commute: 58, coverage: 40, rating: 96, extras: 60 }
  }
  ,{
    id: 63, name: "Sing! Dance! Act! WA", provider: "Sing Dance Act WA",
    type: "yearround", category: "dance", city: "perth", province: "AU",
    startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 2, ageMax: 21, color: "#DB2777",
    address: "Clarkson & Banksia Grove, Perth WA",
    url: "http://www.singdanceactwa.com.au/",
    hours: "Various (see schedule)", extendedCare: false, extendedHours: null,
    priceWeekly: 30, priceDaily: 30,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 0, commuteKm: 15000,
    rating: 4.8, ratingCount: 112,
    description: "Pre-school classes, Ballet, Tap, Jazz, Lyrical, Hip Hop, Acro, Musical Theatre, and screen acting. Ages 2–21 with optional exams. Friendly studio environment in Perth, Australia.",
    dates: "Year-round (term-based)",
    scoreBreakdown: { cost: 88, commute: 5, coverage: 40, rating: 96, extras: 55 }
  }
  ,{
    id: 64, name: "Ottawa Children's Theatre", provider: "OCT",
    type: "yearround", category: "drama", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 18, color: "#B91C1C",
    address: "Carleton Dominion-Chalmers Centre, Ottawa",
    url: "https://www.ottawachildrenstheatre.net/",
    hours: "Weekdays & weekends (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 40, priceDaily: 40,
    siblingDiscount: "Scholarships available", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 16, commuteKm: 8.5,
    rating: 4.8, ratingCount: 267,
    description: "Acting and drama classes ages 5–18, in-person and online. Voice, movement, improv, character development. Small class sizes with professional artist-instructors. No student turned away due to lack of funds.",
    dates: "Year-round (semester-based)",
    scoreBreakdown: { cost: 84, commute: 80, coverage: 40, rating: 96, extras: 78 }
  },
  {
    id: 65, name: "Ottawa School of Theatre (OST)", provider: "OST-ÉTO",
    type: "yearround", category: "drama", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 17, color: "#7C2D12",
    address: "Shenkman Arts Centre, Orleans",
    url: "https://ost-eto.ca/",
    hours: "Evenings & weekends", extendedCare: false, extendedHours: null,
    priceWeekly: 38, priceDaily: 38,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 24, commuteKm: 16.5,
    rating: 4.7, ratingCount: 189,
    description: "30+ years of theatre education in English and French. Programs for children through teens. Scene study, stagecraft, and full productions. Bilingual instruction available.",
    dates: "Year-round (Sep – Jun)",
    scoreBreakdown: { cost: 86, commute: 62, coverage: 38, rating: 94, extras: 72 }
  },
  {
    id: 66, name: "The Acting Company", provider: "The Acting Company",
    type: "yearround", category: "drama", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 6, ageMax: 17, color: "#991B1B",
    address: "738A Bank St, 2nd Floor, Ottawa",
    url: "https://www.actingcompany.ca/",
    hours: "Daytime, evening & weekends", extendedCare: false, extendedHours: null,
    priceWeekly: 45, priceDaily: 45,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 18,
    rating: 4.7, ratingCount: 156,
    description: "Theatre and screen acting in the heart of the Glebe. Kids and teens shoot short films and audition scenes. Stage acting, improv, and on-camera technique. Rich program of courses year-round.",
    dates: "Year-round (semester-based)",
    scoreBreakdown: { cost: 80, commute: 88, coverage: 42, rating: 94, extras: 68 }
  },
  {
    id: 67, name: "Stagecoach Performing Arts Ottawa", provider: "Stagecoach",
    type: "yearround", category: "drama", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 18, color: "#DC2626",
    address: "Ottawa West",
    url: "https://www.stagecoachschools.ca/ottawawest",
    hours: "Weekends (3-hour sessions)", extendedCare: false, extendedHours: null,
    priceWeekly: 42, priceDaily: 42,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 12.0,
    rating: 4.6, ratingCount: 134,
    description: "Singing, dancing, and acting in one 3-hour session. Kids 4–18 build confidence and friendships on and off stage. End-of-term showcases. Part of the global Stagecoach network.",
    dates: "Year-round (term-based)",
    scoreBreakdown: { cost: 82, commute: 72, coverage: 38, rating: 92, extras: 68 }
  },
  {
    id: 68, name: "Kanata Acting Studio", provider: "Kanata Acting Studio",
    type: "yearround", category: "drama", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 17, color: "#9F1239",
    address: "Kanata, Ottawa",
    url: "https://kanataactingstudio.ca/",
    hours: "Weekday evenings & Saturdays", extendedCare: false, extendedHours: null,
    priceWeekly: 35, priceDaily: 35,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 28, commuteKm: 20.0,
    rating: 4.7, ratingCount: 98,
    description: "Spotlight Kids program for beginners — creative games, improv, movement, and scene work. Build confidence in a fun, supportive environment. Ages grouped by experience level.",
    dates: "Year-round (Sep – Jun)",
    scoreBreakdown: { cost: 88, commute: 52, coverage: 36, rating: 94, extras: 65 }
  },
  {
    id: 69, name: "Act Ottawa (GNAG)", provider: "GNAG",
    type: "yearround", category: "drama", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 17, color: "#BE123C",
    address: "Glebe Community Centre, Ottawa",
    url: "https://gnag.ca/act-ottawa/",
    hours: "Weekday evenings", extendedCare: false, extendedHours: null,
    priceWeekly: 30, priceDaily: 30,
    siblingDiscount: "GNAG member discount", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 11, commuteKm: 5.5,
    rating: 4.5, ratingCount: 112,
    description: "Performing arts wing of the Glebe Neighbourhood Activities Group. Drama, musical theatre, and improv for youth. Community-focused, affordable programming in the heart of the Glebe.",
    dates: "Year-round (Sep – Jun)",
    scoreBreakdown: { cost: 90, commute: 90, coverage: 35, rating: 90, extras: 72 }
  },
  {
    id: 70, name: "Green Room Acting Studio Ottawa", provider: "Green Room",
    type: "yearround", category: "drama", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 6, ageMax: 17, color: "#881337",
    address: "Online (Ottawa-area students)",
    url: "https://www.greenroomactingstudio.com/ottawa-acting-classes",
    hours: "Flexible online schedule", extendedCare: false, extendedHours: null,
    priceWeekly: 55, priceDaily: 55,
    siblingDiscount: "None", earlyBird: "$55 trial class",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 0, commuteKm: 0,
    rating: 4.6, ratingCount: 87,
    description: "Professional on-camera acting via Zoom. Taught by LA/NY casting directors. Disney & Nickelodeon scene work. Career development support included. Trial class available.",
    dates: "Year-round (monthly enrollment)",
    scoreBreakdown: { cost: 72, commute: 100, coverage: 35, rating: 92, extras: 60 }
  },
  {
    id: 71, name: "Ottawa Acting Studio", provider: "Ottawa Acting Studio",
    type: "yearround", category: "drama", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 7, ageMax: 17, color: "#A21CAF",
    address: "Ottawa",
    url: "https://ottawaactingstudio.ca/",
    hours: "Evenings & weekends", extendedCare: false, extendedHours: null,
    priceWeekly: 40, priceDaily: 40,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 8.0,
    rating: 4.6, ratingCount: 76,
    description: "Acting technique, scene study, and audition prep for youth. Small class sizes focused on individual growth. Film and stage acting training.",
    dates: "Year-round (Sep – Jun)",
    scoreBreakdown: { cost: 84, commute: 82, coverage: 38, rating: 92, extras: 65 }
  }
  // ── PIANO LESSONS ──
  ,{
    id: 72, name: "Ottawa Piano School", provider: "Ottawa Piano School",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#7C3AED",
    address: "Ottawa (multiple locations)",
    url: "https://www.ottawapianoschool.com/",
    hours: "Flexible scheduling", extendedCare: false, extendedHours: null,
    priceWeekly: 50, priceDaily: 50,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 7.5,
    rating: 4.7, ratingCount: 198,
    description: "Private one-on-one piano instruction since 2002. Personalized education plans for preschoolers through teens. RCM exam prep available. Recitals twice a year.",
    dates: "Year-round",
    scoreBreakdown: { cost: 78, commute: 84, coverage: 35, rating: 94, extras: 55 }
  },
  {
    id: 73, name: "Allegro Music Schools", provider: "Allegro Music",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 17, color: "#6D28D9",
    address: "Orléans & Ottawa locations",
    url: "https://www.allegromusicschools.com/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 48, priceDaily: 48,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 10.5,
    rating: 4.8, ratingCount: 234,
    description: "Voted best music school in Ottawa. Piano, guitar, violin, drums, voice. Private and group lessons. Little Mozarts group piano for ages 2–8. Annual concert at NAC.",
    dates: "Year-round",
    scoreBreakdown: { cost: 80, commute: 76, coverage: 38, rating: 96, extras: 62 }
  },
  {
    id: 74, name: "Canada Music Academy Ottawa", provider: "Canada Music Academy",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 4, ageMax: 17, color: "#4F46E5",
    address: "Multiple Ottawa locations + in-home",
    url: "https://canadamusicacademy.ca/Ottawa_Music_School/Piano_Lessons.html",
    hours: "Flexible (in-studio, at-home, online)", extendedCare: false, extendedHours: null,
    priceWeekly: 55, priceDaily: 55,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 10, commuteKm: 5.0,
    rating: 4.6, ratingCount: 167,
    description: "Academy Certified Teachers. Piano, guitar, voice, violin. In-studio, at-home, or online options. RCM exam prep. Personalized one-on-one instruction.",
    dates: "Year-round (rolling enrollment)",
    scoreBreakdown: { cost: 74, commute: 90, coverage: 35, rating: 92, extras: 60 }
  },
  {
    id: 75, name: "Ottawa Pianos — Yamaha Junior Music", provider: "Ottawa Pianos",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#5B21B6",
    address: "1412 Bank St, Ottawa",
    url: "https://ottawapianos.com/our-school/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 45, priceDaily: 45,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.5, ratingCount: 145,
    description: "Yamaha Junior Music Course for young learners. Private and group piano lessons. All ages and levels. Instrument showroom on-site.",
    dates: "Year-round",
    scoreBreakdown: { cost: 82, commute: 80, coverage: 35, rating: 90, extras: 58 }
  },
  {
    id: 76, name: "Happy Bird Music Studio", provider: "Happy Bird Music",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#8B5CF6",
    address: "Ottawa",
    url: "https://www.happybirdmusicstudio.ca/",
    hours: "Flexible scheduling", extendedCare: false, extendedHours: null,
    priceWeekly: 42, priceDaily: 42,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 16, commuteKm: 9.0,
    rating: 4.7, ratingCount: 89,
    description: "Piano, flute, guitar, ukulele, voice, and theory. Music camps and group classes for young children. Private lessons with patient, encouraging teachers.",
    dates: "Year-round + summer camps",
    scoreBreakdown: { cost: 84, commute: 78, coverage: 35, rating: 94, extras: 58 }
  },
  {
    id: 77, name: "Nepean School of Music", provider: "NSM",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#7E22CE",
    address: "900 Greenbank Rd, Barrhaven",
    url: "https://nepeanschoolofmusic.com/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 40, priceDaily: 40,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 17.0,
    rating: 4.6, ratingCount: 312,
    description: "Established 1976. 600+ students, 12+ programs. Piano, violin, guitar, drums, voice, flute, sax. Band program, duo program, mini-orchestra, and youth choir.",
    dates: "Year-round (Sep – Jun)",
    scoreBreakdown: { cost: 84, commute: 58, coverage: 38, rating: 92, extras: 65 }
  },
  // ── DANCE CLASSES ──
  {
    id: 78, name: "Canadian School of Dance", provider: "CSD",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 17, color: "#BE185D",
    address: "Ottawa",
    url: "https://canadianschoolofdance.com/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 45, priceDaily: 45,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 7.5,
    rating: 4.7, ratingCount: 267,
    description: "Elite dance training ages 2–adult. Ballet, Jazz, Tap, Hip Hop, Lyrical, Acro, Jazz Funk. Recreational through competitive levels. Year-end showcase.",
    dates: "Sep – Jun + summer",
    scoreBreakdown: { cost: 80, commute: 84, coverage: 40, rating: 94, extras: 62 }
  },
  {
    id: 79, name: "The Studio School of Dance", provider: "Studio School of Dance",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 17, color: "#DB2777",
    address: "Ottawa",
    url: "https://thestudioschoolofdance.com/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 42, priceDaily: 42,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 16, commuteKm: 9.0,
    rating: 4.8, ratingCount: 198,
    description: "Jazz, tap, ballet, acro, lyrical, contemporary, hip hop. KinderSteps and Parent & Tot programs for youngest dancers. Year-end recital.",
    dates: "Sep – Jun",
    scoreBreakdown: { cost: 84, commute: 78, coverage: 40, rating: 96, extras: 60 }
  },
  {
    id: 80, name: "Piqué Dance Studio International", provider: "Piqué Dance",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#EC4899",
    address: "Ottawa",
    url: "https://piquedancestudio.com/e/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 48, priceDaily: 48,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 8.0,
    rating: 4.7, ratingCount: 156,
    description: "Jazz, tap, ballet, modern, hip hop, contemporary, musical theatre, stretch & strength, and acrobatic gymnastics. International-calibre instruction.",
    dates: "Sep – Jun",
    scoreBreakdown: { cost: 78, commute: 82, coverage: 40, rating: 94, extras: 58 }
  },
  {
    id: 81, name: "Capital City Dance", provider: "Capital City Dance",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 18, color: "#F472B6",
    address: "Ottawa",
    url: "https://www.capitalcitydance.ca/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 40, priceDaily: 40,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 10.0,
    rating: 4.6, ratingCount: 178,
    description: "Contemporary dance studio with classes for toddlers (age 2) through teens. Ballet, hip hop, jazz, contemporary, and more. Serves Orleans to Carleton Place.",
    dates: "Sep – Jun",
    scoreBreakdown: { cost: 84, commute: 76, coverage: 40, rating: 92, extras: 62 }
  },
  {
    id: 82, name: "The School of Dance Ottawa", provider: "School of Dance",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 17, color: "#A21CAF",
    address: "200 Crichton St, Ottawa",
    url: "https://www.theschoolofdance.ca/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 50, priceDaily: 50,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 11.5,
    rating: 4.8, ratingCount: 213,
    description: "Twirling Tots (age 2) through advanced training. Creative Movement, Classical Ballet, Contemporary, and Jazz. One of Ottawa's most established dance schools.",
    dates: "Sep – Jun",
    scoreBreakdown: { cost: 78, commute: 72, coverage: 40, rating: 96, extras: 58 }
  },
  {
    id: 83, name: "School of Modern Dance", provider: "School of Modern Dance",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 17, color: "#C026D3",
    address: "Ottawa & Kanata locations",
    url: "https://schoolofmoderndance.com/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 38, priceDaily: 38,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 16, commuteKm: 9.5,
    rating: 4.6, ratingCount: 145,
    description: "Toddler Ballet and Hip Hop (with parent). Rising Stars in Ballet, Hip Hop, Acro & Jazz. Energizing classes in Ottawa and Kanata. All levels welcome.",
    dates: "Sep – Jun",
    scoreBreakdown: { cost: 86, commute: 78, coverage: 38, rating: 92, extras: 60 }
  },
  {
    id: 84, name: "Elite Dance Studio Kanata", provider: "Elite Dance",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#D946EF",
    address: "Kanata, Ottawa",
    url: "https://elitedancestudio.ca/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 44, priceDaily: 44,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 28, commuteKm: 20.0,
    rating: 4.7, ratingCount: 134,
    description: "Ballet, hip hop, jazz, lyrical, contemporary, and more. Blends tradition with innovation. Recreational and competitive streams. Kanata location.",
    dates: "Sep – Jun",
    scoreBreakdown: { cost: 82, commute: 52, coverage: 40, rating: 94, extras: 58 }
  },
  {
    id: 85, name: "Leeming DanceWorks Orleans", provider: "Leeming DanceWorks",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 17, color: "#E879F9",
    address: "Orléans, Ottawa",
    url: "https://www.leemingdanceworks.com/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 40, priceDaily: 40,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 24, commuteKm: 16.0,
    rating: 4.6, ratingCount: 167,
    description: "Tiny tots through advanced. Ballet, jazz, tap, lyrical, contemporary, hip hop, musical theatre, and acrobatics. Orléans community favourite.",
    dates: "Sep – Jun",
    scoreBreakdown: { cost: 84, commute: 62, coverage: 40, rating: 92, extras: 60 }
  },
  {
    id: 86, name: "Trio Danceworks Kanata", provider: "Trio Danceworks",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#FB7185",
    address: "4048 Carling Ave, Kanata",
    url: "https://kanatadance.com/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 42, priceDaily: 42,
    siblingDiscount: "10%", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.5, ratingCount: 112,
    description: "Ballet, jazz, tap, lyrical, hip hop, acro, and contemporary. Kanata's community dance studio. Recreational and competitive programs.",
    dates: "Sep – Jun",
    scoreBreakdown: { cost: 84, commute: 48, coverage: 38, rating: 90, extras: 58 }
  },
  {
    id: 87, name: "Art Motion Ottawa", provider: "Art Motion",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#FDA4AF",
    address: "Ottawa",
    url: "https://www.artmotionottawa.com/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 44, priceDaily: 44,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 17, commuteKm: 9.5,
    rating: 4.6, ratingCount: 98,
    description: "Group classes and private lessons for children, youth, and adults. Creative and technical dance training in a welcoming studio environment.",
    dates: "Sep – Jun",
    scoreBreakdown: { cost: 82, commute: 78, coverage: 38, rating: 92, extras: 55 }
  },
  {
    id: 88, name: "The Loft School of Art & Dance", provider: "The Loft",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#F9A8D4",
    address: "Kanata, Ottawa",
    url: "https://www.theloftschoolofartanddance.com/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 40, priceDaily: 40,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 28, commuteKm: 20.0,
    rating: 4.7, ratingCount: 87,
    description: "Warm, welcoming creative space in Kanata. Dance and art combined. Ballet, jazz, hip hop, contemporary, and visual arts classes. Inclusive community focus.",
    dates: "Sep – Jun",
    scoreBreakdown: { cost: 84, commute: 52, coverage: 38, rating: 94, extras: 58 }
  },
  {
    id: 89, name: "Vanessa Plettell Dance", provider: "VP Dance",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#E11D48",
    address: "Ottawa",
    url: "https://www.vanessaplettelldance.com/",
    hours: "Mon–Sat (various)", extendedCare: false, extendedHours: null,
    priceWeekly: 46, priceDaily: 46,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 8.5,
    rating: 4.7, ratingCount: 123,
    description: "Technical excellence in ballet, acro, tap, jazz, lyrical, contemporary, and hip hop. Programs for all ages and levels. Strong focus on technique and artistry.",
    dates: "Sep – Jun",
    scoreBreakdown: { cost: 80, commute: 80, coverage: 40, rating: 94, extras: 58 }
  },
  {
    id: 90, name: "Duniya Dance Studio", provider: "Duniya Studio",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#F43F5E",
    address: "Various Ottawa locations + online",
    url: "https://duniyastudio.com/",
    hours: "Various (see schedule)", extendedCare: false, extendedHours: null,
    priceWeekly: 35, priceDaily: 35,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 7.0,
    rating: 4.6, ratingCount: 98,
    description: "Bollywood, Bhangra, and fusion dance for kids. Online and in-person at various Ottawa locations. Cultural dance education in a fun, inclusive environment.",
    dates: "Year-round",
    scoreBreakdown: { cost: 88, commute: 84, coverage: 38, rating: 92, extras: 55 }
  },

  // ── STAPLES KIDS ACTIVITIES ──
  {
    id: 91, name: "Staples Kids LEGO Workshop", provider: "Staples Canada",
    type: "yearround", category: "community", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 4, ageMax: 12, color: "#E8842C",
    address: "1595 Merivale Rd, Ottawa (Store 131)",
    url: "https://www.eventbrite.ca/d/canada--ottawa/staples-kids/",
    hours: "5:00 PM – 7:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 14, commuteKm: 10,
    rating: 4.5, ratingCount: 67,
    description: "FREE monthly in-store LEGO building workshops for kids. Build LEGO sets like Botanicals, FIFA Mini Trophy, and Friends Candy Shop. All materials provided. Pre-registration required via Eventbrite.",
    dates: "Monthly events — check Eventbrite for dates",
    scoreBreakdown: { cost: 100, commute: 85, coverage: 25, rating: 90, extras: 80 }
  },
  {
    id: 92, name: "Staples Kids Crayola Craft Events", provider: "Staples Canada",
    type: "yearround", category: "community", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 10, color: "#E8842C",
    address: "2210 Bank St, Ottawa (Store 87)",
    url: "https://www.eventbrite.ca/d/canada--ottawa/staples-kids/",
    hours: "5:00 PM – 7:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 18,
    rating: 4.4, ratingCount: 52,
    description: "FREE monthly in-store Crayola crafting events for kids. Seasonal themes including Mother's Day, Valentine's Day, and holiday crafts. All supplies provided by Staples.",
    dates: "Monthly events — check Eventbrite for dates",
    scoreBreakdown: { cost: 100, commute: 80, coverage: 25, rating: 88, extras: 80 }
  },
  {
    id: 93, name: "Staples Kids Cool Maker Experience", provider: "Staples Canada",
    type: "yearround", category: "community", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 12, color: "#E8842C",
    address: "3777 Strandherd Dr, Ottawa (Barrhaven)",
    url: "https://www.eventbrite.ca/d/canada--ottawa/staples-barrhaven/",
    hours: "10:00 AM – 12:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 14.0,
    rating: 4.3, ratingCount: 38,
    description: "FREE Cool Maker crafting experiences at Staples Barrhaven. Kids create jewellery, accessories, and DIY projects. Part of Staples Kids Learn + Play program. All materials included.",
    dates: "Monthly events — check Eventbrite for dates",
    scoreBreakdown: { cost: 100, commute: 68, coverage: 25, rating: 86, extras: 80 }
  },
  {
    id: 94, name: "Staples Kids FIMO Clay Workshop", provider: "Staples Canada",
    type: "yearround", category: "community", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 6, ageMax: 14, color: "#E8842C",
    address: "2655 Iris St, Ottawa (Store 158 Orléans)",
    url: "https://www.eventbrite.ca/d/canada--ottawa/staples/",
    hours: "10:00 AM – 12:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 11.0,
    rating: 4.4, ratingCount: 29,
    description: "FREE FIMO polymer clay sculpting workshops at Staples. Kids create animals, characters, and keychains. Part of Staples monthly kids events series. Pre-register on Eventbrite.",
    dates: "Monthly events — check Eventbrite for dates",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 25, rating: 88, extras: 80 }
  },

  // ── CITY OF OTTAWA PARKS & RECREATION ──
  {
    id: 95, name: "Camp Ottawa — Multi-Activity Day Camp", provider: "City of Ottawa",
    type: "summer", category: "summer_camp", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 4, ageMax: 15, color: "#5DAE3B",
    address: "Various City of Ottawa recreation centres",
    url: "https://ottawa.ca/en/recreation-and-parks/courses-and-camps",
    hours: "8:30 AM – 4:30 PM", extendedCare: true, extendedHours: "7:00 AM – 6:00 PM",
    priceWeekly: 195, priceDaily: 45,
    siblingDiscount: "10% off additional children", earlyBird: "10% early registration discount",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 10, commuteKm: 5.0,
    rating: 4.3, ratingCount: 312,
    description: "City of Ottawa's flagship summer day camp program. Sports, arts, outdoor adventures, and games. Extended care available. Multiple locations across the city. Financial assistance available through Ottawa Hand in Hand.",
    dates: "Jul 6 – Aug 28, 2026",
    scoreBreakdown: { cost: 82, commute: 90, coverage: 85, rating: 86, extras: 75 }
  },
  {
    id: 96, name: "Swim City — Swimming Lessons", provider: "City of Ottawa",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 16, color: "#2E8BC0",
    address: "Various City of Ottawa pools",
    url: "https://ottawa.ca/en/recreation-and-parks/register-courses-and-camps/swimming/swimming-levels-swim-city/about-swim-city",
    hours: "Various (30–60 min sessions)", extendedCare: false, extendedHours: null,
    priceWeekly: 55, priceDaily: 12,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 10, commuteKm: 5.0,
    rating: 4.5, ratingCount: 487,
    description: "City of Ottawa's official swimming lesson program. Progress through levels and collect stickers. Sessions run year-round at pools across the city. Register via Register Ottawa.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 78, commute: 90, coverage: 30, rating: 90, extras: 40 }
  },
  {
    id: 97, name: "Play Free — Saturday Drop-In Sports", provider: "City of Ottawa",
    type: "yearround", category: "free", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "Various City of Ottawa recreation centres",
    url: "https://ottawa.ca/en/recreation-and-parks/special-events-and-offers/play-free",
    hours: "Varies by location", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 10, commuteKm: 5.0,
    rating: 4.6, ratingCount: 203,
    description: "FREE drop-in activities for children and youth (17 and under) every Saturday. Basketball, soccer, volleyball, badminton, pickleball, skateboarding, Kindergym, swimming, and skating. Accompanying adults free.",
    dates: "Every Saturday, year-round",
    scoreBreakdown: { cost: 100, commute: 90, coverage: 35, rating: 92, extras: 60 }
  },
  {
    id: 98, name: "Play Free — Saturday Drop-In Swimming", provider: "City of Ottawa",
    type: "yearround", category: "free", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#2E8BC0",
    address: "Various City of Ottawa indoor pools",
    url: "https://ottawa.ca/en/recreation-and-parks/special-events-and-offers/play-free",
    hours: "Varies by location", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 6.0,
    rating: 4.7, ratingCount: 178,
    description: "FREE drop-in swimming for children and youth every Saturday at City of Ottawa pools. Part of the Play Free program. Bring your own swimsuit and towel. Accompanying adults swim free.",
    dates: "Every Saturday, year-round",
    scoreBreakdown: { cost: 100, commute: 85, coverage: 30, rating: 94, extras: 50 }
  },
  {
    id: 99, name: "Play Free — Saturday Drop-In Skating", provider: "City of Ottawa",
    type: "yearround", category: "free", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-03-31",
    ageMin: 0, ageMax: 17, color: "#1AA5A0",
    address: "Various City of Ottawa arenas",
    url: "https://ottawa.ca/en/recreation-and-parks/special-events-and-offers/play-free",
    hours: "Varies by arena", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 6.0,
    rating: 4.6, ratingCount: 145,
    description: "FREE public skating for children and youth on Saturdays (or Sundays at select arenas). Part of the City's Play Free program. Helmets required for children. Bring your own skates.",
    dates: "Saturdays, Sep – Mar",
    scoreBreakdown: { cost: 100, commute: 85, coverage: 30, rating: 92, extras: 45 }
  },
  {
    id: 100, name: "City of Ottawa Sports Camps", provider: "City of Ottawa",
    type: "summer", category: "sports", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 5, ageMax: 14, color: "#5DAE3B",
    address: "Various parks & recreation centres",
    url: "https://ottawa.ca/en/recreation-and-parks/courses-and-camps",
    hours: "9:00 AM – 4:00 PM", extendedCare: true, extendedHours: "7:00 AM – 6:00 PM",
    priceWeekly: 185, priceDaily: 42,
    siblingDiscount: "10% off additional children", earlyBird: "10% early registration discount",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 10, commuteKm: 5.5,
    rating: 4.4, ratingCount: 198,
    description: "Specialized sports day camps run by City of Ottawa. Options include soccer, basketball, baseball, tennis, and multi-sport. Held at parks and recreation centres across the city.",
    dates: "Jul 6 – Aug 28, 2026",
    scoreBreakdown: { cost: 84, commute: 88, coverage: 80, rating: 88, extras: 70 }
  },
  {
    id: 101, name: "City of Ottawa Arts Camps", provider: "City of Ottawa",
    type: "summer", category: "arts", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 5, ageMax: 14, color: "#7B4EA3",
    address: "Various recreation centres & art studios",
    url: "https://ottawa.ca/en/recreation-and-parks/courses-and-camps",
    hours: "9:00 AM – 4:00 PM", extendedCare: true, extendedHours: "7:00 AM – 6:00 PM",
    priceWeekly: 195, priceDaily: 45,
    siblingDiscount: "10% off additional children", earlyBird: "10% early registration discount",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 6.0,
    rating: 4.3, ratingCount: 156,
    description: "Creative arts day camps from the City of Ottawa. Visual arts, crafts, painting, drawing, pottery, and mixed media. Held at recreation centres and art studios. Financial assistance available.",
    dates: "Jul 6 – Aug 28, 2026",
    scoreBreakdown: { cost: 82, commute: 85, coverage: 80, rating: 86, extras: 70 }
  },
  {
    id: 102, name: "City of Ottawa Science Camps", provider: "City of Ottawa",
    type: "summer", category: "stem", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 6, ageMax: 12, color: "#EF4444",
    address: "Various recreation centres",
    url: "https://ottawa.ca/en/recreation-and-parks/courses-and-camps",
    hours: "9:00 AM – 4:00 PM", extendedCare: true, extendedHours: "7:00 AM – 6:00 PM",
    priceWeekly: 205, priceDaily: 47,
    siblingDiscount: "10% off additional children", earlyBird: "10% early registration discount",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 14, commuteKm: 7.5,
    rating: 4.4, ratingCount: 132,
    description: "Science and STEM day camps from City of Ottawa recreation. Experiments, robotics, coding, and nature science. Hands-on learning at recreation centres. Register via Register Ottawa.",
    dates: "Jul 6 – Aug 28, 2026",
    scoreBreakdown: { cost: 80, commute: 82, coverage: 80, rating: 88, extras: 70 }
  },
  {
    id: 103, name: "City of Ottawa French Camps", provider: "City of Ottawa",
    type: "summer", category: "summer_camp", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 4, ageMax: 12, color: "#1B3A5C",
    address: "Various recreation centres",
    url: "https://ottawa.ca/en/recreation-and-parks/courses-and-camps",
    hours: "8:30 AM – 4:30 PM", extendedCare: true, extendedHours: "7:00 AM – 6:00 PM",
    priceWeekly: 195, priceDaily: 45,
    siblingDiscount: "10% off additional children", earlyBird: "10% early registration discount",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 6.0,
    rating: 4.3, ratingCount: 89,
    description: "French-language summer camps from City of Ottawa. Full immersion activities, games, arts, and sports all in French. Great for bilingual families or French school students.",
    dates: "Jul 6 – Aug 28, 2026",
    scoreBreakdown: { cost: 82, commute: 85, coverage: 85, rating: 86, extras: 70 }
  },
  {
    id: 104, name: "Canterbury Recreation Complex — Kids Programs", provider: "City of Ottawa",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 14, color: "#5DAE3B",
    address: "2185 Arch St, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/canterbury-recreation-complex",
    hours: "Various", extendedCare: false, extendedHours: null,
    priceWeekly: 60, priceDaily: 12,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 14, commuteKm: 8.0,
    rating: 4.2, ratingCount: 167,
    description: "Canterbury Recreation Complex offers year-round registered programs for kids — skating, swimming, sports, arts, and dance. Pool, arena, gym, and fitness facilities on site.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 75, commute: 82, coverage: 40, rating: 84, extras: 55 }
  },
  {
    id: 105, name: "Eva James Community Centre — Kids Programs", provider: "City of Ottawa",
    type: "yearround", category: "sports", city: "kanata", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 14, color: "#5DAE3B",
    address: "65 Stoneway Dr, Kanata",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/eva-james-memorial-community-centre",
    hours: "Various", extendedCare: false, extendedHours: null,
    priceWeekly: 55, priceDaily: 11,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 12.0,
    rating: 4.3, ratingCount: 134,
    description: "Eva James Memorial Community Centre in Kanata. Year-round children's programs including skating, sports, arts, and fitness. Pool, arena, and gymnasium on site. Register via Register Ottawa.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 78, commute: 72, coverage: 40, rating: 86, extras: 55 }
  },
  {
    id: 106, name: "City of Ottawa — Free Monday Pool Days", provider: "City of Ottawa",
    type: "summer", category: "free", city: "ottawa", province: "ON", startDate: "2026-06-15", endDate: "2026-07-27",
    ageMin: 0, ageMax: 17, color: "#2E8BC0",
    address: "Various City of Ottawa outdoor pools",
    url: "https://ottawa.ca/en/recreation-and-parks",
    hours: "12:00 PM – 3:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 10, commuteKm: 5.0,
    rating: 4.8, ratingCount: 95,
    description: "FREE pool days every Monday from 12pm–3pm at City of Ottawa outdoor pools. No registration needed. Part of special summer events. Bring your own swimsuit and towel.",
    dates: "Every Monday, Jun 15 – Jul 27",
    scoreBreakdown: { cost: 100, commute: 90, coverage: 20, rating: 96, extras: 50 }
  },
  {
    id: 107, name: "Register Ottawa — Dance & Music Classes", provider: "City of Ottawa",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 17, color: "#F43F5E",
    address: "Various recreation centres across Ottawa",
    url: "https://anc.ca.apm.activecommunities.com/ottawa/home",
    hours: "Various (45–60 min sessions)", extendedCare: false, extendedHours: null,
    priceWeekly: 50, priceDaily: 10,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 6.0,
    rating: 4.2, ratingCount: 210,
    description: "City of Ottawa dance and music classes for kids and teens. Ballet, jazz, hip hop, guitar, and more. Sessions run in fall, winter, spring, and summer. Affordable rates with financial assistance available.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 80, commute: 85, coverage: 30, rating: 84, extras: 45 }
  },
  {
    id: 108, name: "Register Ottawa — Martial Arts Programs", provider: "City of Ottawa",
    type: "yearround", category: "martial_arts", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 16, color: "#DC2626",
    address: "Various recreation centres across Ottawa",
    url: "https://anc.ca.apm.activecommunities.com/ottawa/home",
    hours: "Various (45–60 min sessions)", extendedCare: false, extendedHours: null,
    priceWeekly: 55, priceDaily: 11,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 6.0,
    rating: 4.3, ratingCount: 98,
    description: "City of Ottawa martial arts programs for kids. Karate, taekwondo, and judo at recreation centres. Affordable rates with qualified instructors. Register via Register Ottawa.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 78, commute: 85, coverage: 30, rating: 86, extras: 40 }
  },
  {
    id: 109, name: "City of Ottawa — Free Summer Carnival", provider: "City of Ottawa",
    type: "summer", category: "free", city: "ottawa", province: "ON", startDate: "2026-07-18", endDate: "2026-07-18",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "City of Ottawa park (TBA)",
    url: "https://ottawa.ca/en/recreation-and-parks",
    hours: "10:00 AM – 3:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 6.0,
    rating: 4.7, ratingCount: 64,
    description: "FREE summer carnival event by City of Ottawa Parks & Recreation. Games, rides, activities, and fun for the whole family. Part of the city's special summer events lineup.",
    dates: "Jul 18, 2026",
    scoreBreakdown: { cost: 100, commute: 85, coverage: 30, rating: 94, extras: 60 }
  },
  {
    id: 110, name: "City of Ottawa — Free Magic Show", provider: "City of Ottawa",
    type: "summer", category: "free", city: "ottawa", province: "ON", startDate: "2026-07-11", endDate: "2026-07-11",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "City of Ottawa park (TBA)",
    url: "https://ottawa.ca/en/recreation-and-parks",
    hours: "11:00 AM – 12:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 6.0,
    rating: 4.8, ratingCount: 42,
    description: "FREE magic show for families by City of Ottawa Parks & Recreation. Outdoor family entertainment as part of the city's special summer events. No registration required.",
    dates: "Jul 11, 2026",
    scoreBreakdown: { cost: 100, commute: 85, coverage: 15, rating: 96, extras: 50 }
  },

  // ── INDOOR PLAYGROUNDS ──
  {
    id: 111, name: "Flying Squirrel Trampoline Park", provider: "Flying Squirrel Sports",
    type: "yearround", category: "playground", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 2, ageMax: 17, color: "#E8842C",
    address: "50 Slack Rd, Ottawa",
    url: "https://flyingsquirrelsports.ca/ottawa-ontario/",
    hours: "Open daily — varies by day", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 23,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 9.0,
    rating: 4.3, ratingCount: 1840,
    description: "Ottawa's premier indoor trampoline and adventure park. Foam pits, dodgeball, ninja course, climbing walls, and dedicated toddler area (6 and under at 50% off). Kids 2 and under free with paying adult. Neon Nights on Friday/Saturday evenings.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 65, commute: 78, coverage: 40, rating: 86, extras: 60 }
  },
  {
    id: 112, name: "Mini Space Kids Club", provider: "Mini Space Kids Club",
    type: "yearround", category: "playground", city: "kanata", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "655 Kanata Ave, Unit J3-J4, Kanata",
    url: "https://minispacekidsclub.com/",
    hours: "Sun 9am–8pm, Mon–Thu 9:30am–7:30pm, Fri–Sat 9am–8pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 18,
    siblingDiscount: "Membership discounts available", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 14.0,
    rating: 4.5, ratingCount: 312,
    description: "Panda-themed indoor playground and party venue in Kanata. Multi-level play structures, slides, ball pits, and toddler zone. Onsite cafe and restaurant. Annual memberships available for savings. Adults $5.99.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 68, commute: 68, coverage: 45, rating: 90, extras: 50 }
  },
  {
    id: 113, name: "Little Monkeys", provider: "Little Monkeys Ottawa",
    type: "yearround", category: "playground", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 13, color: "#5DAE3B",
    address: "1650 Queensdale Ave, Ottawa",
    url: "https://littlemonkeysottawa.ca/",
    hours: "Mon–Sun 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 20,
    siblingDiscount: "Annual membership available", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 16, commuteKm: 10.0,
    rating: 4.4, ratingCount: 567,
    description: "Indoor playground with swings, slides, climbing structures, jumping pillow, roller rink, and tricycles. Toddlers (1–2) $15.99, kids (3–13) $19.99. Under 1 and adults free. Socks required (available for $2).",
    dates: "Open year-round",
    scoreBreakdown: { cost: 62, commute: 75, coverage: 42, rating: 88, extras: 55 }
  },
  {
    id: 114, name: "Bubblesea Adventures", provider: "Bubblesea Adventures",
    type: "yearround", category: "playground", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 18, color: "#2E8BC0",
    address: "1547 Merivale Rd, Ottawa (Emerald Plaza)",
    url: "https://bubbleseaadventures.com/",
    hours: "Mon–Fri 10am–7:30pm, Sat 10am–7:30pm, Sun 10am–6:30pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 22,
    siblingDiscount: "Annual sibling membership $129.99", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 10,
    rating: 4.3, ratingCount: 423,
    description: "Ocean-themed indoor playground on Merivale Rd. Multi-level play structures, slides, ball pits, and toddler area. Annual membership $159.99 or sibling rate $129.99. Birthday party packages available.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 60, commute: 82, coverage: 45, rating: 86, extras: 50 }
  },
  {
    id: 115, name: "Cosmic Adventures", provider: "Cosmic Adventures",
    type: "yearround", category: "playground", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#7B4EA3",
    address: "1373 Ogilvie Rd, Ottawa",
    url: "https://www.cosmicadventures.ca/",
    hours: "Open daily 9am–8:30pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 17,
    siblingDiscount: "Group rates available", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 8.5,
    rating: 4.2, ratingCount: 1250,
    description: "Ottawa's largest & safest indoor playground — 20,000 sq ft multi-level structure. Crawl, bounce, slide, and explore. Ages 0–12. $14–$20 per child, adults supervise free. Birthday parties and summer Camp Cosmic available.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 70, commute: 80, coverage: 50, rating: 84, extras: 55 }
  },
  {
    id: 116, name: "Funhaven Entertainment Centre", provider: "Funhaven",
    type: "yearround", category: "playground", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 17, color: "#E8842C",
    address: "1050 Baxter Rd, Ottawa (Nepean)",
    url: "https://www.funhaven.com/",
    hours: "Mon–Wed 11am–10pm, Thu–Fri 11am–12am, Sat 9am–12am, Sun 9am–10pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 30,
    siblingDiscount: "Credit packages for savings", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 16, commuteKm: 10.0,
    rating: 4.1, ratingCount: 2100,
    description: "Ottawa's premier 40,000+ sq ft indoor amusement centre. Laser tag, bumper cars, jungle gym, roller coaster, escape rooms ($30), VR experiences, arcade games, and dining. Credit system from $15 (40 credits). No admission fee.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 50, commute: 75, coverage: 55, rating: 82, extras: 65 }
  },

  // ── MORE TRAMPOLINE PARKS ──
  {
    id: 117, name: "Xtreme Trampoline Park", provider: "Xtreme Trampoline Park",
    type: "yearround", category: "playground", city: "kanata", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 17, color: "#E8842C",
    address: "50 Frank Nighbor Pl, Kanata",
    url: "https://www.xtpark.com/",
    hours: "Tue–Thu 4pm–9pm, Fri 4pm–12am, Sat 10am–12am, Sun 10am–8pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 22,
    siblingDiscount: "Party packages available", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 15.0,
    rating: 4.1, ratingCount: 890,
    description: "High-energy trampoline park in Kanata. Open jump, dodgeball, foam pits, and ninja course. Grip socks included. Big Bounce party packages with food and private room. Glow jump on Friday/Saturday nights.",
    dates: "Open year-round (closed Mondays)",
    scoreBreakdown: { cost: 60, commute: 68, coverage: 40, rating: 82, extras: 55 }
  },
  {
    id: 118, name: "Sky Zone Trampoline Park", provider: "Sky Zone",
    type: "yearround", category: "playground", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 2, ageMax: 17, color: "#2E8BC0",
    address: "2935 Conroy Rd, Ottawa",
    url: "https://www.skyzone.com/",
    hours: "Mon–Thu 10am–9pm, Fri 10am–11pm, Sat 10am–12am, Sun 10am–8pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 20,
    siblingDiscount: "N/A", earlyBird: "25% off online tickets with code JUMPS6",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 14, commuteKm: 9.0,
    rating: 4.2, ratingCount: 1450,
    description: "Wall-to-wall trampolines, Warrior Course, SkyHoops basketball, foam zone, and dedicated Toddler Zone. Birthday party packages available. Grip socks required (available for purchase).",
    dates: "Open year-round",
    scoreBreakdown: { cost: 62, commute: 82, coverage: 42, rating: 84, extras: 55 }
  },

  // ── SKATE & PLAY ──
  {
    id: 119, name: "Skate & Play", provider: "Skate & Play Ottawa",
    type: "yearround", category: "playground", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 17, color: "#F43F5E",
    address: "1101 Baxter Rd, Ottawa",
    url: "https://www.skate-play.com/",
    hours: "Various — check website", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 17,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 16, commuteKm: 10.0,
    rating: 4.5, ratingCount: 620,
    description: "Premium indoor roller skating rink with live DJs, arcade, VR games, pool tables, and EXIT Lounge restaurant. Summer camps ages 5–13 with skating, arcade, and crafts. Helmets required for kids under 12. Free parking.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 70, commute: 75, coverage: 45, rating: 90, extras: 60 }
  },

  // ── STEM SUMMER CAMPS ──
  {
    id: 120, name: "STEM Camp Ottawa", provider: "STEM Camp",
    type: "summer", category: "stem", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 4, ageMax: 13, color: "#EF4444",
    address: "Various Ottawa locations",
    url: "https://stemcamp.ca/ontario-camp-locations/summer-camp-ottawa/",
    hours: "9:00 AM – 4:00 PM", extendedCare: true, extendedHours: "8:00 AM – 5:00 PM",
    priceWeekly: 325, priceDaily: 75,
    siblingDiscount: "10% sibling discount", earlyBird: "Early bird pricing available",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 6.5,
    rating: 4.6, ratingCount: 245,
    description: "Not-for-profit STEM summer camp (since 2013). Coding with Minecraft, robot programming, model building, and science experiments. 4 themed weeks with unique programming. Ages 4–13 across multiple Ottawa locations.",
    dates: "Jul 6 – Aug 28, 2026",
    scoreBreakdown: { cost: 72, commute: 85, coverage: 80, rating: 92, extras: 70 }
  },
  {
    id: 121, name: "STEMquest Camps", provider: "STEMquest",
    type: "summer", category: "stem", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-21",
    ageMin: 5, ageMax: 14, color: "#EF4444",
    address: "Orléans, Ottawa",
    url: "https://www.stemquest.ca/summer-camp",
    hours: "9:00 AM – 4:00 PM", extendedCare: true, extendedHours: "8:00 AM – 5:30 PM",
    priceWeekly: 340, priceDaily: 78,
    siblingDiscount: "Sibling discounts available", earlyBird: "Early bird rates",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 12.0,
    rating: 4.7, ratingCount: 167,
    description: "LEGO, Minecraft, Robotics, Coding, 3D printing, and Augmented Reality camps in Orléans. Each week dives deep into different STEM themes. Also offers holiday and PD day camps. Birthday parties available.",
    dates: "Jul 6 – Aug 21, 2026",
    scoreBreakdown: { cost: 68, commute: 72, coverage: 80, rating: 94, extras: 72 }
  },
  {
    id: 122, name: "Orange STEM Education Camps", provider: "Orange STEM Education",
    type: "summer", category: "stem", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 5, ageMax: 14, color: "#E8842C",
    address: "Various (Chelsea to Orléans)",
    url: "https://orangestem.ca/pages/summer-camps-classes",
    hours: "9:00 AM – 4:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 310, priceDaily: 72,
    siblingDiscount: "Contact for details", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 14, commuteKm: 8.0,
    rating: 4.5, ratingCount: 198,
    description: "Ottawa's LEGO Engineering and Robotics leader for 20+ years. Robotics, Engineering, and Electronics camps at multiple locations from Chelsea to Old Ottawa South to Orléans. Hands-on building and coding.",
    dates: "Jul 6 – Aug 28, 2026",
    scoreBreakdown: { cost: 74, commute: 82, coverage: 78, rating: 90, extras: 65 }
  },
  {
    id: 123, name: "uOttawa Engineering Summer Camps", provider: "University of Ottawa",
    type: "summer", category: "stem", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-21",
    ageMin: 7, ageMax: 17, color: "#1B3A5C",
    address: "University of Ottawa campus + satellite locations",
    url: "https://www.uottawa.ca/faculty-engineering/outreach/summer-camps-kids",
    hours: "9:00 AM – 4:00 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 295, priceDaily: 68,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 8.0,
    rating: 4.6, ratingCount: 134,
    description: "University of Ottawa engineering outreach camps. Chemistry experiments, robotics, physics challenges, 3D modeling, and programming. Campus experience at uOttawa plus satellite locations in Orléans, Barrhaven, and west Ottawa.",
    dates: "Jul 6 – Aug 21, 2026",
    scoreBreakdown: { cost: 76, commute: 80, coverage: 78, rating: 92, extras: 60 }
  },

  // ── ESCAPE ROOMS ──
  {
    id: 124, name: "Escape Manor Junior", provider: "Escape Manor",
    type: "yearround", category: "escape_room", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 6, ageMax: 12, color: "#9B1C1C",
    address: "Barrhaven, Ottawa",
    url: "https://www.escapemanor.com/junior",
    hours: "Booking required — check website", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 19,
    siblingDiscount: "Birthday party package $210 (2 hrs)", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 16.0,
    rating: 4.6, ratingCount: 187,
    description: "Kid-designed escape rooms with three difficulty tiers by age (6–8, 8–10, 10–12). Safe, fun, age-appropriate puzzles. Birthday party packages include 2 hours for $210. Located in Barrhaven.",
    dates: "Year-round, by reservation",
    scoreBreakdown: { cost: 62, commute: 65, coverage: 25, rating: 92, extras: 55 }
  },
  {
    id: 125, name: "Unlocked Ottawa — Family Escape Rooms", provider: "Unlocked Ottawa",
    type: "yearround", category: "escape_room", city: "kanata", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 7, ageMax: 17, color: "#9B1C1C",
    address: "Kanata, Ottawa",
    url: "https://unlockedottawa.com/",
    hours: "Booking required — check website", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 25,
    siblingDiscount: "Kids 7 and under free", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 14.0,
    rating: 4.7, ratingCount: 312,
    description: "Family-friendly escape rooms in Kanata. Non-threatening themes, no jump scares, no dark rooms. Customizable difficulty from Kids Mode to Expert Mode. 4 difficulty levels. Children 7 and under play free.",
    dates: "Year-round, by reservation",
    scoreBreakdown: { cost: 58, commute: 68, coverage: 25, rating: 94, extras: 60 }
  },
  {
    id: 126, name: "Lockdown Ottawa Escape Rooms", provider: "Lockdown Ottawa",
    type: "yearround", category: "escape_room", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 6, ageMax: 17, color: "#9B1C1C",
    address: "Ottawa (multiple locations)",
    url: "https://lockdownottawa.ca/",
    hours: "Booking required — check website", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 16,
    siblingDiscount: "Per-room pricing ($89–$129 for up to 8 players)", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 14, commuteKm: 8.0,
    rating: 4.5, ratingCount: 534,
    description: "Best-value escape rooms in Ottawa — charged per room ($89–$129), not per person. With 8 players that's ~$16 each. Ages 6+, exit always unlocked for safety. Multiple themed rooms available.",
    dates: "Year-round, by reservation",
    scoreBreakdown: { cost: 70, commute: 82, coverage: 25, rating: 90, extras: 55 }
  },

  // ── MUSEUMS ──
  {
    id: 127, name: "Canadian Museum of Nature", provider: "Canadian Museum of Nature",
    type: "yearround", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "240 McLeod St, Ottawa",
    url: "https://nature.ca/en/visit-us/",
    hours: "Daily 10am–5pm (Thu until 8pm)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 17,
    siblingDiscount: "Family pass available", earlyBird: "Free Thu 5–8pm, kids free Jun 19–Sep 7",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 7.0,
    rating: 4.6, ratingCount: 3200,
    description: "Castle-like museum with dinosaur replicas, whale skeletons, Arctic gallery, mammals, minerals, birds, and insects. Kids free during summer (Jun 19–Sep 7). Free Thursday evenings 5–8pm year-round. Interactive exhibits for all ages.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 70, commute: 82, coverage: 40, rating: 92, extras: 65 }
  },
  {
    id: 128, name: "Canada Science & Technology Museum", provider: "Ingenium",
    type: "yearround", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#1AA5A0",
    address: "1867 St Laurent Blvd, Ottawa",
    url: "https://ingeniumcanada.org/scitech",
    hours: "Daily 9am–5pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 17,
    siblingDiscount: "Family pass available", earlyBird: "Kids free Jun 19–Sep 7",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 8.5,
    rating: 4.5, ratingCount: 2800,
    description: "Interactive hands-on science museum. Giant locomotives, Crazy Kitchen, robotics, space exploration, and state-of-the-art exhibits. Kids free during summer. Part of Ingenium — Canada's Museums of Science and Innovation.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 70, commute: 80, coverage: 42, rating: 90, extras: 60 }
  },
  {
    id: 129, name: "Canadian Museum of History & Children's Museum", provider: "Canadian Museum of History",
    type: "yearround", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "100 Laurier St, Gatineau",
    url: "https://www.historymuseum.ca/childrens-museum",
    hours: "Daily 9:30am–5pm (Thu until 8pm)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 20,
    siblingDiscount: "Family pass available", earlyBird: "Kids free Jun 19–Sep 7",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 8.0,
    rating: 4.7, ratingCount: 4100,
    description: "Canada's most visited museum. Home to the Canadian Children's Museum where kids travel the world through interactive exhibits, toys, and games. Totem poles, First Peoples Hall, and Canadian history. Kids free in summer.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 65, commute: 80, coverage: 45, rating: 94, extras: 60 }
  },
  {
    id: 130, name: "Canada Aviation & Space Museum", provider: "Ingenium",
    type: "yearround", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#1B3A5C",
    address: "11 Aviation Pkwy, Ottawa",
    url: "https://ingeniumcanada.org/aviation",
    hours: "Daily 9am–5pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 17,
    siblingDiscount: "Family pass available", earlyBird: "Kids free Jun 19–Sep 7",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 16, commuteKm: 10.0,
    rating: 4.5, ratingCount: 1900,
    description: "Over 130 aircraft and space artifacts. Flight simulators, hands-on exhibits, and aviation history. Kids free during summer (Jun 19–Sep 7). Part of Ingenium. Biplane rides available seasonally.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 70, commute: 75, coverage: 42, rating: 90, extras: 55 }
  },

  // ── GOOPEE THE CLOWN ──
  {
    id: 131, name: "Goopee the Clown — Family Entertainment", provider: "Goopee's Fun Family Entertainment",
    type: "yearround", category: "events", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 2, ageMax: 12, color: "#F59E0B",
    address: "Ottawa & Gatineau (mobile service)",
    url: "http://www.goopee.com/",
    hours: "By booking", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 175,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 0, commuteKm: 0,
    rating: 4.8, ratingCount: 340,
    description: "Ottawa's beloved kids' entertainer for 25+ years. Comedy magic shows with a friendly bunny, face painting, balloon twisting, and balloon-o-grams. Perfect for birthday parties, school BBQs, and community events. Call 613-749-9999.",
    dates: "Year-round, by booking",
    scoreBreakdown: { cost: 45, commute: 100, coverage: 20, rating: 96, extras: 70 }
  },

  // ── EXPLORATION / PLAY LOUNGE ──
  {
    id: 132, name: "Kids Kingdom — Indoor Playground", provider: "Kids Kingdom",
    type: "yearround", category: "playground", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#F59E0B",
    address: "Orléans & Kanata locations",
    url: "https://www.chatterblock.com/articles/676/top-indoor-playgrounds-in-ottawa/",
    hours: "Daily 10am–7pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 16,
    siblingDiscount: "Membership passes available", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 12.0,
    rating: 4.3, ratingCount: 290,
    description: "Two locations — Orléans and Kanata. Large multi-level play structures to climb, jump, slide, and explore. Toddler zones, slides, tunnels, and ball pits. Birthday party packages available.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 72, commute: 72, coverage: 42, rating: 86, extras: 50 }
  },
  {
    id: 133, name: "My Gym Ottawa — Kids Fitness & Play", provider: "My Gym",
    type: "yearround", category: "playground", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 10, color: "#5DAE3B",
    address: "Barrhaven, Ottawa",
    url: "https://www.mygym.com/",
    hours: "Various class times", extendedCare: false, extendedHours: null,
    priceWeekly: 30, priceDaily: 15,
    siblingDiscount: "Trial class available", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 14.0,
    rating: 4.4, ratingCount: 156,
    description: "Structured play and fitness classes for babies through age 10 in Barrhaven. Rolling, climbing, bouncing, and gymnastics-style activities. Membership program with trial class option. Age-appropriate programming.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 68, commute: 68, coverage: 35, rating: 88, extras: 55 }
  },

  // ── BARRHAVEN NEIGHBOURHOOD PARKS ──
  {
    id: 154, name: "Guinness Park", provider: "City of Ottawa",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#5DAE3B",
    address: "120 Ramsgrange St, Barrhaven",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 5, commuteKm: 2.5,
    rating: 4.4, ratingCount: 180,
    description: "Well-maintained Half Moon Bay neighbourhood park with playground, splash pad, shaded gazebo seating for parents, soccer field, and tennis. Great for frisbee and picnics. Free.",
    dates: "Open year-round (splash pad May–Sep)",
    scoreBreakdown: { cost: 100, commute: 65, coverage: 40, rating: 88, extras: 50 }
  },
  {
    id: 155, name: "Cappamore Park", provider: "City of Ottawa",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#5DAE3B",
    address: "725 Cappamore Dr, Barrhaven",
    url: "https://engage.ottawa.ca/cappamore-park",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 6, commuteKm: 3,
    rating: 4.3, ratingCount: 120,
    description: "3-hectare Barrhaven park with modern play equipment, full-sized lit baseball diamond, shade shelter, benches, accessible pathways, and tree-lined green space. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 65, coverage: 38, rating: 86, extras: 45 }
  },
  {
    id: 156, name: "Half Moon Bay Park", provider: "City of Ottawa",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#5DAE3B",
    address: "3525 Cambrian Rd, Barrhaven",
    url: "https://hmbca.ca/your-community/parks/",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 4, commuteKm: 2,
    rating: 4.5, ratingCount: 250,
    description: "Scenic Barrhaven park with paved walkway around a lake, large kids' play area, big pavilion with picnic tables, and connecting trails into surrounding neighbourhoods. Beautiful for walks and family outings. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 68, coverage: 42, rating: 90, extras: 55 }
  },
  {
    id: 157, name: "River Mist Park", provider: "City of Ottawa",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#5DAE3B",
    address: "2520 River Mist Rd, Barrhaven",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 7, commuteKm: 3.5,
    rating: 4.3, ratingCount: 140,
    description: "Neighbourhood park near the Minto Recreation Complex in Barrhaven. Playground, open green space, and walking paths. Convenient location close to shops and recreation facilities. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 68, coverage: 35, rating: 86, extras: 45 }
  },
  {
    id: 158, name: "Black Raven Park", provider: "City of Ottawa",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#5DAE3B",
    address: "675 Dundonald Dr, Barrhaven",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 8, commuteKm: 4,
    rating: 4.5, ratingCount: 210,
    description: "Popular Barrhaven park with new playground (structures for ages 2–5 and 5–8), ground-level splash pad perfect for little kids, fitness climbing installation, soccer field, basketball courts, and winter rink. Free.",
    dates: "Open year-round (splash pad May–Sep)",
    scoreBreakdown: { cost: 100, commute: 65, coverage: 45, rating: 90, extras: 55 }
  },

  // ── PUBLIC PARKS ──
  {
    id: 134, name: "Mooney's Bay Park & Giver 150 Playground", provider: "City of Ottawa",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "2960 Riverside Dr, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 10,
    rating: 4.6, ratingCount: 2800,
    description: "Home to the iconic Giver 150 Playground — a massive, accessible, Canada-themed play space that kids helped design. 20 play structures representing provinces and regions. Beach, splash pad, Terry Fox Stadium, picnic areas, and Rideau River trails. Free.",
    dates: "Open year-round (beach supervised Jun 20–Aug 30)",
    scoreBreakdown: { cost: 100, commute: 82, coverage: 50, rating: 92, extras: 70 }
  },
  {
    id: 135, name: "Andrew Haydon Park", provider: "City of Ottawa",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "3169 Carling Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.5, ratingCount: 1950,
    description: "Beautiful Ottawa River park with resident swans, nature-themed splash pad (wooden structures, mud play), playground with slides/swings/climbing frames, washrooms, parking, and stunning river views. Free.",
    dates: "Open year-round (splash pad May–Sep)",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 45, rating: 90, extras: 60 }
  },
  {
    id: 136, name: "Brewer Park", provider: "City of Ottawa",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "200 Brewer Way, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 15,
    rating: 4.5, ratingCount: 1600,
    description: "One of Ottawa's most activity-rich parks. Three different play structures, seasonal splash pad with water cannons and tipping buckets, skate park, sports fields, dog-friendly off-leash area, and Rideau River access. Free.",
    dates: "Open year-round (splash pad May–Sep)",
    scoreBreakdown: { cost: 100, commute: 85, coverage: 50, rating: 90, extras: 65 }
  },
  {
    id: 137, name: "Millennium Park", provider: "City of Ottawa",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "100 Charlie Rogers Pl, Orléans",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 30, commuteKm: 25,
    rating: 4.6, ratingCount: 1400,
    description: "East Ottawa gem with two giant play structures — a wooden pirate ship and a Parliament Buildings replica with two-story slides. Splash pad, expansive green spaces, sports fields, and picnic areas. Free.",
    dates: "Open year-round (splash pad May–Sep)",
    scoreBreakdown: { cost: 100, commute: 68, coverage: 48, rating: 92, extras: 60 }
  },
  {
    id: 138, name: "Westboro Kiwanis Park", provider: "City of Ottawa",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "417 Byron Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 21, commuteKm: 17,
    rating: 4.5, ratingCount: 980,
    description: "Trendy Westboro park with unique climbing structures, accessibility features, swings, slides, and large green space. Near shops and cafés on Richmond Rd. Perfect for a family outing. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 80, coverage: 40, rating: 90, extras: 55 }
  },
  {
    id: 139, name: "Hog's Back Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "165 Meandering Brook Dr, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 10,
    rating: 4.6, ratingCount: 2100,
    description: "One of Ottawa's most visited parks. Impressive waterfalls and historic Rideau Canal dam. Hiking trails, picnic areas, wide green spaces along the Rideau River. Great for nature walks with kids. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 82, coverage: 40, rating: 92, extras: 55 }
  },


  // ── MORE OTTAWA PARKS & NATURE ──
  {
    id: 159, name: "Lansdowne Park Playground", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "1015 Bank St, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.7, ratingCount: 3200,
    description: "Major urban park with modern adventure playground, Farmers' Market (Sundays), TD Place stadium, restaurants, and Rideau Canal access. Multiple play structures for ages 2–12. Winter skating on the canal. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 88, coverage: 55, rating: 94, extras: 75 }
  },
  {
    id: 160, name: "Strathcona Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "27 Range Rd, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 20,
    rating: 4.5, ratingCount: 1100,
    description: "Peaceful Sandy Hill park along the Rideau River. Large open fields, playground, wading pool, and mature trees for shade. Popular for picnics and frisbee. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 85, coverage: 40, rating: 90, extras: 50 }
  },
  {
    id: 161, name: "Confederation Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "211 Laurier Ave W, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.4, ratingCount: 890,
    description: "Downtown park across from City Hall. Fountain, heritage monuments, shade trees. Site of Winterlude ice sculptures and summer festivals. Near Rideau Canal. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 90, coverage: 35, rating: 88, extras: 55 }
  },
  {
    id: 162, name: "Major's Hill Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "Mackenzie Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 24, commuteKm: 19,
    rating: 4.6, ratingCount: 2400,
    description: "NCC park overlooking Parliament Hill and the Ottawa River. Site of Canada Day main stage, tulip festival displays, and summer concerts. Playground, open lawns, stunning views. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 88, coverage: 40, rating: 92, extras: 65 }
  },
  {
    id: 163, name: "Vincent Massey Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "340 Heron Rd, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 16, commuteKm: 12,
    rating: 4.5, ratingCount: 1800,
    description: "Large NCC park along the Rideau River. Picnic shelters (reservable), playground, nature trails, open fields, and canoe/kayak launch. Popular for family BBQs and group events. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 85, coverage: 45, rating: 90, extras: 60 }
  },
  {
    id: 164, name: "Dick Bell Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "1001 Greenview Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 20,
    rating: 4.3, ratingCount: 950,
    description: "Ottawa River waterfront park near Britannia. Boat launch, fishing pier, playground, picnic tables, and wide-open green space. Views of the Gatineau Hills. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 75, coverage: 38, rating: 86, extras: 52 }
  },
  {
    id: 165, name: "Hintonburg Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "1064 Wellington St W, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.4, ratingCount: 680,
    description: "Neighbourhood park in trendy Hintonburg with playground, splash pad, basketball court, and community garden. Near Parkdale Market and Wellington West shops. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 82, coverage: 42, rating: 88, extras: 55 }
  },
  {
    id: 166, name: "Fisher Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "250 Holland Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 21, commuteKm: 17,
    rating: 4.3, ratingCount: 540,
    description: "Community park with playground, wading pool, sports fields, and Fisher Park Community Centre. Near Holland Ave shops. Great for after-school play. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 84, coverage: 40, rating: 86, extras: 50 }
  },
  {
    id: 167, name: "Claudette Cain Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "660 River Rd, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 8,
    rating: 4.5, ratingCount: 720,
    description: "Popular Barrhaven/Riverside South park with large off-leash dog area, playground, toboggan hill, walking trails along Rideau River, and sports fields. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 75, coverage: 42, rating: 90, extras: 55 }
  },
  {
    id: 168, name: "Jack Purcell Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "320 Jack Purcell Ln, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.3, ratingCount: 420,
    description: "Centretown park with playground, wading pool, basketball court, and Jack Purcell Community Centre. Central location near Elgin St. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 90, coverage: 40, rating: 86, extras: 48 }
  },
  {
    id: 169, name: "McNabb Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "580 Percy St, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.3, ratingCount: 380,
    description: "Centretown park with outdoor rink (winter), sports fields, playground, and McNabb Community Centre. Summer camps and drop-in programs available. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 88, coverage: 42, rating: 86, extras: 50 }
  },
  {
    id: 170, name: "Stanley Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "17 Stanley Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 20,
    rating: 4.5, ratingCount: 560,
    description: "Charming New Edinburgh park with splash pad, playground, sports fields, and mature shade trees. Near Rideau Hall and Sussex Drive. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 85, coverage: 42, rating: 90, extras: 52 }
  },
  {
    id: 171, name: "Carlington Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "1675 Merivale Rd, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 10,
    rating: 4.2, ratingCount: 450,
    description: "Large park with toboggan hill (one of the city's best), sports fields, playground, and trail connections. Adjacent to Carlington Heights community. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 82, coverage: 40, rating: 84, extras: 48 }
  },
  {
    id: 172, name: "Rockcliffe Park & Lookout", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "Acacia Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 28, commuteKm: 22,
    rating: 4.6, ratingCount: 1400,
    description: "Beautiful NCC park in historic Rockcliffe Village. Panoramic Ottawa River lookout, walking trails, the Rockeries gardens, and wide-open green space. Near RCMP Stables. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 82, coverage: 38, rating: 92, extras: 55 }
  },
  {
    id: 173, name: "Hampton Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "695 Industrial Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 14,
    rating: 4.3, ratingCount: 380,
    description: "South Ottawa park with large playground, splash pad, baseball diamond, soccer fields, and wooded trails. Adjacent to Hampton Park Community Centre. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 80, coverage: 42, rating: 86, extras: 50 }
  },
  {
    id: 174, name: "Kanata Centrum Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "700 Eagleson Rd, Kanata",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 15,
    rating: 4.4, ratingCount: 620,
    description: "Modern Kanata park near shopping district with playground, walking paths, splash pad, sports fields. Close to Hazeldean Mall and restaurants. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 65, coverage: 42, rating: 88, extras: 52 }
  },
  {
    id: 175, name: "Bridlewood Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "75 Bridlewood Dr, Kanata",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.3, ratingCount: 340,
    description: "Family-friendly Kanata neighbourhood park with large playground, splash pad, skate park, tennis courts, and walking trails through a treed ravine. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 62, coverage: 42, rating: 86, extras: 50 }
  },
  {
    id: 176, name: "Woodroffe Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "170 Woodroffe Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 16, commuteKm: 12,
    rating: 4.2, ratingCount: 310,
    description: "West-end neighbourhood park with playground, sports fields, and proximity to Carlingwood shopping area. Quiet residential setting. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 85, coverage: 35, rating: 84, extras: 45 }
  },
  {
    id: 177, name: "Terry Fox Athletic Facility Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "2960 Haughton Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 10,
    rating: 4.4, ratingCount: 480,
    description: "South Ottawa sports park with track, sports fields, playground, and adjacent to Terry Fox centre. Popular for running and family outings. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 82, coverage: 40, rating: 88, extras: 48 }
  },
  {
    id: 178, name: "Greenboro Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "363 Lorry Greenberg Dr, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 14,
    rating: 4.3, ratingCount: 350,
    description: "South Ottawa park near transit station with playground, soccer fields, walking paths, and open green space. Near South Keys shopping. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 78, coverage: 38, rating: 86, extras: 45 }
  },
  {
    id: 179, name: "Ben Franklin Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "101 Centrepointe Dr, Nepean",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 10,
    rating: 4.4, ratingCount: 560,
    description: "Large Nepean park with Ben Franklin Place library, playground, splash pad, sports fields, fitness trail, and community gathering spaces. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 80, coverage: 45, rating: 88, extras: 55 }
  },
  {
    id: 180, name: "Lemieux Island Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "100 Lemieux Island Rd, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 24, commuteKm: 19,
    rating: 4.5, ratingCount: 620,
    description: "Hidden gem on an Ottawa River island accessible by footbridge. Nature trails, bird watching, and peaceful green space surrounded by river views. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 85, coverage: 35, rating: 90, extras: 52 }
  },
  {
    id: 181, name: "Billings Estate Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "2100 Cabot St, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 14,
    rating: 4.4, ratingCount: 480,
    description: "Historic park surrounding Billings Estate National Historic Site. Heritage buildings, gardens, playground, and Rideau River trails. Museum open seasonally. Free park access.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 84, coverage: 40, rating: 88, extras: 55 }
  },
  {
    id: 182, name: "Pinhey's Point Historic Site", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "270 Pinhey's Point Rd, Dunrobin",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 40, commuteKm: 35,
    rating: 4.6, ratingCount: 380,
    description: "Historic NCC property on the Ottawa River. Heritage stone buildings, picnic grounds, river beach, nature trails, and interpretive programs. Beautiful countryside setting. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 45, coverage: 35, rating: 92, extras: 52 }
  },
  {
    id: 183, name: "Mer Bleue Bog Trail", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "Dolman Ridge Rd, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 28, commuteKm: 22,
    rating: 4.7, ratingCount: 1600,
    description: "NCC conservation area with boardwalk trail through a rare boreal bog ecosystem. Interpretive signs, bird watching, and nature photography. 1.2 km accessible boardwalk loop. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 68, coverage: 30, rating: 94, extras: 50 }
  },
  {
    id: 184, name: "Petrie Island Park", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "795 Tweddle Rd, Cumberland",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 35, commuteKm: 30,
    rating: 4.5, ratingCount: 1400,
    description: "East-end nature park with three beaches, wetland nature trails, bird-watching platforms, canoe/kayak launch, and playground. Environmental Learning Centre. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 65, coverage: 45, rating: 90, extras: 58 }
  },
  {
    id: 185, name: "Dominion Arboretum", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "The Driveway, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 16,
    rating: 4.6, ratingCount: 1200,
    description: "Beautiful green space along the Rideau Canal with 2,000+ tree species, walking paths, and scenic views. Perfect for nature walks and learning about trees. Adjacent to Dow's Lake. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 88, coverage: 35, rating: 92, extras: 52 }
  },
  {
    id: 186, name: "Mud Lake (Britannia Conservation Area)", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "450 Cassels St, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 20,
    rating: 4.5, ratingCount: 880,
    description: "Urban nature conservation area with woodland trails, wetlands, and Mud Lake. Over 220 bird species spotted. Popular with families for nature walks and wildlife watching. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 75, coverage: 35, rating: 90, extras: 50 }
  },
  {
    id: 187, name: "Corkstown Footbridge & Dow's Lake Pavilion", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "1001 Queen Elizabeth Dr, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 16,
    rating: 4.5, ratingCount: 1900,
    description: "Scenic Dow's Lake area with walking/cycling paths, Rideau Canal views, pedal boat rentals (summer), ice skating (winter), and the iconic Pavilion restaurant. Free park access.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 88, coverage: 40, rating: 90, extras: 60 }
  },
  {
    id: 188, name: "Carp Ridge & Crazy Horse Trail", provider: "City of Ottawa / NCC",
    type: "yearround", category: "park", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "2386 Thomas Dolan Pkwy, Carp",
    url: "https://ottawa.ca/en/recreation-and-parks/outdoor-recreation/parks-and-green-space",
    hours: "Dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 45, commuteKm: 40,
    rating: 4.4, ratingCount: 520,
    description: "West Ottawa nature area with family-friendly hiking trails through mixed forest and over rocky ridges. Scenic lookouts and creek crossings. Great for outdoor exploration. Free.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 100, commute: 50, coverage: 30, rating: 88, extras: 45 }
  },

  // ── SPLASHPADS ──
  {
    id: 140, name: "Walter Baker Splash Pad", provider: "City of Ottawa",
    type: "seasonal", category: "splashpad", city: "kanata", province: "ON", startDate: "2026-05-16", endDate: "2026-09-20",
    ageMin: 0, ageMax: 12, color: "#2E8BC0",
    address: "100 Walter Baker Pl, Kanata",
    url: "https://ottawasplashpads.ca/urban-water-park/walter-baker-park-splashpad/",
    hours: "9:00 AM – 9:00 PM daily", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 15,
    rating: 4.4, ratingCount: 320,
    description: "Popular Kanata splash pad with water cannon, tall dome, and four fountain sprays. Ideal for preschoolers and toddlers. Surrounded by mature trees for shade. Washrooms and parking on-site. Free.",
    dates: "May 16 – Sep 20, 2026",
    scoreBreakdown: { cost: 100, commute: 68, coverage: 30, rating: 88, extras: 50 }
  },
  {
    id: 141, name: "Centrepointe Park Splash Pad", provider: "City of Ottawa",
    type: "seasonal", category: "splashpad", city: "ottawa", province: "ON", startDate: "2026-05-16", endDate: "2026-09-20",
    ageMin: 0, ageMax: 12, color: "#2E8BC0",
    address: "260 Centrepointe Dr, Nepean",
    url: "https://ottawasplashpads.ca/urban-water-park/centrepointe-park-splashpad/",
    hours: "9:00 AM – 9:00 PM daily", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 10,
    rating: 4.3, ratingCount: 280,
    description: "Large splash pad in Centrepointe Park with interactive water features, playground, and green space. Near Ben Franklin Library. Adjacent to the Nepean Trail system. Free.",
    dates: "May 16 – Sep 20, 2026",
    scoreBreakdown: { cost: 100, commute: 80, coverage: 30, rating: 86, extras: 48 }
  },
  {
    id: 142, name: "Cardinal Creek Splash Pad", provider: "City of Ottawa",
    type: "seasonal", category: "splashpad", city: "ottawa", province: "ON", startDate: "2026-05-16", endDate: "2026-09-20",
    ageMin: 0, ageMax: 12, color: "#2E8BC0",
    address: "Cardinal Creek Community Park, Orléans",
    url: "https://ottawasplashpads.ca/",
    hours: "9:00 AM – 9:00 PM daily", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 32, commuteKm: 28,
    rating: 4.4, ratingCount: 210,
    description: "Popular east-end splash pad in Cardinal Creek Community Park. Interactive water features, playground, sports fields, and walking trails. Family-friendly neighbourhood park. Free.",
    dates: "May 16 – Sep 20, 2026",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 30, rating: 88, extras: 45 }
  },

  // ── BEACH PARKS ──
  {
    id: 143, name: "Mooney's Bay Beach", provider: "City of Ottawa",
    type: "seasonal", category: "beach", city: "ottawa", province: "ON", startDate: "2026-06-20", endDate: "2026-08-30",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "2960 Riverside Dr, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/parks-facilities-and-rentals/outdoor-recreation/water-activities/beaches/overview-and-hours",
    hours: "Supervised noon – 7:00 PM daily", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 14, commuteKm: 10,
    rating: 4.3, ratingCount: 1200,
    description: "Ottawa's only public Rideau River beach. Large sandy area great for sandcastle building. Lifeguard supervised, lifejacket loaner program, washrooms. Adjacent to Giver 150 Playground. Free.",
    dates: "Jun 20 – Aug 30, 2026 (supervised)",
    scoreBreakdown: { cost: 100, commute: 82, coverage: 30, rating: 86, extras: 55 }
  },
  {
    id: 144, name: "Britannia Beach Park", provider: "City of Ottawa",
    type: "seasonal", category: "beach", city: "ottawa", province: "ON", startDate: "2026-06-20", endDate: "2026-08-30",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "2805 Carling Ave, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/parks-facilities-and-rentals/outdoor-recreation/water-activities/beaches/overview-and-hours",
    hours: "Supervised noon – 7:00 PM daily", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.4, ratingCount: 1600,
    description: "Scenic Ottawa River beach with wide sandy stretch, playground, and pavilion washrooms. Lifeguard supervised with lifejacket loaner program. Beautiful sunset views. Near Britannia Village shops. Free.",
    dates: "Jun 20 – Aug 30, 2026 (supervised)",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 30, rating: 88, extras: 55 }
  },
  {
    id: 145, name: "Petrie Island Beach", provider: "City of Ottawa",
    type: "seasonal", category: "beach", city: "ottawa", province: "ON", startDate: "2026-06-20", endDate: "2026-08-30",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "795 Tweddle Rd, Cumberland",
    url: "https://www.petrieisland.org/beaches",
    hours: "Supervised noon – 7:00 PM daily", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 35, commuteKm: 30,
    rating: 4.5, ratingCount: 1100,
    description: "Three beaches on the Ottawa River in Orléans/Cumberland — North Beach, East Bay Beach, and a small family beach for young children. Nature trails, bird-watching, canoe/kayak launch. Lifejacket loaner program. Free.",
    dates: "Jun 20 – Aug 30, 2026 (supervised)",
    scoreBreakdown: { cost: 100, commute: 65, coverage: 35, rating: 90, extras: 58 }
  },
  {
    id: 146, name: "Westboro Beach", provider: "NCC",
    type: "seasonal", category: "beach", city: "ottawa", province: "ON", startDate: "2026-06-20", endDate: "2026-08-30",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "745 Kichi Zībī Mīkan, Ottawa",
    url: "https://ncc-ccn.gc.ca/places/westboro-beach",
    hours: "Dawn to dusk (NCC managed)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.4, ratingCount: 1800,
    description: "Popular NCC-managed Ottawa River beach in trendy Westboro. Sandy beach, volleyball courts, picnic area. Near shops, cafés, and transit. Beautiful sunset spot. Water quality tested daily by Ottawa Public Health. Free.",
    dates: "Jun 20 – Aug 30, 2026 (supervised)",
    scoreBreakdown: { cost: 100, commute: 80, coverage: 30, rating: 88, extras: 55 }
  },


  // ── ONTARIO BEACHES ──
  {
    id: 189, name: "Wasaga Beach", provider: "Ontario Parks / Municipal",
    type: "seasonal", category: "beach", city: "wasaga beach", province: "ON", startDate: "2026-06-01", endDate: "2026-09-15",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "Wasaga Beach, ON",
    url: "https://www.ontarioparks.ca",
    hours: "Dawn to dusk (lifeguards seasonal)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 270, commuteKm: 380,
    rating: 4.4, ratingCount: 8500,
    description: "World's longest freshwater beach — 14 km of sandy Lake Huron shoreline. Shallow warm water perfect for young kids. Beach areas 1–6 with washrooms, lifeguards, concessions. Splash pad at Area 1. Provincial Park. Parking $12–22/day.",
    dates: "Jun – Sep 2026",
    scoreBreakdown: { cost: 100, commute: 10, coverage: 50, rating: 88, extras: 65 }
  },
  {
    id: 190, name: "Sandbanks Provincial Park — Outlet Beach", provider: "Ontario Parks / Municipal",
    type: "seasonal", category: "beach", city: "prince edward county", province: "ON", startDate: "2026-06-01", endDate: "2026-09-15",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "3004 County Rd 12, Picton, ON",
    url: "https://www.ontarioparks.ca",
    hours: "Dawn to dusk (lifeguards seasonal)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 21,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 210, commuteKm: 290,
    rating: 4.7, ratingCount: 6200,
    description: "Stunning Lake Ontario beach with towering sand dunes — the world's largest freshwater baymouth bar. Outlet Beach is calmest for families. Advance day-use reservations required in summer. Camping available. Day use $21/vehicle.",
    dates: "Jun – Sep 2026",
    scoreBreakdown: { cost: 75, commute: 12, coverage: 45, rating: 94, extras: 60 }
  },
  {
    id: 191, name: "Sauble Beach", provider: "Ontario Parks / Municipal",
    type: "seasonal", category: "beach", city: "sauble beach", province: "ON", startDate: "2026-06-01", endDate: "2026-09-15",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "609 Main St, Sauble Beach, ON",
    url: "https://www.ontarioparks.ca",
    hours: "Dawn to dusk (lifeguards seasonal)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 330, commuteKm: 460,
    rating: 4.5, ratingCount: 5800,
    description: "11 km of soft sand on Lake Huron. Very shallow water extending far from shore — ideal for toddlers and young swimmers. Main beach has lifeguards, washrooms, and nearby shops. Free. Parking $15–20/day.",
    dates: "Jun – Sep 2026",
    scoreBreakdown: { cost: 100, commute: 8, coverage: 45, rating: 90, extras: 58 }
  },
  {
    id: 192, name: "Grand Bend Main Beach", provider: "Ontario Parks / Municipal",
    type: "seasonal", category: "beach", city: "grand bend", province: "ON", startDate: "2026-06-01", endDate: "2026-09-15",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "72 Ontario St S, Grand Bend, ON",
    url: "https://www.ontarioparks.ca",
    hours: "Dawn to dusk (lifeguards seasonal)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 300, commuteKm: 420,
    rating: 4.5, ratingCount: 4200,
    description: "Blue Flag certified Lake Huron beach with warm, shallow water. Playground and splash pad nearby. Sunset views are spectacular. Main strip has ice cream shops and restaurants. Free. Parking $15–20/day.",
    dates: "Jun – Sep 2026",
    scoreBreakdown: { cost: 100, commute: 10, coverage: 45, rating: 90, extras: 60 }
  },
  {
    id: 193, name: "Cobourg Beach (Victoria Park)", provider: "Ontario Parks / Municipal",
    type: "seasonal", category: "beach", city: "cobourg", province: "ON", startDate: "2026-06-01", endDate: "2026-09-15",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "55 King St W, Cobourg, ON",
    url: "https://www.ontarioparks.ca",
    hours: "Dawn to dusk (lifeguards seasonal)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 180, commuteKm: 280,
    rating: 4.6, ratingCount: 3800,
    description: "Award-winning Lake Ontario beach adjacent to beautiful Victoria Park with splash pad, playground, and bandshell. Wide sandy beach with lifeguards. Downtown shops walking distance. Free. Parking $5–15/day.",
    dates: "Jun – Sep 2026",
    scoreBreakdown: { cost: 100, commute: 15, coverage: 48, rating: 92, extras: 62 }
  },
  {
    id: 194, name: "Port Dover Beach", provider: "Ontario Parks / Municipal",
    type: "seasonal", category: "beach", city: "port dover", province: "ON", startDate: "2026-06-01", endDate: "2026-09-15",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "1 Walker St, Port Dover, ON",
    url: "https://www.ontarioparks.ca",
    hours: "Dawn to dusk (lifeguards seasonal)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 330, commuteKm: 470,
    rating: 4.3, ratingCount: 2600,
    description: "Charming Lake Erie beach town. Warm shallow water (Erie is the shallowest Great Lake). Sandy beach with lifeguards, lighthouse pier, and family-friendly fish & chips restaurants. Free. Free parking available.",
    dates: "Jun – Sep 2026",
    scoreBreakdown: { cost: 100, commute: 8, coverage: 40, rating: 86, extras: 55 }
  },
  {
    id: 195, name: "Turkey Point Provincial Park Beach", provider: "Ontario Parks / Municipal",
    type: "seasonal", category: "beach", city: "turkey point", province: "ON", startDate: "2026-06-01", endDate: "2026-09-15",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "194 Turkey Point Rd, Turkey Point, ON",
    url: "https://www.ontarioparks.ca",
    hours: "Dawn to dusk (lifeguards seasonal)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 21,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 320, commuteKm: 450,
    rating: 4.5, ratingCount: 2200,
    description: "Long Lake Erie beach with sandbars creating natural wading pools — perfect for small children. Provincial park with camping, hiking trails, and nature programs. Warm water. Day use $21/vehicle.",
    dates: "Jun – Sep 2026",
    scoreBreakdown: { cost: 75, commute: 8, coverage: 42, rating: 90, extras: 55 }
  },
  {
    id: 196, name: "Long Point Provincial Park", provider: "Ontario Parks / Municipal",
    type: "seasonal", category: "beach", city: "port rowan", province: "ON", startDate: "2026-06-01", endDate: "2026-09-15",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "350 Erie Blvd, Port Rowan, ON",
    url: "https://www.ontarioparks.ca",
    hours: "Dawn to dusk (lifeguards seasonal)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 21,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 340, commuteKm: 480,
    rating: 4.4, ratingCount: 1800,
    description: "UNESCO World Biosphere Reserve on a sandy spit extending into Lake Erie. Wide shallow beach, camping, nature trails, and incredible bird watching. Warm Lake Erie water. Great for nature-loving families. Day use $21/vehicle.",
    dates: "Jun – Sep 2026",
    scoreBreakdown: { cost: 75, commute: 8, coverage: 42, rating: 88, extras: 55 }
  },
  {
    id: 197, name: "Crystal Beach (Ridgeway)", provider: "Ontario Parks / Municipal",
    type: "seasonal", category: "beach", city: "fort erie", province: "ON", startDate: "2026-06-01", endDate: "2026-09-15",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "340 Erie Rd, Fort Erie, ON",
    url: "https://www.ontarioparks.ca",
    hours: "Dawn to dusk (lifeguards seasonal)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 290, commuteKm: 450,
    rating: 4.4, ratingCount: 1600,
    description: "Crystal-clear Lake Erie beach near Niagara Falls. Fine white sand, shallow warm water, and small-town charm. Boardwalk with shops and eateries. Public washrooms and change rooms. Free. Parking $10–15/day.",
    dates: "Jun – Sep 2026",
    scoreBreakdown: { cost: 100, commute: 10, coverage: 38, rating: 88, extras: 52 }
  },
  {
    id: 198, name: "Sibbald Point Provincial Park", provider: "Ontario Parks / Municipal",
    type: "seasonal", category: "beach", city: "sutton", province: "ON", startDate: "2026-06-01", endDate: "2026-09-15",
    ageMin: 0, ageMax: 17, color: "#F59E0B",
    address: "26071 Park Rd, Sutton, ON",
    url: "https://www.ontarioparks.ca",
    hours: "Dawn to dusk (lifeguards seasonal)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 21,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 240, commuteKm: 350,
    rating: 4.4, ratingCount: 2400,
    description: "Lake Simcoe beach with shallow, calm water perfect for young swimmers. Sandy beach, playground, camping, and nature trails. Close to drive from Ottawa via Hwy 7. Day-use reservations recommended in summer. Day use $21/vehicle.",
    dates: "Jun – Sep 2026",
    scoreBreakdown: { cost: 75, commute: 12, coverage: 42, rating: 88, extras: 55 }
  },

  // ── FROM OTTAWAPARENTS.CA / OPL / JURASSIC KINGDOM ──

  // OPL Branch Programs
  {
    id: 199, name: "OPL Main — Family Storytime & LEGO Club", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#5DAE3B",
    address: "120 Metcalfe St, Ottawa, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Mon–Thu 10am–9pm, Fri–Sun 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 18,
    rating: 4.7, ratingCount: 3200,
    description: "Ottawa's flagship library branch with dedicated kids' zone. Weekly Family Storytime, LEGO Block Party drop-in, Chess Club, Stay 'n' Play, and STEAM programs. Gaming kiosks (PS4/Wii U). All programs free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 90, rating: 94, extras: 80 }
  },
  {
    id: 200, name: "OPL Ruth E. Dickinson — EarlyON Playgroup", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 6, color: "#5DAE3B",
    address: "100 Malvern Dr, Barrhaven, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Mon–Sat 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 8, commuteKm: 4,
    rating: 4.6, ratingCount: 1500,
    description: "Barrhaven's main library branch with EarlyON Baby Playgroup (Mondays), Homework Help, Parenting in Ottawa drop-in, and regular storytime sessions. Great for babies and toddlers. All programs free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 95, coverage: 88, rating: 92, extras: 78 }
  },
  {
    id: 201, name: "OPL Sunnyside — Crafternoon Drop-in", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 12, color: "#5DAE3B",
    address: "1049 Bank St, Ottawa, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Mon–Sat 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 16,
    rating: 4.5, ratingCount: 900,
    description: "Popular Old Ottawa South branch with weekly Crafternoon arts & crafts drop-in (Wednesdays 4pm), Family Storytime, and seasonal programs. Cozy kids' area. All free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 75, coverage: 82, rating: 90, extras: 75 }
  },
  {
    id: 202, name: "OPL Orléans — Youth Chess & Gaming", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 17, color: "#5DAE3B",
    address: "1705 Orléans Blvd, Orléans, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Mon–Sat 10am–9pm, Sun 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 40, commuteKm: 32,
    rating: 4.5, ratingCount: 1800,
    description: "East Ottawa's largest library with Youth Chess Club (Thursdays 3:30pm), PS4 gaming kiosk, STEM Storytime, Teen Tuesdays, and summer reading programs. All free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 55, coverage: 85, rating: 90, extras: 78 }
  },
  {
    id: 203, name: "OPL Greenboro — Chess Club & STEM Storytime", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 14, color: "#5DAE3B",
    address: "363 Lorry Greenberg Dr, Ottawa, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Mon–Sat 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 30, commuteKm: 22,
    rating: 4.4, ratingCount: 700,
    description: "South Ottawa branch with Chess Club (Mondays 6pm), STEM Storytime (Thursdays 4pm), gaming kiosks (PS4/Wii U), and regular kids' programs. All free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 68, coverage: 82, rating: 88, extras: 75 }
  },
  {
    id: 204, name: "OPL Elmvale Acres — Tween Tech Discovery", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 8, ageMax: 14, color: "#5DAE3B",
    address: "1910 St. Laurent Blvd S, Ottawa, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Mon–Sat 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 28, commuteKm: 20,
    rating: 4.4, ratingCount: 600,
    description: "East-end branch featuring Tween Tech Discovery programs (Saturdays), gaming kiosks (PS4/Wii U), Babytime, Toddlertime, and seasonal STEM events. All free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 70, coverage: 78, rating: 88, extras: 72 }
  },
  {
    id: 205, name: "OPL Blackburn Hamlet — Chess & Storytime", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#5DAE3B",
    address: "199 Glen Park Dr, Gloucester, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Mon–Sat 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 35, commuteKm: 28,
    rating: 4.5, ratingCount: 500,
    description: "Cozy community branch with Chess Club (Tuesdays 3:30pm), Family Storytime, Babytime, and seasonal craft programs. Welcoming kids' area. All free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 60, coverage: 78, rating: 90, extras: 70 }
  },
  {
    id: 206, name: "OPL Beaverbrook — Parenting & Toddler Drop-in", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 6, color: "#5DAE3B",
    address: "2500 Campeau Dr, Kanata, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Mon–Sat 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 18,
    rating: 4.5, ratingCount: 800,
    description: "Kanata branch with Parenting in Ottawa drop-in (Wednesdays 1pm), Toddlertime, Babytime, and Family Storytime. Great for new parents. All free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 82, rating: 90, extras: 75 }
  },
  {
    id: 207, name: "OPL Carlingwood — Mario Kart & Gaming", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 17, color: "#5DAE3B",
    address: "281 Woodroffe Ave, Ottawa, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Mon–Sat 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 14,
    rating: 4.4, ratingCount: 900,
    description: "West-end branch with Mario Kart gaming events, PS4/Wii U gaming kiosks, Family Storytime, and PD Day programs. Popular with tweens and teens. All free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 78, coverage: 82, rating: 88, extras: 75 }
  },
  {
    id: 208, name: "OPL Centennial — Preschool Play & Learn", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 6, color: "#5DAE3B",
    address: "3870 Old Richmond Rd, Nepean, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Mon–Sat 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 7,
    rating: 4.5, ratingCount: 600,
    description: "Nepean branch with Preschool Play & Learn (Saturdays 11am), Babytime, Toddlertime, and Family Storytime. Close to Barrhaven. All free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 88, coverage: 82, rating: 90, extras: 75 }
  },

  // NAC & Museums (from ottawaparents.ca)
  {
    id: 209, name: "National Arts Centre — Kids & Family Programs", provider: "National Arts Centre",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#7B4EA3",
    address: "1 Elgin St, Ottawa, ON",
    url: "https://nac-cna.ca/en/families",
    hours: "Various — check NAC website", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 18,
    rating: 4.8, ratingCount: 5000,
    description: "Canada's performing arts centre with free weekly kids' programs: Toddler Tuesdays, Les lundis des tout-petits, Jukebox Lunch Concerts, SoulRhythms, and seasonal family concerts. All at Peter A. Herrndorf Place. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 85, rating: 96, extras: 70 }
  },
  {
    id: 210, name: "National Gallery of Canada — Free Thursday Nights", provider: "National Gallery of Canada",
    type: "yearround", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#E8842C",
    address: "380 Sussex Dr, Ottawa, ON",
    url: "https://www.gallery.ca/visit/admission",
    hours: "Thu 5–8pm free; Tue–Sun 10am–5pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 28, commuteKm: 20,
    rating: 4.7, ratingCount: 8000,
    description: "Canada's national art museum with free admission every Thursday 5–8pm. Kids can explore the giant spider sculpture Maman, interactive galleries, and rotating exhibitions. Under 17 always free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 70, coverage: 88, rating: 94, extras: 68 }
  },
  {
    id: 211, name: "Canadian War Museum — Free Thursday Nights", provider: "Canadian War Museum",
    type: "yearround", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 17, color: "#E8842C",
    address: "1 Vimy Pl, Ottawa, ON",
    url: "https://www.warmuseum.ca/plan-your-visit",
    hours: "Thu 5–7pm free; Tue–Sun 9:30am–5pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 18,
    rating: 4.7, ratingCount: 6000,
    description: "Canada's military history museum with free admission Thursday 5–7pm. Interactive exhibits, tank gallery, and Regeneration Hall. Under 17 always free. Located along the Ottawa River. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 82, rating: 94, extras: 65 }
  },
  {
    id: 212, name: "Bank of Canada Museum", provider: "Bank of Canada",
    type: "yearround", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 4, ageMax: 17, color: "#E8842C",
    address: "30 Bank St, Ottawa, ON",
    url: "https://www.bankofcanadamuseum.ca",
    hours: "Wed–Sun 10am–5pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 18,
    rating: 4.6, ratingCount: 2500,
    description: "Always free! Highly interactive museum where kids design a digital avatar on a wristband and play games that teach about money — feels like a video game arcade. Great for school-age kids. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 85, rating: 92, extras: 72 }
  },

  // Community Programs (from ottawaparents.ca)
  {
    id: 213, name: "EarlyON Child & Family Centre — Barrhaven", provider: "EarlyON Ontario",
    type: "yearround", category: "community", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 6, color: "#5DAE3B",
    address: "Various locations — check EarlyON Ottawa",
    url: "https://www.eventbrite.ca/o/earlyon-child-and-family-centres-ottawa",
    hours: "Various — check schedule", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 10, commuteKm: 5,
    rating: 4.6, ratingCount: 800,
    description: "Province-funded free drop-in centres for children 0–6 and their parents. Baby playgroups, toddler play, parenting support, and early learning activities. Multiple locations across Ottawa including Ruth E. Dickinson branch. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 90, coverage: 85, rating: 92, extras: 80 }
  },
  {
    id: 214, name: "Centrepointe Child Care — Drop-in Playgroups", provider: "Centrepointe Child Care Services",
    type: "yearround", category: "community", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 6, color: "#5DAE3B",
    address: "101 Centrepointe Dr, Nepean, ON",
    url: "https://www.eventbrite.ca/o/centrepointe-child-care-services",
    hours: "Wed & Thu — check Eventbrite", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 10,
    rating: 4.5, ratingCount: 400,
    description: "Free drop-in playgroups for infants and children 0–6. Infant playgroup Wednesdays 1:30pm, mixed-age playgroup Thursdays 9:30am. Shoes required. Register via Eventbrite. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 82, coverage: 75, rating: 90, extras: 78 }
  },
  {
    id: 215, name: "Canadian Centre for Outdoor Play", provider: "CCOP",
    type: "yearround", category: "outdoor", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#5DAE3B",
    address: "415 Corkstown Rd, Ottawa, ON",
    url: "https://www.outdoorplaycanada.ca",
    hours: "Check website for open house dates", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 16,
    rating: 4.7, ratingCount: 300,
    description: "Outdoor play advocacy centre with nature-based play spaces and seasonal open house events. Promotes unstructured outdoor play for children. Near Wesley Clover Parks. Free open house events. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 75, coverage: 65, rating: 94, extras: 60 }
  },
  {
    id: 216, name: "Rideau Hall — Historic Grounds & Skating", provider: "Office of the Governor General",
    type: "yearround", category: "free", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#1AA5A0",
    address: "1 Sussex Dr, Ottawa, ON",
    url: "https://www.gg.ca/en/visit-us/rideau-hall",
    hours: "Grounds open daily dawn to dusk", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 30, commuteKm: 22,
    rating: 4.6, ratingCount: 3500,
    description: "Official residence of the Governor General with beautiful heritage grounds open to the public. Free historic skating rink in winter, guided tours, and garden walks. Perfect for a family stroll. Free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 68, coverage: 78, rating: 92, extras: 65 }
  },
  {
    id: 217, name: "Parliament Hill Tours & Senate Building", provider: "Parliament of Canada",
    type: "yearround", category: "free", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 17, color: "#1AA5A0",
    address: "Wellington St, Ottawa, ON",
    url: "https://visit.parl.ca",
    hours: "Various — book free tickets online", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 18,
    rating: 4.7, ratingCount: 12000,
    description: "Free guided tours of the Senate of Canada Building (old train station — very 'Harry Potter' for kids) and House of Commons (West Block). Must reserve free tickets online at visit.parl.ca. Centre Block under renovation. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 78, rating: 94, extras: 62 }
  },
  {
    id: 218, name: "NCC Weekend Bikedays", provider: "National Capital Commission",
    type: "seasonal", category: "free", city: "ottawa", province: "ON", startDate: "2026-05-01", endDate: "2026-09-30",
    ageMin: 0, ageMax: 17, color: "#1AA5A0",
    address: "Queen Elizabeth Driveway & Colonel By Dr, Ottawa",
    url: "https://ncc-ccn.gc.ca/events/weekend-bikedays",
    hours: "Sundays 9am–1pm (May–Sep)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 14,
    rating: 4.8, ratingCount: 4000,
    description: "Major parkways closed to cars and opened exclusively to cyclists, rollerbladers, runners, and families every Sunday morning. Queen Elizabeth Driveway and Colonel By Drive routes. Flat, paved, safe for kids on bikes. Free. Source: ottawaparents.ca",
    dates: "May – Sep 2026",
    scoreBreakdown: { cost: 100, commute: 78, coverage: 55, rating: 96, extras: 65 }
  },
  {
    id: 219, name: "Lansdowne Farmers' Market", provider: "Ottawa Farmers' Market",
    type: "yearround", category: "events", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#E8842C",
    address: "1015 Bank St, Ottawa, ON (Lansdowne Park)",
    url: "https://ottawafarmersmarket.ca/lansdowne-market/",
    hours: "Sundays 9am–3pm (year-round)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 14,
    rating: 4.7, ratingCount: 5000,
    description: "Year-round Sunday farmers' market at Lansdowne with local produce, baked goods, crafts, and prepared foods. Outdoor in summer, indoors (Aberdeen Pavilion) in winter. Family-friendly with live music. Free entry. Source: ottawaparents.ca",
    dates: "Year-round Sundays",
    scoreBreakdown: { cost: 100, commute: 78, coverage: 72, rating: 94, extras: 68 }
  },
  {
    id: 220, name: "OPL St-Laurent — Teen Tuesdays", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 12, ageMax: 17, color: "#5DAE3B",
    address: "515 Côté St, Ottawa, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Mon–Sat 10am–9pm, Sun 10am–6pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 30, commuteKm: 22,
    rating: 4.4, ratingCount: 700,
    description: "East-end branch with dedicated Teen Tuesdays drop-in (3:30pm), Homework Help, Family Storytime, and seasonal programs. Great for teens looking for free after-school activities. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 68, coverage: 80, rating: 88, extras: 72 }
  },
  {
    id: 221, name: "OPL Greely — Homeschool Hangout", provider: "Ottawa Public Library",
    type: "yearround", category: "library", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 14, color: "#5DAE3B",
    address: "1450 Meadow Dr, Greely, ON",
    url: "https://booking.biblioottawalibrary.ca/en/program",
    hours: "Tue–Sat 10am–5pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 15,
    rating: 4.5, ratingCount: 300,
    description: "South Ottawa rural branch with Homeschool Hangout (Tuesdays 10am), Family Storytime, and seasonal programs. Ideal for homeschooling families in Greely, Metcalfe, and Manotick areas. All free. Source: ottawaparents.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 80, coverage: 72, rating: 90, extras: 70 }
  },
  {
    id: 222, name: "TD Summer Reading Club — OPL All Branches", provider: "Ottawa Public Library",
    type: "seasonal", category: "library", city: "ottawa", province: "ON", startDate: "2026-06-26", endDate: "2026-08-30",
    ageMin: 0, ageMax: 12, color: "#5DAE3B",
    address: "All OPL branches across Ottawa",
    url: "https://kids.biblioottawalibrary.ca/",
    hours: "Various — Jun 26 to Aug 30", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 10, commuteKm: 5,
    rating: 4.8, ratingCount: 2000,
    description: "Free summer reading program at every OPL branch! Kids get a reading kit and calendar to track reading days. Complete the calendar by Aug 30 for a prize draw. Registration opens June 8. Interactive literacy activities all summer. Source: biblioottawalibrary.ca",
    dates: "Jun 26 – Aug 30, 2026",
    scoreBreakdown: { cost: 100, commute: 90, coverage: 68, rating: 96, extras: 82 }
  },

  // Jurassic Kingdom (from jurassickingdom.ca)
  {
    id: 223, name: "Jurassic Kingdom Ottawa — Dinosaur Experience", provider: "Jurassic Kingdom",
    type: "seasonal", category: "events", city: "ottawa", province: "ON", startDate: "2026-06-26", endDate: "2026-07-12",
    ageMin: 0, ageMax: 17, color: "#E8842C",
    address: "Wesley Clover Parks, 401 Corkstown Rd, Ottawa, K2K 0J5",
    url: "https://jurassickingdom.ca/ottawa/",
    hours: "Various — book time slot online", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 25,
    siblingDiscount: "Family ticket $80–$95", earlyBird: "Earlybird 20% off",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 16,
    rating: 4.5, ratingCount: 500,
    description: "50+ life-sized animatronic dinosaurs in an outdoor walk-through trail at Wesley Clover Parks. T-Rex, Triceratops, Raptors with moving parts and sound effects. Plus bouncy castle, fossil dig pit, face painting, and street food. Weekday: Adult $25 / Child $20. Weekend: Adult $30 / Child $25. Family $80–$95. Under 3 free. Source: jurassickingdom.ca",
    dates: "Jun 26 – Jul 12, 2026",
    scoreBreakdown: { cost: 55, commute: 75, coverage: 35, rating: 90, extras: 72 }
  },

  // Doors Open Ottawa (from ottawaparents.ca)
  {
    id: 224, name: "Doors Open Ottawa 2026", provider: "City of Ottawa",
    type: "seasonal", category: "free", city: "ottawa", province: "ON", startDate: "2026-06-06", endDate: "2026-06-07",
    ageMin: 0, ageMax: 17, color: "#1AA5A0",
    address: "Various heritage buildings across Ottawa",
    url: "https://ottawa.ca/en/arts-heritage-and-events/doors-open-ottawa/2026-buildings",
    hours: "Jun 6–7 — check building schedules", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 18,
    rating: 4.8, ratingCount: 3000,
    description: "Free annual event where Ottawa's most interesting buildings open their doors to the public. Explore heritage architecture, government buildings, embassies, and cultural spaces. Great for curious kids. One weekend only! Source: ottawaparents.ca",
    dates: "Jun 6–7, 2026",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 20, rating: 96, extras: 60 }
  },
  {
    id: 225, name: "Capital Rib Fest", provider: "Capital Rib Fest",
    type: "seasonal", category: "events", city: "ottawa", province: "ON", startDate: "2026-06-05", endDate: "2026-06-07",
    ageMin: 0, ageMax: 17, color: "#E8842C",
    address: "RA Centre, 2451 Riverside Dr, Ottawa",
    url: "https://www.facebook.com/events/1837549493640525",
    hours: "Fri–Sun various", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 14,
    rating: 4.5, ratingCount: 2000,
    description: "Ottawa's favourite rib festival with BBQ vendors, live music, kids' activities, and family entertainment. Free admission. Food and drinks available for purchase. Source: ottawaparents.ca",
    dates: "Jun 5–7, 2026",
    scoreBreakdown: { cost: 85, commute: 78, coverage: 18, rating: 90, extras: 65 }
  },

  // ── FROM OTTAWA.CA — RECREATION CENTRES ──
  {
    id: 226, name: "Walter Baker Sports Centre — Barrhaven", provider: "City of Ottawa",
    type: "yearround", category: "recreation", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "100 Malvern Dr, Ottawa, ON K2J 2G5",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/walter-baker-sports-centre",
    hours: "Mon–Fri 6:30am–9pm, Sat–Sun 8am–8pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 8, commuteKm: 4,
    rating: 4.6, ratingCount: 2200,
    description: "Barrhaven's premier sports centre. 8-lane 25m pool, diving boards, warm teaching pool, preschool pool, hot tub, steam room, two NHL-sized rinks, squash courts, fitness centre. Play Free drop-in Saturdays for under 17. Swimming lessons, camps, kindergym, and group fitness. Source: ottawa.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 88, commute: 95, coverage: 92, rating: 92, extras: 78 }
  },
  {
    id: 227, name: "Tony Graham Recreation Complex — Kanata", provider: "City of Ottawa",
    type: "yearround", category: "recreation", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "3750 Kanata Ave, Kanata, ON",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/tony-graham-recreation-complex-kanata",
    hours: "Mon–Fri 6am–10pm, Sat–Sun 8am–8pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 18,
    rating: 4.5, ratingCount: 1800,
    description: "Kanata recreation complex with two full-size arenas (Tom Flood & Garry Burke), recreation program spaces, and summer camps. Adjacent to Walter Baker Park with splash pad, sports fields, and toboggan hill. Public skating, kindergym, preschool programs, and fitness classes. Source: ottawa.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 88, commute: 72, coverage: 88, rating: 90, extras: 75 }
  },
  {
    id: 228, name: "François Dupuis Recreation Centre — Orléans", provider: "City of Ottawa",
    type: "yearround", category: "recreation", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "2263 Portobello Blvd, Orléans, ON",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/francois-dupuis-recreation-centre",
    hours: "Mon–Fri 6am–10pm, Sat–Sun 7am–5pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 45, commuteKm: 35,
    rating: 4.5, ratingCount: 1200,
    description: "East Orléans recreation centre with 25m pool, teaching pool, gymnasium, fitness centre, and arena. Swimming lessons, Play Free drop-in Saturdays, summer camps, registered kids' programs, and public skating. Source: ottawa.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 88, commute: 50, coverage: 85, rating: 90, extras: 72 }
  },
  {
    id: 229, name: "Richcraft Recreation Complex — Kanata", provider: "City of Ottawa",
    type: "yearround", category: "recreation", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "4101 Innovation Dr, Kanata, ON",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/richcraft-recreation-complex-kanata",
    hours: "Mon–Fri 5:30am–10pm, Sat–Sun 6am–8pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 30, commuteKm: 22,
    rating: 4.6, ratingCount: 1500,
    description: "Modern south Kanata recreation complex with 25m pool, warm water leisure pool, water slide, hot tub, two NHL-sized rinks, gymnasium, fitness centre, and walking track. Swimming lessons, camps, Play Free Saturdays, registered kids' programs. Source: ottawa.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 88, commute: 68, coverage: 90, rating: 92, extras: 78 }
  },
  {
    id: 230, name: "Splash Wave Pool — Ray Friel Complex", provider: "City of Ottawa",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#1AA5A0",
    address: "1585 Tenth Line Rd, Orléans, ON",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/splash-wave-pool",
    hours: "Various — check Register Ottawa", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 42, commuteKm: 33,
    rating: 4.6, ratingCount: 2000,
    description: "Ottawa's only indoor wave pool! 25m pool with wave machine, water slide, lazy river, toddler splash area, hot tub, and sauna. Part of Ray Friel Recreation Complex. Public swim, Play Free Saturdays, swimming lessons, and aquafit. Kids love the waves! Source: ottawa.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 88, commute: 52, coverage: 78, rating: 92, extras: 82 }
  },
  {
    id: 231, name: "Fred Barrett Arena — Barrhaven", provider: "City of Ottawa",
    type: "yearround", category: "skating", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 17, color: "#1AA5A0",
    address: "3280 Jockvale Rd, Nepean, ON",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/fred-barrett-arena",
    hours: "Various — check Register Ottawa", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 4,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 10, commuteKm: 5,
    rating: 4.4, ratingCount: 800,
    description: "Community arena in Barrhaven with public skating, family skating, and Play Free drop-in sessions. Learn to skate programs and hockey skills. Very close to K2J postal code. CSA-approved helmet required for under 10. Source: ottawa.ca",
    dates: "Year-round (seasonal ice)",
    scoreBreakdown: { cost: 90, commute: 90, coverage: 65, rating: 88, extras: 60 }
  },
  {
    id: 232, name: "City of Ottawa — Summer Day Camps", provider: "City of Ottawa",
    type: "seasonal", category: "summer_camp", city: "ottawa", province: "ON", startDate: "2026-06-29", endDate: "2026-08-28",
    ageMin: 4, ageMax: 15, color: "#E8842C",
    address: "Various recreation centres across Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/courses-and-camps",
    hours: "Mon–Fri 8:30am–4:30pm", extendedCare: true, extendedHours: "7am–6pm at select locations",
    priceWeekly: 180, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 10, commuteKm: 5,
    rating: 4.5, ratingCount: 5000,
    description: "City of Ottawa municipal day camps at recreation centres across the city. General, sport, art, nature, and specialty themes. Ages 4–15, $180–$250/week. Extended care available ($7am–6pm). Register via Register Ottawa — registration opened May 14. Source: ottawa.ca",
    dates: "Jun 29 – Aug 28, 2026",
    scoreBreakdown: { cost: 72, commute: 90, coverage: 88, rating: 90, extras: 75 }
  },
  {
    id: 233, name: "City of Ottawa — Swimming Lessons (All Levels)", provider: "City of Ottawa",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#1AA5A0",
    address: "Various pools across Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/courses-and-camps",
    hours: "Various — check Register Ottawa", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 10, commuteKm: 5,
    rating: 4.6, ratingCount: 8000,
    description: "City of Ottawa Red Cross swimming lessons at 20+ pools. Parent & Tot, Preschool (3–5), Swimmer levels 1–10, and lifesaving. Summer session registration opened May 12. Year-round sessions at indoor pools. 10% discount for seniors 65+; 25% surcharge for non-residents. Source: ottawa.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 80, commute: 90, coverage: 85, rating: 92, extras: 70 }
  },
  {
    id: 234, name: "Albion Heatherington Recreation Centre", provider: "City of Ottawa",
    type: "yearround", category: "recreation", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 17, color: "#7B4EA3",
    address: "1560 Heatherington Rd, Ottawa, ON",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/albion-heatherington-recreation-centre",
    hours: "Various — check Register Ottawa", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 16,
    rating: 4.3, ratingCount: 500,
    description: "South Ottawa community centre with kids' after-school programs, summer camps, basketball, dance, arts & crafts, and youth drop-in nights. Affordable programs in a welcoming community setting. Source: ottawa.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 92, commute: 75, coverage: 78, rating: 86, extras: 72 }
  },
  {
    id: 235, name: "Jack Charron Arena — Barrhaven", provider: "City of Ottawa",
    type: "yearround", category: "skating", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 17, color: "#1AA5A0",
    address: "3040 Woodroffe Ave, Nepean, ON",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/jack-charron-arena",
    hours: "Various — check Register Ottawa", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 4,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 7,
    rating: 4.4, ratingCount: 700,
    description: "Community arena near south Barrhaven with public skating, family skating, and Play Free Saturday sessions. Learn to skate and hockey programs. Close to Barrhaven and Nepean South. Source: ottawa.ca",
    dates: "Year-round (seasonal ice)",
    scoreBreakdown: { cost: 90, commute: 88, coverage: 62, rating: 88, extras: 58 }
  },

  // ── NEW KIDS ACTIVITIES — SPORTS, ARTS, CLIMBING, SWIMMING, RIDING ──

  // Sportball Ottawa — Multi-Sport
  {
    id: 264, name: "Sportball Ottawa — Multi-Sport", provider: "Sportball",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 1, ageMax: 12, color: "#5DAE3B",
    address: "Various Ottawa locations",
    url: "https://sportball.com/location/sportball-ottawa/",
    hours: "Various days/times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 10,
    rating: 4.7, ratingCount: 120,
    description: "Research-backed kids multi-sport programs. 8 sports per session: Soccer, Basketball, Football, T-Ball, Hockey, Volleyball, Golf, Tennis. Parent & Child (16m+) through tweens. Coaches bring all equipment. Builds fundamental movement skills and sport literacy.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 72, commute: 78, coverage: 85, rating: 94, extras: 62 }
  },

  // Ottawa Internationals Soccer Club
  {
    id: 265, name: "Ottawa Internationals Soccer Club", provider: "Ottawa Internationals SC",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-05-01", endDate: "2026-10-31",
    ageMin: 5, ageMax: 18, color: "#5DAE3B",
    address: "Hillcrest High School & various fields",
    url: "https://ottawasoccer.com/",
    hours: "Evenings & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 15,
    rating: 4.6, ratingCount: 200,
    description: "Community-based soccer club est. 1972. Recreational and competitive leagues for U8–U18. Festival play for U10/U12. Weekly seven-a-side games. Inclusive and not-for-profit. Summer registration opens April 1.",
    dates: "May–Oct (outdoor season)",
    scoreBreakdown: { cost: 78, commute: 68, coverage: 75, rating: 92, extras: 55 }
  },

  // Lil Sambas Soccer
  {
    id: 266, name: "Lil Sambas Youth Soccer", provider: "Lil Sambas Soccer",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-05-01", endDate: "2026-10-31",
    ageMin: 4, ageMax: 11, color: "#5DAE3B",
    address: "Various Ottawa locations",
    url: "https://ottawa.lilsambassoccer.com/",
    hours: "Evenings & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 10,
    rating: 4.7, ratingCount: 85,
    description: "Fun and affordable youth soccer leagues and programs for ages 4–11. House leagues and skills development. Focus on fun, teamwork, and getting kids active. Multiple Ottawa locations.",
    dates: "Spring–Fall season",
    scoreBreakdown: { cost: 82, commute: 78, coverage: 68, rating: 94, extras: 50 }
  },

  // Coyote Rock Gym — Youth Climbing
  {
    id: 267, name: "Coyote Rock Gym — Youth Climbing", provider: "Coyote Rock Gym",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 18, color: "#5DAE3B",
    address: "1737B St. Laurent Blvd, Ottawa, ON K1G 3V4",
    url: "https://coyoterockgym.ca/",
    hours: "Mon–Sun (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 18, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 18,
    rating: 4.7, ratingCount: 350,
    description: "Ottawa's first climbing gym (est. 1992). 18,000+ sq ft with 100+ routes up to 45 ft. Youth programs ages 6–18 from $350/session. Six bouldering areas. Teaches coordination, problem-solving, fitness. Drop-in and birthday parties available.",
    dates: "Year-round (fall/winter/spring sessions + camps)",
    scoreBreakdown: { cost: 65, commute: 65, coverage: 72, rating: 94, extras: 60 }
  },

  // Altitude Gym Kanata — Kids Climbing
  {
    id: 268, name: "Altitude Gym Kanata — Kids Climbing", provider: "Altitude Gym",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 17, color: "#5DAE3B",
    address: "501 Palladium Dr, Kanata, ON",
    url: "https://altitudegym.ca/",
    hours: "Mon–Sun (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 20, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 30, commuteKm: 26,
    rating: 4.8, ratingCount: 280,
    description: "Indoor climbing and bouldering. The Quarry family zone with auto-belays, Ninja Warrior obstacle course, and augmented reality climbing wall. Youth programs from $135 (5–7yr) to $199 (14–17yr). Camp Altitude summer camps ages 6–13. Multiple Ottawa-area locations.",
    dates: "Year-round (9-week summer camps)",
    scoreBreakdown: { cost: 62, commute: 55, coverage: 75, rating: 96, extras: 62 }
  },

  // OAMA — Kids Martial Arts
  {
    id: 269, name: "Ottawa Academy of Martial Arts — Kids", provider: "OAMA",
    type: "yearround", category: "martial_arts", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-08-31",
    ageMin: 5, ageMax: 17, color: "#E8842C",
    address: "1810 Carling Ave, Ottawa, ON",
    url: "https://oama.ca/program/kids-program/",
    hours: "Mon–Sat (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.8, ratingCount: 180,
    description: "Kids BJJ and Muay Thai at Ottawa's premier martial arts academy (est. 2002). After-school program available. Builds coordination, confidence, discipline, and self-defense. Also at 25 Prescott St. Summer camps. Beginner-friendly.",
    dates: "Year-round",
    scoreBreakdown: { cost: 60, commute: 65, coverage: 78, rating: 96, extras: 55 }
  },

  // Ottawa School of Art — Kids & Teens
  {
    id: 270, name: "Ottawa School of Art — Kids & Teens", provider: "Ottawa School of Art",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 6, ageMax: 16, color: "#E8842C",
    address: "ByWard Market & Orléans campuses",
    url: "https://www.artottawa.ca/programs/camps",
    hours: "Weekdays & Sat (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 350, priceDaily: 0, siblingDiscount: false, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 30, commuteKm: 25,
    rating: 4.8, ratingCount: 150,
    description: "Leading visual arts school. Drawing, painting, ceramics, sculpture, photography, printmaking, digital arts. Year-round classes and 8-week summer camps ($310–$405/week, supplies included). Ages 6–8, 9–12, 13–16 groupings. ByWard Market, Orléans, and Kanata locations.",
    dates: "Year-round (8-week summer camps Jun–Aug)",
    scoreBreakdown: { cost: 55, commute: 55, coverage: 80, rating: 96, extras: 65 }
  },

  // Art Haven — Barrhaven & Kanata
  {
    id: 271, name: "Art Haven — Kids Art & Pottery", provider: "Art Haven",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 14, color: "#E8842C",
    address: "Barrhaven & Kanata locations",
    url: "https://www.arthaven.ca/kidsworkshops",
    hours: "Various days (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 10, commuteKm: 6,
    rating: 4.8, ratingCount: 70,
    description: "Clay hand building, ceramic/pottery painting, canvas painting, and clay hand/foot imprints for children. Workshops, classes, camps, and birthday parties. Walk-in pottery painting available. Barrhaven and Kanata locations. All supplies included.",
    dates: "Year-round workshops & camps",
    scoreBreakdown: { cost: 72, commute: 90, coverage: 65, rating: 96, extras: 62 }
  },

  // Nepean Visual Arts Centre
  {
    id: 272, name: "Nepean Visual Arts Centre", provider: "City of Ottawa",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 17, color: "#E8842C",
    address: "Nepean Creative Arts Centre, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/nepean-visual-arts-centre",
    hours: "Mon–Sat (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 14,
    rating: 4.6, ratingCount: 90,
    description: "City of Ottawa specialty arts classes taught by accomplished painters, potters, illustrators, sculptors, and photographers. 'Young at Art' program for kids. Custom studio spaces. Affordable municipal rates with financial assistance available.",
    dates: "Year-round (fall/winter/spring sessions + summer)",
    scoreBreakdown: { cost: 80, commute: 72, coverage: 72, rating: 92, extras: 60 }
  },

  // MARKED Adventure Park
  {
    id: 273, name: "MARKED: The Adventure Park", provider: "MARKED",
    type: "yearround", category: "multi", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 8, ageMax: 18, color: "#1AA5A0",
    address: "Ottawa (see website for location)",
    url: "https://www.marked.ca/",
    hours: "Various (see website)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 20,
    rating: 4.7, ratingCount: 200,
    description: "Ultimate family adventure park. Paintball, low-impact paintball, airsoft, axe throwing, obstacle course, and laser tag. Birthday parties and group events. Great for tweens and teens. Indoor and outdoor activities year-round.",
    dates: "Year-round",
    scoreBreakdown: { cost: 58, commute: 62, coverage: 68, rating: 94, extras: 58 }
  },

  // GlowSport — Laser Tag & Nerf
  {
    id: 274, name: "GlowSport Ottawa West", provider: "GlowSport",
    type: "yearround", category: "multi", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 17, color: "#1AA5A0",
    address: "Ottawa West location",
    url: "https://glowsport.ca/",
    hours: "Various (see website)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 18,
    rating: 4.6, ratingCount: 90,
    description: "Laser tag, nerf gun battles, glow crafts, and light-based games. Dark Zone blacked-out arena. Birthday parties and group bookings. Fun active indoor entertainment for kids and teens.",
    dates: "Year-round",
    scoreBreakdown: { cost: 62, commute: 65, coverage: 60, rating: 92, extras: 55 }
  },

  // Wesley Clover Parks — Horseback Riding Camps
  {
    id: 275, name: "Wesley Clover Parks — Horseback Riding Camps", provider: "Wesley Clover Parks",
    type: "summer_camp", category: "nature", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-21",
    ageMin: 7, ageMax: 16, color: "#5DAE3B",
    address: "401 Corkstown Rd, Ottawa, ON K2K 0J5",
    url: "https://www.wesleycloverparks.com/horseback-riding-camps",
    hours: "9am–4pm (day camp)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 28, commuteKm: 24,
    rating: 4.8, ratingCount: 65,
    description: "Beginner horseback riding day camps. No experience required (age 7+). Games, crafts, outdoor play, equine theory, hands-on learning, and daily riding lessons. Friday fun show for families. Ian Millar School of Horsemanship. March Break and summer camps. 20% deposit at registration.",
    dates: "Jul 6–Aug 21, 2026 + March Break",
    scoreBreakdown: { cost: 50, commute: 58, coverage: 72, rating: 96, extras: 58 }
  },

  // Swim Ottawa — Competitive & Pre-Competitive Swimming
  {
    id: 276, name: "Swim Ottawa", provider: "Swim Ottawa",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-08-31",
    ageMin: 5, ageMax: 18, color: "#1AA5A0",
    address: "Various Ottawa pools",
    url: "https://swimottawa.ca/",
    hours: "Evenings & weekends (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 15,
    rating: 4.7, ratingCount: 95,
    description: "Not-for-profit swim club providing swimming excellence for 20+ years. Competitive age-group programme and popular pre-competitive programme. Quality coaching for all ages and abilities. Year-round training.",
    dates: "Year-round",
    scoreBreakdown: { cost: 65, commute: 68, coverage: 70, rating: 94, extras: 50 }
  },

  // The Aqua Life — Private Swimming Lessons
  {
    id: 277, name: "The Aqua Life — Personalized Swim Lessons", provider: "The Aqua Life",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 17, color: "#1AA5A0",
    address: "Various Ottawa locations",
    url: "https://www.theaqualife.ca/kids-swimming-lessons-ottawa/",
    hours: "Various (by appointment)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 12,
    rating: 4.9, ratingCount: 60,
    description: "Personalized swimming lessons for kids and adults. Learn-to-swim through Competitive Swim 101. Builds endurance, technique, and water safety. Private and small-group formats. Flexible scheduling across Ottawa locations.",
    dates: "Year-round",
    scoreBreakdown: { cost: 55, commute: 72, coverage: 65, rating: 98, extras: 50 }
  },

  // Ottawa River Runners — Kids Kayak Camps
  {
    id: 278, name: "Ottawa River Runners — Kayak Camps", provider: "Ottawa River Runners",
    type: "summer_camp", category: "nature", city: "ottawa", province: "ON", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 8, ageMax: 17, color: "#5DAE3B",
    address: "Ottawa River locations",
    url: "https://www.ottawariverrunners.com/camps/",
    hours: "Day camp hours",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 35, commuteKm: 30,
    rating: 4.8, ratingCount: 45,
    description: "Summer kayak camps teaching whitewater basics. Start on calm flat water learning strokes, progress to moving water with ferries, eddy turns, and self-rescues. Qualified instructors. All equipment provided. Courses also available year-round.",
    dates: "Summer camps Jun–Aug",
    scoreBreakdown: { cost: 52, commute: 50, coverage: 68, rating: 96, extras: 60 }
  },

  // Ottawa River Canoe Club — Kids Paddling
  {
    id: 279, name: "Ottawa River Canoe Club — Kids Camps", provider: "Ottawa River Canoe Club",
    type: "summer_camp", category: "nature", city: "ottawa", province: "ON", startDate: "2026-07-01", endDate: "2026-08-21",
    ageMin: 7, ageMax: 16, color: "#5DAE3B",
    address: "Ottawa River, Ottawa",
    url: "https://www.ottawarivercanoe.com/pages/summer-camps",
    hours: "Day camp hours",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 30, commuteKm: 22,
    rating: 4.7, ratingCount: 50,
    description: "20+ years of kids paddling camps. Canoe and kayak in a safe, supportive environment on the Ottawa River. Learn paddling skills, water safety, and enjoy outdoor adventures. All equipment provided.",
    dates: "Jul–Aug summer camps",
    scoreBreakdown: { cost: 58, commute: 55, coverage: 65, rating: 94, extras: 58 }
  },

  // Futurekids Ottawa — Computer Camps
  {
    id: 280, name: "Futurekids Ottawa — Computer & Coding Camps", provider: "Futurekids",
    type: "summer_camp", category: "stem", city: "ottawa", province: "ON", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 5, ageMax: 14, color: "#1AA5A0",
    address: "Ottawa locations",
    url: "https://www.futurekids.ca/",
    hours: "9am–4pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 15,
    rating: 4.6, ratingCount: 55,
    description: "Computer camps teaching coding, game design, robotics, and digital skills. Age-appropriate programs for kids 5–14. Hands-on learning with technology. Summer and holiday camps.",
    dates: "Summer + holiday camps",
    scoreBreakdown: { cost: 60, commute: 68, coverage: 72, rating: 92, extras: 58 }
  },

  // ACE ARTE Studio
  {
    id: 281, name: "ACE ARTE Studio — Kids Art & Pottery", provider: "ACE ARTE",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 14, color: "#E8842C",
    address: "Ottawa (see website)",
    url: "https://www.aceartestudio.com/",
    hours: "Various (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 18,
    rating: 4.8, ratingCount: 45,
    description: "Art classes and creative workshops for kids and adults. Drawing, painting, crafts, pottery. Private events and birthday parties. Summer camps. Supplies included. Nurturing creative environment.",
    dates: "Year-round + summer camps",
    scoreBreakdown: { cost: 68, commute: 65, coverage: 65, rating: 96, extras: 58 }
  },

  // ONEC — Youth Paddling Camps
  {
    id: 282, name: "ONEC — Youth Paddling Camps", provider: "Ottawa New Edinburgh Club",
    type: "summer_camp", category: "nature", city: "ottawa", province: "ON", startDate: "2026-07-01", endDate: "2026-08-21",
    ageMin: 9, ageMax: 17, color: "#5DAE3B",
    address: "Ottawa New Edinburgh Club, Ottawa",
    url: "https://www.onec.ca/paddling",
    hours: "Day camp hours",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 20,
    rating: 4.7, ratingCount: 40,
    description: "Week-long youth paddling camps (ages 9–17) Jul–Aug. Learn kayaking, SUP, and Big Canoe with Paddle Canada Waterfront Kayak Skills program. Certified instructors. All equipment provided. Beautiful Ottawa River setting.",
    dates: "Jul–Aug weekly camps",
    scoreBreakdown: { cost: 58, commute: 62, coverage: 65, rating: 94, extras: 58 }
  },

  // ── MORE OTTAWA & REGION — SPORTS, CLIMBING, TENNIS, COOKING, NATURE, ATTRACTIONS ──

  // Klimat 2.0 — Bouldering Gym Ottawa
  {
    id: 372, name: "Klimat 2.0 — Bouldering Gym", provider: "Klimat",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 18, color: "#5DAE3B",
    address: "Downtown Ottawa, ON",
    url: "https://klimat.ca/",
    hours: "Mon–Fri 6am–11pm, Sat–Sun 8am–9pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 20, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 16,
    rating: 4.7, ratingCount: 1400,
    description: "Modern bouldering gym downtown combining climbing with fitness centre, studio classes, and café. Youth membership $65/month (ages 9–12). Drop-in bouldering, no rope needed. Great intro to climbing.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 75, commute: 82, coverage: 68, rating: 94, extras: 55 }
  },

  // Wild Walls Climbing Gym — Youth Programs
  {
    id: 373, name: "Wild Walls Climbing — Youth Programs", provider: "Wild Walls",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 18, color: "#5DAE3B",
    address: "Ottawa, ON",
    url: "https://wildwalls.com/youth-programs/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 14,
    rating: 4.6, ratingCount: 520,
    description: "Youth climbing programs from beginner to competitive level. Top rope, lead climbing, and bouldering. Summer camps and after-school programs. NCCP-certified coaching.",
    dates: "Year-round programs + camps",
    scoreBreakdown: { cost: 60, commute: 85, coverage: 72, rating: 92, extras: 58 }
  },

  // National Tennis School — Ottawa/Barrhaven/Orleans/Kanata
  {
    id: 374, name: "National Tennis School — Ottawa", provider: "NTS",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 4, ageMax: 18, color: "#5DAE3B",
    address: "Barrhaven, Orleans, Kanata & Central Ottawa",
    url: "https://www.nationaltennisschool.com/",
    hours: "Various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 10, commuteKm: 6,
    rating: 4.7, ratingCount: 480,
    description: "Tennis Canada Certified Instructors. Programs in Barrhaven, Orleans, and Kanata — indoor and outdoor. Beginner through advanced. Summer tennis camps and pickleball & swim combos. Group lessons 5×1hr.",
    dates: "Year-round sessions + summer camps",
    scoreBreakdown: { cost: 55, commute: 92, coverage: 72, rating: 94, extras: 58 }
  },

  // RSC Tennis Academy — Ottawa
  {
    id: 375, name: "RSC Tennis Academy — Junior Development", provider: "Rideau Sports Centre",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 6, ageMax: 18, color: "#5DAE3B",
    address: "1 Donald St, Ottawa, ON",
    url: "https://www.rideausportscentre.com/kids-programs/",
    hours: "Various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 16,
    rating: 4.8, ratingCount: 350,
    description: "Ottawa's premier Junior Tennis Development Centre. Provincial and national level athletes. Red half court (ages 6–7), orange, green, and full court programs. Year-round indoor courts.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 50, commute: 82, coverage: 72, rating: 96, extras: 55 }
  },

  // Maverick Volleyball — Ottawa Youth
  {
    id: 376, name: "Maverick Volleyball — Youth Programs", provider: "Maverick Volleyball",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-08-31",
    ageMin: 7, ageMax: 17, color: "#5DAE3B",
    address: "Various locations, Ottawa, ON",
    url: "https://maverickvolleyball.ca/",
    hours: "Various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 12,
    rating: 4.7, ratingCount: 380,
    description: "Learn-to-play and recreational volleyball — no tryouts. Progressive programs for boys and girls 7–17. Fall, winter, spring, and summer sessions on indoor and sand courts. Beach volleyball ages 9–13.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 60, commute: 88, coverage: 72, rating: 94, extras: 58 }
  },

  // Ottawa Fusion Volleyball Club
  {
    id: 377, name: "Ottawa Fusion Volleyball Club", provider: "Ottawa Fusion",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-05-31",
    ageMin: 10, ageMax: 18, color: "#5DAE3B",
    address: "Ottawa, ON",
    url: "https://www.ottawafusion.ca/",
    hours: "Various training times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 14,
    rating: 4.6, ratingCount: 220,
    description: "Competitive volleyball representing Ottawa across Ontario, Canada, and internationally. Tryouts Sep/Oct, season through May. Also offers recreational programs for beginners. Provincial Championships.",
    dates: "Sep–May competitive season",
    scoreBreakdown: { cost: 45, commute: 85, coverage: 72, rating: 92, extras: 55 }
  },

  // SAHA Elite Badminton — Ottawa
  {
    id: 378, name: "SAHA Elite Badminton Club — Youth", provider: "SAHA Elite",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 6, ageMax: 18, color: "#5DAE3B",
    address: "Stittsville, Merivale & Sir Robert Borden HS, Ottawa",
    url: "https://sahaelite.com/",
    hours: "Various training times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 420, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 10,
    rating: 4.7, ratingCount: 190,
    description: "Youth badminton training, camps, and high performance programs. Summer camp Jul 6–Aug 14 at Stittsville, Merivale, and Sir Robert Borden. Expert coaching and skill development. $420/week.",
    dates: "Year-round training + summer camps",
    scoreBreakdown: { cost: 48, commute: 88, coverage: 68, rating: 94, extras: 58 }
  },

  // Kanata Junior Badminton Club
  {
    id: 379, name: "Kanata Junior Badminton Club", provider: "KJBC",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 9, ageMax: 19, color: "#5DAE3B",
    address: "West Ottawa (Kanata), ON",
    url: "https://badmintonottawa.com/kanatajunior/",
    hours: "Weekly sessions",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 15,
    rating: 4.5, ratingCount: 120,
    description: "30+ years of structured play and coaching for young badminton players ages 9–19 in west Ottawa. Recreational and competitive streams.",
    dates: "Sep–Jun season",
    scoreBreakdown: { cost: 72, commute: 85, coverage: 65, rating: 90, extras: 50 }
  },

  // XQuest Archery — Ottawa
  {
    id: 380, name: "XQuest Archery — Youth Lessons", provider: "XQuest",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 10, ageMax: 18, color: "#5DAE3B",
    address: "Ottawa, ON",
    url: "https://www.xquestarchery.com/lessons/",
    hours: "Various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 14,
    rating: 4.7, ratingCount: 180,
    description: "5-week archery courses with 1.5 hours of instruction per week. Archery 101 foundations, recurve and compound bow programs. Ages 10+. All equipment provided. Saturday sessions available.",
    dates: "Year-round 5-week courses",
    scoreBreakdown: { cost: 65, commute: 85, coverage: 62, rating: 94, extras: 58 }
  },

  // Glebe Little League Baseball — Ottawa
  {
    id: 381, name: "Glebe Little League — Baseball", provider: "Glebe Little League",
    type: "summer_camp", category: "sports", city: "ottawa", province: "ON", startDate: "2026-04-01", endDate: "2026-09-30",
    ageMin: 4, ageMax: 18, color: "#5DAE3B",
    address: "Glebe, Ottawa, ON",
    url: "http://glebelittleleague.ca/",
    hours: "Weekday evenings & Saturdays",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 14,
    rating: 4.6, ratingCount: 350,
    description: "Winter skills training, spring house league, summer competitive and recreational ball, and fall ball baseball. Boys and girls ages 4–18. One of Ottawa's longest-running youth baseball programs.",
    dates: "Apr–Sep season + winter training",
    scoreBreakdown: { cost: 72, commute: 85, coverage: 72, rating: 92, extras: 55 }
  },

  // Stittsville Minor Softball Association
  {
    id: 382, name: "Stittsville Softball — Youth Programs", provider: "SMSA",
    type: "summer_camp", category: "sports", city: "ottawa", province: "ON", startDate: "2026-05-01", endDate: "2026-07-31",
    ageMin: 4, ageMax: 20, color: "#5DAE3B",
    address: "Stittsville, Ottawa, ON",
    url: "https://www.stittsvillesoftball.org/",
    hours: "Weekday evenings",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 20,
    rating: 4.5, ratingCount: 180,
    description: "Affordable recreational house league, selects, and rep softball in Stittsville. Ages 4–20. Regular season May 1–end of June. Community-based program for all skill levels.",
    dates: "May–Jul season",
    scoreBreakdown: { cost: 80, commute: 80, coverage: 65, rating: 90, extras: 55 }
  },

  // West Ottawa Lacrosse
  {
    id: 383, name: "West Ottawa Lacrosse — Youth", provider: "West Ottawa Lacrosse",
    type: "summer_camp", category: "sports", city: "ottawa", province: "ON", startDate: "2026-04-01", endDate: "2026-08-31",
    ageMin: 5, ageMax: 18, color: "#5DAE3B",
    address: "West Ottawa, ON",
    url: "https://wol.lacrosseshift.com/",
    hours: "Various game/practice times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 15,
    rating: 4.6, ratingCount: 210,
    description: "Boys lacrosse — 2026 registration open. House league and competitive programs. Canada's fastest-growing sport. Skills development, team play, and sportsmanship. Ages 5–18.",
    dates: "Apr–Aug season",
    scoreBreakdown: { cost: 62, commute: 85, coverage: 68, rating: 92, extras: 52 }
  },

  // Ottawa Ospreys RFC — Youth Rugby
  {
    id: 384, name: "Ottawa Ospreys — Youth Rugby", provider: "Ottawa Ospreys RFC",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-04-01", endDate: "2026-10-31",
    ageMin: 4, ageMax: 18, color: "#5DAE3B",
    address: "Ottawa, ON",
    url: "https://ottawarugby.com/",
    hours: "Various practice times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 12,
    rating: 4.5, ratingCount: 190,
    description: "Youth rugby programs from age 4 through junior and senior levels. Non-contact intro for young players, full contact for teens. Inclusive, community-based club. Spring/summer outdoor season.",
    dates: "Apr–Oct season",
    scoreBreakdown: { cost: 70, commute: 88, coverage: 68, rating: 90, extras: 52 }
  },

  // Royale Equestrian Centre — Ottawa
  {
    id: 385, name: "Royale Equestrian Centre — Riding Lessons", provider: "Royale Equestrian",
    type: "yearround", category: "nature", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 7, ageMax: 18, color: "#5DAE3B",
    address: "Ottawa area, ON",
    url: "https://www.royaleequestriancentre.com/",
    hours: "Various lesson times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 30, commuteKm: 28,
    rating: 4.8, ratingCount: 280,
    description: "Horseback riding lessons — private, semi-private, and group. March break camp and after-school programs for ages 7–14. Beginner through Level 8+. Year-round riding in indoor arena.",
    dates: "Year-round lessons + camps",
    scoreBreakdown: { cost: 42, commute: 72, coverage: 72, rating: 96, extras: 58 }
  },

  // Brookson Farm — Ottawa Riding Lessons
  {
    id: 386, name: "Brookson Farm — Riding Lessons", provider: "Brookson Farm",
    type: "yearround", category: "nature", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 6, ageMax: 18, color: "#5DAE3B",
    address: "15 min from downtown Ottawa, ON",
    url: "https://www.brookson.ca/",
    hours: "Various lesson times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 22,
    rating: 4.7, ratingCount: 210,
    description: "Bilingual riding lessons for beginners through advanced riders. Hunter/jumper competition training. All ages welcome. Beautiful farm setting just 15 minutes from downtown Ottawa.",
    dates: "Year-round lessons",
    scoreBreakdown: { cost: 42, commute: 78, coverage: 68, rating: 94, extras: 55 }
  },

  // Splitsville Bowling — Kanata
  {
    id: 387, name: "Splitsville Bowling — Kanata", provider: "Splitsville",
    type: "yearround", category: "playground", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 18, color: "#E8842C",
    address: "Kanata Entertainment Centrum, Kanata, ON",
    url: "https://www.splitsvillebowl.ca/kanata-bowling",
    hours: "Daily 10am–midnight",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 15, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 15,
    rating: 4.4, ratingCount: 1200,
    description: "18-lane 10-pin bowling plus modern arcade. Bumper bowling for kids. Birthday party packages from $149. Kanata Entertainment Centrum location. Drop-in and league play.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 78, commute: 85, coverage: 65, rating: 88, extras: 52 }
  },

  // LaserMaxx — Ottawa Laser Tag
  {
    id: 388, name: "LaserMaxx — Ottawa Laser Tag", provider: "LaserMaxx",
    type: "yearround", category: "playground", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 6, ageMax: 18, color: "#E8842C",
    address: "Ottawa, ON",
    url: "https://www.lasermaxx.ca/",
    hours: "Various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 15, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 14,
    rating: 4.5, ratingCount: 680,
    description: "High-intensity, team-based laser tag arena. Perfect for older kids, tweens, and teens. Birthday party packages, group events, and drop-in sessions. Ages 6+.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 78, commute: 85, coverage: 62, rating: 90, extras: 52 }
  },

  // Julianna Banana — Baking Classes Ottawa
  {
    id: 389, name: "Julianna Banana — Kids Baking Classes", provider: "Julianna Banana",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 17, color: "#7B4EA3",
    address: "Various kitchens across Ottawa, ON",
    url: "https://juliannabanana.ca/",
    hours: "Various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 12,
    rating: 4.9, ratingCount: 420,
    description: "Interactive hands-on baking and cooking workshops for all ages. Teens & tweens workshops, family classes, and culinary birthday parties. In kitchens across Ottawa and online. Fun, creative, delicious!",
    dates: "Year-round workshops",
    scoreBreakdown: { cost: 58, commute: 88, coverage: 65, rating: 98, extras: 60 }
  },

  // STiR Culinary — Kids Cooking Orleans
  {
    id: 390, name: "STiR Culinary — Kids Cooking Classes", provider: "STiR Culinary",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 4, ageMax: 13, color: "#7B4EA3",
    address: "Orleans & Cumberland, Ottawa, ON",
    url: "http://www.stirculinary.ca/",
    hours: "Various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 22,
    rating: 4.8, ratingCount: 280,
    description: "Bilingual kids cooking classes in east Ottawa. Mini Chefs, Little Chefs, and Junior Chefs programs ages 4–13. Community spaces across Orléans and Cumberland. Hands-on fun with real recipes.",
    dates: "Year-round classes + camps",
    scoreBreakdown: { cost: 60, commute: 78, coverage: 65, rating: 96, extras: 60 }
  },

  // Le Petit Cordon Bleu — Ottawa
  {
    id: 391, name: "Le Petit Cordon Bleu — Kids Pastry", provider: "Le Cordon Bleu",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 8, ageMax: 12, color: "#7B4EA3",
    address: "453 Laurier Ave E, Ottawa, ON",
    url: "https://www.cordonbleu.edu/ottawa/petit-cordon-bleu/en",
    hours: "Various workshop times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 16,
    rating: 4.9, ratingCount: 150,
    description: "Pastry courses by the world-famous Le Cordon Bleu for ages 8–12. Children learn baking techniques under professional Chefs, developing creativity and taste. A world-class culinary experience in Ottawa.",
    dates: "Year-round workshops",
    scoreBreakdown: { cost: 40, commute: 82, coverage: 62, rating: 98, extras: 55 }
  },

  // Diefenbunker — Cold War Museum
  {
    id: 392, name: "Diefenbunker — Cold War Museum", provider: "Diefenbunker",
    type: "yearround", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 6, ageMax: 18, color: "#1AA5A0",
    address: "3929 Carp Rd, Carp, Ottawa, ON",
    url: "https://diefenbunker.ca/",
    hours: "Daily 10am–4pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 15, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 30, commuteKm: 28,
    rating: 4.6, ratingCount: 3200,
    description: "Multi-award-winning underground Cold War museum — 25,000 sq ft across 4 subterranean floors. Learn about nuclear threat, Cold War history, and Canadian military heritage. Guided tours, escape room, and educational programs.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 78, commute: 72, coverage: 72, rating: 92, extras: 55 }
  },

  // Camp Fortune — Adventure Park & Zipline
  {
    id: 393, name: "Camp Fortune — Adventure Park & Zipline", provider: "Camp Fortune",
    type: "summer_camp", category: "nature", city: "chelsea", province: "QC", startDate: "2026-05-15", endDate: "2026-10-15",
    ageMin: 5, ageMax: 18, color: "#5DAE3B",
    address: "300 Chemin Dunlop, Chelsea, QC",
    url: "https://campfortune.com/",
    hours: "Daily 9am–5pm (summer)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 45, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 22,
    rating: 4.5, ratingCount: 4800,
    description: "Ziplines, aerial park treetop course, mountain coaster, and scenic chairlift in Gatineau Park. Multiple difficulty levels from kids beginner to advanced adult. Beautiful Gatineau Hills setting 20 min from Ottawa.",
    dates: "May–Oct (summer), skiing in winter",
    scoreBreakdown: { cost: 55, commute: 78, coverage: 78, rating: 90, extras: 55 }
  },

  // Out to Play — Forest School & Nature Play
  {
    id: 394, name: "Out to Play — Forest School Ottawa", provider: "Out to Play",
    type: "yearround", category: "nature", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 12, color: "#5DAE3B",
    address: "Nepean & urban wild spaces, Ottawa, ON",
    url: "https://outtoplay.ca/",
    hours: "Various program times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 8,
    rating: 4.8, ratingCount: 280,
    description: "Forest school, field trips, and summer day camps in urban wild spaces across Ottawa. Broadening access to outdoor play for children and families. Nature-based learning, unstructured play, and exploration.",
    dates: "Year-round programs + summer camps",
    scoreBreakdown: { cost: 58, commute: 90, coverage: 72, rating: 96, extras: 62 }
  },

  // Earth Path — Nature School Ottawa
  {
    id: 395, name: "Earth Path — Nature School Programs", provider: "Earth Path",
    type: "yearround", category: "nature", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 16, color: "#5DAE3B",
    address: "Ottawa region, ON",
    url: "https://earthpath.ca/",
    hours: "Various program times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 16,
    rating: 4.7, ratingCount: 180,
    description: "Non-profit nature school for children, teens, and families in the Ottawa region. Outdoor education, wildlife observation, forest skills, and seasonal programs. Connection to nature through hands-on learning.",
    dates: "Year-round programs + camps",
    scoreBreakdown: { cost: 62, commute: 82, coverage: 72, rating: 94, extras: 58 }
  },

  // ── OTTAWA / NEPEAN / ORLÉANS / KANATA — LOCAL BUSINESSES ──

  // Aqua-Tots Swim School — Kanata
  {
    id: 339, name: "Aqua-Tots Swim School — Kanata", provider: "Aqua-Tots",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 0, ageMax: 12, color: "#1AA5A0",
    address: "Kanata, Ottawa, ON",
    url: "https://www.aqua-tots.com/kanata/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 15,
    rating: 4.8, ratingCount: 380,
    description: "Certified swimming lessons for babies through age 12 in Kanata. Warm-water pool, small class sizes, year-round schedule. Flexible make-up classes for busy families.",
    dates: "Year-round, ongoing enrollment",
    scoreBreakdown: { cost: 55, commute: 85, coverage: 72, rating: 96, extras: 60 }
  },

  // KidsCanSwim — Kanata, Orléans & Westboro
  {
    id: 340, name: "KidsCanSwim — Ottawa Swim Schools", provider: "KidsCanSwim Canada",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 0, ageMax: 12, color: "#1AA5A0",
    address: "Kanata, Orléans & Westboro, Ottawa, ON",
    url: "https://kidscanswimcanada.ca/locations/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 12,
    rating: 4.7, ratingCount: 520,
    description: "Purpose-built swim schools for babies and kids. Low student-to-instructor ratios, warm pools, expert certified instructors. Locations in Kanata, Orléans, and Westboro.",
    dates: "Year-round, ongoing enrollment",
    scoreBreakdown: { cost: 52, commute: 88, coverage: 72, rating: 94, extras: 60 }
  },

  // Hippo In The Bathtub — Nepean
  {
    id: 341, name: "Hippo In The Bathtub — Swim Lessons", provider: "Hippo In The Bathtub",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 0, ageMax: 14, color: "#1AA5A0",
    address: "Nepean, Stittsville & Trainyards, Ottawa, ON",
    url: "https://hippointhebathtub.ca/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 8,
    rating: 4.8, ratingCount: 640,
    description: "Ottawa's premier swim provider. Warm salt water pools, private and semi-private lessons. Locations in Nepean, Stittsville, and Trainyards. Group classes ages 4 months–14 years. Aquatic camps available.",
    dates: "Year-round, ongoing enrollment",
    scoreBreakdown: { cost: 48, commute: 90, coverage: 72, rating: 96, extras: 62 }
  },

  // Camps Canada — Orleans, Kanata, Barrhaven
  {
    id: 342, name: "Camps Canada — Multi-Sport & Swim", provider: "Camps Canada",
    type: "summer_camp", category: "multi", city: "ottawa", province: "ON", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 5, ageMax: 12, color: "#1AA5A0",
    address: "Orleans, Kanata & Barrhaven locations, Ottawa, ON",
    url: "https://campscanada.com/",
    hours: "9am–4pm (extended care available)",
    extendedCare: true, extendedHours: "7:30am–5:30pm",
    priceWeekly: 275, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 8,
    rating: 4.6, ratingCount: 920,
    description: "Est. 1996. Arts & crafts, biking, multi-sport, and swim lesson camps in Orleans, Kanata, and Barrhaven. 2026 price freeze at 2025 rates. City of Ottawa swim curriculum with lifeguard-led instruction. Ages 5–12.",
    dates: "Jun 29–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 65, commute: 90, coverage: 82, rating: 92, extras: 72 }
  },

  // Capital Camps — Orleans Art & Sports
  {
    id: 343, name: "Capital Camps — Art, Sports & Tennis", provider: "Capital Camps",
    type: "summer_camp", category: "multi", city: "ottawa", province: "ON", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 4, ageMax: 14, color: "#1AA5A0",
    address: "Orleans, Ottawa, ON",
    url: "https://www.capitalcamps.ca/",
    hours: "9am–4pm (extended care available)",
    extendedCare: true, extendedHours: "8am–5pm",
    priceWeekly: 280, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 22,
    rating: 4.5, ratingCount: 380,
    description: "Orleans-based camp with cheerleading, acting, dance, tennis, football training, and arts & crafts. Combines sports and creative programs. Ages 4–14.",
    dates: "Jun 29–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 62, commute: 78, coverage: 78, rating: 90, extras: 68 }
  },

  // Above the Rim Basketball — Ottawa
  {
    id: 344, name: "Above the Rim Basketball School", provider: "Above the Rim",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 17, color: "#5DAE3B",
    address: "Orleans, Kanata, Nepean & Central Ottawa",
    url: "https://abovetherimbasketballschool.com/",
    hours: "Weekday evenings & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 10,
    rating: 4.7, ratingCount: 480,
    description: "Evening basketball programs and summer camps throughout greater Ottawa — Orleans, Kanata, Nepean, Kemptville, and Richmond. Skills development, scrimmages, and team play. All skill levels.",
    dates: "Year-round programs + summer camps",
    scoreBreakdown: { cost: 62, commute: 88, coverage: 72, rating: 94, extras: 58 }
  },

  // West Ottawa Basketball Association
  {
    id: 345, name: "West Ottawa Basketball Association", provider: "WOBA",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-10-01", endDate: "2027-03-31",
    ageMin: 5, ageMax: 18, color: "#5DAE3B",
    address: "West Ottawa (Kanata/Stittsville), ON",
    url: "http://westottawabasketball.com/",
    hours: "Weekday evenings & Saturdays",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 15,
    rating: 4.5, ratingCount: 320,
    description: "Competitive and recreational basketball for ages 5–18 in Ottawa west. House league season Oct–Mar. Development programs for all skill levels. Kanata and Stittsville gyms.",
    dates: "Oct–Mar season",
    scoreBreakdown: { cost: 72, commute: 85, coverage: 72, rating: 90, extras: 58 }
  },

  // Ottawa South Basketball Association
  {
    id: 346, name: "Ottawa South Basketball Association", provider: "OSBA",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-10-01", endDate: "2027-03-31",
    ageMin: 5, ageMax: 18, color: "#5DAE3B",
    address: "South Ottawa (Barrhaven area), ON",
    url: "https://ottawasouthbasketball.ca/",
    hours: "Weekday evenings & Saturdays",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 8, commuteKm: 5,
    rating: 4.6, ratingCount: 410,
    description: "Serves 700+ athletes. House league basketball for boys and girls ages 5–18 in south Ottawa. Fall/Winter 2026–27 registration opens Jun 1, 2026. Recreational and competitive streams.",
    dates: "Oct–Mar season, registration Jun 1",
    scoreBreakdown: { cost: 75, commute: 92, coverage: 72, rating: 92, extras: 58 }
  },

  // Kanata Dragons Soccer
  {
    id: 347, name: "Kanata Dragons — Youth Soccer", provider: "Kanata Dragons SC",
    type: "summer_camp", category: "sports", city: "ottawa", province: "ON", startDate: "2026-05-25", endDate: "2026-08-14",
    ageMin: 4, ageMax: 18, color: "#5DAE3B",
    address: "Various fields, Kanata, ON",
    url: "https://kanatadragons.com/summer-soccer/",
    hours: "Weekday evenings & Saturdays",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 15,
    rating: 4.6, ratingCount: 560,
    description: "Recreational soccer focused on fitness, fun, and participation. 2026 season starts May 25 for 10 weeks. Registration opens Jan 20. All ages and skill levels welcome in Kanata.",
    dates: "May 25–Aug 14, 10-week season",
    scoreBreakdown: { cost: 78, commute: 85, coverage: 68, rating: 92, extras: 52 }
  },

  // NextGen FC — Kanata Soccer
  {
    id: 348, name: "NextGen FC — Kanata Soccer Development", provider: "NextGen FC",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#5DAE3B",
    address: "Kanata, Ottawa, ON",
    url: "https://nextgenfc.ca/",
    hours: "Weekday evenings & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 15,
    rating: 4.7, ratingCount: 280,
    description: "Soccer development in Kanata with focus on ball mastery, technical skills, and mobility. Training sessions and competitive programs for youth. Professional coaching staff.",
    dates: "Year-round training",
    scoreBreakdown: { cost: 60, commute: 85, coverage: 68, rating: 94, extras: 52 }
  },

  // Soccer Shots — Ottawa (ages 2-8)
  {
    id: 349, name: "Soccer Shots Ottawa — Early Childhood", provider: "Soccer Shots",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 8, color: "#5DAE3B",
    address: "Multiple Ottawa locations",
    url: "https://www.soccershots.com/ottawa/",
    hours: "Various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 8,
    rating: 4.8, ratingCount: 450,
    description: "Age-appropriate soccer program for ages 2–8. Intro to soccer fundamentals through creative, engaging curricula. Positive coaching philosophy. Multiple Ottawa locations including Barrhaven, Kanata, and Orléans.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 65, commute: 90, coverage: 65, rating: 96, extras: 58 }
  },

  // Nepean Skating Club
  {
    id: 350, name: "Nepean Skating Club", provider: "NSC",
    type: "yearround", category: "skating", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-03-31",
    ageMin: 3, ageMax: 18, color: "#1AA5A0",
    address: "Nepean Sportsplex & local arenas, Ottawa, ON",
    url: "https://www.nepeanskatingclub.com/",
    hours: "Various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 8,
    rating: 4.7, ratingCount: 620,
    description: "Full spectrum of skating instruction teaching 800+ beginners yearly. CanSkate learn-to-skate, STARSkate, and competitive figure skating. Ideal preparation for hockey, ringette, speed skating, or figure skating.",
    dates: "Sep–Mar sessions",
    scoreBreakdown: { cost: 62, commute: 90, coverage: 72, rating: 94, extras: 52 }
  },

  // March Kanata Skating Club
  {
    id: 351, name: "March Kanata Skating Club", provider: "MKSC",
    type: "yearround", category: "skating", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-03-31",
    ageMin: 3, ageMax: 18, color: "#1AA5A0",
    address: "Kanata area arenas, Ottawa, ON",
    url: "https://mkskate.ca/",
    hours: "Various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 15,
    rating: 4.6, ratingCount: 340,
    description: "Skate Canada programs in Kanata — Pre-school, CanSkate, STARSkate, Adult/Teen, and SynchroSkate. Registration opens early August for 2026–27 season. All ages and levels.",
    dates: "Sep–Mar + summer break",
    scoreBreakdown: { cost: 62, commute: 85, coverage: 72, rating: 92, extras: 52 }
  },

  // Kanata School of Music
  {
    id: 352, name: "Kanata School of Music", provider: "KSM",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 18, color: "#7B4EA3",
    address: "Kanata, Ottawa, ON",
    url: "https://www.kanataschoolofmusic.com/",
    hours: "Mon–Sat, various lesson times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 15,
    rating: 4.7, ratingCount: 290,
    description: "Piano, guitar, singing, drums, bass, and ukulele lessons in Kanata. Fun, creative teaching methods for all ages and skill levels. Recitals and performance opportunities.",
    dates: "Year-round lessons",
    scoreBreakdown: { cost: 58, commute: 85, coverage: 72, rating: 94, extras: 52 }
  },

  // Canada Music Academy — Ottawa/Kanata/Orleans/Nepean
  {
    id: 353, name: "Canada Music Academy — Ottawa", provider: "Canada Music Academy",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 18, color: "#7B4EA3",
    address: "Kanata, Orleans, Nepean, Ottawa East & West",
    url: "https://canadamusicacademy.ca/",
    hours: "Mon–Sat, various lesson times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 12, commuteKm: 8,
    rating: 4.6, ratingCount: 480,
    description: "Certified teachers across the Ottawa area. Piano, guitar, voice, violin, and more. Studio and at-home lessons. Locations in Kanata, Orleans, Nepean, Ottawa East, and Ottawa West. RCM exam preparation.",
    dates: "Year-round lessons",
    scoreBreakdown: { cost: 55, commute: 90, coverage: 75, rating: 92, extras: 55 }
  },

  // West End Music School — Stittsville/Kanata
  {
    id: 354, name: "West End Music School — Stittsville & Kanata", provider: "West End Music",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 18, color: "#7B4EA3",
    address: "Stittsville & Kanata, Ottawa, ON",
    url: "https://westendmusicschool.com/",
    hours: "Mon–Sat, various lesson times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 18,
    rating: 4.7, ratingCount: 210,
    description: "Private music school offering piano, vocal, violin, cello, winds, and horn lessons. Stittsville and Kanata locations. All ages and levels, from beginners to advanced students.",
    dates: "Year-round lessons",
    scoreBreakdown: { cost: 55, commute: 82, coverage: 72, rating: 94, extras: 52 }
  },

  // Orleans Music Studio
  {
    id: 355, name: "Orleans Music Studio", provider: "OMS",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 18, color: "#7B4EA3",
    address: "Orleans, Ottawa, ON",
    url: "https://www.orleansmusicstudio.ca/",
    hours: "Mon–Sat, various lesson times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 22,
    rating: 4.6, ratingCount: 180,
    description: "Guitar, piano, and singing lessons in Orleans. Experienced instructors working with children of all ages and levels. Community recitals and performance opportunities.",
    dates: "Year-round lessons",
    scoreBreakdown: { cost: 60, commute: 78, coverage: 68, rating: 92, extras: 52 }
  },

  // Ottawa School of Theatre — Orleans & Central
  {
    id: 356, name: "Ottawa School of Theatre", provider: "OST",
    type: "yearround", category: "drama", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 18, color: "#7B4EA3",
    address: "Shenkman Arts Centre (Orleans) & Ottawa Rideau Hub",
    url: "https://ost-eto.ca/",
    hours: "After-school & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 22, commuteKm: 18,
    rating: 4.7, ratingCount: 420,
    description: "30 years of professional acting classes and drama programs in English and French. Children, teens, and adults. Locations at Shenkman Arts Centre (Orleans) and Ottawa Rideau Community Hub. End-of-term performances.",
    dates: "Year-round classes + summer/March break camps",
    scoreBreakdown: { cost: 55, commute: 78, coverage: 78, rating: 94, extras: 60 }
  },

  // Ottawa Valley Theatre Kids
  {
    id: 357, name: "Ottawa Valley Theatre Kids", provider: "OVTK",
    type: "yearround", category: "drama", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 14, color: "#7B4EA3",
    address: "Ottawa Valley area, ON",
    url: "https://ottawavalleytheatrekids.com/programs",
    hours: "After-school & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 30, commuteKm: 25,
    rating: 4.8, ratingCount: 150,
    description: "Drama Discovery for kindergarteners, plus youth theatre programs. Self-expression, confidence, and social skills through play, song, movement, and storytelling. Ages 4–14.",
    dates: "Year-round programs",
    scoreBreakdown: { cost: 62, commute: 72, coverage: 72, rating: 96, extras: 58 }
  },

  // The Flava Factory — Ottawa Hip Hop Dance
  {
    id: 358, name: "The Flava Factory — Hip Hop Dance", provider: "Flava Factory",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 7, ageMax: 18, color: "#7B4EA3",
    address: "Ottawa, ON",
    url: "https://www.flavafactory.ca/",
    hours: "After-school & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 14,
    rating: 4.8, ratingCount: 320,
    description: "Ottawa's only studio dedicated to urban dance — hip hop, breaking, popping, locking, house, and street styles. Positive, creative environment. Youth and adult classes. Ages 7+.",
    dates: "Year-round classes",
    scoreBreakdown: { cost: 60, commute: 85, coverage: 68, rating: 96, extras: 52 }
  },

  // Moov — Hip Hop & Street Dance Ottawa
  {
    id: 359, name: "Moov — Street Dance Classes", provider: "Moov Ottawa",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 7, ageMax: 18, color: "#7B4EA3",
    address: "Ottawa, ON",
    url: "https://www.moovottawa.com/",
    hours: "After-school & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 14,
    rating: 4.7, ratingCount: 210,
    description: "Street dance classes and shows — Hip Hop, House, Waacking, Afrobeats, and more. Ages 7–12 youth classes and adults 18+. Performance opportunities and community showcases.",
    dates: "Year-round classes",
    scoreBreakdown: { cost: 60, commute: 85, coverage: 68, rating: 94, extras: 52 }
  },

  // Nepean Artistic Swim Club
  {
    id: 360, name: "Nepean Artistic Swim Club", provider: "NASC",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 18, color: "#1AA5A0",
    address: "Nepean, Ottawa, ON",
    url: "https://nepeansynchro.com/",
    hours: "Various training times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 8,
    rating: 4.7, ratingCount: 180,
    description: "Recreational and competitive artistic (synchronized) swimming for boys and girls ages 5–18. Fun team environment for learning specific artistic swimming skills. Winter 2026 registration opens mid-December.",
    dates: "Sep–Jun season",
    scoreBreakdown: { cost: 58, commute: 90, coverage: 68, rating: 94, extras: 55 }
  },

  // Ottawa Swim Club
  {
    id: 361, name: "Ottawa Swim Club", provider: "OSC",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 18, color: "#1AA5A0",
    address: "Ottawa, ON",
    url: "https://ottawaswimclub.ca/",
    hours: "Various training times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 14,
    rating: 4.6, ratingCount: 310,
    description: "Competitive swim club offering year-round training. Development, age group, and senior competitive programs. Provincial and national level competition. All welcome from learn-to-swim graduates.",
    dates: "Year-round training",
    scoreBreakdown: { cost: 50, commute: 85, coverage: 72, rating: 92, extras: 55 }
  },

  // LOAM Clay Studio — Ottawa Pottery
  {
    id: 362, name: "LOAM Clay Studio — Kids Pottery", provider: "LOAM",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 8, ageMax: 17, color: "#7B4EA3",
    address: "Ottawa, ON",
    url: "https://loamclaystudio.ca/",
    hours: "After-school & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 14,
    rating: 4.8, ratingCount: 220,
    description: "Teen pottery programs in a working clay studio. Workshops, March Break projects, and summer camps. Hands-on wheel throwing and hand-building with real tools and techniques. Ages 8+.",
    dates: "Year-round classes + camps",
    scoreBreakdown: { cost: 55, commute: 85, coverage: 65, rating: 96, extras: 58 }
  },

  // MakerKids Ottawa — STEM After-School
  {
    id: 363, name: "MakerKids Ottawa — Coding & Robotics", provider: "MakerKids",
    type: "yearround", category: "stem", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 6, ageMax: 13, color: "#1AA5A0",
    address: "Ottawa, ON",
    url: "https://makerkids.com/ottawa/",
    hours: "After-school & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 14,
    rating: 4.6, ratingCount: 280,
    description: "Innovative after-school STEM program for ages 6–13. Robotics, Minecraft modding, and Scratch programming. Encourages creativity and collaboration. Small group sizes.",
    dates: "Year-round after-school + camps",
    scoreBreakdown: { cost: 55, commute: 85, coverage: 72, rating: 92, extras: 62 }
  },

  // Code Ninjas — Barrhaven
  {
    id: 364, name: "Code Ninjas — Barrhaven", provider: "Code Ninjas",
    type: "yearround", category: "stem", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 14, color: "#1AA5A0",
    address: "Barrhaven, Ottawa, ON",
    url: "https://www.codeninjas.com/barrhaven-on-ca",
    hours: "After-school & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 8, commuteKm: 5,
    rating: 4.7, ratingCount: 190,
    description: "Hands-on coding, robotics, and AI for kids in Barrhaven. Block coding, Minecraft, Roblox programming, and hands-on robotics. Game-based learning in a fun dojo setting. Ages 5–14.",
    dates: "Year-round after-school + camps",
    scoreBreakdown: { cost: 50, commute: 92, coverage: 72, rating: 94, extras: 62 }
  },

  // Ottawa Robotics Academy
  {
    id: 365, name: "Ottawa Robotics Academy", provider: "ORA",
    type: "yearround", category: "stem", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 6, ageMax: 16, color: "#1AA5A0",
    address: "Ottawa, ON",
    url: "https://ottawaroboticsacademy.ca/",
    hours: "After-school & weekends",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 14,
    rating: 4.7, ratingCount: 220,
    description: "Educational robotics programs — 'Robotics is my Sport.' LEGO robotics, coding, and engineering challenges. Competition preparation. After-school classes and summer camps. Ages 6–16.",
    dates: "Year-round classes + camps",
    scoreBreakdown: { cost: 55, commute: 85, coverage: 75, rating: 94, extras: 62 }
  },

  // Olympia Gymnastics — Ottawa
  {
    id: 366, name: "Olympia Gymnastics — Ottawa", provider: "Olympia Gymnastics",
    type: "yearround", category: "gymnastics", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 18, color: "#5DAE3B",
    address: "Ottawa, ON",
    url: "https://olympiagymnastics.ca/recreational/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 14,
    rating: 4.7, ratingCount: 380,
    description: "Recreational and competitive gymnastics. Parent-and-tot through competitive levels. Professional coaching, state-of-the-art equipment. Birthday parties and camps available.",
    dates: "Year-round sessions + camps",
    scoreBreakdown: { cost: 58, commute: 85, coverage: 75, rating: 94, extras: 58 }
  },

  // Kanata GymnoSphere
  {
    id: 367, name: "Kanata GymnoSphere", provider: "GymnoSphere",
    type: "yearround", category: "gymnastics", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 17, color: "#5DAE3B",
    address: "Kanata, Ottawa, ON",
    url: "https://www.kanatagymnastics.ca/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 15,
    rating: 4.6, ratingCount: 290,
    description: "Gymnastics, Mini Ninjas (gymnastics + martial arts + obstacle training), and recreational programs in Kanata. Builds confidence, coordination, and listening skills. Toddler through teen programs.",
    dates: "Year-round sessions + camps",
    scoreBreakdown: { cost: 60, commute: 85, coverage: 72, rating: 92, extras: 58 }
  },

  // Phoenix Martial Arts Academy — Ottawa
  {
    id: 368, name: "Phoenix Martial Arts Academy — Ottawa", provider: "Phoenix Taekwondo",
    type: "yearround", category: "martial_arts", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#E8842C",
    address: "Ottawa, ON",
    url: "https://ottawamartialarts.ca/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 12,
    rating: 4.7, ratingCount: 340,
    description: "Innovative children's taekwondo program developing physical, mental, and cognitive skills. Sports Canada certified instructors. Safe, nurturing environment. Ages 4+.",
    dates: "Year-round classes",
    scoreBreakdown: { cost: 55, commute: 88, coverage: 72, rating: 94, extras: 52 }
  },

  // Bergeron Martial Arts — Ottawa
  {
    id: 369, name: "Bergeron Martial Arts — Kids Karate", provider: "Bergeron",
    type: "yearround", category: "martial_arts", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 17, color: "#E8842C",
    address: "Ottawa, ON",
    url: "https://karateottawa.com/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 12,
    rating: 4.6, ratingCount: 420,
    description: "20+ years creating happier, healthier kids through karate. Kids classes from age 5. Builds discipline, confidence, and fitness. Self-defence and traditional martial arts values.",
    dates: "Year-round classes",
    scoreBreakdown: { cost: 55, commute: 88, coverage: 72, rating: 92, extras: 52 }
  },

  // Ottawa School of Art — Orleans & Kanata Camps
  {
    id: 370, name: "Ottawa School of Art — Summer Art Camps", provider: "OSA",
    type: "summer_camp", category: "arts", city: "ottawa", province: "ON", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 6, ageMax: 16, color: "#7B4EA3",
    address: "ByWard Market, Orléans & Kanata campuses",
    url: "https://www.artottawa.ca/programs/camps",
    hours: "9am–4pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 350, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 16,
    rating: 4.7, ratingCount: 520,
    description: "Summer art camps at 3 campuses — ByWard Market (8 weeks), Orléans (8 weeks), and Kanata (4 weeks). Painting, sculpture, drawing, ceramics, photography, and digital arts. Ages 6–16. $310–$405/week.",
    dates: "Jun 29–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 55, commute: 82, coverage: 78, rating: 94, extras: 62 }
  },

  // Hoop N' Jam — Toddler/Preschool Basketball
  {
    id: 371, name: "Hoop N' Jam — Kids Basketball", provider: "Hoop N' Jam",
    type: "yearround", category: "sports", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 8, color: "#5DAE3B",
    address: "Multiple Ottawa locations",
    url: "https://www.hoopnjam.ca/",
    hours: "Various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 8,
    rating: 4.8, ratingCount: 280,
    description: "Year-round basketball classes for toddlers and preschoolers ages 1.5–8. Scaled equipment, fun drills, and positive coaching. Multiple Ottawa locations.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 62, commute: 90, coverage: 65, rating: 96, extras: 55 }
  },

  // ── ONTARIO-WIDE EXPANSION — GYMNASTICS, SWIMMING, MARTIAL ARTS, SKATING, THEATRE, MUSIC, ESCAPE ROOMS, TUTORING, ATTRACTIONS ──

  // Toronto Premier Gymnastics
  {
    id: 306, name: "Toronto Premier Gymnastics", provider: "TPG",
    type: "yearround", category: "gymnastics", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 18, color: "#5DAE3B",
    address: "Riverdale & Scarborough locations, Toronto, ON",
    url: "https://torontopremiergymnastics.com/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 270, commuteKm: 450,
    rating: 4.7, ratingCount: 520,
    description: "Recreational and competitive gymnastics at two Toronto locations (Riverdale & Scarborough). NCCP-certified coaches, state-of-the-art equipment. Classes for toddlers through competitive athletes.",
    dates: "Year-round, Sep–Jun sessions + summer camps",
    scoreBreakdown: { cost: 60, commute: 20, coverage: 75, rating: 94, extras: 55 }
  },

  // Tumblers Gymnastics Centre — Ottawa
  {
    id: 307, name: "Tumblers Gymnastics Centre", provider: "Tumblers",
    type: "yearround", category: "gymnastics", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 18, color: "#5DAE3B",
    address: "1475 Star Top Rd, Ottawa, ON",
    url: "https://www.tumblersgymnastics.ca/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 18,
    rating: 4.6, ratingCount: 380,
    description: "Recreational and competitive gymnastics, birthday parties, camps, and drop-in sessions. Gymnastics Ontario member club with NCCP-certified coaches. Programs from parent-tot to competitive levels.",
    dates: "Year-round sessions + summer/March break camps",
    scoreBreakdown: { cost: 65, commute: 82, coverage: 75, rating: 92, extras: 60 }
  },

  // The Little Gym — London
  {
    id: 308, name: "The Little Gym — London", provider: "The Little Gym",
    type: "yearround", category: "gymnastics", city: "london", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 1, ageMax: 12, color: "#5DAE3B",
    address: "London, ON",
    url: "https://www.thelittlegym.com/ontario-london/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 380, commuteKm: 540,
    rating: 4.8, ratingCount: 210,
    description: "Gymnastics, dance, sports skills, and enrichment classes for kids 4 months–12 years. Builds confidence and coordination through movement in a fun, nurturing environment. Parents & Me through grade-school programs.",
    dates: "Year-round sessions + camps",
    scoreBreakdown: { cost: 60, commute: 10, coverage: 70, rating: 96, extras: 55 }
  },

  // YMCA Ottawa — Swim Lessons
  {
    id: 309, name: "YMCA Ottawa — Swim Lessons", provider: "YMCA National Capital Region",
    type: "yearround", category: "swimming", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#1AA5A0",
    address: "Multiple YMCA locations, Ottawa, ON",
    url: "https://www.ymcaottawa.ca/programs-services/health-fitness-aquatics/aquatics-programs/swim-lessons",
    hours: "Various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 15,
    rating: 4.5, ratingCount: 1800,
    description: "Certified swim instruction at multiple Ottawa YMCA locations. Otter program for beginners ages 6–12, YMCA Star Program for advanced swimmers. Max 12–16 students per group. Dolphins Swim Team for competitive swimmers.",
    dates: "Year-round, sessions every 10 weeks",
    scoreBreakdown: { cost: 75, commute: 85, coverage: 78, rating: 90, extras: 55 }
  },

  // YMCA GTA — Swim Lessons
  {
    id: 310, name: "YMCA Greater Toronto — Swim Programs", provider: "YMCA GTA",
    type: "yearround", category: "swimming", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#1AA5A0",
    address: "Multiple YMCA locations, Toronto & GTA",
    url: "https://www.ymcagta.org/health-and-fitness/children-programs",
    hours: "Various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 270, commuteKm: 450,
    rating: 4.5, ratingCount: 3200,
    description: "YMCA Learn to Swim program across Greater Toronto. Preschool aquatics, school-age levels, and competitive swim teams. Private lessons available. Registration opens Jun 18 for aquatics programs.",
    dates: "Year-round sessions",
    scoreBreakdown: { cost: 72, commute: 20, coverage: 78, rating: 90, extras: 55 }
  },

  // Silver 7 Martial Arts — Barrhaven & Kanata
  {
    id: 311, name: "Silver 7 Martial Arts — Kids Program", provider: "Silver 7",
    type: "yearround", category: "martial_arts", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#E8842C",
    address: "Barrhaven & Kanata locations, Ottawa, ON",
    url: "https://silver7martialarts.com/childrens-martial-arts/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 10, commuteKm: 5,
    rating: 4.8, ratingCount: 340,
    description: "Children's martial arts in Barrhaven & Kanata. Curriculum designed to improve fitness, self-confidence, and martial arts skills. Ages 4+. Two convenient south-Ottawa locations.",
    dates: "Year-round classes",
    scoreBreakdown: { cost: 60, commute: 92, coverage: 72, rating: 96, extras: 52 }
  },

  // Douvris Martial Arts — Ottawa
  {
    id: 312, name: "Douvris Martial Arts — Kids & Youth", provider: "Douvris",
    type: "yearround", category: "martial_arts", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#E8842C",
    address: "Multiple locations, Ottawa, ON",
    url: "https://douvris.com/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 12,
    rating: 4.7, ratingCount: 620,
    description: "40+ years of martial arts instruction. Kids and youth karate, kickboxing, and self-defence programs. Builds confidence, discipline, and fitness. Multiple Ottawa locations. March break and summer camps available.",
    dates: "Year-round classes + seasonal camps",
    scoreBreakdown: { cost: 55, commute: 88, coverage: 75, rating: 94, extras: 58 }
  },

  // Northern Karate Schools — Toronto
  {
    id: 313, name: "Northern Karate Schools — Kids Program", provider: "Northern Karate",
    type: "yearround", category: "martial_arts", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#E8842C",
    address: "Multiple locations, Toronto, ON",
    url: "https://northernkarateschools.com/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 270, commuteKm: 450,
    rating: 4.7, ratingCount: 890,
    description: "Toronto's top-rated karate school with multiple GTA locations. Kids, youth, and adult programs. Self-defence, discipline, fitness, and confidence building. Summer and March break camps.",
    dates: "Year-round classes + camps",
    scoreBreakdown: { cost: 55, commute: 20, coverage: 75, rating: 94, extras: 55 }
  },

  // Capital Taekwondo — Nepean
  {
    id: 314, name: "Capital Taekwondo — Nepean", provider: "Capital Taekwondo",
    type: "yearround", category: "martial_arts", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#E8842C",
    address: "Nepean, Ottawa, ON",
    url: "https://capitaltaekwondo.ca/",
    hours: "Mon–Sat, various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 10,
    rating: 4.6, ratingCount: 210,
    description: "Taekwondo classes for kids and youth in Nepean. Olympic-style taekwondo with certified instructors. Free trial class available. Builds discipline, coordination, and self-confidence.",
    dates: "Year-round classes",
    scoreBreakdown: { cost: 62, commute: 88, coverage: 68, rating: 92, extras: 52 }
  },

  // Skate Canada CanSkate — Ottawa
  {
    id: 315, name: "CanSkate — Ottawa Skating Clubs", provider: "Skate Canada / Skate Ontario",
    type: "yearround", category: "skating", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-03-31",
    ageMin: 3, ageMax: 17, color: "#1AA5A0",
    address: "Multiple arenas, Ottawa, ON",
    url: "https://skateontario.org/programs/canskate/",
    hours: "Various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 10,
    rating: 4.6, ratingCount: 1400,
    description: "Canada's premier learn-to-skate program. NCCP-certified coaches teach skating fundamentals for figure skating, hockey, ringette, or recreational skating. Available at 200+ clubs across Ontario including multiple Ottawa locations.",
    dates: "Sep–Mar sessions at various clubs",
    scoreBreakdown: { cost: 70, commute: 88, coverage: 72, rating: 92, extras: 50 }
  },

  // North Toronto Skating Club
  {
    id: 316, name: "North Toronto Skating Club", provider: "NTSC",
    type: "yearround", category: "skating", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-03-31",
    ageMin: 3, ageMax: 18, color: "#1AA5A0",
    address: "North Toronto Memorial Arena, Toronto, ON",
    url: "https://northtorontoskating.com/programs/",
    hours: "Various class times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 270, commuteKm: 450,
    rating: 4.7, ratingCount: 350,
    description: "Learn-to-skate and figure skating programs. CanSkate, STARSkate, and competitive programs. Summer skating camp Jun 29–Aug 14. Registration opens Aug 1 (members) / Aug 15 (new).",
    dates: "Sep–Mar + summer camp Jun–Aug",
    scoreBreakdown: { cost: 60, commute: 20, coverage: 72, rating: 94, extras: 52 }
  },

  // North Toronto Hockey — Learn to Play
  {
    id: 317, name: "North Toronto Hockey — Learn to Play", provider: "NT Hockey",
    type: "yearround", category: "skating", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-03-31",
    ageMin: 4, ageMax: 12, color: "#1AA5A0",
    address: "Various arenas, North Toronto, ON",
    url: "https://nthockey.ca/learn-to-play/",
    hours: "Weekday & weekend sessions",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 270, commuteKm: 450,
    rating: 4.7, ratingCount: 480,
    description: "One of Canada's most comprehensive hockey skills programs. Professional instructors teach skating and hockey fundamentals. Perfect launching pad into house league or competitive hockey. Registration opens Apr 1.",
    dates: "Sep 2026–Mar 2027 season",
    scoreBreakdown: { cost: 55, commute: 20, coverage: 72, rating: 94, extras: 52 }
  },

  // Great Big Theatre Company — Toronto
  {
    id: 318, name: "Great Big Theatre Company — Kids Acting", provider: "GBTC",
    type: "yearround", category: "drama", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 6, ageMax: 14, color: "#7B4EA3",
    address: "Toronto, ON",
    url: "https://www.gbtc.com/",
    hours: "After-school & weekend classes",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 270, commuteKm: 450,
    rating: 4.8, ratingCount: 420,
    description: "Acting, drama, and theatre arts for ages 6–14. Programs include plays, mime, improvisation, theatre games, and musical theatre, concluding with public performances. Full-day summer and March break camps.",
    dates: "Year-round classes + summer/March break camps",
    scoreBreakdown: { cost: 55, commute: 20, coverage: 78, rating: 96, extras: 62 }
  },

  // Youth Theatre Canada — Multi-City
  {
    id: 319, name: "Youth Theatre Canada", provider: "Youth Theatre Canada",
    type: "yearround", category: "drama", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 8, ageMax: 18, color: "#7B4EA3",
    address: "Hamilton, Toronto & Ottawa locations",
    url: "https://www.youththeatrecanada.com/",
    hours: "After-school & weekend",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 270, commuteKm: 450,
    rating: 4.6, ratingCount: 280,
    description: "Youth theatre programs in Hamilton, Toronto, and Ottawa. Beginner (8–11), Intermediate (10–14), and Advanced (13–18) streams. Performance-based learning with end-of-term showcases.",
    dates: "2026–2027 school-year sessions",
    scoreBreakdown: { cost: 60, commute: 20, coverage: 75, rating: 92, extras: 58 }
  },

  // ARTSies — Toronto Musical Theatre
  {
    id: 320, name: "ARTSies — Musical Theatre for Kids", provider: "ARTSies Inc.",
    type: "yearround", category: "drama", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#7B4EA3",
    address: "Toronto, Scarborough, Markham & York Region",
    url: "https://www.artsiesinc.com/",
    hours: "After-school & weekend classes",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 270, commuteKm: 450,
    rating: 4.7, ratingCount: 310,
    description: "Musical theatre classes, summer camps, and performances for kids and teenagers. Locations in Toronto, Scarborough, Markham, and York Region. Acting, singing, and dance in one program.",
    dates: "Year-round classes + summer camps",
    scoreBreakdown: { cost: 58, commute: 20, coverage: 78, rating: 94, extras: 60 }
  },

  // Royal Conservatory — Oscar Peterson School of Music
  {
    id: 321, name: "Royal Conservatory — Kids Music Lessons", provider: "The Royal Conservatory",
    type: "yearround", category: "music", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 17, color: "#7B4EA3",
    address: "273 Bloor St W, Toronto, ON",
    url: "https://www.rcmusic.com/learning/oscar-peterson-school-of-music/music-lessons-for-kids-and-teens",
    hours: "Mon–Sat, various lesson times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 270, commuteKm: 450,
    rating: 4.8, ratingCount: 1200,
    description: "Canada's premier music school. Piano, guitar, voice, violin, cello, flute, drums, and carnatic violin lessons for kids 4–17. Oscar Peterson School of Music at the Royal Conservatory in downtown Toronto.",
    dates: "Year-round lessons, Sep–Jun terms",
    scoreBreakdown: { cost: 45, commute: 20, coverage: 80, rating: 96, extras: 50 }
  },

  // Ontario Conservatory of Music
  {
    id: 322, name: "Ontario Conservatory of Music (OCOM)", provider: "OCOM",
    type: "yearround", category: "music", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 18, color: "#7B4EA3",
    address: "Multiple locations across Ontario",
    url: "https://ocom.ca/",
    hours: "Various lesson times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 270, commuteKm: 450,
    rating: 4.6, ratingCount: 680,
    description: "Certified music programs at locations throughout Ontario. Piano, ukulele, guitar, violin, singing & vocal training, band, and music theory. RCM exam preparation. All ages and levels.",
    dates: "Year-round lessons",
    scoreBreakdown: { cost: 55, commute: 20, coverage: 75, rating: 92, extras: 52 }
  },

  // Allegro Music School — Ottawa
  {
    id: 323, name: "Allegro Music School — Ottawa", provider: "Allegro",
    type: "yearround", category: "music", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 18, color: "#7B4EA3",
    address: "Ottawa, ON",
    url: "https://www.allegromusicschools.com/ottawa",
    hours: "Mon–Sat, various lesson times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 15, commuteKm: 12,
    rating: 4.7, ratingCount: 420,
    description: "35+ years providing high-quality music lessons in Ottawa. Piano, violin, guitar, singing, drums, and more. Certified instructors, all skill levels. Recitals and RCM exam preparation.",
    dates: "Year-round lessons",
    scoreBreakdown: { cost: 58, commute: 88, coverage: 75, rating: 94, extras: 52 }
  },

  // Jigsaw Escape Room — Ottawa (kids-friendly)
  {
    id: 324, name: "Jigsaw Escape Room — Ottawa", provider: "Jigsaw",
    type: "yearround", category: "escape_room", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 8, ageMax: 18, color: "#E8842C",
    address: "ByWard Market, Ottawa, ON",
    url: "https://www.jigsawescape.com/",
    hours: "Daily 10am–10pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 30, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 22, commuteKm: 18,
    rating: 4.7, ratingCount: 1100,
    description: "8 escape rooms in Ottawa's ByWard Market with challenges in English and French. Family-friendly rooms available for ages 8+. Birthday party packages. 60-minute adventures with varying difficulty levels.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 72, commute: 78, coverage: 65, rating: 94, extras: 55 }
  },

  // Looking Glass Adventures — Toronto Escape Rooms
  {
    id: 325, name: "Looking Glass Adventures — Family Escape Rooms", provider: "Looking Glass",
    type: "yearround", category: "escape_room", city: "toronto", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 7, ageMax: 18, color: "#E8842C",
    address: "Toronto, ON",
    url: "https://www.lookingglassadventures.com/",
    hours: "Daily, various booking times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 35, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 270, commuteKm: 450,
    rating: 4.8, ratingCount: 780,
    description: "Toronto's most welcoming family escape room studio. Rooms designed like interactive stories with clever puzzles kids can solve. Private bookings only — no strangers in your group. Perfect for beginners and mixed-age families.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 68, commute: 20, coverage: 65, rating: 96, extras: 55 }
  },

  // Escapology — London ON
  {
    id: 326, name: "Escapology — London Escape Rooms", provider: "Escapology",
    type: "yearround", category: "escape_room", city: "london", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 8, ageMax: 18, color: "#E8842C",
    address: "London, ON",
    url: "https://www.escapology.com/en/london-canada",
    hours: "Daily, various booking times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 32, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 380, commuteKm: 540,
    rating: 4.5, ratingCount: 450,
    description: "Multi-themed escape rooms in London, Ontario. Family-friendly and team challenges. Birthday party packages. Multiple difficulty levels suitable for kids, teens, and adults.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 70, commute: 10, coverage: 62, rating: 90, extras: 52 }
  },

  // Oxford Learning — Ottawa Tutoring
  {
    id: 327, name: "Oxford Learning — Ottawa Tutoring", provider: "Oxford Learning",
    type: "yearround", category: "tutoring", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 18, color: "#1AA5A0",
    address: "Multiple Ottawa locations",
    url: "https://oxfordlearning.com/region/ottawa/",
    hours: "Mon–Sat, various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 10,
    rating: 4.5, ratingCount: 520,
    description: "Professional tutoring in math, reading, writing, and organization skills. Personalized programs adapted to each child's needs. Multiple Ottawa locations. JK through Grade 12.",
    dates: "Year-round programs",
    scoreBreakdown: { cost: 40, commute: 88, coverage: 72, rating: 90, extras: 60 }
  },

  // Kumon — Ontario-Wide
  {
    id: 328, name: "Kumon — Math & Reading Centres", provider: "Kumon",
    type: "yearround", category: "tutoring", city: "toronto", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 4, ageMax: 18, color: "#1AA5A0",
    address: "100+ locations across Ontario",
    url: "https://www.kumon.com/ca-en/locations",
    hours: "Mon–Fri, various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 15, commuteKm: 10,
    rating: 4.3, ratingCount: 4500,
    description: "World's largest after-school math and reading program. Self-paced worksheets build mastery from basics through advanced levels. 100+ Ontario locations. ~$50 registration + $100–$150/month per subject.",
    dates: "Year-round, continuous enrollment",
    scoreBreakdown: { cost: 50, commute: 88, coverage: 68, rating: 86, extras: 60 }
  },

  // Sylvan Learning — Ontario
  {
    id: 329, name: "Sylvan Learning — Tutoring & STEM Camps", provider: "Sylvan Learning",
    type: "yearround", category: "tutoring", city: "toronto", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 18, color: "#1AA5A0",
    address: "Burlington, Hamilton, Oakville, Toronto, London, Ottawa, ON",
    url: "https://www.ourkids.net/camp/sylvan-learning-centres.php",
    hours: "Mon–Sat, various session times",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 270, commuteKm: 450,
    rating: 4.4, ratingCount: 1800,
    description: "35+ years of supplemental education. Professional tutoring, academic enrichment, and EDGE/STEM camps for JK–Grade 12. Locations in Burlington, Hamilton, Oakville, Markham, Toronto, London, and Ottawa.",
    dates: "Year-round tutoring + seasonal camps",
    scoreBreakdown: { cost: 42, commute: 20, coverage: 75, rating: 88, extras: 62 }
  },

  // Canada's Wonderland — Vaughan
  {
    id: 330, name: "Canada's Wonderland", provider: "Six Flags",
    type: "summer_camp", category: "multi", city: "vaughan", province: "ON", startDate: "2026-05-03", endDate: "2026-10-31",
    ageMin: 3, ageMax: 18, color: "#1AA5A0",
    address: "1 Canada's Wonderland Dr, Vaughan, ON",
    url: "https://www.sixflags.com/canadaswonderland",
    hours: "Daily 10am–10pm (summer)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 55, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 260, commuteKm: 440,
    rating: 4.3, ratingCount: 55000,
    description: "200+ attractions including 18 roller coasters, KidZville and Planet Snoopy (25+ kids rides), Splash Works 20-acre water park, and KidZfest (Jul 22–Aug 2). Season passes available. Chaperone required for ages 15 and under after 4pm.",
    dates: "May 3–Oct 31, daily in summer",
    scoreBreakdown: { cost: 42, commute: 20, coverage: 92, rating: 86, extras: 50 }
  },

  // Great Wolf Lodge — Niagara Falls
  {
    id: 331, name: "Great Wolf Lodge — Niagara Falls", provider: "Great Wolf Lodge",
    type: "yearround", category: "playground", city: "niagara_falls", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 2, ageMax: 17, color: "#E8842C",
    address: "3950 Victoria Ave, Niagara Falls, ON",
    url: "https://www.greatwolf.com/niagara",
    hours: "Indoor waterpark open year-round, 84°F",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 310, commuteKm: 530,
    rating: 4.2, ratingCount: 12000,
    description: "100,000 sq ft indoor water park at 84°F year-round. Kiddie pools, waterslides, wave pool, MagiQuest adventure game, laser tag, bowling, mini golf, and arcade. Resort suites with themed rooms. Day passes available.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 35, commute: 15, coverage: 90, rating: 84, extras: 65 }
  },

  // African Lion Safari — Hamilton
  {
    id: 332, name: "African Lion Safari", provider: "African Lion Safari",
    type: "summer_camp", category: "nature", city: "hamilton", province: "ON", startDate: "2026-05-01", endDate: "2026-10-15",
    ageMin: 2, ageMax: 18, color: "#5DAE3B",
    address: "1386 Cooper Rd, Hamilton, ON",
    url: "https://lionsafari.com/",
    hours: "Daily 10am–5:30pm (summer)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 38, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 300, commuteKm: 500,
    rating: 4.4, ratingCount: 9500,
    description: "Canada's original drive-through safari with 1,000+ animals across 100+ species. Splash pad, train rides, boat cruise, playgrounds, and animal encounters. A yearly Ontario family tradition.",
    dates: "May–Oct, daily in summer",
    scoreBreakdown: { cost: 65, commute: 15, coverage: 88, rating: 88, extras: 55 }
  },

  // Flying Squirrel Sports — Hamilton & London
  {
    id: 333, name: "Flying Squirrel Trampoline Park — Hamilton", provider: "Flying Squirrel Sports",
    type: "yearround", category: "playground", city: "hamilton", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 18, color: "#E8842C",
    address: "Hamilton & London locations, ON",
    url: "https://flyingsquirrelsports.ca/",
    hours: "Daily 10am–9pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 25, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 300, commuteKm: 500,
    rating: 4.3, ratingCount: 3200,
    description: "3D climbing walls, dodgeball courts, aerial silks, trampoline fly zones, ninja/parkour courses, arcade, kiddie courts, battle beams, and ziplines. Birthday party packages. Hamilton and London locations.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 75, commute: 15, coverage: 82, rating: 86, extras: 55 }
  },

  // Air Riderz — GTA Trampoline Parks
  {
    id: 334, name: "Air Riderz Trampoline Parks — GTA", provider: "Air Riderz",
    type: "yearround", category: "playground", city: "vaughan", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 18, color: "#E8842C",
    address: "Mississauga, Aurora/Newmarket & Vaughan, ON",
    url: "https://airriderz.com/",
    hours: "Daily 10am–9pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 25, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 260, commuteKm: 440,
    rating: 4.2, ratingCount: 2800,
    description: "Wall-to-wall trampolines, Climb Zone, Slam Dunk basketball, dodgeball, Ninja Warrior course, stunt bag, and arcade. Locations in Mississauga, Aurora/Newmarket, and Vaughan. Birthday and group packages.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 75, commute: 20, coverage: 80, rating: 84, extras: 55 }
  },

  // Wild Waterworks — Hamilton
  {
    id: 335, name: "Wild Waterworks — Hamilton Water Park", provider: "Hamilton Conservation Authority",
    type: "summer_camp", category: "splashpad", city: "hamilton", province: "ON", startDate: "2026-06-20", endDate: "2026-09-07",
    ageMin: 2, ageMax: 18, color: "#1AA5A0",
    address: "680 Van Wagners Beach Rd, Hamilton, ON",
    url: "https://wild-waterworks.com/",
    hours: "Daily 10am–6pm (summer)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 28, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 300, commuteKm: 500,
    rating: 4.3, ratingCount: 2100,
    description: "Six exciting waterslides plus Little Squirt Works area for younger kids with wading pool, kid-sized slides, sprays, mists, and fountains. Hamilton's premier outdoor water park on the lake.",
    dates: "Jun 20–Sep 7 daily",
    scoreBreakdown: { cost: 72, commute: 15, coverage: 72, rating: 86, extras: 50 }
  },

  // Wet'n'Wild Toronto — Brampton
  {
    id: 336, name: "Wet'n'Wild Toronto — Water Park", provider: "Wet'n'Wild",
    type: "summer_camp", category: "splashpad", city: "brampton", province: "ON", startDate: "2026-06-15", endDate: "2026-09-07",
    ageMin: 3, ageMax: 18, color: "#1AA5A0",
    address: "7855 Finch Ave W, Brampton, ON",
    url: "https://wetnwildtoronto.com/",
    hours: "Daily 10am–6pm (summer)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 40, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 260, commuteKm: 440,
    rating: 4.1, ratingCount: 3500,
    description: "Krazy Kanuck family raft ride, mega treehouse play structure, mini water park for little ones, bowl slide, free-fall speed slides, and Klondike Express mat racer. Brampton's premier outdoor water park.",
    dates: "Jun 15–Sep 7 daily",
    scoreBreakdown: { cost: 60, commute: 20, coverage: 78, rating: 82, extras: 50 }
  },

  // Code-it Hacks Kids — Toronto Coding Camps
  {
    id: 337, name: "Code-it Hacks Kids — Coding & Robotics", provider: "Code-it Hacks",
    type: "summer_camp", category: "stem", city: "toronto", province: "ON", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 5, ageMax: 14, color: "#1AA5A0",
    address: "Toronto, ON",
    url: "https://www.codeithackskids.com/summer-stem-camps",
    hours: "9am–4pm (extended care available)",
    extendedCare: true, extendedHours: "8am–5:30pm",
    priceWeekly: 375, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 270, commuteKm: 450,
    rating: 4.7, ratingCount: 340,
    description: "Summer STEM camps with coding, robotics, AI, circuits, and electronics. Hands-on projects that spark creativity and develop coding skills. Small group sizes. Ages 5–14.",
    dates: "Jun 29–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 55, commute: 20, coverage: 78, rating: 94, extras: 68 }
  },

  // Zebra Robotics — Toronto
  {
    id: 338, name: "Zebra Robotics — Kids AI & Coding", provider: "Zebra Robotics",
    type: "yearround", category: "stem", city: "toronto", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 5, ageMax: 17, color: "#1AA5A0",
    address: "Danforth & other GTA locations, Toronto, ON",
    url: "https://zebrarobotics.com/",
    hours: "After-school & weekend classes",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 270, commuteKm: 450,
    rating: 4.6, ratingCount: 280,
    description: "Kids robotics, AI, and coding classes. LEGO robotics, Python, Scratch, Arduino, and 3D printing. Year-round after-school programs and summer camps. Multiple GTA locations.",
    dates: "Year-round classes + summer camps",
    scoreBreakdown: { cost: 55, commute: 20, coverage: 75, rating: 92, extras: 60 }
  },

  // ── REGIONAL LISTINGS — TORONTO, MONTREAL, GATINEAU, KINGSTON & MORE ──

  // Ripley's Aquarium of Canada — Toronto
  {
    id: 283, name: "Ripley's Aquarium of Canada", provider: "Ripley's",
    type: "yearround", category: "museum", city: "toronto", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 18, color: "#1AA5A0",
    address: "288 Bremner Blvd, Toronto, ON",
    url: "https://www.ripleyaquariums.com/canada/",
    hours: "Mon–Sun 10am–8pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 39, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 270, commuteKm: 450,
    rating: 4.5, ratingCount: 28000,
    description: "Canada's largest indoor aquarium with 20,000+ aquatic animals, Dangerous Lagoon walk-through tunnel, stingray touch tank, and interactive exhibits. Perfect family day trip from Ottawa.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 65, commute: 20, coverage: 90, rating: 90, extras: 50 }
  },

  // CN Tower — Toronto
  {
    id: 284, name: "CN Tower", provider: "CN Tower",
    type: "yearround", category: "museum", city: "toronto", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 18, color: "#1AA5A0",
    address: "290 Bremner Blvd, Toronto, ON",
    url: "https://www.cntower.ca/",
    hours: "Daily 9am–10:30pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 44, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 270, commuteKm: 450,
    rating: 4.5, ratingCount: 42000,
    description: "Iconic 553m tower with glass floor observation deck, EdgeWalk (age 13+), revolving restaurant, and breathtaking views of Toronto and Lake Ontario. Canada's most recognizable landmark.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 55, commute: 20, coverage: 80, rating: 90, extras: 50 }
  },

  // Toronto Zoo — Toronto
  {
    id: 285, name: "Toronto Zoo", provider: "Toronto Zoo",
    type: "yearround", category: "nature", city: "toronto", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 18, color: "#5DAE3B",
    address: "2000 Meadowvale Rd, Toronto, ON",
    url: "https://www.torontozoo.com/",
    hours: "Daily 9am–7pm (summer)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 33, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 280, commuteKm: 460,
    rating: 4.5, ratingCount: 35000,
    description: "Canada's largest zoo with 3,000+ animals across 7 geographic regions. Tundra Trek, African Savanna, splash island, and seasonal camps. Full-day family experience.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 70, commute: 20, coverage: 92, rating: 90, extras: 55 }
  },

  // Royal Ontario Museum (ROM) — Toronto
  {
    id: 286, name: "Royal Ontario Museum (ROM)", provider: "ROM",
    type: "yearround", category: "museum", city: "toronto", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 18, color: "#1AA5A0",
    address: "100 Queens Park, Toronto, ON",
    url: "https://www.rom.on.ca/",
    hours: "Tue–Sun 10am–5:30pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 19, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 270, commuteKm: 450,
    rating: 4.5, ratingCount: 22000,
    description: "Canada's largest museum with world-class dinosaur gallery, Egyptian mummies, biodiversity exhibits, and hands-on kids discovery zones. Regular family programs and school break camps.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 82, commute: 20, coverage: 88, rating: 90, extras: 55 }
  },

  // LEGOLAND Discovery Centre — Vaughan
  {
    id: 287, name: "LEGOLAND Discovery Centre Toronto", provider: "Merlin Entertainments",
    type: "yearround", category: "multi", city: "vaughan", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 10, color: "#1AA5A0",
    address: "1 Bass Pro Mills Dr, Vaughan, ON",
    url: "https://www.legolanddiscoverycentre.com/toronto/",
    hours: "Mon–Sat 11am–7pm, Sun 11am–6pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 30, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 260, commuteKm: 440,
    rating: 4.0, ratingCount: 5400,
    description: "34,000 sq ft indoor LEGO playground with 3M+ bricks, 2 rides (Kingdom Quest, MERLIN'S Apprentice), 4D cinema, MINILAND Toronto, and Master Builder workshops. Ages 3–10.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 72, commute: 20, coverage: 75, rating: 80, extras: 60 }
  },

  // Ontario Science Centre — Toronto
  {
    id: 288, name: "Ontario Science Centre", provider: "Ontario Science Centre",
    type: "yearround", category: "stem", city: "toronto", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 18, color: "#1AA5A0",
    address: "55 Lake Shore Blvd E, Toronto, ON",
    url: "https://www.ontariosciencecentre.ca/",
    hours: "Daily 10am–5pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 22, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 270, commuteKm: 450,
    rating: 4.4, ratingCount: 15000,
    description: "Interactive science museum with 500+ hands-on exhibits covering space, human body, physics, and nature. Planetarium, IMAX theatre, and seasonal STEM camps for kids 5–14.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 78, commute: 20, coverage: 85, rating: 88, extras: 55 }
  },

  // CampTO — City of Toronto
  {
    id: 289, name: "CampTO — City of Toronto Day Camps", provider: "City of Toronto",
    type: "summer_camp", category: "multi", city: "toronto", province: "ON", startDate: "2026-06-29", endDate: "2026-08-28",
    ageMin: 4, ageMax: 15, color: "#1AA5A0",
    address: "170+ locations across Toronto, ON",
    url: "https://www.toronto.ca/explore-enjoy/parks-recreation/program-activities/camps-after-school/campto/",
    hours: "9am–4pm (extended care 7am–6pm)",
    extendedCare: true, extendedHours: "7am–6pm",
    priceWeekly: 100, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 270, commuteKm: 450,
    rating: 4.3, ratingCount: 8500,
    description: "City of Toronto's largest camp program with 100K+ spaces across 170 locations. Sports, arts, nature, science, and performing arts streams. Financial assistance available. Ages 4–15.",
    dates: "Jun 29–Aug 28, weekly sessions",
    scoreBreakdown: { cost: 92, commute: 20, coverage: 90, rating: 86, extras: 72 }
  },

  // TAC Sports Camps — Toronto
  {
    id: 290, name: "TAC Sports — Toronto Athletic Camps", provider: "TAC Sports",
    type: "summer_camp", category: "sports", city: "toronto", province: "ON", startDate: "2026-06-29", endDate: "2026-08-28",
    ageMin: 4, ageMax: 16, color: "#5DAE3B",
    address: "Various locations, Toronto, ON",
    url: "https://tacsports.ca/summercamp/",
    hours: "9am–4pm (extended care available)",
    extendedCare: true, extendedHours: "8am–5:30pm",
    priceWeekly: 399, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 270, commuteKm: 450,
    rating: 4.7, ratingCount: 1200,
    description: "Sports, swim, STEAM and biking camps ages 3–16. Basketball, soccer, volleyball, dance & gymnastics, 3D design & coding, LEGO robotics, and ECO STEM camps. Multiple Toronto locations.",
    dates: "Jun 29–Aug 28, weekly sessions",
    scoreBreakdown: { cost: 55, commute: 20, coverage: 85, rating: 94, extras: 68 }
  },

  // Camp U of T — Toronto
  {
    id: 291, name: "Camp U of T", provider: "University of Toronto",
    type: "summer_camp", category: "multi", city: "toronto", province: "ON", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 5, ageMax: 17, color: "#1AA5A0",
    address: "University of Toronto, 55 Harbord St, Toronto, ON",
    url: "https://kpe.utoronto.ca/child-youth/welcome-camp-u-t",
    hours: "9am–4pm (extended care 8am–5:30pm)",
    extendedCare: true, extendedHours: "8am–5:30pm",
    priceWeekly: 425, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 270, commuteKm: 450,
    rating: 4.6, ratingCount: 900,
    description: "World-class camps on U of T's downtown campus. Multi-sport, basketball, soccer, swimming, arts, leadership, and specialty programs. Professional coaching, excellent facilities. Ages 5–17.",
    dates: "Jun 29–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 50, commute: 20, coverage: 82, rating: 92, extras: 68 }
  },

  // Space for Life — Biodôme Montreal
  {
    id: 292, name: "Space for Life — Biodôme", provider: "Espace pour la vie",
    type: "yearround", category: "nature", city: "montreal", province: "QC", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 18, color: "#5DAE3B",
    address: "4777 Pierre-De Coubertin Ave, Montreal, QC",
    url: "https://espacepourlavie.ca/en/biodome",
    hours: "Tue–Sun 9am–5pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 22, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 120, commuteKm: 200,
    rating: 4.5, ratingCount: 18000,
    description: "Largest natural science museum complex in Canada with 4 ecosystems under one roof — Tropical Rainforest, Laurentian Maple Forest, Gulf of St. Lawrence, Sub-Antarctic Islands. Part of Space for Life (Biodôme, Planetarium, Insectarium, Botanical Garden).",
    dates: "Open year-round",
    scoreBreakdown: { cost: 78, commute: 35, coverage: 88, rating: 90, extras: 55 }
  },

  // La Ronde — Six Flags Montreal
  {
    id: 293, name: "La Ronde — Six Flags Montreal", provider: "Six Flags",
    type: "summer_camp", category: "multi", city: "montreal", province: "QC", startDate: "2026-06-12", endDate: "2026-09-07",
    ageMin: 5, ageMax: 18, color: "#1AA5A0",
    address: "22 Chemin Macdonald, Montreal, QC",
    url: "https://en.sixflags.com/laronde",
    hours: "Daily 10am–10pm (summer)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 65, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 120, commuteKm: 200,
    rating: 4.0, ratingCount: 25000,
    description: "Quebec's largest amusement park with 40+ rides and attractions. Family rides, thrill coasters, waterpark, and 4D theatre. Season passes from $90. International Fireworks Competition (Jul–Aug).",
    dates: "Jun 12–Sep 7, daily in summer",
    scoreBreakdown: { cost: 40, commute: 35, coverage: 85, rating: 80, extras: 50 }
  },

  // Cosmodome — Laval
  {
    id: 294, name: "Cosmodôme — Space Science Centre", provider: "Cosmodôme",
    type: "yearround", category: "stem", city: "laval", province: "QC", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 17, color: "#1AA5A0",
    address: "2150 Autoroute des Laurentides, Laval, QC",
    url: "https://cosmodome.org/en/",
    hours: "Tue–Sun 10am–5pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 24, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 130, commuteKm: 215,
    rating: 4.4, ratingCount: 3200,
    description: "Interactive space science centre with astronaut training simulations, full-size rocket replicas, and space camps. Kids train like astronauts with simulated missions, zero-gravity chair, and multi-axis chair. Day and overnight space camps available.",
    dates: "Open year-round, camps in summer",
    scoreBreakdown: { cost: 75, commute: 32, coverage: 80, rating: 88, extras: 60 }
  },

  // Sporthèque — Gatineau Day Camps
  {
    id: 295, name: "Sporthèque — Day Camps", provider: "Sporthèque",
    type: "summer_camp", category: "sports", city: "gatineau", province: "QC", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 5, ageMax: 12, color: "#5DAE3B",
    address: "500 Boul. de la Gappe, Gatineau, QC",
    url: "https://sportheque.com/sector/day-camp-activities",
    hours: "9am–4pm",
    extendedCare: true, extendedHours: "7:30am–5:30pm",
    priceWeekly: 280, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 18,
    rating: 4.6, ratingCount: 850,
    description: "Best sports camp in Outaouais for 20+ years. Two-week theme-based sessions with tennis, swimming, yoga, Junior FIT, and team sports. Ages 5–12. Bilingual staff, indoor/outdoor facilities.",
    dates: "Jun 29–Aug 21, 2-week segments",
    scoreBreakdown: { cost: 62, commute: 80, coverage: 78, rating: 92, extras: 68 }
  },

  // Unigym Gatineau — Gymnastics Camps
  {
    id: 296, name: "Unigym Gatineau — Gymnastics Camps", provider: "Unigym",
    type: "summer_camp", category: "gymnastics", city: "gatineau", province: "QC", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 5, ageMax: 12, color: "#5DAE3B",
    address: "90 Rue Jean-Proulx, Gatineau, QC",
    url: "https://www.unigymgatineau.com/en/103-summer-camp",
    hours: "9am–4pm",
    extendedCare: true, extendedHours: "7:30am–5:30pm",
    priceWeekly: 245, priceDaily: 0, siblingDiscount: false, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 30, commuteKm: 22,
    rating: 4.7, ratingCount: 620,
    description: "Daily gymnastics and trampoline sessions with qualified coaches plus exciting variety activities. Early bird $235–$245 (week 1), regular $280–$290. Ages 5–12. Professional gymnastic facility.",
    dates: "Jun 29–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 68, commute: 75, coverage: 72, rating: 94, extras: 62 }
  },

  // Cascades Club — Chelsea Summer Camp
  {
    id: 297, name: "Cascades Club — Summer Camp", provider: "Cascades Club",
    type: "summer_camp", category: "nature", city: "chelsea", province: "QC", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 5, ageMax: 14, color: "#5DAE3B",
    address: "Cascades Club, Gatineau River, Chelsea, QC",
    url: "https://www.cascadesclub.ca/summer-camp",
    hours: "9am–4pm",
    extendedCare: true, extendedHours: "8am–5pm",
    priceWeekly: 320, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 35, commuteKm: 30,
    rating: 4.8, ratingCount: 380,
    description: "Nature adventure camp on the Gatineau River in Chelsea. Canoeing, swimming, hiking, outdoor skills, arts & crafts, and team games. Beautiful Gatineau Hills setting just 20 min from Ottawa.",
    dates: "Jun 29–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 58, commute: 70, coverage: 78, rating: 96, extras: 65 }
  },

  // Q-Camps — Queen's University Kingston
  {
    id: 298, name: "Q-Camps — Queen's University", provider: "Queen's Athletics & Recreation",
    type: "summer_camp", category: "multi", city: "kingston", province: "ON", startDate: "2026-07-01", endDate: "2026-08-21",
    ageMin: 5, ageMax: 18, color: "#1AA5A0",
    address: "Queen's University, Kingston, ON",
    url: "https://rec.gogaelsgo.com/sports/2024/1/19/about-q-camps.aspx",
    hours: "9am–4pm (extended care available)",
    extendedCare: true, extendedHours: "8am–5:30pm",
    priceWeekly: 350, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 105, commuteKm: 175,
    rating: 4.7, ratingCount: 950,
    description: "Leading camp provider in Kingston. Sports and theme camps for ages 5–18 at Queen's University facilities. Basketball, soccer, volleyball, swimming, multi-sport, arts, and leadership programs.",
    dates: "Jul–Aug, weekly sessions",
    scoreBreakdown: { cost: 58, commute: 35, coverage: 82, rating: 94, extras: 68 }
  },

  // BGC South East — Kingston Summer Camps
  {
    id: 299, name: "BGC South East — Summer Camps", provider: "Boys & Girls Club SE",
    type: "summer_camp", category: "multi", city: "kingston", province: "ON", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 5, ageMax: 14, color: "#1AA5A0",
    address: "561 Bagot St, Kingston, ON",
    url: "https://www.bgcsoutheast.ca/programs/summer-camps/",
    hours: "9am–4pm (extended care 7:30am–5:30pm)",
    extendedCare: true, extendedHours: "7:30am–5:30pm",
    priceWeekly: 200, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 105, commuteKm: 175,
    rating: 4.5, ratingCount: 420,
    description: "Team sports, leadership challenges, cooking, problem-solving games, creative projects, and swimming. Weekly themes: All Sorts of Sports, Leadership 101, Fun & Fitness. Financial assistance available.",
    dates: "Jun 29–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 80, commute: 35, coverage: 78, rating: 90, extras: 72 }
  },

  // STEM Camp Kingston
  {
    id: 300, name: "STEM Camp — Kingston", provider: "STEM Camp",
    type: "summer_camp", category: "stem", city: "kingston", province: "ON", startDate: "2026-07-01", endDate: "2026-08-21",
    ageMin: 4, ageMax: 13, color: "#1AA5A0",
    address: "STEM Camp, Kingston, ON",
    url: "https://stemcamp.ca/ontario-camp-locations/summer-camp-kingston/",
    hours: "9am–4pm (extended care available)",
    extendedCare: true, extendedHours: "8am–5pm",
    priceWeekly: 350, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 105, commuteKm: 175,
    rating: 4.6, ratingCount: 310,
    description: "Not-for-profit STEM camps for kids 4–13. Coding with Minecraft, programming robots, building models, science experiments, 3D printing, and engineering challenges. Hands-on learning in small groups.",
    dates: "Jul–Aug, weekly sessions",
    scoreBreakdown: { cost: 58, commute: 35, coverage: 78, rating: 92, extras: 68 }
  },

  // Carleton Place Canoe Club — Summer Camps
  {
    id: 301, name: "Carleton Place Canoe Club — Kids Camp", provider: "CP Canoe Club",
    type: "summer_camp", category: "nature", city: "carleton_place", province: "ON", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 6, ageMax: 13, color: "#5DAE3B",
    address: "179 John St, Carleton Place, ON",
    url: "https://www.cpcanoeclub.com/summer-camp-programs",
    hours: "9am–4pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 275, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 50, commuteKm: 55,
    rating: 4.8, ratingCount: 180,
    description: "Canoe and kayak camps on the Mississippi River. Ages 6–8, 9–13, and youth 8–13 programs. Water safety, flatwater canoeing/kayaking, outdoor skills, and confidence building. Beautiful riverside setting.",
    dates: "Jun 29–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 65, commute: 55, coverage: 72, rating: 96, extras: 60 }
  },

  // Frontenac Arch Biosphere — Nature Camp Brockville
  {
    id: 302, name: "Frontenac Arch Biosphere — Nature Camp", provider: "Frontenac Arch Biosphere",
    type: "summer_camp", category: "nature", city: "brockville", province: "ON", startDate: "2026-07-01", endDate: "2026-08-15",
    ageMin: 6, ageMax: 14, color: "#5DAE3B",
    address: "Frontenac Arch Biosphere, Brockville, ON",
    url: "https://frontenacarchbiosphere.ca/summer-camps/",
    hours: "9am–4pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 250, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 75, commuteKm: 115,
    rating: 4.7, ratingCount: 150,
    description: "Summer nature camps at 4 locations including Brockville, Elgin, Lyndhurst, and Lansdowne. Explore UNESCO Biosphere Reserve landscapes, wildlife, ecology, and outdoor adventure. Registration opens February.",
    dates: "Jul–Aug, weekly sessions",
    scoreBreakdown: { cost: 70, commute: 40, coverage: 72, rating: 94, extras: 60 }
  },

  // BGC Cornwall — Summer Camps
  {
    id: 303, name: "BGC Cornwall — Summer Camps", provider: "Boys & Girls Club Cornwall/SDG",
    type: "summer_camp", category: "multi", city: "cornwall", province: "ON", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 5, ageMax: 14, color: "#1AA5A0",
    address: "331 Water St E, Cornwall, ON",
    url: "https://bgccornwallsdg.recdesk.com/Community/Program",
    hours: "9am–4pm (extended care available)",
    extendedCare: true, extendedHours: "7:30am–5:30pm",
    priceWeekly: 175, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 70, commuteKm: 110,
    rating: 4.4, ratingCount: 280,
    description: "63 summer camp programs covering team sports, arts & crafts, science experiments, swimming, leadership, and outdoor adventures. Affordable community-based camps. Financial assistance available.",
    dates: "Jun 29–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 85, commute: 42, coverage: 80, rating: 88, extras: 72 }
  },

  // Montreal City Day Camps
  {
    id: 304, name: "Ville de Montréal — Day Camps", provider: "City of Montreal",
    type: "summer_camp", category: "multi", city: "montreal", province: "QC", startDate: "2026-06-22", endDate: "2026-08-21",
    ageMin: 4, ageMax: 16, color: "#1AA5A0",
    address: "Various locations across Montreal, QC",
    url: "https://montreal.ca/en/topics/day-camps",
    hours: "9am–4pm (extended care 7am–6pm)",
    extendedCare: true, extendedHours: "7am–6pm",
    priceWeekly: 100, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 120, commuteKm: 200,
    rating: 4.3, ratingCount: 6500,
    description: "City of Montreal day camps for ages 4–16, Jun 22–Aug 21. Nature, science, arts, sports, and language immersion streams. 275+ programs across 6 categories. Average $389/week, affordable municipal options available.",
    dates: "Jun 22–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 88, commute: 35, coverage: 88, rating: 86, extras: 70 }
  },

  // Laurus Summer Camp — Montreal/Gatineau
  {
    id: 305, name: "Laurus Summer Camp — Bilingual Enrichment", provider: "Laurus",
    type: "summer_camp", category: "multi", city: "montreal", province: "QC", startDate: "2026-06-29", endDate: "2026-08-21",
    ageMin: 5, ageMax: 12, color: "#1AA5A0",
    address: "Concordia Campus & Gatineau location, QC",
    url: "https://laurussummercamp.com/",
    hours: "9am–4pm (extended care available)",
    extendedCare: true, extendedHours: "8am–5:30pm",
    priceWeekly: 389, priceDaily: 0, siblingDiscount: true, earlyBird: true,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 18,
    rating: 4.7, ratingCount: 680,
    description: "#1 rated bilingual summer camp with locations in Montreal (Concordia) and Gatineau (École CADO). Arts, science-STEM, sports, coding, and enrichment programs. French/English immersion. Ages 5–12.",
    dates: "Jun 29–Aug 21, weekly sessions",
    scoreBreakdown: { cost: 55, commute: 80, coverage: 82, rating: 94, extras: 68 }
  },

  // ── ADDITIONAL DANCE STUDIOS ──

  // Denise Smith Dance Studio — Manotick
  {
    id: 253, name: "Denise Smith Dance Studio", provider: "DSDS",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 18, color: "#7B4EA3",
    address: "1140 Tighe Street, Manotick, ON",
    url: "https://www.denisesmithstudio.com/",
    hours: "Mon–Sat classes (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 17,
    rating: 4.9, ratingCount: 95,
    description: "Award-winning dance studio est. 1979 in Manotick. Tiny Stars (age 2½), Pre-Dance (3½+), Recreational (6–18), competitive programs. Ballet, Tap, Jazz, Lyrical, Hip Hop, Acro Gymnastics. Summer camps available. Year-end recital. Source: denisesmithstudio.com",
    dates: "Sep–Jun (summer camps Jul–Aug)",
    scoreBreakdown: { cost: 68, commute: 68, coverage: 80, rating: 98, extras: 55 }
  },

  // Selina's Dance Studio — Barrhaven
  {
    id: 254, name: "Selina's Dance Studio", provider: "Selina's Studio",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 14, color: "#7B4EA3",
    address: "3091 Strandherd Dr, Nepean, ON K2J 4R9",
    url: "https://selinasstudio.com/",
    hours: "Mon–Sat classes",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 8, commuteKm: 4,
    rating: 4.9, ratingCount: 60,
    description: "Children's dance studio celebrating 10 years in Barrhaven. Dance, Musical Theatre, Competitive Team, and seasonal camps. March Break and Summer camps ages 4–10. Annual recital. Welcoming family community. Source: selinasstudio.com",
    dates: "Sep–Jun (camps Mar & Jul–Aug)",
    scoreBreakdown: { cost: 70, commute: 92, coverage: 75, rating: 98, extras: 52 }
  },

  // DanceRoots — Riverside South + Kemptville
  {
    id: 255, name: "DanceRoots", provider: "DanceRoots",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 2, ageMax: 17, color: "#7B4EA3",
    address: "Riverside South & Kemptville locations",
    url: "https://www.danceroots.ca/",
    hours: "Mon–Sat classes",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 14,
    rating: 4.9, ratingCount: 75,
    description: "Dance studio for every body and every age in Riverside South and Kemptville. Ballet, Jazz, Tap, Hip Hop, Acro, Contemporary, Lyrical, Tiny Tots, and adult classes. Recreational and competitive programs. Summer programming. Raised $15K+ for CHEO. Source: danceroots.ca",
    dates: "Sep–Jun (summer programming)",
    scoreBreakdown: { cost: 68, commute: 72, coverage: 82, rating: 98, extras: 55 }
  },

  // Arise School of Dance — Stittsville
  {
    id: 256, name: "Arise School of Dance", provider: "Arise Dance",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 4, ageMax: 18, color: "#7B4EA3",
    address: "119 Iber Rd, Unit 11, Stittsville, ON K2S 1E7",
    url: "https://www.arisedance.com/",
    hours: "Mon–Sat (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: true, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 22,
    rating: 4.9, ratingCount: 80,
    description: "Faith-based dance school in Stittsville. Ballet, Jazz, Contemporary, Hip Hop. Arise Ballet Companies perform locally and tour Ontario. Summer dance camps (ages 4–10) and intensives. Birthday parties available. Sibling discount 15% on camps. Source: arisedance.com",
    dates: "Sep–Jun (camps Jul–Aug)",
    scoreBreakdown: { cost: 66, commute: 62, coverage: 78, rating: 98, extras: 60 }
  },

  // Studio A Dance — Stittsville
  {
    id: 257, name: "Studio A Dance", provider: "Studio A Dance",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#7B4EA3",
    address: "1502 Main Street North, Stittsville, ON",
    url: "https://studioadance.ca/",
    hours: "Mon–Sat classes",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 28, commuteKm: 25,
    rating: 4.8, ratingCount: 45,
    description: "Named one of Ottawa's best dance studios. Creativity, Achievement, Confidence. Ballet, Jazz, Hip Hop, Musical Theatre. Small-studio feel with professional instruction. Boutique and year-end recital. Source: studioadance.ca",
    dates: "Sep–Jun",
    scoreBreakdown: { cost: 68, commute: 58, coverage: 70, rating: 96, extras: 48 }
  },

  // Universe DanceART — Kanata
  {
    id: 258, name: "Universe DanceART", provider: "Universe DanceART",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#7B4EA3",
    address: "484 Hazeldean Rd, Kanata, ON K2L 1V4",
    url: "https://www.udanceart.ca/",
    hours: "Mon–Sat (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 28, commuteKm: 24,
    rating: 4.8, ratingCount: 40,
    description: "Ballroom and Latin dance for children and adults in Kanata. Wonder Stars (ages 3–7), DanceSport competitive programs, Dance with Mom (ages 1–3). International award-winning instructors. Sand painting classes. Russian-language gymnastics program also available. 8-week sessions from $180–$360. Source: udanceart.ca",
    dates: "Sep–Jun (camps & events)",
    scoreBreakdown: { cost: 72, commute: 58, coverage: 68, rating: 96, extras: 50 }
  },

  // Common Ground Dance Academy — Findlay Creek
  {
    id: 259, name: "Common Ground Dance Academy", provider: "CGDA",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#7B4EA3",
    address: "105 Shuttleworth Dr, Ottawa, ON K1T 0W7",
    url: "https://www.commongrounddance.ca/",
    hours: "Mon–Sat classes",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 16,
    rating: 4.9, ratingCount: 55,
    description: "Dance academy in Findlay Creek using Royal Academy of Dance and Adapt curricula. Youth and adult programs — ballet, contemporary, jazz, tap, and more. Camps, workshops, competitive programs, and birthday parties. Annual recital at Meridian Theatres @ Centrepointe. Source: commongrounddance.ca",
    dates: "Sep–Jun (camps & workshops)",
    scoreBreakdown: { cost: 68, commute: 70, coverage: 78, rating: 98, extras: 52 }
  },

  // Nxt Generation Dance — Kanata
  {
    id: 260, name: "Nxt Generation Dance", provider: "NxtGen Dance",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#7B4EA3",
    address: "65 Denzil Doyle Ct, Kanata, ON",
    url: "https://nxtgendance.ca/",
    hours: "Mon–Sat classes",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 28, commuteKm: 24,
    rating: 4.7, ratingCount: 35,
    description: "Dance studio in Kanata serving toddlers through adults. Recreational and competitive programs. Ballet, Jazz, Tap, Hip Hop, Contemporary, Lyrical, Acro. Summer programming available. Source: nxtgendance.ca",
    dates: "Sep–Jun (summer programming)",
    scoreBreakdown: { cost: 68, commute: 58, coverage: 72, rating: 94, extras: 48 }
  },

  // B-House of Dance — Barrhaven & Kanata
  {
    id: 261, name: "B-House of Dance", provider: "B-House of Dance",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 18, color: "#7B4EA3",
    address: "111 Lamplighters Dr, Nepean, ON K2J 0C2",
    url: "https://www.b-houseofdance.com/",
    hours: "Mon–Sat classes",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 10, commuteKm: 6,
    rating: 4.8, ratingCount: 50,
    description: "Dance, acting, voice, and visual arts classes for ages 3–18 in Barrhaven and Kanata locations. Ballet, Jazz, Hip Hop, Acro, Tap, and more. Creative skill-building programs in a supportive environment. Workshops and special studio events. Source: b-houseofdance.com",
    dates: "Sep–Jun",
    scoreBreakdown: { cost: 70, commute: 90, coverage: 80, rating: 96, extras: 55 }
  },

  // JamFit Energy Studio — Manotick & Kanata
  {
    id: 262, name: "JamFit Energy Studio — Kids Jamnastics", provider: "JamFit",
    type: "yearround", category: "gymnastics", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 1, ageMax: 9, color: "#E8842C",
    address: "1160 Beaverwood Rd Unit 8, Manotick, ON",
    url: "https://www.jamfit.ca/",
    hours: "Mon–Sat (see schedule)",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 17,
    rating: 4.8, ratingCount: 55,
    description: "Family fitness studio in Manotick and Kanata. Parent & Me (18m–3yr), movement and gymnastics classes (4–9yr). Mega Jammers, Mighty Jammers, and daytime programs. Builds strength, coordination, confidence. Community events. Source: jamfit.ca",
    dates: "Sep–Jun (summer sessions)",
    scoreBreakdown: { cost: 72, commute: 68, coverage: 60, rating: 96, extras: 50 }
  },

  // Creative Edge Dance Academy — Carp/Stittsville
  {
    id: 263, name: "Creative Edge Dance Academy", provider: "Creative Edge",
    type: "yearround", category: "dance", city: "ottawa", province: "ON", startDate: "2026-09-01", endDate: "2027-06-30",
    ageMin: 3, ageMax: 17, color: "#7B4EA3",
    address: "2710 Carp Rd, Carp, ON K0A 1L0",
    url: "http://creativeedgedanceacademy.com/",
    hours: "Mon–Fri 4:30–9pm, Sat 9am–1pm, Sun 10am–8pm",
    extendedCare: false, extendedHours: "",
    priceWeekly: 0, priceDaily: 0, siblingDiscount: false, earlyBird: false,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 35, commuteKm: 30,
    rating: 4.8, ratingCount: 40,
    description: "Dance academy near Carp, Stittsville, and Kanata est. 2015. Recreational, pre-competitive, and competitive programs. Fosters artistic expression and technical excellence. Celebrates individuality and diversity. Summer camps and sessions. Source: creativeedgedanceacademy.com",
    dates: "Sep–Jun (summer camps)",
    scoreBreakdown: { cost: 68, commute: 52, coverage: 72, rating: 96, extras: 48 }
  },

  // ── FROM EVENTBRITE.CA / GALLERY.CA / MBAM / NATURE.CA / WARMUSEUM.CA / TRIPADVISOR ──

  // Eventbrite Ottawa
  {
    id: 240, name: "Lee Valley Tools — Kids Workshops", provider: "Lee Valley Tools",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 5, ageMax: 14, color: "#E8842C",
    address: "900 Morrison Dr, Ottawa, ON (& other locations)",
    url: "https://www.eventbrite.ca/o/lee-valley-tools-ottawa-store",
    hours: "Various Saturdays — check Eventbrite", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 20, commuteKm: 14,
    rating: 4.7, ratingCount: 500,
    description: "Free kids' woodworking workshops at Lee Valley stores. Projects include 'Carve a Critter', 'Make a Butterfly House', bird feeders, and seasonal builds. All materials and tools provided. Ages 5+. Register via Eventbrite — spots fill fast! Source: eventbrite.ca",
    dates: "Year-round (monthly Saturdays)",
    scoreBreakdown: { cost: 100, commute: 78, coverage: 30, rating: 94, extras: 80 }
  },
  {
    id: 241, name: "Summer Solstice Indigenous Festival", provider: "Summer Solstice Festival",
    type: "seasonal", category: "free", city: "ottawa", province: "ON", startDate: "2026-06-19", endDate: "2026-06-21",
    ageMin: 0, ageMax: 17, color: "#1AA5A0",
    address: "Vincent Massey Park, Ottawa",
    url: "https://www.eventbrite.ca/o/summer-solstice-indigenous-festival",
    hours: "Various — check festival website", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 14,
    rating: 4.8, ratingCount: 3000,
    description: "FREE family-friendly festival celebrating National Indigenous History Month. Live performances, traditional dancing, interactive cultural experiences, Indigenous art, food, and storytelling. One of Ottawa's largest outdoor cultural events. Source: eventbrite.ca",
    dates: "Jun 19–21, 2026",
    scoreBreakdown: { cost: 100, commute: 78, coverage: 18, rating: 96, extras: 65 }
  },

  // Ottawa Art Gallery
  {
    id: 242, name: "Ottawa Art Gallery (OAG) — Free Family Programs", provider: "Ottawa Art Gallery",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "50 Mackenzie King Bridge, Ottawa, ON",
    url: "https://oaggao.ca/learn/activities-and-public-programs/kids-and-family-programs/",
    hours: "Tue–Sun 10am–6pm, Thu until 9pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 18,
    rating: 4.5, ratingCount: 1500,
    description: "Always FREE admission! Monthly drop-in Creative Sundays for all ages, Toddler Mornings, summer & March Break art camps, and the OAG Art Tent at community events. Bilingual programs. Located in the Arts Court hub at the Rideau Centre end of the ByWard Market. Source: eventbrite.ca / oaggao.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 82, rating: 90, extras: 78 }
  },

  // National Gallery — expanded programs
  {
    id: 243, name: "NGC — Artissimo Studio & Open Studio", provider: "National Gallery of Canada",
    type: "yearround", category: "arts", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 3, ageMax: 12, color: "#7B4EA3",
    address: "380 Sussex Dr, Ottawa, ON",
    url: "https://www.gallery.ca/learn/for-kids-and-families/artissimo",
    hours: "Weekends & holidays 10am–4pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 28, commuteKm: 20,
    rating: 4.7, ratingCount: 2000,
    description: "Hands-on art-making for kids at Canada's national art museum. Artissimo Studio (weekends 10am–4pm) features monthly themed projects linked to current exhibitions — create and take home. Open Studio sessions also available. Under 17 always free admission. Source: gallery.ca",
    dates: "Year-round weekends",
    scoreBreakdown: { cost: 100, commute: 70, coverage: 72, rating: 94, extras: 80 }
  },
  {
    id: 244, name: "NGC — Summer Art Day Camps", provider: "National Gallery of Canada",
    type: "seasonal", category: "summer_camp", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-28",
    ageMin: 6, ageMax: 13, color: "#E8842C",
    address: "380 Sussex Dr, Ottawa, ON",
    url: "https://www.gallery.ca/learn/for-kids-and-families/summer-day-camps-2026",
    hours: "Mon–Fri, full day", extendedCare: false, extendedHours: null,
    priceWeekly: 325, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: "Members register Feb 9",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 28, commuteKm: 20,
    rating: 4.8, ratingCount: 400,
    description: "Week-long art camps inside the National Gallery. Ages 6–10 and 8–13 tracks. Kids explore exhibitions, create with professional artists, and take home original artwork. Inspired by current shows including Qillaniq and Helen McNicoll. Members register Feb 9, public Feb 10. Source: gallery.ca",
    dates: "Jul 6 – Aug 28, 2026",
    scoreBreakdown: { cost: 48, commute: 70, coverage: 78, rating: 96, extras: 82 }
  },

  // Canadian Museum of Nature — expanded
  {
    id: 245, name: "Museum of Nature — Urban Nature Camps", provider: "Canadian Museum of Nature",
    type: "seasonal", category: "summer_camp", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-21",
    ageMin: 5, ageMax: 12, color: "#5DAE3B",
    address: "240 McLeod St, Ottawa, ON",
    url: "https://nature.ca/en/visit-us/whats-on/",
    hours: "Mon–Fri, full day", extendedCare: false, extendedHours: null,
    priceWeekly: 350, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 25, commuteKm: 18,
    rating: 4.7, ratingCount: 600,
    description: "Nature-packed week-long day camps at Ottawa's nature museum. Outdoor play, museum exploration, hands-on activities led by expert educators. Ages 5–12. Themed weeks exploring dinosaurs, insects, minerals, and ecosystems. Jul 6 – Aug 21, 2026. Source: nature.ca",
    dates: "Jul 6 – Aug 21, 2026",
    scoreBreakdown: { cost: 45, commute: 72, coverage: 78, rating: 94, extras: 80 }
  },

  // Canada Agriculture and Food Museum (Ingenium)
  {
    id: 246, name: "Canada Agriculture & Food Museum", provider: "Ingenium",
    type: "yearround", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "901 Prince of Wales Dr, Ottawa, ON",
    url: "https://ingenium.ca/agriculture/en/visit/",
    hours: "Daily 9am–5pm (closed Mon off-season)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 14,
    siblingDiscount: "N/A", earlyBird: "Free 4–5pm daily",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 18, commuteKm: 12,
    rating: 4.6, ratingCount: 4000,
    description: "Meet real farm animals! Horses, alpacas, goats, rabbits, and a dairy herd with live milking demos. Climb aboard a tractor, see a working honeybee hive, and learn where food comes from. On the Central Experimental Farm. Free admission daily 4–5pm. Kids free summer (Jun 19–Sep 7) with Canada Strong Pass. Source: tripadvisor.ca / ingenium.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 78, commute: 80, coverage: 85, rating: 92, extras: 72 }
  },

  // Canadian War Museum — enhanced with full details
  {
    id: 247, name: "Canadian War Museum — Full Family Visit", provider: "Canadian War Museum",
    type: "yearround", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 2, ageMax: 17, color: "#E8842C",
    address: "1 Vimy Pl, Ottawa, ON K1A 0M8",
    url: "https://www.warmuseum.ca/plan-your-visit",
    hours: "Daily 9am–5pm, Thu until 7pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 16,
    siblingDiscount: "Family $62", earlyBird: "Free Thu 5–7pm",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 18,
    rating: 4.7, ratingCount: 6500,
    description: "Canada's national military history museum. Tank gallery, interactive exhibits, Regeneration Hall, and CINÉ+ films. Family ticket $62. Free: Thu 5–7pm, Jul 1, Sep 30, Nov 11, Indigenous peoples, military personnel. Kids free summer (Jun 19–Sep 7) with Canada Strong Pass. On-site café, water taxi access. Source: warmuseum.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 72, commute: 72, coverage: 88, rating: 94, extras: 70 }
  },

  // Canadian Children's Museum — detailed
  {
    id: 248, name: "Canadian Children's Museum — Global Adventure", provider: "Canadian Museum of History",
    type: "yearround", category: "museum", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 12, color: "#E8842C",
    address: "100 Laurier St, Gatineau, QC K1A 0M8",
    url: "https://www.historymuseum.ca/childrens-museum",
    hours: "Daily 9am–5pm, Thu until 7pm (summer until 6pm)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 18,
    siblingDiscount: "Family $68", earlyBird: "Free Thu 5–7pm",
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 28, commuteKm: 20,
    rating: 4.8, ratingCount: 8000,
    description: "Explore the world without leaving Ottawa! Walk through a Mexican kitchen, Nigerian house, Indonesian village, Egyptian pyramid, Japanese festival, and board a Pakistani bus. Puppet-making, market stalls, passport activity booklet. Inside the Museum of History. Kids free summer (Jun 19–Sep 7) with Canada Strong Pass. Birthday parties available. Source: historymuseum.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 68, commute: 70, coverage: 90, rating: 96, extras: 78 }
  },

  // Montreal Museum of Fine Arts (day trip)
  {
    id: 249, name: "Montreal Museum of Fine Arts (MBAM) — Family Day Trip", provider: "MBAM",
    type: "yearround", category: "museum", city: "montreal", province: "QC", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "1380 Sherbrooke St W, Montréal, QC",
    url: "https://www.mbam.qc.ca/en/museum-activities-for-kids/",
    hours: "Tue–Sun 10am–5pm, Wed until 9pm", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: "Free Sat AM for families",
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 120, commuteKm: 200,
    rating: 4.7, ratingCount: 15000,
    description: "Free for under 25! Canada's largest art museum. BMO Family Saturday mornings (10am–1pm) — free for families with creative workshops. Weekend art workshops, day camps, and world-class exhibitions. Permanent collection free for QC residents. 2-hour drive from Ottawa — perfect day trip. Source: mbam.qc.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 15, coverage: 85, rating: 94, extras: 78 }
  },

  // Canadian Tulip Festival
  {
    id: 250, name: "Canadian Tulip Festival", provider: "Canadian Tulip Festival",
    type: "seasonal", category: "free", city: "ottawa", province: "ON", startDate: "2026-05-08", endDate: "2026-05-18",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "Commissioners Park, Ottawa (& other locations)",
    url: "https://tulipfestival.ca",
    hours: "Daily — check festival website", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 20, commuteKm: 14,
    rating: 4.7, ratingCount: 10000,
    description: "Ottawa's iconic spring festival with over 1 million tulips in bloom. Free garden displays at Commissioners Park along Dow's Lake. Family activities, live music, food vendors, and cultural programming. One of the world's largest tulip festivals, celebrating Canada-Netherlands friendship since 1953. Source: tripadvisor.ca",
    dates: "May 8–18, 2026",
    scoreBreakdown: { cost: 100, commute: 78, coverage: 25, rating: 94, extras: 65 }
  },

  // Parc Omega (day trip)
  {
    id: 251, name: "Parc Omega — Drive-Through Wildlife Park", provider: "Parc Omega",
    type: "yearround", category: "nature", city: "montebello", province: "QC", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#5DAE3B",
    address: "399 Route 323 N, Montebello, QC",
    url: "https://www.parcomega.ca/en/",
    hours: "Daily 10am–5pm (seasonal hours vary)", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 35,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 90, commuteKm: 130,
    rating: 4.6, ratingCount: 8000,
    description: "15km drive-through wildlife safari — feed deer, elk, bison, and wild boar from your car window! Walking trails with wolves, bears, and Arctic foxes. First Nations village, Old Quebec Farm, and seasonal night tours. 90 min from Ottawa. Kids love feeding the animals (buy carrots at entrance). Source: tripadvisor.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 55, commute: 20, coverage: 65, rating: 92, extras: 70 }
  },

  // ByWard Market
  {
    id: 252, name: "ByWard Market — Family Exploration", provider: "ByWard Market BIA",
    type: "yearround", category: "free", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#1AA5A0",
    address: "55 ByWard Market Square, Ottawa, ON",
    url: "https://www.byward-market.com/",
    hours: "Daily — market hours vary", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 25, commuteKm: 18,
    rating: 4.5, ratingCount: 20000,
    description: "Ottawa's most famous neighbourhood. Outdoor farmers' market (May–Oct), BeaverTails, street performers, shops, and restaurants. Year-round indoor market with artisan vendors. Free to explore. Close to Parliament Hill, Rideau Canal, and the National Gallery. A must-visit family outing. Source: tripadvisor.ca",
    dates: "Year-round",
    scoreBreakdown: { cost: 100, commute: 72, coverage: 75, rating: 90, extras: 60 }
  },

  // ── FROM QHCA.CA — QUEENSWOOD HEIGHTS COMMUNITY ──
  {
    id: 236, name: "QHCA Music Festival — Queenswood Heights", provider: "Queenswood Heights Community Association",
    type: "seasonal", category: "events", city: "ottawa", province: "ON", startDate: "2026-08-01", endDate: "2026-08-31",
    ageMin: 0, ageMax: 17, color: "#E8842C",
    address: "Queenswood Heights, Orléans, ON",
    url: "https://qhca.ca/?page_id=2",
    hours: "Check qhca.ca for dates", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 40, commuteKm: 32,
    rating: 4.5, ratingCount: 300,
    description: "Annual free outdoor music festival in Queenswood Heights (Orléans). Live music, food, family activities, and community fun. Organized by QHCA volunteers with local sponsor support. Great neighbourhood event for families. Source: qhca.ca",
    dates: "Summer 2026 (TBD)",
    scoreBreakdown: { cost: 100, commute: 55, coverage: 15, rating: 90, extras: 60 }
  },
  {
    id: 237, name: "QHCA Movie in the Park — Queenswood Heights", provider: "Queenswood Heights Community Association",
    type: "seasonal", category: "movies", city: "ottawa", province: "ON", startDate: "2026-08-01", endDate: "2026-09-30",
    ageMin: 0, ageMax: 17, color: "#E8842C",
    address: "Queenswood Heights Park, Orléans, ON",
    url: "https://qhca.ca/?page_id=969",
    hours: "Evening — check qhca.ca for dates", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 40, commuteKm: 32,
    rating: 4.5, ratingCount: 250,
    description: "Free outdoor movie night in Queenswood Heights park. Bring a blanket and lawn chairs! BBQ and snacks available. Community event organized by QHCA with local sponsors. Family-friendly film. Source: qhca.ca",
    dates: "Summer/Fall 2026 (TBD)",
    scoreBreakdown: { cost: 100, commute: 55, coverage: 12, rating: 90, extras: 55 }
  },
  {
    id: 238, name: "QHCA Halloween Pumpkin Drop", provider: "Queenswood Heights Community Association",
    type: "seasonal", category: "holiday", city: "ottawa", province: "ON", startDate: "2026-10-01", endDate: "2026-10-31",
    ageMin: 0, ageMax: 17, color: "#E8842C",
    address: "Queenswood Heights, Orléans, ON",
    url: "https://qhca.ca/?page_id=1065",
    hours: "Oct 1–31 — self-guided tour", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 40, commuteKm: 32,
    rating: 4.6, ratingCount: 200,
    description: "Spook-tacular neighbourhood Halloween event! Homes in Queenswood Heights decorate for the season and a self-guided tour map is published on Facebook. Free pumpkin delivered to participating homes. Great for kids who love Halloween. Source: qhca.ca",
    dates: "Oct 1–31, 2026",
    scoreBreakdown: { cost: 100, commute: 55, coverage: 22, rating: 92, extras: 55 }
  },
  {
    id: 239, name: "QHCA Holiday Cheer Tour", provider: "Queenswood Heights Community Association",
    type: "seasonal", category: "holiday", city: "ottawa", province: "ON", startDate: "2026-12-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#E8842C",
    address: "Queenswood Heights, Orléans, ON",
    url: "https://qhca.ca/?page_id=1105",
    hours: "Dec — self-guided tour", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 0,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: false,
    commuteMins: 40, commuteKm: 32,
    rating: 4.6, ratingCount: 200,
    description: "Holiday lights tour in Queenswood Heights! Decorated homes are mapped for a self-guided driving/walking tour. For every participating home, a monetary donation goes to the Orléans-Cumberland Food Bank. Festive, free, and community-spirited. Source: qhca.ca",
    dates: "Dec 2026",
    scoreBreakdown: { cost: 100, commute: 55, coverage: 20, rating: 92, extras: 58 }
  },

  // ── MINTO & RECREATION CENTRES ──
  {
    id: 147, name: "Minto Recreation Complex — Barrhaven", provider: "City of Ottawa",
    type: "yearround", category: "recreation", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "3500 Cambrian Rd, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/minto-recreation-complex-barrhaven",
    hours: "Various — check JOINOttawa", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 4, commuteKm: 2,
    rating: 4.5, ratingCount: 890,
    description: "160,000 sq ft fully accessible complex. 25m lap pool with diving boards, two NHL-sized rinks, gym, and community rooms. Swim lessons, public skating, aquafit, group fitness, camps, badminton, basketball, cooking classes, and more. Play Free drop-in for under 17.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 90, commute: 68, coverage: 85, rating: 90, extras: 75 }
  },
  {
    id: 148, name: "Bob MacQuarrie Recreation Complex — Orléans", provider: "City of Ottawa",
    type: "yearround", category: "recreation", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "1490 Youville Dr, Orléans",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/bob-macquarrie-recreation-complex-orleans",
    hours: "Various — check JOINOttawa", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 18, commuteKm: 12.0,
    rating: 4.4, ratingCount: 720,
    description: "Full-service east Ottawa recreation centre. Pool, arena, gymnasium, and community rooms. Swim lessons, public skating, Play Free drop-in for kids under 17, summer camps, fitness programs, and registered activities year-round.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 90, commute: 72, coverage: 82, rating: 88, extras: 70 }
  },
  {
    id: 149, name: "Canterbury Recreation Complex", provider: "City of Ottawa",
    type: "yearround", category: "recreation", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "2185 Arch St, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/canterbury-recreation-complex",
    hours: "Various — check JOINOttawa", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 12, commuteKm: 7.0,
    rating: 4.3, ratingCount: 540,
    description: "Central Ottawa recreation complex. 25m five-lane pool with sauna, Brian Kilrea Arena (NHL-sized rink), and community centre. After school programs, swimming lessons, art, dance, martial arts, yoga, and fitness for all ages.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 90, commute: 82, coverage: 80, rating: 86, extras: 68 }
  },
  {
    id: 150, name: "Nepean Sportsplex", provider: "City of Ottawa",
    type: "yearround", category: "recreation", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "1701 Woodroffe Ave, Nepean",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/nepean-sportsplex",
    hours: "Various — check JOINOttawa", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 16, commuteKm: 12,
    rating: 4.5, ratingCount: 1100,
    description: "Ottawa's premier multi-sport complex. 50m Olympic pool with diving towers, 25m family pool, children's wading pool, whirlpool, two NHL-sized rinks, athletics centre, gym, squash courts, and convention space. Play Free drop-in, swim lessons, camps, and year-round programs.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 88, commute: 75, coverage: 90, rating: 90, extras: 78 }
  },

  // ── OTTAWA SOFT PLAY KIDTIVITIES ──
  {
    id: 151, name: "Ottawa Soft Play Kidtivities", provider: "Kidtivities",
    type: "yearround", category: "events", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 5, color: "#F59E0B",
    address: "Mobile — Ottawa & surrounding areas",
    url: "https://www.ottawasoftplaykidtivities.ca/",
    hours: "Setup/takedown 8:00 AM – 7:30 PM", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 175,
    siblingDiscount: "Package deals available", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 0, commuteKm: 0,
    rating: 4.8, ratingCount: 145,
    description: "Mobile soft play rental for kids ages 0–5. Ball pits, slides, soft tunnels, soft blocks & animals, bounce houses, and children's table & chair rentals. Tiled foam mats and safety fencing included. Free delivery within 25 km. Perfect for birthdays, playdates, and events.",
    dates: "Year-round, by booking",
    scoreBreakdown: { cost: 40, commute: 100, coverage: 20, rating: 96, extras: 65 }
  },

  // ── PLANT RECREATION CENTRE ──
  {
    id: 152, name: "Plant Recreation Centre", provider: "City of Ottawa",
    type: "yearround", category: "recreation", city: "ottawa", province: "ON", startDate: "2026-01-01", endDate: "2026-12-31",
    ageMin: 0, ageMax: 17, color: "#7B4EA3",
    address: "930 Somerset St W, Ottawa",
    url: "https://ottawa.ca/en/recreation-and-parks/facilities/place-listing/plant-recreation-centre",
    hours: "Various — check JOINOttawa", extendedCare: false, extendedHours: null,
    priceWeekly: 0, priceDaily: 5,
    siblingDiscount: "N/A", earlyBird: null,
    lunchIncluded: false, suppliesIncluded: true,
    commuteMins: 10, commuteKm: 5.0,
    rating: 4.4, ratingCount: 380,
    description: "Historic downtown recreation centre (formerly Plant Bath, reopened 2004). Baby/toddler pool, 25m main pool, hot tub, outdoor splash pad, and playground. Swim lessons, Play Free drop-in for under 17, youth programs ages 6–16, dance, music classes, and summer camps.",
    dates: "Open year-round",
    scoreBreakdown: { cost: 90, commute: 88, coverage: 78, rating: 88, extras: 65 }
  },

  // ── CAMP CAN-AQUA ──
  {
    id: 153, name: "Camp Can-Aqua — Overnight Summer Camp", provider: "Camp Can-Aqua",
    type: "summer", category: "summer_camp", city: "ottawa", province: "ON", startDate: "2026-07-06", endDate: "2026-08-21",
    ageMin: 6, ageMax: 16, color: "#1B3A5C",
    address: "503 Beaver Lake Dr, Cardiff, ON (2.5 hrs from Ottawa)",
    url: "https://canaqua.ca/",
    hours: "Overnight camp — drop-off/pick-up days vary", extendedCare: false, extendedHours: null,
    priceWeekly: 1775, priceDaily: 0,
    siblingDiscount: "Contact for details", earlyBird: "Early registration recommended",
    lunchIncluded: true, suppliesIncluded: true,
    commuteMins: 150, commuteKm: 230,
    rating: 4.9, ratingCount: 520,
    description: "Ontario's top overnight summer camp since 1981. 160 acres on a private lake in Cardiff, ON (2.5 hrs from Ottawa). Swimming, canoeing, archery, arts & crafts, campfires, and lifelong friendships. 1- and 2-week sessions. All meals and activities included. OCA accredited.",
    dates: "Jul – Aug 2026 (1- and 2-week sessions)",
    scoreBreakdown: { cost: 20, commute: 10, coverage: 95, rating: 98, extras: 90 }
  }
];

let selectedCategory = 'all';
let compareList = [];

// ── MERGED CATEGORY MAP ──
const categoryMap = {
  camps: ['summer_camp', 'march_camp', 'multi'],
  sports_all: ['sports', 'swimming', 'martial_arts'],
  music_dance: ['music', 'dance'],
  arts_stem: ['arts', 'stem'],
  theatre_shows: ['drama', 'theatre'],
  learning: ['tutoring', 'afterschool', 'library'],
  outdoors: ['nature', 'outdoor'],
  events_all: ['events', 'fairs', 'holiday', 'community', 'weekend_top'],
  movies: ['movies'],
  museum: ['museum'],
  free: ['free'],
  gymnastics: ['gymnastics'],
  skating: ['skating'],
  playgrounds: ['playground'],
  escape_rooms: ['escape_room'],
  parks: ['park'],
  splashpads: ['splashpad'],
  beaches: ['beach'],
  rec_centres: ['recreation'],
};

function categoryMatches(merged, dataCategory) {
  const mapped = categoryMap[merged];
  if (mapped) return mapped.includes(dataCategory);
  return merged === dataCategory;
}

function calcValueScore(camp) {
  const b = camp.scoreBreakdown;
  return Math.round(b.cost * 0.4 + b.commute * 0.25 + b.coverage * 0.15 + b.rating * 0.10 + b.extras * 0.10);
}

function getScoreClass(score) {
  if (score >= 75) return 'score-high';
  if (score >= 55) return 'score-med';
  return 'score-low';
}

function getCategoryTag(cat) {
  const map = {
    sports: '<span class="camp-tag tag-sports">Sports</span>',
    stem: '<span class="camp-tag tag-stem">STEM & Coding</span>',
    arts: '<span class="camp-tag tag-arts">Arts</span>',
    nature: '<span class="camp-tag tag-nature">Nature</span>',
    multi: '<span class="camp-tag tag-multi">Multi-Activity</span>',
    music: '<span class="camp-tag" style="background:#F3E8FF;color:#7C3AED">Music</span>',
    dance: '<span class="camp-tag" style="background:#FCE7F3;color:#BE185D">Dance</span>',
    drama: '<span class="camp-tag" style="background:#FEF3C7;color:#92400E">Drama</span>',
    tutoring: '<span class="camp-tag" style="background:#DBEAFE;color:#1D4ED8">Tutoring</span>',
    swimming: '<span class="camp-tag" style="background:#CFFAFE;color:#0891B2">Swimming</span>',
    martial_arts: '<span class="camp-tag" style="background:#FEE2E2;color:#DC2626">Martial Arts</span>',
    summer_camp: '<span class="camp-tag" style="background:#FEF3C7;color:#D97706">Summer Camp</span>',
    march_camp: '<span class="camp-tag" style="background:#FCE7F3;color:#DB2777">March Break</span>',
    afterschool: '<span class="camp-tag" style="background:#E0E7FF;color:#4338CA">After-School</span>',
    free: '<span class="camp-tag" style="background:#D1FAE5;color:#065F46">Free</span>',
    events: '<span class="camp-tag" style="background:#FECACA;color:#991B1B">Event</span>',
    community: '<span class="camp-tag" style="background:#E0E7FF;color:#3730A3">Community</span>',
    library: '<span class="camp-tag" style="background:#FEF3C7;color:#92400E">Library</span>',
    outdoor: '<span class="camp-tag" style="background:#D1FAE5;color:#065F46">Outdoor</span>',
    museum: '<span class="camp-tag" style="background:#DBEAFE;color:#1E40AF">Museum</span>',
    holiday: '<span class="camp-tag" style="background:#FECACA;color:#991B1B">Holiday</span>',
    fairs: '<span class="camp-tag" style="background:#FEF3C7;color:#92400E">Community Fair</span>',
    movies: '<span class="camp-tag" style="background:#EDE9FE;color:#6D28D9">Movie</span>',
    theatre: '<span class="camp-tag" style="background:#FCE7F3;color:#9D174D">Theatre & Shows</span>',
    weekend_top: '<span class="camp-tag" style="background:#FEF3C7;color:#B45309">Top Pick</span>',
    gymnastics: '<span class="camp-tag" style="background:#E0E7FF;color:#4338CA">Gymnastics</span>',
    skating: '<span class="camp-tag" style="background:#CFFAFE;color:#0E7490">Skating</span>',
    playground: '<span class="camp-tag" style="background:#FEF3C7;color:#92400E">Indoor Playground</span>',
    escape_room: '<span class="camp-tag" style="background:#FDE8E8;color:#9B1C1C">Escape Room</span>',
    park: '<span class="camp-tag" style="background:#D1FAE5;color:#065F46">Public Park</span>',
    splashpad: '<span class="camp-tag" style="background:#DBEAFE;color:#1E40AF">Splashpad</span>',
    beach: '<span class="camp-tag" style="background:#FEF3C7;color:#92400E">Beach Park</span>',
    recreation: '<span class="camp-tag" style="background:#E0E7FF;color:#3730A3">Recreation Centre</span>'
  };
  return map[cat] || '';
}

function getImageBg(camp) {
  return `background: linear-gradient(135deg, ${camp.color}dd, ${camp.color}88);`;
}

function getEmoji(cat) {
  const map = { sports: '&#9917;', stem: '&#129302;', arts: '&#127912;', nature: '&#127795;', multi: '&#127752;', music: '&#127925;', dance: '&#128131;', drama: '&#127917;', tutoring: '&#128218;', swimming: '&#127946;', martial_arts: '&#129504;', summer_camp: '&#9978;', march_camp: '&#127800;', afterschool: '&#127891;', free: '&#127381;', events: '&#127878;', community: '&#127969;', library: '&#128218;', outdoor: '&#127956;', museum: '&#127963;', holiday: '&#127876;', fairs: '&#127905;', movies: '&#127909;', theatre: '&#127917;', weekend_top: '&#11088;', gymnastics: '&#129355;', skating: '&#9975;', playground: '&#127968;', escape_room: '&#128274;', park: '&#127794;', splashpad: '&#128166;', beach: '&#127958;', recreation: '&#127946;' };
  return map[cat] || '&#9978;';
}

function updateRadius() {
  const val = document.getElementById('radiusSlider').value;
  document.getElementById('radiusDisplay').textContent = val + ' km';
  document.getElementById('radiusText').textContent = val + ' km';
  filterCamps();
}

function filterCamps() {
  const season = document.getElementById('seasonFilter').value;
  const age = document.getElementById('ageFilter').value;
  const radius = parseInt(document.getElementById('radiusSlider').value);
  const budget = parseInt(document.getElementById('budgetSlider').value);
  const sort = document.getElementById('sortSelect').value;
  const postalCode = document.getElementById('postalCode').value.trim().toUpperCase();
  document.getElementById('postalText').textContent = postalCode || '—';

  const location = document.getElementById('locationFilter').value;
  const provinces = ['ON','QC','BC','AB','MB','NS','SK','NB','NL','PE'];
  const dateFrom = document.getElementById('dateFrom').value;
  const dateTo = document.getElementById('dateTo').value;

  let filtered = camps.filter(c => {
    if (season !== 'all' && c.type !== season) return false;
    if (age !== 'all' && (parseInt(age) < c.ageMin || parseInt(age) > c.ageMax)) return false;
    // Location filter: province code or city name
    if (location !== 'all') {
      if (provinces.includes(location)) {
        if (c.province !== location) return false;
      } else {
        if (c.city !== location) return false;
      }
    }
    // Date range filter: activity must overlap with selected range
    if (dateFrom && dateTo && c.startDate && c.endDate) {
      if (c.endDate < dateFrom || c.startDate > dateTo) return false;
    }
    if (c.commuteKm > radius) return false;
    if (c.priceWeekly > budget) return false;
    if (selectedCategory === 'multi_interest') {
      if (!selectedInterests.some(si => categoryMatches(si, c.category))) return false;
    } else if (selectedCategory !== 'all' && !categoryMatches(selectedCategory, c.category)) return false;
    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    switch(sort) {
      case 'price_low': return a.priceWeekly - b.priceWeekly;
      case 'price_high': return b.priceWeekly - a.priceWeekly;
      case 'commute': return a.commuteMins - b.commuteMins;
      case 'rating': return b.rating - a.rating;
      default: return calcValueScore(b) - calcValueScore(a);
    }
  });

  updateStats(filtered);
  renderCamps(filtered);
}

function updateStats(filtered) {
  document.getElementById('statTotal').textContent = filtered.length;
  if (filtered.length > 0) {
    const avgPrice = Math.round(filtered.reduce((s, c) => s + c.priceWeekly, 0) / filtered.length);
    const avgCommute = Math.round(filtered.reduce((s, c) => s + c.commuteMins, 0) / filtered.length);
    const bestScore = Math.max(...filtered.map(c => calcValueScore(c)));
    document.getElementById('statAvgPrice').textContent = '$' + avgPrice;
    document.getElementById('statAvgCommute').textContent = avgCommute + ' min';
    document.getElementById('statBestValue').textContent = bestScore;
  } else {
    document.getElementById('statAvgPrice').textContent = '—';
    document.getElementById('statAvgCommute').textContent = '—';
    document.getElementById('statBestValue').textContent = '—';
  }
}

function renderCamps(filtered) {
  const container = document.getElementById('campResults');
  if (filtered.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--gray-400)"><div style="font-size:48px;margin-bottom:12px">&#128373;</div><h3 style="color:var(--gray-600)">No camps match your filters</h3><p>Try increasing your budget or adjusting filters</p></div>';
    return;
  }

  container.innerHTML = filtered.map(camp => {
    const score = calcValueScore(camp);
    const isCompared = compareList.includes(camp.id);
    return `
      <div class="camp-card" onclick="openDetail(${camp.id})">
        <div class="camp-image" style="${getImageBg(camp)}">
          ${getEmoji(camp.category)}
        </div>
        <div class="camp-info">
          <div class="camp-name">${camp.name}</div>
          <div class="camp-provider">${camp.provider} ${camp.url ? '<a href="' + camp.url + '" target="_blank" rel="noopener" onclick="event.stopPropagation()" style="color:var(--teal);text-decoration:none;font-size:11px">&#8599; website</a>' : ''}</div>
          <div class="camp-tags">
            ${getCategoryTag(camp.category)}
            ${camp.extendedCare ? '<span class="camp-tag" style="background:#FFFBEB;color:#D97706">Extended Care</span>' : ''}
            ${camp.lunchIncluded ? '<span class="camp-tag" style="background:#ECFDF5;color:#059669">Lunch Incl.</span>' : ''}
          </div>
          <div class="camp-meta">
            <span class="camp-meta-item">&#128197; ${camp.dates}</span>
            <span class="camp-meta-item">&#128118; Ages ${camp.ageMin}–${camp.ageMax}</span>
          </div>
          <div class="camp-meta">
            <span class="camp-meta-item">&#128336; ${camp.hours}</span>
          </div>
        </div>
        <div class="camp-right">
          <div class="value-score">
            <div class="value-score-circle ${getScoreClass(score)}">${score}</div>
            <div class="value-score-label">Value</div>
          </div>
          <div class="camp-price">
            <div class="amount">$${camp.priceWeekly}</div>
            <div class="period">/week</div>
            <div class="per-day">$${camp.priceDaily}/day</div>
          </div>
          <div class="camp-commute">&#128663; ${camp.commuteMins} min · ${camp.commuteKm} km</div>
          <label class="compare-check" onclick="event.stopPropagation()">
            <input type="checkbox" ${isCompared ? 'checked' : ''} onchange="toggleCompare(${camp.id}, this.checked)"> Compare
          </label>
        </div>
      </div>
    `;
  }).join('');
}

function updateBudget() {
  const val = document.getElementById('budgetSlider').value;
  document.getElementById('budgetDisplay').textContent = '$' + val + '/wk';
  filterCamps();
}

function toggleFilter(el) {
  document.querySelectorAll('.filters-bar .cat-item').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  selectedCategory = 'all';
  filterCamps();
}

function toggleActivityFilter(el, cat) {
  document.querySelectorAll('.filters-bar .cat-item').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  selectedCategory = cat;
  filterCamps();
}

function toggleCompare(campId, checked) {
  if (checked && !compareList.includes(campId)) {
    if (compareList.length >= 4) { alert('You can compare up to 4 activities'); return; }
    compareList.push(campId);
  } else {
    compareList = compareList.filter(id => id !== campId);
  }
  updateCompareBar();
  filterCamps();
}

function removeFromCompare(campId) {
  compareList = compareList.filter(id => id !== campId);
  updateCompareBar();
  filterCamps();
}

function clearCompare() {
  compareList = [];
  updateCompareBar();
  filterCamps();
}

function updateCompareBar() {
  const bar = document.getElementById('compareBar');
  document.getElementById('compareCount').textContent = compareList.length;
  bar.classList.toggle('visible', compareList.length >= 1);

  const itemsEl = document.getElementById('compareBarItems');
  itemsEl.innerHTML = compareList.map(id => {
    const c = camps.find(camp => camp.id === id);
    if (!c) return '';
    return `<span class="compare-bar-tag">
      ${getCategoryTag(c.category)} ${c.name.substring(0, 18)}${c.name.length > 18 ? '…' : ''}
      <button onclick="event.stopPropagation();removeFromCompare(${id})">&#10005;</button>
    </span>`;
  }).join('');
}

function openDetail(campId) {
  const camp = camps.find(c => c.id === campId);
  if (!camp) return;
  const score = calcValueScore(camp);

  document.getElementById('modalName').textContent = camp.name;
  document.getElementById('modalProvider').textContent = camp.provider + ' · ' + camp.address;

  const b = camp.scoreBreakdown;
  document.getElementById('modalBody').innerHTML = `
    <p style="color:var(--gray-600);margin-bottom:8px">${camp.description}</p>
    <div class="detail-grid">
      <div class="detail-item">
        <div class="label">Weekly Cost</div>
        <div class="value">$${camp.priceWeekly}</div>
        <div class="sub">$${camp.priceDaily}/day</div>
      </div>
      <div class="detail-item">
        <div class="label">Commute</div>
        <div class="value">${camp.commuteMins} min</div>
        <div class="sub">${camp.commuteKm} km from home</div>
      </div>
      <div class="detail-item">
        <div class="label">Hours</div>
        <div class="value">${camp.hours}</div>
        <div class="sub">${camp.extendedCare ? 'Extended: ' + camp.extendedHours : 'No extended care'}</div>
      </div>
      <div class="detail-item">
        <div class="label">Ages</div>
        <div class="value">${camp.ageMin} – ${camp.ageMax} years</div>
      </div>
      <div class="detail-item">
        <div class="label">Dates</div>
        <div class="value">${camp.dates}</div>
      </div>
      <div class="detail-item">
        <div class="label">Rating</div>
        <div class="value">${'&#11088;'.repeat(Math.round(camp.rating))} ${camp.rating}</div>
        <div class="sub">${camp.ratingCount} reviews</div>
      </div>
      <div class="detail-item">
        <div class="label">Sibling Discount</div>
        <div class="value">${camp.siblingDiscount}</div>
      </div>
      <div class="detail-item">
        <div class="label">Early Bird</div>
        <div class="value">${camp.earlyBird || 'Not available'}</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin:8px 0">
      ${camp.lunchIncluded ? '<span class="camp-tag" style="background:#ECFDF5;color:#059669;padding:6px 12px;font-size:13px">&#127860; Lunch Included</span>' : '<span class="camp-tag" style="background:#FEF2F2;color:#DC2626;padding:6px 12px;font-size:13px">&#10060; Bring Lunch</span>'}
      ${camp.suppliesIncluded ? '<span class="camp-tag" style="background:#ECFDF5;color:#059669;padding:6px 12px;font-size:13px">&#9989; Supplies Included</span>' : ''}
      ${camp.extendedCare ? '<span class="camp-tag" style="background:#EFF6FF;color:#2563EB;padding:6px 12px;font-size:13px">&#128336; Extended Care Available</span>' : ''}
    </div>
    <div class="score-breakdown">
      <h4>Value Score Breakdown: <span style="color:var(--primary);font-size:18px">${score}/100</span></h4>
      <div class="score-bar-row">
        <span class="score-bar-label">Cost Efficiency</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${b.cost}%;background:var(--green)"></div></div>
        <span class="score-bar-value">${b.cost}</span>
      </div>
      <div class="score-bar-row">
        <span class="score-bar-label">Commute</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${b.commute}%;background:var(--blue)"></div></div>
        <span class="score-bar-value">${b.commute}</span>
      </div>
      <div class="score-bar-row">
        <span class="score-bar-label">Coverage</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${b.coverage}%;background:var(--yellow)"></div></div>
        <span class="score-bar-value">${b.coverage}</span>
      </div>
      <div class="score-bar-row">
        <span class="score-bar-label">Rating</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${b.rating}%;background:var(--accent)"></div></div>
        <span class="score-bar-value">${b.rating}</span>
      </div>
      <div class="score-bar-row">
        <span class="score-bar-label">Extras</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${b.extras}%;background:var(--purple)"></div></div>
        <span class="score-bar-value">${b.extras}</span>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:16px">
      <button class="register-btn" style="flex:1;margin:0" onclick="window.open('${camp.url || '#'}', '_blank')">Visit ${camp.provider} &#8594;</button>
      <button class="register-btn" style="flex:1;margin:0;background:var(--primary)" onclick="closeModal();if(!compareList.includes(${camp.id})){toggleCompare(${camp.id},true)}">
        ${compareList.includes(camp.id) ? '&#9989; In Compare' : '&#43; Add to Compare'}
      </button>
    </div>
  `;
  document.getElementById('detailModal').classList.add('open');
}

function closeModal() {
  document.getElementById('detailModal').classList.remove('open');
}

// ── NAVIGATION ──
function showSearch() {
  document.getElementById('searchView').style.display = 'block';
  document.getElementById('compareView').classList.remove('visible');
  document.getElementById('plannerView').classList.remove('visible');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.nav-links a')[0].classList.add('active');
}

function showCompare() {
  if (compareList.length < 2) { alert('Select at least 2 activities to compare. Use the checkboxes on activity cards — you can pick from different categories!'); return; }
  document.getElementById('searchView').style.display = 'none';
  document.getElementById('compareView').classList.add('visible');
  document.getElementById('plannerView').classList.remove('visible');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.nav-links a')[1].classList.add('active');
  renderCompare();
}

function showPlanner() {
  document.getElementById('searchView').style.display = 'none';
  document.getElementById('compareView').classList.remove('visible');
  document.getElementById('plannerView').classList.add('visible');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.nav-links a')[2].classList.add('active');
  renderPlanner();
}

// ── BUDGET PLANNER STATE ──
let children = [
  { id: 1, name: "Child 1", age: 8 },
  { id: 2, name: "Child 2", age: 5 }
];
let activeChildId = 0; // 0 = all children
let plannedActivities = [
  // Pre-seeded for demo
  { campId: 2, childId: 1, weeks: 4, weekStart: "2026-07-06" },
  { campId: 5, childId: 1, weeks: 2, weekStart: "2026-08-03" },
  { campId: 7, childId: 2, weeks: 3, weekStart: "2026-07-13" },
  { campId: 8, childId: 2, weeks: 2, weekStart: "2026-07-06" },
];
let calendarWeekStart = new Date("2026-07-06");

function renderPlanner() {
  renderChildrenTabs();
  renderCalendar();
  renderPlannedItems();
  updatePlanner();
}

// ── CHILDREN TABS ──
function renderChildrenTabs() {
  const tabs = document.getElementById('childrenTabs');
  let html = `<button class="child-tab ${activeChildId === 0 ? 'active' : ''}" onclick="setActiveChild(0)">All Children</button>`;
  children.forEach(ch => {
    html += `<button class="child-tab ${activeChildId === ch.id ? 'active' : ''}" onclick="setActiveChild(${ch.id})">${ch.name} (age ${ch.age})</button>`;
  });
  html += `<button class="child-tab add-child" onclick="addChild()">+ Add Child</button>`;
  tabs.innerHTML = html;
}

function setActiveChild(id) {
  activeChildId = id;
  renderPlanner();
}

function addChild() {
  const name = prompt("Child's name:", "Child " + (children.length + 1));
  if (!name) return;
  const age = parseInt(prompt("Child's age:", "6"));
  if (isNaN(age)) return;
  children.push({ id: Date.now(), name, age });
  renderPlanner();
}

// ── BUDGET CALCULATIONS ──
function calcPlannedCost(activity) {
  const camp = camps.find(c => c.id === activity.campId);
  if (!camp) return 0;
  let cost = camp.priceWeekly * activity.weeks;
  // Auto-apply sibling discount if multiple children in same camp
  const siblingsInSameCamp = plannedActivities.filter(a => a.campId === activity.campId && a.childId !== activity.childId);
  if (siblingsInSameCamp.length > 0 && camp.siblingDiscount !== "None" && camp.siblingDiscount) {
    const pct = parseInt(camp.siblingDiscount);
    if (!isNaN(pct)) cost = cost * (1 - pct / 100);
  }
  return Math.round(cost);
}

function updatePlanner() {
  const totalBudget = parseInt(document.getElementById('totalBudget').value) || 0;
  const activities = activeChildId === 0 ? plannedActivities : plannedActivities.filter(a => a.childId === activeChildId);
  const totalSpent = activities.reduce((sum, a) => sum + calcPlannedCost(a), 0);
  const remaining = totalBudget - totalSpent;
  const pct = totalBudget > 0 ? Math.min((totalSpent / totalBudget) * 100, 100) : 0;

  document.getElementById('budgetSpent').textContent = '$' + totalSpent.toLocaleString();
  document.getElementById('budgetRemaining').textContent = '$' + remaining.toLocaleString();
  document.getElementById('budgetRemainingBig').textContent = remaining >= 0 ? '$' + remaining.toLocaleString() + ' left' : '-$' + Math.abs(remaining).toLocaleString() + ' over budget';
  document.getElementById('budgetRemainingBig').style.color = remaining >= 0 ? (pct > 80 ? 'var(--yellow)' : 'var(--green)') : 'var(--red)';

  const fill = document.getElementById('budgetMeterFill');
  fill.style.width = pct + '%';
  fill.style.background = pct > 100 ? 'var(--red)' : pct > 80 ? 'var(--yellow)' : 'var(--green)';

  renderCategoryChart(activities);
  renderPerChildChart();
}

// ── CATEGORY CHART ──
function renderCategoryChart(activities) {
  const byCategory = {};
  const colors = { sports: '#3B82F6', stem: '#EF4444', arts: '#DB2777', nature: '#16A34A', multi: '#6366F1', music: '#8B5CF6', dance: '#BE185D', tutoring: '#0284C7', swimming: '#06B6D4', martial_arts: '#DC2626', drama: '#92400E', theatre: '#9D174D', movies: '#6D28D9', free: '#059669', events: '#B45309', fairs: '#92400E', community: '#3730A3', library: '#92400E', outdoor: '#15803D', museum: '#1E40AF', holiday: '#DC2626', weekend_top: '#B45309', afterschool: '#4338CA', summer_camp: '#D97706', march_camp: '#DB2777' };

  activities.forEach(a => {
    const camp = camps.find(c => c.id === a.campId);
    if (!camp) return;
    const cat = camp.category;
    if (!byCategory[cat]) byCategory[cat] = 0;
    byCategory[cat] += calcPlannedCost(a);
  });

  const total = Object.values(byCategory).reduce((s, v) => s + v, 0) || 1;
  const container = document.getElementById('categoryChart');

  if (Object.keys(byCategory).length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">&#128200;</div><div class="empty-state-text">Add activities to see spending breakdown</div></div>';
    return;
  }

  container.innerHTML = Object.entries(byCategory)
    .sort((a, b) => b[1] - a[1])
    .map(([cat, amount]) => {
      const pct = Math.round((amount / total) * 100);
      return `<div class="chart-bar-row">
        <span class="chart-bar-label">${cat.charAt(0).toUpperCase() + cat.slice(1).replace('_', ' ')}</span>
        <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${pct}%;background:${colors[cat] || '#6B7280'}">${pct}%</div></div>
        <span class="chart-bar-amount">$${amount}</span>
      </div>`;
    }).join('');
}

// ── PER CHILD CHART ──
function renderPerChildChart() {
  const container = document.getElementById('perChildChart');
  if (children.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">Add children to see per-child costs</div></div>';
    return;
  }

  const childColors = ['#5B4CE0', '#FF6B35', '#22C55E', '#3B82F6', '#DB2777'];
  const totalBudget = parseInt(document.getElementById('totalBudget').value) || 1;

  container.innerHTML = children.map((ch, i) => {
    const childActivities = plannedActivities.filter(a => a.childId === ch.id);
    const cost = childActivities.reduce((sum, a) => sum + calcPlannedCost(a), 0);
    const pct = Math.min(Math.round((cost / totalBudget) * 100), 100);
    const actCount = childActivities.length;
    return `<div class="chart-bar-row">
      <span class="chart-bar-label">${ch.name}</span>
      <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${pct}%;background:${childColors[i % childColors.length]}">${actCount} activities</div></div>
      <span class="chart-bar-amount">$${cost}</span>
    </div>`;
  }).join('');
}

// ── CALENDAR ──
function calendarPrev() {
  calendarWeekStart = new Date(calendarWeekStart);
  calendarWeekStart.setDate(calendarWeekStart.getDate() - 7);
  renderCalendar();
}
function calendarNext() {
  calendarWeekStart = new Date(calendarWeekStart);
  calendarWeekStart.setDate(calendarWeekStart.getDate() + 7);
  renderCalendar();
}

function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  const ws = new Date(calendarWeekStart);
  const we = new Date(ws); we.setDate(we.getDate() + 6);

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById('calendarWeekLabel').textContent =
    `${months[ws.getMonth()]} ${ws.getDate()} – ${months[we.getMonth()]} ${we.getDate()}, ${ws.getFullYear()}`;

  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const timeSlots = ['Morning', 'Afternoon', 'Evening'];

  let html = '<div class="calendar-day-header"></div>';
  for (let d = 0; d < 7; d++) {
    const day = new Date(ws);
    day.setDate(day.getDate() + d);
    html += `<div class="calendar-day-header">${days[d]}<br><span style="color:var(--gray-600)">${months[day.getMonth()]} ${day.getDate()}</span></div>`;
  }

  const wsStr = ws.toISOString().split('T')[0];
  const filteredActivities = activeChildId === 0 ? plannedActivities : plannedActivities.filter(a => a.childId === activeChildId);

  timeSlots.forEach(slot => {
    html += `<div class="calendar-time">${slot}</div>`;
    for (let d = 0; d < 7; d++) {
      const dayDate = new Date(ws);
      dayDate.setDate(dayDate.getDate() + d);
      const dayStr = dayDate.toISOString().split('T')[0];

      // Find activities scheduled for this day
      const dayEvents = filteredActivities.filter(a => {
        const camp = camps.find(c => c.id === a.campId);
        if (!camp) return false;
        const aStart = new Date(a.weekStart);
        const aEnd = new Date(aStart);
        aEnd.setDate(aEnd.getDate() + a.weeks * 7);
        return dayDate >= aStart && dayDate < aEnd;
      }).filter(a => {
        const camp = camps.find(c => c.id === a.campId);
        if (slot === 'Morning' && camp.hours.includes('AM')) return true;
        if (slot === 'Afternoon' && (camp.hours.includes('PM') || camp.hours.includes('4:00') || camp.hours.includes('3:30') || camp.hours.includes('3:00'))) return true;
        if (slot === 'Evening' && (camp.hours.includes('6:') || camp.hours.includes('7:') || camp.hours.includes('8:'))) return true;
        if (slot === 'Morning' && !camp.hours.includes('PM') && !camp.hours.includes('6:') && !camp.hours.includes('7:') && !camp.hours.includes('8:')) return true;
        return false;
      });

      const isWeekend = d >= 5;
      html += `<div class="calendar-cell" style="${isWeekend ? 'background:var(--gray-100)' : ''}" onclick="addToCalendar('${dayStr}','${slot}')">`;
      dayEvents.forEach(a => {
        const camp = camps.find(c => c.id === a.campId);
        const child = children.find(ch => ch.id === a.childId);
        if (camp) {
          html += `<div class="calendar-event" style="background:${camp.color};margin-bottom:2px" title="${camp.name} — ${child ? child.name : ''}">
            ${camp.name.substring(0, 12)}
            <button class="event-remove" onclick="event.stopPropagation();removePlanned(${a.campId},${a.childId})">&#10005;</button>
          </div>`;
        }
      });
      html += '</div>';
    }
  });

  grid.innerHTML = html;
}

function addToCalendar(dateStr, slot) {
  // Show a simple picker of available camps
  const availableCamps = camps.filter(c => c.commuteKm <= 25).slice(0, 10);
  const childId = activeChildId !== 0 ? activeChildId : (children.length > 0 ? children[0].id : 1);

  let options = availableCamps.map(c => `${c.id}: ${c.name} ($${c.priceWeekly}/wk)`).join('\n');
  const choice = prompt(`Add activity for week of ${dateStr}:\n\nEnter camp number:\n${options}`);
  if (!choice) return;
  const campId = parseInt(choice);
  const camp = camps.find(c => c.id === campId);
  if (!camp) { alert('Camp not found'); return; }

  const weeks = parseInt(prompt('How many weeks?', '1'));
  if (isNaN(weeks) || weeks < 1) return;

  // Find the Monday of that week
  const d = new Date(dateStr);
  const dayOfWeek = d.getDay();
  const monday = new Date(d);
  monday.setDate(d.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

  plannedActivities.push({ campId, childId, weeks, weekStart: monday.toISOString().split('T')[0] });
  renderPlanner();
}

function removePlanned(campId, childId) {
  const idx = plannedActivities.findIndex(a => a.campId === campId && a.childId === childId);
  if (idx >= 0) plannedActivities.splice(idx, 1);
  renderPlanner();
}

// ── PLANNED ITEMS LIST ──
function renderPlannedItems() {
  const container = document.getElementById('plannedItems');
  const activities = activeChildId === 0 ? plannedActivities : plannedActivities.filter(a => a.childId === activeChildId);

  if (activities.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">&#128203;</div><div class="empty-state-text">No activities planned yet.<br>Search for activities and add them here!</div></div>';
    return;
  }

  container.innerHTML = activities.map(a => {
    const camp = camps.find(c => c.id === a.campId);
    const child = children.find(ch => ch.id === a.childId);
    if (!camp) return '';
    const cost = calcPlannedCost(a);
    const hasSiblingDiscount = plannedActivities.filter(pa => pa.campId === a.campId && pa.childId !== a.childId).length > 0;
    return `<div class="planned-item">
      <div class="planned-item-info">
        <div class="planned-item-name">${camp.name}${child ? ' — ' + child.name : ''}</div>
        <div class="planned-item-detail">${a.weeks} week${a.weeks > 1 ? 's' : ''} starting ${a.weekStart}${hasSiblingDiscount ? ' · Sibling discount applied' : ''}</div>
      </div>
      <div class="planned-item-cost">$${cost}</div>
      <button class="planned-item-remove" onclick="removePlanned(${a.campId},${a.childId})">&#128465;</button>
    </div>`;
  }).join('');
}

function renderCompare() {
  const selected = compareList.map(id => camps.find(c => c.id === id));
  const rows = [
    { label: 'Category', key: c => getCategoryTag(c.category) },
    { label: 'Provider', key: c => c.provider },
    { label: 'Weekly Cost', key: c => '$' + c.priceWeekly, best: 'min', numKey: c => c.priceWeekly },
    { label: 'Daily Cost', key: c => '$' + c.priceDaily, best: 'min', numKey: c => c.priceDaily },
    { label: 'Commute', key: c => c.commuteMins + ' min', best: 'min', numKey: c => c.commuteMins },
    { label: 'Hours', key: c => c.hours },
    { label: 'Ages', key: c => c.ageMin + '–' + c.ageMax },
    { label: 'Rating', key: c => '&#11088; ' + c.rating + ' (' + c.ratingCount + ')', best: 'max', numKey: c => c.rating },
    { label: 'Value Score', key: c => '<strong style="color:var(--teal)">' + calcValueScore(c) + '/100</strong>', best: 'max', numKey: c => calcValueScore(c) },
    { label: 'Sibling Discount', key: c => c.siblingDiscount },
    { label: 'Early Bird', key: c => c.earlyBird || '—' },
    { label: 'Extended Care', key: c => c.extendedCare ? c.extendedHours : '—' },
    { label: 'Lunch Included', key: c => c.lunchIncluded ? '&#9989; Yes' : '—' },
    { label: 'Dates', key: c => c.dates },
  ];

  let html = `<p style="color:var(--gray-500);font-size:13px;margin-bottom:16px">Comparing ${selected.length} activities across ${new Set(selected.map(c => c.category)).size} categories. Best values highlighted in green.</p>
  <div style="overflow-x:auto"><table class="compare-table">
    <thead><tr>
      <th style="background:var(--gray-600)">Feature</th>
      ${selected.map(c => `<th>${c.name}<br><span style="font-weight:400;font-size:11px;opacity:0.8">${c.provider}</span></th>`).join('')}
    </tr></thead><tbody>`;

  rows.forEach(row => {
    let bestVal = null;
    if (row.best && row.numKey) {
      const vals = selected.map(c => row.numKey(c));
      bestVal = row.best === 'min' ? Math.min(...vals) : Math.max(...vals);
    }
    html += `<tr><td>${row.label}</td>`;
    selected.forEach(c => {
      const val = row.key(c);
      const numVal = row.numKey ? row.numKey(c) : null;
      const isBest = bestVal !== null && numVal === bestVal;
      html += `<td class="${isBest ? 'compare-best' : ''}">${val}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table></div>';
  document.getElementById('compareContent').innerHTML = html;
}

// Close modal on overlay click
document.getElementById('detailModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ── SMART SEARCH ──
const searchExamples = [
  { emoji: '&#9978;', title: 'Summer camps under $300', sub: 'Budget-friendly camps near you', query: 'summer camps under $300' },
  { emoji: '&#127381;', title: 'Free things to do this weekend', sub: 'Library, parks, community events', query: 'free this weekend' },
  { emoji: '&#9917;', title: 'Sports programs for 8 year olds', sub: 'Soccer, hockey, swimming, martial arts', query: 'sports age 8' },
  { emoji: '&#127925;', title: 'Music lessons near me', sub: 'Piano, guitar, violin, voice', query: 'music lessons' },
  { emoji: '&#129302;', title: 'STEM and coding camps', sub: 'Robotics, programming, science', query: 'stem coding' },
  { emoji: '&#128131;', title: 'Dance classes for kids', sub: 'Ballet, hip-hop, jazz, contemporary', query: 'dance' },
  { emoji: '&#127878;', title: 'Upcoming festivals and events', sub: 'Community events, seasonal attractions', query: 'events festivals' },
  { emoji: '&#127963;', title: 'Museum and science centre visits', sub: 'Family days, workshops, exhibits', query: 'museum science' },
  { emoji: '&#127917;', title: 'Drama and theatre programs', sub: 'Acting, improv, stagecraft', query: 'drama theatre' },
  { emoji: '&#128218;', title: 'Tutoring and homework help', sub: 'Math, reading, test prep', query: 'tutoring' },
  { emoji: '&#127909;', title: 'Family movies playing now', sub: 'Cineplex PG & G rated films', query: 'movies' },
  { emoji: '&#127917;', title: 'Theatre shows for kids', sub: 'Plays, puppet shows, performances', query: 'theatre shows' },
  { emoji: '&#127905;', title: 'Community fairs nearby', sub: 'Local fairs, food trucks, rides', query: 'fairs' },
  { emoji: '&#11088;', title: 'What\'s happening this weekend?', sub: 'Top picks near you right now', query: 'top this weekend' },
];

function handleSmartSearch(value) {
  const suggestions = document.getElementById('searchSuggestions');
  const query = value.toLowerCase().trim();

  if (query.length === 0) {
    // Show all examples
    suggestions.innerHTML = searchExamples.map(s =>
      `<div class="suggestion-item" onclick="quickSearch('${s.query}')">
        <span class="suggestion-emoji">${s.emoji}</span>
        <div class="suggestion-text">
          <div class="suggestion-title">${s.title}</div>
          <div class="suggestion-sub">${s.sub}</div>
        </div>
      </div>`
    ).join('');
    suggestions.classList.add('open');
    return;
  }

  // Filter suggestions + matching camps
  const matchingSuggestions = searchExamples.filter(s =>
    s.title.toLowerCase().includes(query) || s.sub.toLowerCase().includes(query) || s.query.includes(query)
  );

  const matchingCamps = camps.filter(c =>
    c.name.toLowerCase().includes(query) ||
    c.provider.toLowerCase().includes(query) ||
    c.description.toLowerCase().includes(query) ||
    c.category.toLowerCase().includes(query)
  ).slice(0, 5);

  let html = '';
  if (matchingSuggestions.length > 0) {
    html += matchingSuggestions.map(s =>
      `<div class="suggestion-item" onclick="quickSearch('${s.query}')">
        <span class="suggestion-emoji">${s.emoji}</span>
        <div class="suggestion-text">
          <div class="suggestion-title">${s.title}</div>
          <div class="suggestion-sub">${s.sub}</div>
        </div>
      </div>`
    ).join('');
  }
  if (matchingCamps.length > 0) {
    if (matchingSuggestions.length > 0) html += '<div style="border-top:1px solid var(--gray-100);margin:4px 8px"></div>';
    html += matchingCamps.map(c =>
      `<div class="suggestion-item" onclick="openDetail(${c.id});document.getElementById('searchSuggestions').classList.remove('open')">
        <span class="suggestion-emoji">${getEmoji(c.category)}</span>
        <div class="suggestion-text">
          <div class="suggestion-title">${c.name}</div>
          <div class="suggestion-sub">${c.provider} · $${c.priceWeekly}/wk · ${c.commuteMins} min</div>
        </div>
      </div>`
    ).join('');
  }

  if (html === '') {
    html = '<div style="padding:20px;text-align:center;color:var(--gray-400);font-size:14px">No results — try different keywords</div>';
  }

  suggestions.innerHTML = html;
  suggestions.classList.add('open');
}

function runSmartSearch() {
  const query = document.getElementById('smartSearch').value.trim().toLowerCase();
  if (!query) return;
  quickSearch(query);
}

function quickSearch(query) {
  document.getElementById('smartSearch').value = query;
  document.getElementById('searchSuggestions').classList.remove('open');

  // Parse natural language query into filters
  const q = query.toLowerCase();

  // Reset filters
  document.getElementById('seasonFilter').value = 'all';
  document.getElementById('ageFilter').value = 'all';
  document.getElementById('locationFilter').value = 'ottawa';
  selectedCategory = 'all';

  // Season
  if (q.includes('summer')) document.getElementById('seasonFilter').value = 'summer';
  else if (q.includes('march') || q.includes('spring')) document.getElementById('seasonFilter').value = 'march';
  else if (q.includes('winter')) document.getElementById('seasonFilter').value = 'winter';
  else if (q.includes('weekend')) document.getElementById('seasonFilter').value = 'weekend';
  else if (q.includes('after school') || q.includes('afterschool')) document.getElementById('seasonFilter').value = 'afterschool';

  // Category
  if (q.includes('sport') || q.includes('soccer') || q.includes('hockey') || q.includes('swim') || q.includes('martial') || q.includes('karate') || q.includes('gymnast')) selectedCategory = 'sports_all';
  else if (q.includes('music') || q.includes('piano') || q.includes('guitar') || q.includes('dance') || q.includes('ballet')) selectedCategory = 'music_dance';
  else if (q.includes('stem') || q.includes('coding') || q.includes('robot') || q.includes('art')) selectedCategory = 'arts_stem';
  else if (q.includes('drama') || q.includes('theatre') || q.includes('theater') || q.includes('acting') || q.includes('show') || q.includes('performance') || q.includes('puppet') || q.includes('improv')) selectedCategory = 'theatre_shows';
  else if (q.includes('tutor') || q.includes('math') || q.includes('reading') || q.includes('homework') || q.includes('library') || q.includes('after school') || q.includes('afterschool')) selectedCategory = 'learning';
  else if (q.includes('museum') || q.includes('science centre')) selectedCategory = 'museum';
  else if (q.includes('outdoor') || q.includes('nature') || q.includes('park') || q.includes('hike') || q.includes('trail')) selectedCategory = 'outdoors';
  else if (q.includes('event') || q.includes('festival') || q.includes('fair') || q.includes('holiday') || q.includes('christmas') || q.includes('halloween') || q.includes('easter') || q.includes('community') || q.includes('top this weekend') || q.includes('what\'s happening') || q.includes('near me')) selectedCategory = 'events_all';
  else if (q.includes('movie') || q.includes('cineplex') || q.includes('cinema') || q.includes('film')) selectedCategory = 'movies';
  else if (q.includes('free')) selectedCategory = 'free';
  else if (q.includes('camp')) selectedCategory = 'camps';

  // Budget from query
  const budgetMatch = q.match(/under\s*\$?(\d+)/);
  if (budgetMatch) {
    const maxBudget = parseInt(budgetMatch[1]);
    document.getElementById('budgetSlider').value = Math.min(maxBudget, 800);
    updateBudget();
  }

  // Age from query
  const ageMatch = q.match(/(\d+)\s*year|age\s*(\d+)/);
  if (ageMatch) {
    const age = ageMatch[1] || ageMatch[2];
    document.getElementById('ageFilter').value = age;
  }

  // Free activities
  if (q.includes('free')) {
    document.getElementById('budgetSlider').value = 0;
    document.getElementById('budgetDisplay').textContent = '$0/wk';
  }

  // Update filter chips visual
  document.querySelectorAll('.filters-bar .cat-item').forEach(c => {
    c.classList.remove('active');
    if (c.dataset.filter === selectedCategory) c.classList.add('active');
    if (selectedCategory === 'all' && c.dataset.filter === 'all') c.classList.add('active');
  });

  filterCamps();

  // Scroll to results
  document.querySelector('.results-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Close suggestions on outside click
document.addEventListener('click', function(e) {
  if (!e.target.closest('.smart-search')) {
    document.getElementById('searchSuggestions').classList.remove('open');
  }
});

// ── INTEREST PICKER ──
const interests = [
  { id: 'camps', emoji: '&#9978;', label: 'Camps' },
  { id: 'sports_all', emoji: '&#9917;', label: 'Sports' },
  { id: 'music_dance', emoji: '&#127925;', label: 'Music & Dance' },
  { id: 'arts_stem', emoji: '&#127912;', label: 'Arts & STEM' },
  { id: 'theatre_shows', emoji: '&#127917;', label: 'Theatre & Shows' },
  { id: 'learning', emoji: '&#128218;', label: 'Learning' },
  { id: 'outdoors', emoji: '&#127795;', label: 'Outdoors' },
  { id: 'events_all', emoji: '&#127878;', label: 'Events & Fairs' },
  { id: 'movies', emoji: '&#127909;', label: 'Movies' },
  { id: 'museum', emoji: '&#127963;', label: 'Museums' },
  { id: 'free', emoji: '&#127381;', label: 'Free' },
  { id: 'gymnastics', emoji: '&#129355;', label: 'Gymnastics' },
  { id: 'skating', emoji: '&#9975;', label: 'Skating' },
  { id: 'playgrounds', emoji: '&#127968;', label: 'Playgrounds' },
  { id: 'escape_rooms', emoji: '&#128274;', label: 'Escape Rooms' },
  { id: 'parks', emoji: '&#127794;', label: 'Parks' },
  { id: 'splashpads', emoji: '&#128166;', label: 'Splashpads' },
  { id: 'beaches', emoji: '&#127958;', label: 'Beaches' },
  { id: 'rec_centres', emoji: '&#127946;', label: 'Rec Centres' },
];

let selectedInterests = [];

function renderInterestGrid() {
  const grid = document.getElementById('interestGrid');
  const allSelected = selectedInterests.length === 0;
  let html = `<div class="cat-item ${allSelected ? 'selected' : ''}" onclick="selectedInterests=[];selectedCategory='all';renderInterestGrid();filterCamps();">
    <span class="emoji">&#128300;</span> All
  </div>`;
  html += interests.map(i => {
    const count = camps.filter(c => categoryMatches(i.id, c.category)).length;
    const isSelected = selectedInterests.includes(i.id);
    return `<div class="cat-item ${isSelected ? 'selected' : ''}" onclick="toggleInterest('${i.id}')">
      <span class="emoji">${i.emoji}</span> ${i.label} <span class="count">(${count})</span>
    </div>`;
  }).join('');
  grid.innerHTML = html;
  updateInterestCompareBtn();
}

function toggleInterest(id) {
  if (selectedInterests.includes(id)) {
    selectedInterests = selectedInterests.filter(i => i !== id);
  } else {
    if (selectedInterests.length >= 5) { alert('Select up to 5 interests to compare'); return; }
    selectedInterests.push(id);
  }
  // Also filter results by selected interests
  if (selectedInterests.length === 1) {
    selectedCategory = selectedInterests[0];
  } else if (selectedInterests.length === 0) {
    selectedCategory = 'all';
  } else {
    selectedCategory = 'multi_interest';
  }
  renderInterestGrid();
  filterCamps();
}

function updateInterestCompareBtn() {
  const btn = document.getElementById('interestCompareBtn');
  const count = selectedInterests.length;
  if (count >= 2) {
    btn.classList.add('visible');
    document.getElementById('interestCount').textContent = `(${count})`;
  } else {
    btn.classList.remove('visible');
  }
}

function compareInterests() {
  if (selectedInterests.length < 2) return;

  // Build comparison data — best activity per interest
  const comparisonData = selectedInterests.map(intId => {
    const matching = camps.filter(c => categoryMatches(intId, c.category) && c.commuteKm <= 25);
    matching.sort((a, b) => calcValueScore(b) - calcValueScore(a));
    const best = matching[0];
    const interest = interests.find(i => i.id === intId);
    return { interest, best, count: matching.length, avgPrice: matching.length > 0 ? Math.round(matching.reduce((s, c) => s + c.priceWeekly, 0) / matching.length) : 0 };
  });

  // Show comparison modal
  let html = `
    <p style="color:var(--gray-500);margin-bottom:16px;font-size:14px">Comparing your top pick from each selected interest (within 25 km):</p>
    <div style="overflow-x:auto">
    <table class="compare-table" style="min-width:100%">
      <thead><tr>
        <th style="background:var(--gray-600)">Feature</th>
        ${comparisonData.map(d => `<th>${d.interest.emoji} ${d.interest.label}</th>`).join('')}
      </tr></thead>
      <tbody>
        <tr><td>Best Option</td>${comparisonData.map(d => `<td style="font-weight:700">${d.best ? d.best.name : 'None found'}</td>`).join('')}</tr>
        <tr><td>Provider</td>${comparisonData.map(d => `<td>${d.best ? d.best.provider : '—'}</td>`).join('')}</tr>
        <tr><td>Weekly Cost</td>${comparisonData.map(d => `<td>${d.best ? '$' + d.best.priceWeekly : '—'}</td>`).join('')}</tr>
        <tr><td>Avg. Cost in Category</td>${comparisonData.map(d => `<td>$${d.avgPrice}</td>`).join('')}</tr>
        <tr><td>Commute</td>${comparisonData.map(d => `<td>${d.best ? d.best.commuteMins + ' min' : '—'}</td>`).join('')}</tr>
        <tr><td>Rating</td>${comparisonData.map(d => `<td>${d.best ? d.best.rating + '/5' : '—'}</td>`).join('')}</tr>
        <tr><td>Value Score</td>${comparisonData.map(d => `<td style="font-weight:700;color:var(--teal)">${d.best ? calcValueScore(d.best) + '/100' : '—'}</td>`).join('')}</tr>
        <tr><td>Ages</td>${comparisonData.map(d => `<td>${d.best ? d.best.ageMin + '–' + d.best.ageMax : '—'}</td>`).join('')}</tr>
        <tr><td>Options Available</td>${comparisonData.map(d => `<td>${d.count} activities</td>`).join('')}</tr>
        <tr><td>Schedule</td>${comparisonData.map(d => `<td>${d.best ? d.best.hours : '—'}</td>`).join('')}</tr>
      </tbody>
    </table>
    </div>
    <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap">
      ${comparisonData.filter(d => d.best).map(d => `<button class="register-btn" style="width:auto;flex:1;min-width:120px;font-size:13px" onclick="closeModal();openDetail(${d.best.id})">View ${d.interest.label}</button>`).join('')}
    </div>
  `;

  document.getElementById('modalName').textContent = 'Interest Comparison';
  document.getElementById('modalProvider').textContent = selectedInterests.length + ' interests selected — showing the best-value activity in each';
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('detailModal').classList.add('open');
}

// Init
renderInterestGrid();
filterCamps();
