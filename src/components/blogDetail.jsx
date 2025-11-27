// import { NavLink } from "react-router-dom";
// import informsales from "../assets/img/Infor&sales.webp";
// import bgline from "../assets/img/common-underline.svg";

// function FirstBlog() {
//   return (
//     <>
//       <div>
//         <img src={informsales} alt="blog1" />
//       </div>
//       <div className="flex">
//         <div>
//         <h1 className="">Salesforce Completes Acquisition of Informatica</h1>
//         <img
//                           src={bgline}
//                           alt="border-line"
//                           className="w-[50px] h-[4px] lg:w-auto"
//                         />
//                         </div>
//         <p className="">
//           With Informatica, we will deliver a governed and complete data
//           platform that powers more intelligent, contextual, and autonomous
//           experiences across Agentforce 360 – the trusted system connecting
//           humans and AI agents in the enterprise,” said Steve Fisher, President
//           and Chief Product Officer, Salesforce.
//         </p>
//       </div>
//     </>
//   );
// }

// export default FirstBlog;
// src/pages/BlogDetail.jsx
// import React from "react";
// import { useParams, Link, Route } from "react-router-dom";
// import bgline from "../assets/img/common-underline.svg";
// import banner from "../assets/img/Infor&sales.webp";

// const posts = {
//   firstblog: {
//     title: "Salesforce Completes Acquisition of Informatica",
//     excerpt:
//       "With Informatica, we will deliver a governed and complete data platform that powers more intelligent, contextual, and autonomous experiences across Agentforce 360 – the trusted system connecting humans and AI agents in the enterprise,” said Steve Fisher, President and Chief Product Officer, Salesforce",
//     excerpt1:
//     "SAN FRANCISCO, CA — November 18, 2025 — Salesforce (NYSE: CRM), the world’s #1 AI CRM, today announced it has completed its acquisition of Informatica, a leader in enterprise AI-powered cloud data management. The close of the acquisition brings Informatica’s rich data catalog, integration, governance, quality and privacy, metadata management, and Master Data Management (MDM) services to the Salesforce platform, establishing a unified and comprehensive data foundation for agentic AI — and enabling AI agents to operate safely, responsibly, and at scale across the modern enterprise.",
//     excerpt2:"Strengthening the Entire Agentforce 360",
//     excerpt3:"The acquisition significantly enhances Salesforce’s platform by:",
//     content1:[
//       "Achieving Data Clarity with Data 360: Informatica will strengthen Data 360, ensuring data from across organizations is not only unified, but clear, trusted, and actionable.",
//       "Delivering Complete Integration with MuleSoft: MuleSoft, a leader in application integration and API management, combined with Informatica’s advanced data integration and governance capabilities will create a comprehensive, end-to-end integration offering that empowers customers to unlock all enterprise data and systems for the AI era.",
//       "Elevating Agentforce 360 Platform: Informatica and Salesforce together will provide a critical data foundation for autonomous AI agents to interpret and act on trusted data.",
//       "Context-Rich Insights for Tableau: Tableau users will benefit from richer, context-driven insights thanks to a more accessible and better-understood data landscape.",
//     ],
//     description:
//     "Additionally, the acquisition will build on Salesforce’s unique metadata advantage — the objects, fields, and relationships that define the Salesforce ecosystem, which has helped Agentforce deliver accurate, context-aware AI responses. Informatica provides an even richer, enterprise-wide view of metadata, pulling in context and lineage across every system, not just Salesforce. This wider, unified metadata foundation will deliver even more accurate, explainable, and trusted AI responses — helping customers scale AI with confidence across every corner of their business.",
//     content: [
//       {
//         heading: "Informatica to Scale and Continue Its Mission",
//         para:
//           "As part of Salesforce, Informatica will continue its mission to help organizations connect, manage, and unify their AI-ready data. ...",
//         para1:
//         "“Joining forces with Salesforce enables us to drastically accelerate our mission as the ‘Switzerland’ of AI-powered data management to help organizations unlock the full value of their data and AI,” said Amit Walia, CEO of Informatica. “By integrating Informatica’s data management capabilities and ecosystem integrations directly into the Agentforce 360 platform, businesses around the world can drive innovation, efficiency and growth by leveraging a single vendor that unites applications, trusted data and AI agents.”"
//       },
//     ],
//   },
//   secondblog: {
//     title: "DevInspector Completes Acquisition of Informatica",
//     excerpt:
//       "With Informatica, we will deliver a governed and complete data platform that powers more intelligent, contextual, and autonomous experiences across Agentforce 360.",

