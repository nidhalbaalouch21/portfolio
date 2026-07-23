import ecoframeCover from "../work/ux ui/mobile/ecoframe/cover.jpg";
import aiformsCover from "../work/branding/aiforms brandbook/cover.jpg";
import aiforms2 from "../work/branding/aiforms brandbook/2.jpg";
import aiforms3 from "../work/branding/aiforms brandbook/3.jpg";
import aiforms4 from "../work/branding/aiforms brandbook/4.jpg";
import aiforms7 from "../work/branding/aiforms brandbook/7.jpg";
import aiforms8 from "../work/branding/aiforms brandbook/8.jpg";
import aiforms9 from "../work/branding/aiforms brandbook/9.jpg";
import aiforms10 from "../work/branding/aiforms brandbook/10.jpg";
import aiformsPoster1 from "../work/posters/aiforms/HR meets poster.jpg";
import aiformsPoster2 from "../work/posters/aiforms/Mesurer et renforcer le lien entre les collaborateurs, les valeurs et la culture de l'entreprise.jpg";
import aiformsPoster3 from "../work/posters/aiforms/poster1V3.jpg";
import aiformsPoster4 from "../work/posters/aiforms/TRANSFORMEZ VOS DONNÉES RH EN DÉCISIONS.jpg";
// Tech Posters Series Imports
import pc1Cover from "../work/posters/pc1/cover1.jpg";
import pc1Design from "../work/posters/pc1/pc.jpg";
import pc2Cover from "../work/posters/pc2/cover2.jpg";
import pc2Design from "../work/posters/pc2/pc2.jpg";
import pc3Cover from "../work/posters/pc3/cover3.jpg";
import pc3Design from "../work/posters/pc3/pc3.jpg";

// Eco Bag Posters Series Imports
import sac1Cover from "../work/posters/sac1/sa1 cover.jpg";
import sac1Design from "../work/posters/sac1/BLUE.jpg";
import sac2Cover from "../work/posters/sac2/sac2 cover.jpg";
import sac2Design from "../work/posters/sac2/RED.jpg";
import fssCover from "../work/branding/FSS/COVER.jpg";
import fss1 from "../work/branding/FSS/1.jpg";
import fss2 from "../work/branding/FSS/2.jpg";
import fss3 from "../work/branding/FSS/3.jpg";
import fss4 from "../work/branding/FSS/4.jpg";
import fss5 from "../work/branding/FSS/5.jpg";
import fss6 from "../work/branding/FSS/6.jpg";
import fss7 from "../work/branding/FSS/7.jpg";
import fss8 from "../work/branding/FSS/8.jpg";
import fss9 from "../work/branding/FSS/9.jpg";

// Evora Project Imports
import evoraCover from "../work/branding/evora/cover.png";
import evoraBrandbook from "../work/branding/evora/evora.jpg";

// Pawcycle Web Project Imports
import pawcycleCover from "../work/ux ui/web/pawcycle/cover.jpg";
import pawcycleHomePc from "../work/ux ui/web/pawcycle/home pc view.png";
import pawcycleHome from "../work/ux ui/web/pawcycle/home.png";
import pawcycleStorePc from "../work/ux ui/web/pawcycle/store pc view.png";
import pawcycleStore from "../work/ux ui/web/pawcycle/store.png";
import pawcycleDonationPc from "../work/ux ui/web/pawcycle/dination pc view.png";
import pawcycleDonation from "../work/ux ui/web/pawcycle/donation.png";
import pawcycleContactPc from "../work/ux ui/web/pawcycle/contact pc view.png";
import pawcycleContact from "../work/ux ui/web/pawcycle/contact.png";

// AiForms UX/UI Web Project Imports
import aiformsUxUiCover from "../work/ux ui/web/aiforms/cover.jpg";
import aiformsDashboard1 from "../work/ux ui/web/aiforms/dashboard/5.png";
import aiformsDashboard4 from "../work/ux ui/web/aiforms/dashboard/4.png";
import aiformsLogin from "../work/ux ui/web/aiforms/auth/login.png";
import aiformsSignup from "../work/ux ui/web/aiforms/auth/signup.png";

// Pawcycle Mobile Project Imports
import pawcycleMobileCover from "../work/ux ui/mobile/pawcycle mobile app/cover.jpg";
import pawcycleMobileLogin from "../work/ux ui/mobile/pawcycle mobile app/login.png";
import pawcycleMobileSignup from "../work/ux ui/mobile/pawcycle mobile app/sign up.png";
import pawcycleMobileShop1 from "../work/ux ui/mobile/pawcycle mobile app/shop1.png";
import pawcycleMobileShop8 from "../work/ux ui/mobile/pawcycle mobile app/shop8.png";

