import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "./contactform";
import topo from "../assets/img/topo-left.svg";
import topoRight from "../assets/img/topo-right.svg";
import sicon from "../assets/img/service_icon.svg";
import sfcertificate from "../assets/img/sfcertificate.svg";

const ServicePage = () => {
  const { serviceName } = useParams();
  const [currentService, setCurrentService] = useState(
    serviceName || "salesforce"
  );

  // Update currentService when URL changes
  useEffect(() => {
    if (serviceName && serviceName !== currentService) {
      setCurrentService(serviceName);
    }
  }, [serviceName]);

  // Service data structure
  const services = {
    aisolutions: {
      "AI-Powered Predictive Analytics": {
        title: "AI-Powered Predictive Analytics",
        icon: "📊",
        description:
          "Transform Data into Predictive Insights for Smarter Decisions",
        longDescription:
          "Unlock the potential of your data with AI-driven predictive models that provide accurate forecasts and actionable insights. From sales trends to customer behavior, our AI solutions help you make informed decisions and optimize your strategy.",
        features: [
          "Time-series forecasting for sales, inventory, and demand planning",
          "Predictive models for customer churn, product success, and risk factors",
          "Real-time data processing for on-the-fly analysis",
          "Integration with existing business intelligence (BI) tools for seamless reporting",
        ],
        benefits: [
          "Make proactive decisions with data-backed predictions",
          "Identify opportunities and risks before they arise",
          "Optimize resource allocation and demand forecasting",
          "Improve customer retention and reduce churn with personalized predictions",
        ],
      },
      "Natural Language Processing (NLP) and Chatbots": {
        title: "Natural Language Processing (NLP) and Chatbots",
        icon: "🗣️",
        description:
          "Enhance Customer Engagement with AI-Driven Conversations",
        longDescription:
          "Utilize NLP and advanced chatbots to offer dynamic, personalized customer interactions. From automated customer support to lead generation, our NLP solutions enhance user experience, delivering human-like communication at scale.",
        features: [
          "AI-powered chatbots for 24/7 customer support",
          "Sentiment analysis to gauge customer satisfaction",
          "Voice and text-based virtual assistants for customer inquiries",
          "Integration with CRM systems for a seamless customer journey",
        ],
        benefits: [
          "Improve customer satisfaction with instant, personalized responses",
          "Free up human agents for more complex tasks while automating routine inquiries",
          "Analyze customer sentiment to refine service strategies",
          "Reduce operational costs with efficient, automated customer support",
        ],
      },
      mdm: {
        title: "Machine Learning for Automation & Process Optimization",
        icon: "⚙️",
        description:
          "Automate and Optimize Your Business Processes with Machine Learning",
        longDescription:
          "Streamline operations and increase efficiency by applying machine learning to process automation. From fraud detection to supply chain optimization, our solutions help automate decision-making and improve overall business performance.",
        features: [
          "Anomaly detection for fraud, network security, and operational inefficiencies",
          "Optimization algorithms for supply chain and logistics management",
          "AI-powered recommendations for inventory management and demand forecasting",
          "Custom machine learning models for domain-specific automation",
        ],
        benefits: [
          "Reduce manual errors and bottlenecks with intelligent process automation",
          "Optimize business processes and resource allocation",
          "Detect fraud or issues early with AI-driven anomaly detection",
          "Scale operations more effectively by automating critical decisions",
        ],
      },
      "meta-management": {
        title: "Computer Vision for Image & Video Analysis",
        icon: "👁️",
        description:
          "Leverage AI to Analyze Visual Data for Business Insights",
        longDescription:
          "Use AI to automate image and video analysis, enabling a wide range of applications from quality control to facial recognition. Our computer vision solutions empower businesses to extract valuable insights from visual data quickly and accurately.",
        features: [
          "Object detection and classification for automated quality assurance",
          "Facial recognition for secure access control and customer identification",
          "Automated tagging and metadata extraction from images and videos",
          "Integration with IoT devices for real-time visual monitoring",
        ],
        benefits: [
          "Automate manual inspection and reduce human error",
          "Enhance security with AI-powered facial and object recognition",
          "Gain insights from visual data to improve product quality and user experience",
          "Increase operational efficiency by analyzing large volumes of visual data automatically",
        ],
      },
      iPaaS: {
        title: "AI-Driven Personalization Engines",
        icon: "🎯",
        description:
          "Deliver Tailored Customer Experiences Powered by AI",
        longDescription:
          "Leverage AI to personalize your customer interactions, from tailored content recommendations to individualized product offerings. Our solutions enable real-time personalization based on user behavior and preferences, boosting engagement and loyalty.",
        features: [
          "Personalized content and product recommendations based on user behavior",
          "Real-time data analysis for adaptive marketing campaigns",
          "Customer segmentation and targeting with AI-powered insights",
          "Integration with eCommerce platforms for dynamic, personalized shopping experiences",
        ],
        benefits: [
          "Increase conversion rates and sales by delivering personalized experiences",
          "Boost customer satisfaction and loyalty with relevant, tailored offerings",
          "Improve marketing ROI by targeting the right customers with personalized campaigns",
          "Enhance user engagement with dynamic, adaptive content",
        ],
      },
    },
    informatica: {
      "informatica-cloud-data-integration": {
        title: "Cloud Data Integration",
        icon: "🔄",
        description:
          " Connect, Transform, and Deliver Data Across Cloud and On-Premise Systems",
        longDescription:
          "Streamline your data workflows with Informatica’s intelligent, cloud-native integration platform. Enable seamless connectivity across diverse data sources to power analytics, reporting, and operational systems",
        features: [
          "High-performance ETL/ELT for cloud and hybrid architectures",
          "Pre-built connectors for Salesforce, SAP, Oracle, and more",
          "Intelligent data mapping with AI-driven recommendations",
          "Real-time and batch processing support",
        ],
        benefits: [
          "Accelerate time-to-insight with automated data pipelines",
          "Eliminate data silos for a unified business view",
          "Reduce development time with reusable integration templates",
          "Enable agile, scalable data strategies for digital transformation",
        ],
      },
      "quality-governance": {
        title: "Data Quality & Governance",
        icon: "☁️",
        description:
          "Deliver Trusted, Clean, and Compliant Data for Confident Decision-Making",
        longDescription:
          "Ensure your data is complete, accurate, and aligned with governance standards. Informatica empowers organizations to build data trust, reduce risks, and improve business outcomes.",
        features: [
          "Data profiling, validation, cleansing, and deduplication",
          "Rule-based and AI-assisted data quality automation",
          "Data Privacy Management for GDPR, CCPA compliance",
          "Integration with Informatica Axon for unified governance",
        ],
        benefits: [
          "Increase business confidence with reliable, high-quality data",
          "Streamline compliance with automated governance workflows",
          "Reduce costly data errors across systems",
          "Support strategic initiatives with trustworthy data assets",
        ],
      },
      mdm: {
        title: "Master Data Management (MDM)",
        icon: "☁️",
        description:
          "Unify Customer, Product, and Supplier Data for a Single Source of Truth",
        longDescription:
          "Break down data silos and create a unified view of critical business entities. Informatica MDM ensures consistency and accuracy across customer, product, and supplier records.",
        features: [
          "Golden record creation with intelligent matching and merging",
          "Flexible data models for customer, product, and reference data",
          "Hierarchy and relationship management between records",
          "Integrated data stewardship workflows",
        ],
        benefits: [
          "Enhance customer experiences with accurate, consolidated profiles",
          "Streamline operations and reporting with clean, unified data",
          "Enable personalized marketing and improved sales effectiveness",
          "Reduce redundancy and inconsistencies across systems",
        ],
      },
      "meta-management": {
        title: "Data Catalog & Metadata Management",
        icon: "☁️",
        description:
          "Discover, Understand, and Govern Enterprise Data at Scale",
        longDescription:
          "Empower your teams to find and trust the right data with Informatica’s AI-powered data catalog. Gain end-to-end visibility into data assets,lineage, and usage.",
        features: [
          "Automated metadata scanning across databases, applications, and cloud platforms",
          "AI-driven data discovery with business glossary integration",
          "Data lineage tracking for compliance and impact analysis",
          "Collaboration tools for data stewardship and knowledge sharing",
        ],
        benefits: [
          "Speed up analytics with quick data discovery and access",
          "Strengthen compliance with full data lineage transparency",
          "Promote data literacy across business and technical teams",
          "Improve productivity with searchable, contextual data assets",
        ],
      },
      iPaaS: {
        title: "Cloud Application Integration (iPaaS)",
        icon: "☁️",
        description:
          "Accelerate Business Processes with Real-Time Data and Application Integration",
        longDescription:
          "Orchestrate data flows and automate business processes across cloud and on-premise applications. With Informatica’s iPaaS, businesses can build scalable, event-driven architectures.",
        features: [
          "Real-time API and event-driven integration capabilities",
          "Pre-built connectors for ERP, CRM, billing, and more",
          "Workflow automation with business process modeling",
          "Hybrid integration support for complex enterprise ecosystems",
        ],
        benefits: [
          "Enable faster decision-making with real-time data availability",
          "Automate manual tasks to reduce operational overhead",
          "Deliver connected customer and employee experiences",
          "Support agile digital initiatives with flexible, scalable integration",
        ],
      },
    },
    webdevelopment: {
      "custom-web": {
        title: "Custom Web Application Development",
        icon: "🖥️",
        description: "Tailored Web Applications for Unique Business Challenges",
        longDescription:
          "We design and develop secure, high-performance web applications that align with your business processes. From internal dashboards to large-scale customer portals, our solutions are built for flexibility and scale",
        features: [
          "Modern UI frameworks: React, Angular, Vue.js",
          "Robust backend: Node.js, Django, Spring Boot, .NET",
          "Database integration: PostgreSQL, MongoDB, MySQL",
          "Secure authentication & authorization",
        ],
        benefits: [
          "Custom solutions designed around your workflows",
          "Accelerate operations and improve user experience",
          "Fully scalable to grow alongside your business",
        ],
      },
      "e-commerce": {
        title: "E-commerce Development",
        icon: "⚙️",
        description: "Boost Sales with Seamless, Scalable Online Stores",
        longDescription:
          "We build high-performance e-commerce platforms optimized for sales and customer engagement. Whether using Shopify, Magento, or custom builds, we create secure, conversion-driven online stores.",
        features: [
          "Shopify, Magento, WooCommerce, custom solutions",
          "Headless commerce with React & Next.js",
          "Payment & shipping integration, order management",
          "SEO-optimized and mobile-first designs",
        ],
        benefits: [
          "Drive higher conversions with frictionless buying journeys",
          "Manage and scale product catalogs effortlessly",
          "Personalize experiences for better customer loyalty",
        ],
      },
      cms: {
        title: "CMS & Headless CMS Solutions",
        icon: "⚙️",
        description: "Flexible Content Management for Modern Digital Needs",
        longDescription:
          "Empower your teams with easy-to-manage content platforms. We build both traditional CMS and headless CMS solutions for lightning-fast, personalized content delivery across web, mobile, and IoT platforms.",
        features: [
          "WordPress, Drupal, Joomla",
          "Headless CMS: Strapi, Contentful, Sanity",
          "API-based delivery to web, mobile, and other channels",
          "Custom plugins and integrations",
        ],
        benefits: [
          "Simplify content updates for marketing and business teams",
          "Enhance site performance with decoupled architecture",
          "Easily connect with other systems and tools",
        ],
      },
      api: {
        title: "API & Microservices Development",
        icon: "⚙️",
        description:
          "Future-Proof Your Applications with API-First Architecture",
        longDescription:
          "We architect and build scalable APIs and microservices to ensure seamless system communication and future-proof extensibility. Ideal for complex applications and digital ecosystems",
        features: [
          "REST & GraphQL APIs",
          "Secure API authentication (OAuth2, JWT)",
          "Microservices architecture with Docker, Kubernetes",
          "Detailed documentation with Swagger/OpenAPI",
        ],
        benefits: [
          "Enable integrations with external systems",
          "Speed up development cycles with reusable APIs",
          "Build scalable, modular digital platforms",
        ],
      },
      seo: {
        title: "SEO & Digital Marketing",
        icon: "⚙️",
        description: "Maximize Online Visibility and Generate Qualified Leads",
        longDescription:
          "We help businesses grow online by driving organic traffic, optimizing search visibility, and launching ROI-focused digital marketing campaigns. Get found, get clicks, get conversions",
        features: [
          "SEO audits, keyword research, on-page & technical optimization",
          "Content strategy & link-building campaigns",
          "Google Ads, Meta Ads, LinkedIn Ads for targeted outreach",
          "Advanced tracking with GA4, GTM, and CRM integration",
        ],
        benefits: [
          "Improve organic rankings for relevant keywords",
          "Generate qualified leads with targeted content and ads",
          "Build a sustainable, profitable online presence",
        ],
      },
    },
    mobileappdevelopment: {
      native: {
        title: "Native Mobile App Development (iOS & Android)",
        icon: "📱",
        description: "Optimized Performance with Platform-Specific Mobile Apps",
        longDescription:
          "Leverage the full potential of iOS and Android platforms with fully native mobile apps. Built for speed, responsiveness, and seamless access to device features, native apps offer the best possible user experience.",
        features: [
          "Swift & Objective-C for iOS, Kotlin & Java for Android",
          "Access to device features: Camera, GPS, sensors, notifications",
          "High-performance graphics and animations",
          "Integration with platform-specific services (Apple Pay, Google Pay)",
        ],
        benefits: [
          "Superior performance and responsiveness",
          "Optimal UX aligned with platform guidelines",
          "Better access to advanced hardware features",
          "Enhanced user engagement and retention",
        ],
      },
      cross: {
        title: "Cross-Platform App Development (React Native / Flutter)",
        icon: "📱",
        description:
          "Build Once, Deploy Everywhere with Cross-Platform Frameworks",
        longDescription:
          "Save time and costs with cross-platform mobile apps. Using frameworks like React Native and Flutter, we deliver consistent performance and native-like experiences on both Android and iOS.",
        features: [
          "Single codebase for iOS and Android",
          "Native modules and plugins for hardware access",
          "Fast development cycles with hot-reloading",
          "UI consistency across platforms with Material and Cupertino design",
        ],
        benefits: [
          "Reduce development time and costs",
          "Reach a broader audience with simultaneous deployment",
          "Simplify ongoing maintenance and updates",
          "Launch MVPs faster for market testing",
        ],
      },
      design: {
        title: "Mobile UI/UX Design",
        icon: "📱",
        description:
          "Designing Intuitive, Beautiful, and Impactful Mobile Interfaces",
        longDescription:
          "We prioritize user experience and interaction design to ensure that every app we build is not only functional but also delightful to use. Our mobile UI/UX designs drive engagement, loyalty, and brand affinity",
        features: [
          "Interactive prototypes and wireframes for validation",
          "User research and persona-driven design",
          "Responsive, accessible, and intuitive interfaces",
          "Animation and micro-interaction design for enhanced engagement",
        ],
        benefits: [
          "Increase user adoption with intuitive navigation",
          "Boost user satisfaction and app ratings",
          "Stand out in the crowded app marketplace",
          "Drive higher conversions for key in-app actions",
        ],
      },
      backend: {
        title: "Backend & API Development for Mobile Apps",
        icon: "📱",
        description: "Power Your Mobile App with Reliable, Scalable Backends",
        longDescription:
          "Every mobile app needs a robust backend. We build secure, scalable API-driven architectures to handle your app’s logic, integrations, and data processing while ensuring smooth performance",
        features: [
          "RESTful & GraphQL APIs with Node.js, Django, or .NET Core",
          "Secure user authentication (OAuth2, JWT)",
          "Integration with third-party services (payment, analytics, CRM)",
          "Real-time data with WebSockets & push notifications",
        ],
        benefits: [
          "Ensure smooth performance under load",
          "Enable integrations with external business systems",
          "Simplify future updates and new feature rollouts",
          "Enhance security with modern best practices",
        ],
      },
      management: {
        title: "Mobile App Maintenance & Scaling",
        icon: "📱",
        description: "Keep Your App Secure, Updated, and Ready for Growth",
        longDescription:
          "Launching your app is just the beginning. We provide ongoing maintenance, support, and scaling strategies to ensure your mobile application stays secure, relevant, and optimized as your user base grows",
        features: [
          "Regular updates for OS compatibility (iOS/Android)",
          "Bug fixes, security patches, and performance optimizations",
          "App Store and Google Play submission management",
          "Monitoring with analytics dashboards and crash reporting tools",
        ],
        benefits: [
          "Ensure continued compatibility with evolving mobile ecosystems",
          "Protect user data with ongoing security updates",
          "Improve performance and reliability with proactive monitoring",
          "Support business growth with scalable architecture planning",
        ],
      },
    },
    salesforce: {
      "application-development": {
        title: "Implementation & Custom Development",
        icon: "💻",
        description: "Tailored Salesforce Solutions for Unique Business Needs",
        longDescription:
          "Empower your teams with custom-built Salesforce solutions designed specifically for your organization. Whether it's internal productivity tools or full-scale customer-facing portals, we bring your vision to life with precision.",
        features: [
          "Custom Objects designed for unique business processes",
          "Advanced Apex logic including asynchronous & batch processing",
          "Dynamic, responsive interfaces with Lightning Web Components (LWC)",
          "Internal apps to boost productivity and streamline workflows",
          "Fully branded Experience Cloud portals for customers and partners",
        ],
        benefits: [
          "Automate and simplify complex business workflows",
          "Drive operational efficiency with tailored solutions",
          "Deliver exceptional, personalized digital experiences",
          "Increase productivity with apps built for your unique needs",
        ],
      },
      "automation-optimization": {
        title: "Automation & Optimization",
        icon: "🔗",
        description:
          "Streamline Operations with Intelligent Salesforce Automation",
        longDescription:
          "Leverage the full power of Salesforce Flow and automation to simplify processes, enhance productivity, and deliver faster outcomes. From approvals to dynamic user journeys, we help you automate with confidence.",
        features: [
          "Record-triggered and scheduled flows for automated actions",
          "End-to-end flow orchestration for seamless process automation",
          "Approval processes with dynamic forms & guided screen flows",
          "Agentforce implementation for service teams and contact centers",
        ],
        benefits: [
          "Reduce manual tasks and operational bottlenecks",
          "Accelerate approvals and decision-making",
          "Deliver personalized, guided user experiences",
          "Improve agent efficiency with streamlined workflows",
        ],
      },
      "multicloud-industrycloud": {
        title: "Multi-Cloud & Industry Cloud Expertise",
        icon: "⚡",
        description:
          "Seamlessly Integrate Salesforce Clouds to Drive Growth and Customer Success",
        longDescription:
          "Unlock the power of integrated Salesforce clouds to accelerate your business growth and customer engagement. Leverage the best of Sales, Service, Experience, Marketing, Commerce, Revenue, and MuleSoft platforms to create seamless, end-to-end processes tailored to your industry needs.",
        features: [
          "Sales Cloud: Intelligent lead routing, opportunity lifecycle management, and accurate forecasting",
          "Service Cloud: Robust case management, omnichannel support, and CTI telephony integration",
          "Experience Cloud: Branded customer portals and collaborative partner communities",
          "Pardot / Marketing Cloud: Automated campaign workflows and predictive engagement scoring",
          "Commerce Cloud: Scalable, personalized e-commerce experiences across channels",
          "Revenue Cloud: Streamlined quote-to-cash process with subscription and billing management",
          "MuleSoft Anypoint Platform: Full API lifecycle management for connected enterprise integration",
        ],
        benefits: [
          "Streamline sales cycles and improve pipeline visibility",
          "Enhance customer service with unified omnichannel experiences",
          "Foster stronger customer and partner relationships through personalized portals",
          "Boost marketing ROI with data-driven automation and engagement insights",
          "Deliver seamless, scalable commerce experiences to drive revenue growth",
          "Optimize revenue operations with end-to-end billing and subscription management",
          "Connect disparate systems for agile, scalable digital transformation",
        ],
      },
      "integration-apimanagement": {
        title: "Integration & API Management",
        icon: "☁️",
        description:
          "Powerful API Management to Drive Seamless Enterprise Connectivity",
        longDescription:
          "Seamlessly connect your Salesforce ecosystem with legacy and cloud systems to ensure smooth data flow and operational efficiency. Leverage powerful middleware and integration tools to unify your business applications and enhance real-time connectivity.",
        features: [
          "REST & SOAP API integrations with legacy and cloud platforms",
          "Middleware expertise: MuleSoft, Boomi, Informatica, AWS Lambda",
          "Third-party tool integrations including ERP, billing, and support systems",
          "Secure connections using External Services & Named Credentials",
        ],
        benefits: [
          " Enable real-time, reliable data exchange across diverse systems",
          "Simplify complex integration landscapes with scalable middleware solutions",
          "Improve operational agility by connecting core business applications",
          "Ensure secure, governed access to external services and APIs",
          "Accelerate digital transformation with seamless system interoperability",
        ],
      },
      "security-devops": {
        title: "Security, Governance & DevOps",
        icon: "💼",
        description:
          "Secure, Govern, and Scale Your Salesforce Environment with Confidence",
        longDescription:
          "Protect your Salesforce environment with enterprise-grade security and governance, while accelerating innovation through modern DevOps practices. From user access control to automated deployments, we ensure your platform is secure, compliant, and built for continuous delivery",
        features: [
          "Fine-grained access with Role Hierarchies, Sharing Rules, and Shield Encryption",
          "Secure authentication with SSO, MFA, and OAuth2-based connected apps",
          "Scalable CI/CD pipelines using Salesforce DX, GitHub Actions, and Copado",
          "Test automation frameworks and sandbox seeding for reliable releases",
        ],
        benefits: [
          "Strengthen platform security and meet regulatory compliance standards",
          "Streamline authentication while enhancing user experience",
          "Speed up release cycles with automated, reliable deployment pipelines",
          "Reduce risks with automated testing and well-seeded environments",
          "Enable scalable, secure, and efficient Salesforce development practices",
        ],
      },
      reports: {
        title: "Reporting, Analytics & AI",
        icon: "🛡️",
        description:
          "Smarter Reporting, Predictive Analytics, and Clean Data for Confident Decisions",
        longDescription:
          "Transform your data into actionable insights with powerful reporting tools and AI-driven analytics. From intuitive dashboards to predictive intelligence, we help you unlock the full potential of your Salesforce data for smarter, faster decision-making.",
        features: [
          "Dynamic, interactive dashboards and custom report types tailored to your KPIs",
          "Advanced analytics with CRM Analytics (formerly Tableau CRM) & Einstein Discovery",
          "Data cleansing, deduplication, and enrichment for accurate reporting",
          "Seamless integration with Power BI, Google Data Studio, and Snowflake",
        ],
        benefits: [
          "Empower teams with real-time visibility into key business metrics",
          "Make smarter decisions with predictive AI-driven analytics",
          "Ensure data accuracy for trusted, impactful reporting",
          "Consolidate data from multiple sources for a unified view of business performance",
          "Drive strategic growth with insight-driven decision frameworks",
        ],
      },
    },
    pega: {
      "informatica-cloud-data-integration": {
        title: "Pega BPM (Business Process Management) Implementation",
        icon: "☁️",
        description:
          "Automate and Optimize Business Processes with Pega BPM",
        longDescription:
          "Utilize Pega’s Business Process Management (BPM) capabilities to streamline workflows, automate processes, and enhance collaboration across teams. With Pega, businesses can create end-to-end automated workflows that reduce inefficiencies and improve operational outcomes",
        features: [
          "End-to-end process automation for sales, customer service, and HR",
          "Drag-and-drop process modeling with Pega's visual interface",
          "Intelligent task routing and real-time process monitoring",
          "Integration with existing business systems and applications",
        ],
        benefits: [
          "Increase operational efficiency by automating manual tasks",
          "Reduce process bottlenecks and improve workflow consistency",
          "Empower teams to focus on higher-value activities while Pega handles routine tasks",
          "Accelerate time-to-market by building scalable workflows quickly",
        ],
      },
      "quality-governance": {
        title: "Pega CRM (Customer Relationship Management)",
        icon: "☁️",
        description:
          "Create Seamless Customer Journeys with Pega CRM",
        longDescription:
          "Pega CRM provides businesses with the tools to manage customer interactions across all channels. From personalized service to omnichannel marketing, our Pega-powered CRM solutions create a unified, seamless experience for customers and teams alike.",
        features: [
          "Unified customer profiles across sales, service, and marketing",
          "Case management for efficient customer support and resolution",
          "Omnichannel capabilities for managing customer communications",
          "AI-driven insights for sales forecasting and customer behavior prediction",
        ],
        benefits: [
          "Deliver a seamless customer experience across every touchpoint",
          "Improve customer satisfaction and loyalty with personalized support",
          "Increase sales efficiency with AI-powered lead scoring and opportunity management",
          "Enhance team collaboration with centralized customer information",
        ],
      },
      mdm: {
        title: "Pega AI & Decisioning",
        icon: "☁️",
        description:
          "Description: Make Smarter Decisions with Pega’s AI & Decisioning Solutions",
        longDescription:
          "Leverage Pega's AI-powered decision engine to drive smarter, automated decisions at scale. Whether it's customer onboarding, loan approvals, or dynamic pricing, Pega’s AI and decisioning tools help businesses optimize processes and improve outcomes.",
        features: [
          "Real-time decisioning based on customer data and behavior",
          "AI-powered rules engine for automating complex decisions",
          "Adaptive analytics for continuous optimization of decision models",
          "Integration with customer data sources for context-driven decision-making",
        ],
        benefits: [
          "Automate decision-making to increase speed and reduce human error",
          "Make data-driven decisions that adapt in real-time to market conditions",
          "Improve business agility by optimizing decision-making across processes",
          "Increase customer satisfaction with faster, more relevant responses",
        ],
      },
      "meta-management": {
        title: "Pega Robotic Process Automation (RPA)",
        icon: "☁️",
        description:
          "Automate Repetitive Tasks with Pega RPA",
        longDescription:
          "Utilize Pega’s RPA tools to automate repetitive, rule-based tasks across your business. Whether it’s processing invoices, managing inventory, or handling customer requests, RPA can help reduce errors and increase productivity.",
        features: [
          "Automate rule-based tasks like data entry, invoicing, and customer queries",
          "Integrate Pega RPA with existing systems and applications for seamless automation",
          "Robotic workflows that mimic human actions for greater efficiency",
          "Centralized RPA management for tracking and monitoring bot performance",
        ],
        benefits: [
          "Free up valuable time by automating routine tasks",
          "Improve accuracy and reduce operational costs with automated workflows",
          "Scale operations without the need for additional manual resources",
          "Enhance customer service with quicker, error-free processing",
        ],
      },
    },
    snowflake: {
      "informatica-cloud-data-integration": {
        title: "Data Warehousing",
        icon: "☁️",
        description:
          "Modern Data Warehousing for All Your Data",
        longDescription:
          "Snowflake's Data Cloud powers a modern data warehouse that is faster, easier to use, and far more flexible than traditional data warehouse offerings. It handles all your data—structured and semi-structured—in one place.",
        features: [
          "Separate compute and storage for unlimited scalability",
          "Support for structured and semi-structured data (JSON, Avro, Parquet, etc.)",
          "Near-zero maintenance with auto-scaling and auto-suspend",
          "Secure data sharing across regions and clouds"
        ],
        benefits: [
          "Eliminate data silos with a single source of truth",
          "Reduce costs by paying only for the storage and compute you use",
          "Accelerate analytics with instant elasticity",
          "Simplify data management with a fully managed service"
        ],
      },
      "quality-governance": {
        title: "Data Engineering",
        icon: "☁️",
        description:
          "Simplify Data Pipelines and Transformation",
        longDescription:
          "Snowflake simplifies data engineering with a unified platform for data ingestion, transformation, and pipeline orchestration. Build reliable and scalable data pipelines with standard SQL and powerful features like Streams and Tasks.",
        features: [
          "Continuous data ingestion with Snowpipe",
          "Native support for SQL, Python, Java, and Scala",
          "Automated pipeline orchestration with Streams and Tasks",
          "Zero-copy cloning for instant dev/test environments"
        ],
        benefits: [
          "Reduce pipeline complexity and maintenance overhead",
          "Accelerate data availability for downstream analytics",
          "Improve data quality and reliability",
          "Enable collaboration between data engineers and analysts"
        ],
      },
      mdm: {
        title: "Data Sharing & Collaboration",
        icon: "☁️",
        description:
          "Securely Share Data Across Your Ecosystem",
        longDescription:
          "Snowflake's unique architecture enables secure, real-time data sharing without moving or copying data. Share live data with partners, customers, and other business units instantly and securely.",
        features: [
          "Live data sharing without ETL or file transfers",
          "Cross-region and cross-cloud data replication",
          "Data Marketplace to discover and monetize data",
          "Row-level security and governance controls"
        ],
        benefits: [
          "Eliminate data latency and staleness",
          "Reduce security risks associated with data movement",
          "Create new revenue streams with data monetization",
          "Foster collaboration and innovation with external partners"
        ],
      },
      "meta-management": {
        title: "Data Science & ML",
        icon: "☁️",
        description:
          "Accelerate Machine Learning Workflows",
        longDescription:
          "Snowflake provides a robust foundation for data science and machine learning. With Snowpark, data scientists can use their preferred languages and libraries to process data directly in Snowflake, ensuring performance and security.",
        features: [
          "Snowpark for Python, Java, and Scala integration",
          "Integration with popular ML frameworks (TensorFlow, PyTorch, etc.)",
          "Scalable compute for model training and inference",
          "Streamlit integration for building interactive data apps"
        ],
        benefits: [
          "Accelerate model development and deployment",
          "Leverage the full power of Snowflake's performance for ML workloads",
          "Ensure data security and governance throughout the ML lifecycle",
          "Democratize data insights with custom applications"
        ],
      },
    },
  };

  const [uiName, setuiName] = useState({
    aisolutions: {
      title: "AI Solutions",
      description:
        "At Genufy, we deliver cutting-edge AI development services that transform your business operations, optimize decision-making, and enhance customer experiences. From machine learning models to advanced data analytics, we design intelligent solutions that drive innovation and foster sustainable growth. Whether you're looking to integrate AI into existing systems or develop custom AI-driven applications, our team tailors every solution to meet your unique business needs.",
    },
    salesforce: {
      title: "Salesforce ",
      description:
        "At Genufy, we provide full-spectrum Salesforce services designed to maximize ROI, optimize customer engagement, and support enterprise-grade scalability. From greenfield implementations to complex multi-org strategies, we architect robust CRM solutions tailored to your business goals.",
    },
    informatica: {
      title: "Informatica ",
      description:
        "Informatica empowers organizations to connect, cleanse, govern, and manage data across cloud, hybrid, and on-premise environments. From data integration and quality to master data management and real-time API orchestration, we help businesses unlock the full potential of their data. With trusted, unified, and AI-powered data, you can drive smarter decisions, accelerate innovation, and achieve compliance with ease.",
    },
    webdevelopment: {
      title: "Web Development ",
      description:
        "We craft tailored web solutions that drive business growth. From full-stack web apps to high-converting e-commerce stores, our expertise ensures fast, secure, and impactful online experiences for your customers.",
    },
    mobileappdevelopment: {
      title: "Mobile App Development ",
      description:
        "We build high-performance mobile applications tailored to your business needs. Whether it’s iOS, Android, or cross-platform, our apps deliver seamless user experiences, deep integrations, and measurable business results.",
    },
    pega: {
      title: "Pega",
      description:
        "At Genufy, we specialize in delivering Pega-based solutions that streamline processes, improve operational efficiency, and elevate customer engagement. From implementing Pega BPM and CRM platforms to developing sophisticated multi-channel applications, we create customized solutions that support your enterprise's digital transformation. Our expert team designs and integrates Pega systems that accelerate business outcomes and provide a scalable framework for future growth.",
    },
    snowflake: {
      title: "Snowflake",
      description:
        "Genufy helps you unlock the full potential of the Snowflake Data Cloud. We provide end-to-end Snowflake services, from migration and implementation to data engineering and analytics. Our experts help you build a scalable, secure, and cost-effective data foundation that drives business value.",
    },
  });

  // Simulate URL routing
  const handleServiceChange = (serviceKey) => {
    if (service && service[serviceKey]) {
      setSubService(service[serviceKey]);
    }
  };

  const service = services[currentService];
  const [subService, setSubService] = useState(null);
  const [expandedServices, setExpandedServices] = useState({});
  // All services start collapsed

  // Initialize subService and expanded states when service changes
  useEffect(() => {
    if (service) {
      const firstSubServiceKey = Object.keys(service)[0];
      setSubService(service[firstSubServiceKey]);
      // Initialize all services as collapsed
      const initialExpanded = Object.keys(service).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      setExpandedServices(initialExpanded);
    }
  }, [currentService]);

  if (!currentService || !services[currentService] || !subService) {
    return null; // or return a loading spinner
  }

  const ServiceContent = ({ subService }) => {
    return (
      <div className="">
        {/* Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {subService.description}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {subService.longDescription}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Key Features
            </h3>
            <ul className="space-y-2">
              {subService.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Business Benefits
            </h3>
            <ul className="space-y-2">
              {subService.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lightning Development Section (for applicable services) */}
        {["application-development", "field-service-lightning"].includes(
          subService
        ) && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Lead with Lightning Development
              </h3>
              <p className="text-gray-700 mb-4">
                In Salesforce environment with every release, the list of
                Lightning-exclusive features grows larger. Lightning Experience is
                the future of Salesforce enhancements. Organizations that are not
                adopting Lightning are falling behind and missing out on the
                innovations, user- friendliness, and collaboration that allow
                Lightning users to connect with their prospects and customers on a
                strategic level, resulting in better customer relationships.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  "Overview",
                  "Examine",
                  "Proposal",
                  "Implementation",
                  "Adoption",
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm font-medium text-gray-700">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Ready to Build Something Custom ?
          </h3>
          <p className="text-gray-600 mb-4">
            Let’s discuss how custom development can transform your
            {uiName[currentService].title} experience.
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all lg:px-8"
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      {/* Header */}
      <div className="text-center  lg:pt-30 pt-11 pb-11 lg:pb-15 px-4">
        <h1
          className="lg:text-[40px] text-3xl font-bold leading-[50px] mb-2 lg:mb-12"
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          {uiName[currentService].title}
        </h1>
        <div className="lg:text-xl lg:w-[65%] m-auto text-sm leading-[26px] lg:leading-[50px] text-center font-medium">
          {uiName[currentService].description}
        </div>
        {/* {currentService === "salesforce" && (
          <div className="flex justify-center mt-6">
            <img
              src={salesforceImage}
              alt="Salesforce Page Banner"
              className="w-[400px] rounded-xl shadow-lg"
            />
          </div>
        )} */}

        <img
          src={topo}
          alt="bg-img"
          className="hidden lg:block absolute left-0 bottom-0 top-50 w-[250px]"
        />
        <img
          src={topoRight}
          alt="bg-img"
          className="hidden lg:block absolute right-0 bottom-0 top-100 w-[250px]"
        />
      </div>

      <div className="mx-auto lg:px-8 lg:mt-10 px-4">
        <div className="flex items-center">
          <img
            src={sicon}
            alt="Icon"
            className="lg:w-[84px] ml-5 lg:ml-0 lg:mr-7 mr-7 w-8"
          />
          <h2 className="text-3xl lg:text-5xl font-bold inline-block pb-1">
            Success & Managed Services
          </h2>
        </div>
        <div className="lg:hidden mt-10">
          {Object.entries(service).map(([key, svc]) => (
            <div key={key} className="mb-4">
              <button
                // onClick={(e) => {
                //   if (subService && subService.title === svc.title) {
                //     console.log(expandedServices);
                //     // Toggle only this service's visibility
                //     setExpandedServices((prev) => ({
                //       ...prev,
                //       [key]: !prev[key],
                //     }));
                //   } else {
                //     setExpandedServices((prev) => ({
                //       ...prev,
                //       [key]: !prev[key],
                //     }));
                //     handleServiceChange(key);
                //   }
                // }}
                onClick={(e) => {
                  e.stopPropagation(); // prevent triggering outside click
                  setExpandedServices((prev) => {
                    // Close all, then toggle only the clicked one
                    const newState = Object.keys(prev).reduce((acc, k) => {
                      acc[k] = false;
                      return acc;
                    }, {});
                    newState[key] = !prev[key];
                    return newState;
                  });
                  handleServiceChange(key);
                }}
                className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-all drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[#ABFA50] to-[#32EAD0] rounded`}
              >
                <span className="font-bold">{svc.title}</span>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={
                        expandedServices[key] ? "M5 15l7-7 7 7" : "M5 9l7 7 7-7"
                      }
                      stroke="#1F2937"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              {svc &&
                svc.title &&
                (expandedServices[key] === undefined ||
                  expandedServices[key]) && (
                  <div
                    className="mt-2 p-4 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.25)]"
                  // onClick={() =>
                  //   setExpandedServices((prev) => ({
                  //     ...prev,
                  //     [key]: !(prev[key] === undefined ? true : prev[key]),
                  //   }))
                  // }
                  >
                    <ServiceContent subService={subService} />
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mt-20">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.25)] p-6 sticky top-25">
              <nav className="flex flex-col gap-10">
                {Object.entries(service).map(([key, svc]) => (
                  <button
                    key={key}
                    onClick={() => handleServiceChange(key)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all ${subService.title === svc.title
                      ? "drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[#ABFA50] to-[#32EAD0] rounded"
                      : "shadow-[0_0_10px_rgba(0,0,0,0.25)] hover:bg-gray-50 text-gray-700"
                      }`}
                  >
                    <span className="font-bold">{svc.title}</span>
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="48" height="48" rx="8" />
                        <path
                          d="M14 10L34 24L14 38L18 24L14 10Z"
                          fill={` ${subService.title === svc.title ? "white" : "#1F2937"
                            }`}
                          stroke="#1F2937"
                          width="2"
                          linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="lg:col-span-3 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="">
              {/* Service Header */}

              {/* Service Content */}
              <div className="p-8">
                {/* Overview */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {subService.description}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {subService.longDescription}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {subService.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Business Benefits
                    </h3>
                    <ul className="space-y-2">
                      {subService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Lightning Development Section (for applicable services) */}
                {[
                  "application-development",
                  "field-service-lightning",
                ].includes(subService) && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Lead with Lightning Development
                      </h3>
                      <p className="text-gray-700 mb-4">
                        In Salesforce environment with every release, the list of
                        Lightning-exclusive features grows larger. Lightning
                        Experience is the future of Salesforce enhancements.
                        Organizations that are not adopting Lightning are falling
                        behind and missing out on the innovations, user-
                        friendliness, and collaboration that allow Lightning users
                        to connect with their prospects and customers on a
                        strategic level, resulting in better customer
                        relationships.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {[
                          "Overview",
                          "Examine",
                          "Proposal",
                          "Implementation",
                          "Adoption",
                        ].map((step, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <span className="text-green-500">✓</span>
                            <span className="text-sm font-medium text-gray-700">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* CTA Section */}
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ready to Build Something Custom ?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Let’s discuss how custom development can transform your{" "}
                    {uiName[currentService].title} experience.
                  </p>
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Contact Our Experts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {currentService === "salesforce" && (
          <div className="flex justify-center my-10">
            <img
              src={sfcertificate}
              alt="Salesforce Section Banner"
              className="w-full max-w-6xl rounded-xl shadow-lg"
            />
          </div>
        )}
        <div id="contact" className="home-contact px-6 mt-15 lg:mt-25">
          <div className="flex items-start">
            <div className="mt-1">
              <div className="flex items-center justify-center lg:justify-start">
                <img
                  src={sicon}
                  alt="service-icon"
                  className="lg:mr-8 mr-4 w-[32px] h-[32px] lg:mr-8 lg:w-auto lg:h-auto"
                />
                <div>
                  <div className="font-bold text-2xl leading-[29px] lg:text-[32px] lg:leading-[39px]">
                    Let’s Talk
                  </div>
                  <div className="font-bold text-3xl leading-[37px] lg:text-5xl lg:leading-[59px]">
                    Contact Us Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default ServicePage;
