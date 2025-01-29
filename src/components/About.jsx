import { motion } from "framer-motion";
import { useState } from "react";

// New color scheme: Cyber Teal + Electric Purple
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const PortfolioHero = () => {
  const [iconHover, setIconHover] = useState(null);

  const skills = [
    {
      title: "🛠 Frontend Alchemy",
      skills: [
        "React/Next.js",
        "TailwindCSS + Framer Motion",
        "Vercel Edge Runtime",
        "TypeScript + Javascript",
      ],
    },
    {
      title: "⚙️ Backend Engineering",
      skills: [
        "Node.js",
        "Supabase/PostgreSQL",
        "Prisma + MongoDB",
        "Vercel CI/CD Pipelines",
      ],
    },
    {
      title: "🔗 Web3 Wizardry",
      skills: [
        "Solidity (EVM Chains)",
        "DeFi/DEX Protocols",
        "NFT Systems & Tokenomics",
        "Layer 2 Solutions",
      ],
    },
  ];

  const GithubIcon = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 fill-white"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );

  const TelegramIcon = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 fill-white"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );

  const GmailIcon = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 fill-white"
    >
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );

  const XIcon = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 fill-white"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );

  const socials = [
    {
      icon: <GmailIcon />,
      url: "mailto:xerxescode@gmail.com",
      color: "teal",
    },
    {
      icon: <GithubIcon />,
      url: "https://github.com/XerxesCoder",
      color: "teal",
    },
    {
      icon: <TelegramIcon />,
      url: "https://t.me/xerxescoder",
      color: "cyan",
    },
    {
      icon: <XIcon />,
      url: "https://x.com/Xerxescoder",
      color: "purple",
    },
  ];

  return (
    <div className="relative  overflow-hidden w-full min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              45deg,
              hsl(200deg 80% 6%) 0%,
              hsl(192deg 70% 10%) 50%,
              hsl(280deg 60% 12%) 100%
            )
          `,
        }}
      >
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <svg className="h-full w-full">
            <pattern
              id="grid-pattern"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 0H0V50"
                fill="none"
                stroke="hsl(180deg 100% 50% / 0.1)"
                strokeWidth="1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </motion.div>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.div className="text-center mb-24">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Hi, I'm Xerxes
            </span>
            <motion.span
              className="block text-xl md:text-3xl font-mono text-cyan-200 mt-4"
              animate={floatingAnimation}
            >
              {"<XerxesCoder />"}
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl text-cyan-100/80 mb-8 max-w-2xl mx-auto"
            variants={containerVariants}
          >
            Fullstack Developer | <span className="text-purple-300"> Web2</span>{" "}
            + <span className="text-teal-300">Web3 </span>
            with 4+ years experiences
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="group relative p-6 bg-black/20 backdrop-blur-lg rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-teal-500/10 group-hover:bg-cyan-500/10 transition-colors rounded-xl" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                {skill.title}
              </h3>
              <ul className="space-y-3">
                {skill.skills.map((skl, idx) => (
                  <motion.li
                    key={idx}
                    className="text-cyan-100/90 flex items-center"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.707 17.707l10-10-1.414-1.414L9 15.586l-4.293-4.293-1.414 1.414L9 18.414z" />
                    </svg>
                    {skl}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center space-x-8 mt-16"
          variants={containerVariants}
        >
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              className={`p-3 rounded-full bg-gradient-to-br from-${social.color}-500/20 to-${social.color}-600/10 hover:to-${social.color}-500/30 border border-${social.color}-500/30 relative overflow-hidden`}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 20px hsl(${
                  social.color === "teal"
                    ? 180
                    : social.color === "cyan"
                    ? 190
                    : 280
                }deg 100% 50% / 0.3)`,
              }}
            >
              {social.icon}
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,hsl(var(--color-primary)/.3)_0%,transparent_100%)]" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="mt-6 text-center" variants={containerVariants}>
          <motion.div
            className="text-cyan-300/60 font-mono text-sm"
            animate={{
              textShadow: [
                "0 0 10px hsl(180deg 100% 50% / 0.3)",
                "0 0 20px hsl(180deg 100% 50% / 0.5)",
                "0 0 10px hsl(180deg 100% 50% / 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            // Code the future • Ship with passion
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default PortfolioHero;