//     content: [
//       {
//         heading: "Informatica to Scale and Continue Its Mission",
//         para:
//           "As part of Salesforce, Informatica will continue its mission to help organizations connect, manage, and unify their AI-ready data. ..."
//       },
//       {
//         heading: "Achieving Data Clarity with Data 360",
//         para:
//           "Informatica will strengthen Data 360, ensuring data from across organizations is unified, trusted and actionable..."
//       }
//     ],
//   },
//   thirdblog: {
//     title: "Roles Completes Acquisition of Informatica",
//     excerpt:
//       "With Informatica, we will deliver a governed and complete data platform that powers more intelligent, contextual, and autonomous experiences across Agentforce 360.",

//     content: [
//       {
//         heading: "Informatica to Scale and Continue Its Mission",
//         para:
//           "As part of Salesforce, Informatica will continue its mission to help organizations connect, manage, and unify their AI-ready data. ..."
//       },
//       {
//         heading: "Achieving Data Clarity with Data 360",
//         para:
//           "Informatica will strengthen Data 360, ensuring data from across organizations is unified, trusted and actionable..."
//       }
//     ],
//   },
// };

// function BlogDetail() {
//   const { slug } = useParams();
//   const post = posts[slug];

//   return (
//     <main className="max-w-6xl mx-auto px-4 py-10">
//       <header className="mb-8">
//         <div className="w-full rounded-xl overflow-hidden shadow-xl">
//           <img src={banner} alt={post.title} className="w-full h-56 lg:h-72 object-cover" />
//         </div>
//       </header>

//       <section className="mb-8 lg:flex lg:gap-8 lg:items-start">
//         <div className="lg:flex-1">
//           <h1 className="text-2xl lg:text-4xl font-extrabold text-green-500">{post.title}</h1>
//           <img src={bgline} alt="underline" className="w-[70px] h-1 mt-3" />
//           </div>
//           <p className="mt-6 text-gray-700 leading-relaxed">{post.excerpt}</p>
//         </section>

//           <p className="mt-6 text-gray-700 leading-relaxed">{post.excerpt1}</p>

//           <p className="text-2xl lg:text-4xl font-extrabold text-blue-500">{post.excerpt2}</p>
//           <p className="text-xl text-blue-500">{post.excerpt3}</p>
//           <p className="">{post.content1}</p>
//           <p className="">{post.description}</p>

//       <article className="prose lg:prose-lg max-w-none">
//         {post.content.map((block, idx) => (
//           <section key={idx}>
//             <h3>{block.heading}</h3>
//             <p>{block.para}</p>
//             <p>{block.para1}</p>
//           </section>
//         ))}
//       </article>

//       <div className="mt-12 text-center">
//         <Link to="/blog" className="text-[#0D0C41] font-semibold underline">
//           ← Back to Blog
//         </Link>
//       </div>
//     </main>
//   );
// }

// export default BlogDetail;

import React from "react";
import { useParams, Link } from "react-router-dom";
import bgline from "../assets/img/common-underline.svg";
import banner from "../assets/img/Infor&sales.webp";