export interface ProjectContent {
  section: string;
  title: string;
  description?: string;
  images: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  problem: string;
  goal: string;
  targetAudience: string;
  designDirection: string;
  content: ProjectContent[];
  colors: string[];
  fonts: string[];
  finalShowcase: string[];
}

export const projects: Project[] = [
  {
    id: "aiforms-brandbook",
    title: "AiForms Brandbook & Corporate Identity",
    category: "Branding",
    coverImage: aiformsCover,
    problem:
      "HR platforms are frequently viewed as clinical, cold, and overly bureaucratic. AiForms required an identity that felt technologically advanced (AI-driven) while remaining approachable, human, and highly legible for enterprise users across regions.",
    goal: "Develop a cohesive corporate identity that balances technical precision with friendly, human-centric visual design, enabling clear communication of data insights and employee care.",
    targetAudience:
      "HR administrators, company managers, design teams, and enterprise buyers looking for approachable AI tools.",
    designDirection:
      "A modular, friendly design system built around community connections, incorporating round geometry, secondary gradients, and clean typography.",
    colors: ["#002F9E", "#0C0C0C", "#368BDA", "#F5F5F5", "#EE4D20"],
    fonts: ["Icona Sans TRIAL (Semibold)", "Icona Sans TRIAL (Regular)"],
    content: [
      {
        section: "Identity",
        title: "Logo & Configurations",
        description:
          "The logo balances horizontal lockups for digital headers and vertical/stacked configurations for mobile platforms.",
        images: [aiformsCover, aiforms2],
      },
      {
        section: "System",
        title: "Brand Components & Icons",
        description:
          "A modular community loop system and multi-color icon variations designed for consistent layout indexing.",
        images: [aiforms3, aiforms4],
      },
      {
        section: "Applications",
        title: "Marketing & Print Materials",
        description:
          "High-fidelity mockups showcasing stationery, brochure systems, social grids, and web landing pages.",
        images: [aiforms7, aiforms8, aiforms9, aiforms10],
      },
    ],
    finalShowcase: [aiforms9, aiforms10],
  },
  {
    id: "fss-branding",
    title: "Festival Sebkha Sejoumi (FSS) Visual Identity",
    category: "Branding",
    coverImage: fssCover,
    problem:
      "The Sebkha Sejoumi wetland faces rapid urban encroachment, pollution, and general public neglect. Lacking a unified brand identity, previous photography festivals failed to capture public interest, display participant work cohesively, or convey the ecosystem's vibrant beauty.",
    goal: "Create a refined visual system that highlights the ecological and cultural significance of the Sebkha Sejoumi wetland through a cohesive photography festival brand, centered around the iconic flamingo.",
    targetAudience:
      "Photographers, environmental advocates, local Tunisian citizens, and cultural event sponsors.",
    designDirection:
      "Organic monogrammatic silhouettes, high-contrast layouts, and vibrant pink and teal tones that mirror the wetland's nature.",
    colors: ["#030712", "#FF80A0", "#368BDA", "#F5F5F5"],
    fonts: ["Display Sans (Editorial)", "Mada (Sans-serif)"],
    content: [
      {
        section: "Brand System",
        title: "Monogrammatic Logo Mark",
        description:
          "An organic monogram intertwining the letters F, S, S to form the silhouette of a standing flamingo, reflecting the festival's identity.",
        images: [fss2, fss3, fss4, fss5],
      },
      {
        section: "Collateral & Guidelines",
        title: "Identity Protection & Usage",
        description:
          "Clear boundary safe zones and usage rules defined to prevent stretching, distortion, or off-palette color deviations.",
        images: [fss6, fss9],
      },
      {
        section: "Applications",
        title: "Festival Merchandise & Ads",
        description:
          "Case study applications showing branded organic cotton backpacks, bucket hats, and high-impact street billboards.",
        images: [fss7, fss8, fssCover],
      },
    ],
    finalShowcase: [fss7, fss8],
  },
  {
    id: "evora-branding",
    title: "Evora Brandbook & Corporate Identity",
    category: "Branding",
    coverImage: evoraCover,
    problem:
      "Establishing a premium lifestyle brand requires a visual identity that feels highly sophisticated, consistent, and structured. Evora lacked a unified visual design system and comprehensive design guidelines to align its internal teams and brand communications.",
    goal: "Create a timeless, elegant visual identity and a complete brandbook presenting exact specifications for logo alignment, luxury color palettes, editorial typography, and page layout standards.",
    targetAudience:
      "Designers, brand collaborators, stakeholders, and luxury consumers looking for minimalist, premium brand experiences.",
    designDirection:
      "Classic editorial layouts with luxury gold tones, high-contrast dark space, and timeless typography.",
    colors: ["#0B0C10", "#1F2833", "#C5A059", "#F5F5F5"],
    fonts: ["Playfair Display (Serif)", "Inter (Sans-serif)"],
    content: [
      {
        section: "Brandbook Presentation",
        title: "Evora Brandbook & Identity Guidelines",
        description:
          "The comprehensive guide detailing corporate logo rules, typography hierarchy, primary and secondary color applications, and sample grid layouts.",
        images: [evoraBrandbook],
      },
    ],
    finalShowcase: [evoraBrandbook],
  },
  {
    id: "nova-ecommerce",
    title: "EcoFrame",
    category: "UI/UX Design",
    coverImage: ecoframeCover,
    problem:
      "The Sebkha is a unique natural ecosystem that is often overlooked and lacks public awareness. As a result, its biodiversity and environmental value are not widely recognized, leading to limited community engagement and conservation efforts. Additionally, there is no centralized digital platform to promote the photography festival, manage registrations, showcase participants' work, and keep visitors informed.",
    goal: "EcoFrame is a mobile application that supports the Sebkha Photography Festival by bringing together photographers, visitors, and organizers on one platform. It enables users to register for the festival, explore the event schedule, submit photographs, view exhibitions, receive real-time updates, and discover the ecological importance of the Sebkha. By combining photography with digital engagement, EcoFrame raises environmental awareness and encourages the preservation of this unique natural heritage.",
    targetAudience:
      "Photographers, festival visitors, organizers, and nature conservationists interested in the Sebkha ecosystem.",
    designDirection:
      "An editorial, glassmorphic layout utilizing bold typography, asymmetrical grids, and fluid hover-reveal animations that make browsing feel like flipping through a premium design magazine.",
    colors: ["#1a1a1a", "#ffffff", "#d4af37", "#f59e0b"],
    fonts: ["Outfit (Sans-serif)", "Playfair Display (Serif)"],
    content: [
      {
        section: "Concept",
        title: "Defining the Editorial Layout",
        description:
          "Breaking away from standard grid boxes, we designed a magazine-style homepage with large-format photography, overlapping typography, and contextual product stories.",
        images: [
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
        ],
      },
      {
        section: "User Experience",
        title: "Frictionless Shopping",
        description:
          "A sliding cart drawer and instant visual cues let users review purchases without losing their place on the catalog. Smooth page transitions reduce perceived load times.",
        images: [
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop",
        ],
      },
    ],
    finalShowcase: [
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2000&auto=format&fit=crop",
    ],
  },
  {
    id: "aiforms-posters",
    title: "AiForms Posters",
    category: "Posters",
    coverImage: aiformsPoster1,
    problem: "Visual communication of internal values, culture, and events for AiForms employees through custom posters.",
    goal: "Design high-impact posters that blend company culture, corporate values, and engaging visuals for internal workspaces.",
    targetAudience: "AiForms employees and team members.",
    designDirection: "Expressive illustration, clean typography, and vibrant corporate color system.",
    colors: ["#0b2f5a", "#09a3d5", "#f59e0b", "#ffffff"],
    fonts: ["Space Grotesk", "Inter"],
    content: [
      {
        section: "Internal Communications",
        title: "Workspace Posters",
        description: "Posters designed for culture-building, team alignment, and event marketing.",
        images: [aiformsPoster1, aiformsPoster2, aiformsPoster3, aiformsPoster4],
      }
    ],
    finalShowcase: [aiformsPoster1, aiformsPoster2, aiformsPoster3, aiformsPoster4],
  },
  {
    id: "pc1",
    title: "PC1 Tech Poster",
    category: "Posters",
    coverImage: pc1Cover,
    problem: "Designing a futuristic, high-contrast technology poster that highlights microprocessor architecture and code aesthetics.",
    goal: "Create a visual asset for tech environments combining complex layout layers and bold, glowing typography.",
    targetAudience: "Developers, technologists, and hardware enthusiasts.",
    designDirection: "Futuristic neon accents, layout overlays, and bold technical typography.",
    colors: ["#000000", "#38bdf8", "#fafafa"],
    fonts: ["Orbitron", "JetBrains Mono"],
    content: [
      {
        section: "Flat Design",
        title: "Microprocessor Architecture Concept",
        description: "Focuses on deep glowing processor pathways, high-density code details, and abstract geometric layouts.",
        images: [pc1Design],
      }
    ],
    finalShowcase: [pc1Design],
  },
  {
    id: "pc2",
    title: "PC2 Tech Poster",
    category: "Posters",
    coverImage: pc2Cover,
    problem: "Designing a hardware-inspired technology poster focusing on circuit board designs and layered geometry.",
    goal: "Create a clean yet high-contrast technology themed poster for visual workspaces.",
    targetAudience: "Developers, hardware engineers, and design lovers.",
    designDirection: "Circuit board pathways, layered frames, and neon cyan accents.",
    colors: ["#000000", "#38bdf8", "#BCFF5E"],
    fonts: ["Orbitron", "JetBrains Mono"],
    content: [
      {
        section: "Flat Design",
        title: "Hardware Board Layout Concept",
        description: "Highlights hardware circuit board layouts with contrasting bright cyan accent layers.",
        images: [pc2Design],
      }
    ],
    finalShowcase: [pc2Design],
  },
  {
    id: "pc3",
    title: "PC3 Tech Poster",
    category: "Posters",
    coverImage: pc3Cover,
    problem: "Designing a vertical technology poster exploring cybernetic interfaces and digital code blocks.",
    goal: "Create a futuristic, neon-accented tech poster that adds visual depth to modern offices.",
    targetAudience: "Cyber security specialists, software developers, and gamers.",
    designDirection: "Vertical code brackets, modular data layers, and cybernetic themes.",
    colors: ["#000000", "#7c3aed", "#EE4D20"],
    fonts: ["Orbitron", "JetBrains Mono"],
    content: [
      {
        section: "Flat Design",
        title: "Abstract Cybernetic Interface Concept",
        description: "Combines vertical code brackets, hardware blocks, and neon color palettes.",
        images: [pc3Design],
      }
    ],
    finalShowcase: [pc3Design],
  },
  {
    id: "sac1",
    title: "Blue Tote Bag Design",
    category: "Posters",
    coverImage: sac1Cover,
    problem: "Designing a clean product branding poster showcasing an eco-friendly blue canvas tote bag in a studio layout.",
    goal: "Achieve perfect visual symmetry and color coordination to highlight sustainable materials.",
    targetAudience: "Eco-conscious retail buyers and design lovers.",
    designDirection: "Geometric symmetry, studio lighting aesthetics, and minimalist branding.",
    colors: ["#1367E8", "#FFFFFF", "#0C0C0C"],
    fonts: ["Space Grotesk", "Inter"],
    content: [
      {
        section: "Flat Design",
        title: "Minimalist Blue Tote Bag Concept",
        description: "Emphasizes cool blue tones, visual geometry, and clean logo branding mockups.",
        images: [sac1Design],
      }
    ],
    finalShowcase: [sac1Design],
  },
  {
    id: "sac2",
    title: "Red Tote Bag Design",
    category: "Posters",
    coverImage: sac2Cover,
    problem: "Designing an energetic, warm-toned product branding poster for an eco-friendly red canvas tote bag.",
    goal: "Establish high visual impact using bold red-orange backgrounds and organic material textures.",
    targetAudience: "Sustainable fashion buyers and creative designers.",
    designDirection: "Vibrant color blocking, minimalist layout, and clean typography.",
    colors: ["#EE4D20", "#FFFFFF", "#0C0C0C"],
    fonts: ["Space Grotesk", "Inter"],
    content: [
      {
        section: "Flat Design",
        title: "Minimalist Red Tote Bag Concept",
        description: "High-impact warm orange-red colorways styled in a minimalist design studio layout.",
        images: [sac2Design],
      }
    ],
    finalShowcase: [sac2Design],
  },
  {
    id: "pawcycle",
    title: "Pawcycle",
    category: "UI/UX Design",
    coverImage: pawcycleCover,
    problem:
      "Many pet accessories and clothing are produced using non-sustainable materials, contributing to environmental pollution and textile waste. At the same time, pet owners have limited access to eco-friendly products that are both stylish and affordable.",
    goal: "Pawcycle provides a sustainable alternative by offering pet clothing and accessories made from recycled and upcycled materials. Through an intuitive e-commerce platform, pet owners can easily discover high-quality, eco-friendly products that reduce waste while keeping their pets comfortable, fashionable, and cared for.",
    targetAudience:
      "Eco-conscious pet owners seeking affordable, stylish, and high-quality clothing and accessories for their pets.",
    designDirection:
      "A vibrant, high-contrast digital interface combining electric blue, glowing lime green, and playful display typography for a unique brand identity.",
    colors: ["#1367E8", "#BCFF5E", "#FFFFFF"],
    fonts: ["Luckiest Guy (Display)", "Mada (Sans-serif)"],
    content: [
      {
        section: "Platform",
        title: "E-Commerce Experience",
        description:
          "Sleek and intuitive web store offering eco-friendly apparel, accessories, and a dedicated donations portal for recycling pet items.",
        images: [pawcycleHome, pawcycleStore],
      },
      {
        section: "Community & Recycling",
        title: "Donation and Engagement",
        description:
          "Enabling users to easily participate in upcycling programs, track their environmental impact, and contact sustainability representatives.",
        images: [pawcycleDonation, pawcycleContact],
      },
    ],
    finalShowcase: [pawcycleHome, pawcycleStore, pawcycleDonation, pawcycleContact],
  },
  {
    id: "pawcycle-mobile",
    title: "Pawcycle Mobile App",
    category: "UI/UX Design",
    coverImage: pawcycleMobileCover,
    problem:
      "Many pet accessories and clothing are produced using non-sustainable materials, contributing to environmental pollution and textile waste. At the same time, pet owners have limited access to eco-friendly products that are both stylish and affordable.",
    goal: "Pawcycle Mobile App provides a sustainable alternative by offering pet clothing and accessories made from recycled and upcycled materials. Through an intuitive mobile experience, pet owners can easily discover high-quality, eco-friendly products, donate old items, and track their positive environmental impact on the go.",
    targetAudience:
      "Eco-conscious pet owners seeking affordable, stylish, and high-quality clothing and accessories for their pets.",
    designDirection:
      "A vibrant, high-contrast mobile interface combining electric blue, glowing lime green, and playful display typography for a unique brand identity.",
    colors: ["#1367E8", "#BCFF5E", "#FFFFFF"],
    fonts: ["Luckiest Guy (Display)", "Mada (Sans-serif)"],
    content: [
      {
        section: "Authentication & Portal",
        title: "Onboarding & Access Portal",
        description: "Sleek, responsive authentication screens ensuring secure access and easy setup for pet owners.",
        images: [pawcycleMobileLogin, pawcycleMobileSignup],
      },
      {
        section: "Platform",
        title: "Eco-Store & Upcycling Hub",
        description: "Mobile store experience offering eco-friendly apparel, accessories, and a dedicated donations portal for recycling pet items.",
        images: [pawcycleMobileShop1, pawcycleMobileShop8],
      },
    ],
    finalShowcase: [pawcycleMobileShop1, pawcycleMobileShop8, pawcycleMobileLogin, pawcycleMobileSignup],
  },
  {
    id: "aiforms-ux-ui",
    title: "AiForms UX/UI",
    category: "UI/UX Design",
    coverImage: aiformsUxUiCover,
    problem:
      "Many HR departments still rely on manual processes, spreadsheets, and disconnected tools to manage employee information, evaluations, and forms. These traditional methods are time-consuming, prone to human error, and make it difficult to analyze data and make informed decisions.",
    goal:
      "AiForms provides a centralized, AI-powered platform that automates HR workflows and simplifies data management. It offers intelligent form creation, automated data processing, AI-driven insights, and interactive dashboards to help HR teams work more efficiently.",
    targetAudience:
      "HR managers, administrators, department heads, and organization employees interacting with HR workflows.",
    designDirection:
      "A modern, professional dashboard with clean modular interfaces, high data-density viewports, secure auth forms, and dynamic visualization components.",
    colors: ["#002F9E", "#0C0C0C", "#368BDA", "#F5F5F5", "#EE4D20"],
    fonts: ["Icona Sans TRIAL (Semibold)", "Icona Sans TRIAL (Regular)"],
    content: [
      {
        section: "Platform",
        title: "AI-Powered HR Dashboard",
        description:
          "Intelligent centralized workspace providing real-time data visualizations, HR analytics, and employee sentiment metrics.",
        images: [aiformsDashboard1, aiformsDashboard4],
      },
      {
        section: "Authentication & Setup",
        title: "Onboarding & Access Portal",
        description:
          "Sleek, responsive authentication screens ensuring secure access and easy setup for employees and administrators.",
        images: [aiformsLogin, aiformsSignup],
      },
    ],
    finalShowcase: [aiformsDashboard1, aiformsDashboard4, aiformsLogin, aiformsSignup],
  },
];