const posts = {
  firstblog: {
    title: "Salesforce Completes Acquisition of Informatica",
    excerpt:
      "With Informatica, we will deliver a governed and complete data platform that powers more intelligent, contextual, and autonomous experiences across Agentforce 360 – the trusted system connecting humans and AI agents in the enterprise,” said Steve Fisher, President and Chief Product Officer, Salesforce.",
    excerpt1:
      "SAN FRANCISCO, CA — November 18, 2025 — Salesforce (NYSE: CRM), the world’s #1 AI CRM, today announced it has completed its acquisition of Informatica, a leader in enterprise AI-powered cloud data management. The close of the acquisition brings Informatica’s rich data catalog, integration, governance, quality and privacy, metadata management, and Master Data Management (MDM) services to the Salesforce platform, establishing a unified and comprehensive data foundation for agentic AI — and enabling AI agents to operate safely, responsibly, and at scale across the modern enterprise.",
    excerpt2: "Strengthening the Entire Agentforce 360",
    excerpt3:
      "The acquisition significantly enhances Salesforce’s platform by:",
    content1: [
      "Achieving Data Clarity with Data 360: Informatica will strengthen Data 360, ensuring data from across organizations is not only unified, but clear, trusted, and actionable.",
      "Delivering Complete Integration with MuleSoft: MuleSoft, a leader in application integration and API management, combined with Informatica’s advanced data integration and governance capabilities will create a comprehensive, end-to-end integration offering that empowers customers to unlock all enterprise data and systems for the AI era.",
      "Elevating Agentforce 360 Platform: Informatica and Salesforce together will provide a critical data foundation for autonomous AI agents to interpret and act on trusted data.",
      "Context-Rich Insights for Tableau: Tableau users will benefit from richer, context-driven insights thanks to a more accessible and better-understood data landscape.",
    ],
    description:
      "Additionally, the acquisition will build on Salesforce’s unique metadata advantage — the objects, fields, and relationships that define the Salesforce ecosystem, which has helped Agentforce deliver accurate, context-aware AI responses. Informatica provides an even richer, enterprise-wide view of metadata, pulling in context and lineage across every system, not just Salesforce. This wider, unified metadata foundation will deliver even more accurate, explainable, and trusted AI responses — helping customers scale AI with confidence across every corner of their business.",
    content: [
      {
        heading:
          "Informatica to Scale and Continue Its Mission as a Trusted Leader in Data Management as Part of Salesforce",
        para: "As part of Salesforce, Informatica will continue its mission to help organizations connect, manage, and unify their AI-ready data. Informatica will also continue to support and integrate its AI-powered data management solution with its broad ecosystem of partners. Salesforce will rapidly integrate Informatica’s technology stack — including data integration, quality, governance, and unified metadata for Agentforce, and a single data pipeline with MDM on Data 360 — seamlessly embedding this system of understanding and its benefits into the Salesforce ecosystem.",
        para1:
          "“Joining forces with Salesforce enables us to drastically accelerate our mission as the ‘Switzerland’ of AI-powered data management to help organizations unlock the full value of their data and AI,” said Amit Walia, CEO of Informatica. “By integrating Informatica’s data management capabilities and ecosystem integrations directly into the Agentforce 360 platform, businesses around the world can drive innovation, efficiency and growth by leveraging a single vendor that unites applications, trusted data and AI agents.”",
      },
    ],
  },
  secondblog: {
    title: "DevInspector Completes Acquisition of Informatica",
    excerpt:
      "With Informatica, we will deliver a governed and complete data platform that powers more intelligent, contextual, and autonomous experiences across Agentforce 360.",
    content: [
      {
        heading: "Informatica to Scale and Continue Its Mission",
        para: "As part of Salesforce, Informatica will continue its mission to help organizations connect, manage, and unify their AI-ready data. ...",
      },
      {
        heading: "Achieving Data Clarity with Data 360",
        para: "Informatica will strengthen Data 360, ensuring data from across organizations is unified, trusted and actionable...",
      },
    ],
  },
  thirdblog: {
    title: "Roles Completes Acquisition of Informatica",
    excerpt:
      "With Informatica, we will deliver a governed and complete data platform that powers more intelligent, contextual, and autonomous experiences across Agentforce 360.",
    content: [
      {
        heading: "Informatica to Scale and Continue Its Mission",
        para: "As part of Salesforce, Informatica will continue its mission to help organizations connect, manage, and unify their AI-ready data. ...",
      },
      {
        heading: "Achieving Data Clarity with Data 360",
        para: "Informatica will strengthen Data 360, ensuring data from across organizations is unified, trusted and actionable...",
      },
    ],
  },
};

function BlogDetail() {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Post not found</h1>
        <Link
          to="/blog"
          className="mt-4 inline-block text-emerald-600 font-semibold"
        >
          ← Back to Blog
        </Link>
      </main>
    );
  }

  const relatedPosts = Object.entries(posts).filter(([key]) => key !== slug);

  // helper to render bold before first colon or semicolon
  const renderBoldBeforeDelimiter = (text) => {
    if (!text || typeof text !== "string") return text;

    const match = text.match(/^(.+?)([:;])\s*(.*)$/);

    if (!match) return text;

    const [, left, delimiter, right] = match;

    return (
      <>
        <strong>{left + delimiter}</strong> {right}
      </>
    );
  };

  return (
    <div>
      <div className="w-full rounded-4xl overflow-hidden shadow-xl">
        <img
          src={banner}
          alt={post.title}
          className="w-full h-100 object-cover"
        />
      </div>
      <main className="max-w-6xl mx-auto px-4 lg:px-0 py-10 py-4 lg:py-2 space-y-16">
        {/* HERO SECTION */}
        <section className="grid gap-8 lg:grid-cols-[2fr,2fr] items-center">
          {/* <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            {post.category || "Blogs"}
          </span> */}

          <div className=" flex">
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                {post.title}
              </h1>
              <img src={bgline} alt="underline" className="w-[90px] h-1 mt-2" />
            </div>
            {post.excerpt && (
              <p className="mt-4 text-slate-700 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
          {post.excerpt1 && (
            <p className="mt-3 text-slate-700 leading-relaxed">
              {post.excerpt1}
            </p>
          )}
        </section>

        {/* BODY + SIDEBAR */}
        <section className="grid gap-12 lg:grid-cols-[2fr,1.2fr] items-start">
          {/* LEFT COLUMN: MAIN ARTICLE */}
          <article className="space-y-8">
            {post.excerpt2 && (
              <div className="space-y-3">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-emerald-600">
                  {post.excerpt2}
                </h2>
                {post.excerpt3 && (
                  <p className="font-semibold text-slate-900">
                    {post.excerpt3}
                  </p>
                )}

                {/* {Array.isArray(post.content1) && (
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
                  {post.content1.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          )} */}
                {Array.isArray(post.content1) && (
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
                    {post.content1.map((item, idx) => (
                      <li key={idx}>{renderBoldBeforeDelimiter(item)}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {post.description && (
              <p className="text-slate-700 leading-relaxed">
                {post.description}
              </p>
            )}

            <div className="space-y-8">
              {post.content?.map((block, idx) => (
                <section key={idx} className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {block.heading}
                  </h3>
                  {block.para && (
                    <p className="text-slate-700 leading-relaxed">
                      {block.para}
                    </p>
                  )}
                  {block.para1 && (
                    <p className="text-slate-700 leading-relaxed">
                      {block.para1}
                    </p>
                  )}
                </section>
              ))}
            </div>
          </article>

          {/* RIGHT COLUMN: EXPLORE MORE SIDEBAR */}
          {/* <aside className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Explore More</h3>
          <div className="space-y-4">
            {relatedPosts.map(([key, related]) => (
              <Link
                key={key}
                to={`/blog/${key}`}
                className="block rounded-2xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xs text-slate-500 mb-1">
                  5 min · Jan 03, 2025
                </p>
                <h4 className="text-sm font-semibold text-slate-900 line-clamp-2">
                  {related.title}
                </h4>
                <p className="mt-2 text-xs text-slate-600 line-clamp-3">
                  {related.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </aside> */}
        </section>

        {/* RELATED POST SECTION */}
        <section className="border-t border-slate-100 pt-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-900">Related Post</h2>
            {/* <div className="flex items-center gap-4 text-sm text-slate-500">
            <button className="font-semibold text-emerald-600">All</button>
            <span>Products</span>
            <span>Services</span>
            <span>Other</span>
            <span className="hidden sm:inline">Search</span>
          </div> */}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.slice(0, 3).map(([key, related]) => (
              <Link
                key={key}
                to={`/blog/${key}`}
                className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                    {related.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3">
                    {related.excerpt}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>5 min</span>
                  <span>Jan 03, 2025</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="pt-4 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center text-[#0D0C41] font-semibold underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    </div>
  );
}

export default BlogDetail;
