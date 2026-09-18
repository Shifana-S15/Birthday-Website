import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const name = "Maha";
  const [showSecret, setShowSecret] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const photo = (fileName) => `${import.meta.env.BASE_URL}photos/${fileName}`;

  return (
    <main className="paper-texture min-h-screen w-full overflow-x-hidden text-[#3f302b]">

      {/* ================= DECORATIONS ================= */}

      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-4 sm:left-[8%] text-2xl sm:text-3xl text-[#d89da7]"
      >
        ♡
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-36 right-5 sm:right-[10%] text-lg sm:text-xl text-[#b99a8f]"
      >
        ✦
      </motion.div>

      {/* ================= HERO ================= */}

      <section className="min-h-[100svh] flex items-center justify-center px-5 py-16">

        <div className="w-full max-w-2xl text-center">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-clean text-[10px] sm:text-xs tracking-[0.28em] sm:tracking-[0.4em] uppercase text-[#8c7770] mb-10"
          >
            19 · 09 · 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-hand text-4xl sm:text-5xl md:text-6xl text-[#6b5148] mb-7"
          >
            Dear, {name} ♡
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-[2rem] leading-[1.18] sm:text-4xl md:text-5xl text-[#3f302b]"
          >
            I made a little corner
            <br />
            of the internet
            <br />
            <span className="italic">just for you.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-hand text-base sm:text-lg leading-7 text-[#8c7770] mt-7 px-2"
          >
            Unakkaga dhaan idhellam...
            <br className="sm:hidden" />
            so konjam enjoy pannitu po. 😂
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-14"
          >
            <a
              href="#story"
              className="inline-block font-clean text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#6b5148] border-b border-[#d9bfc0] pb-2"
            >
              konjam keela vaa ↓
            </a>
          </motion.div>

        </div>

      </section>

      {/* ================= OUR STORY ================= */}

      <section
        id="story"
        className="min-h-[90svh] flex items-center justify-center px-5 py-20 sm:py-24"
      >

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-3xl"
        >

          <p className="font-clean text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#9a8279] text-center mb-5">
            chapter one · us
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-center leading-tight">
            Somehow,
            <br />
            <span className="italic">we became us.</span>
          </h2>

          <div className="mt-10 sm:mt-14 bg-[#fffdf9] border border-[#eadbd2] px-5 py-8 sm:px-10 sm:py-12 shadow-[0_15px_40px_rgba(90,60,50,0.08)] rotate-[-1deg]">

            <p className="font-hand text-lg sm:text-2xl leading-relaxed text-[#6b5148]">
              I don't even know when our friendship went from
              <span className="text-[#c48792]"> "hi"</span>
              to
              <span className="text-[#c48792]"> "Edii....."</span>
              😂
            </p>

            <p className="font-serif text-sm sm:text-lg leading-7 sm:leading-8 text-[#594640] mt-6">
              But somewhere between all the random conversations,
              unnecessary laughing, sharing problems, giving advice,
              and doing absolutely nothing together...
              you became one of those people I genuinely don't want
              to lose.
            </p>

            <p className="font-hand text-base sm:text-xl leading-7 text-[#8c7770] mt-7">
              Namma friendship epdi start aachu nu yosicha,
              honestly… therila. 😂
              <br />
              Aana ippo varaikkum, it's been one of the best things. ❤️
            </p>

          </div>

          <p className="font-hand text-center text-base sm:text-lg text-[#9a8279] mt-10">
            okay... emotional aagatha. இன்னும் நிறைய இருக்கு. 😂
          </p>

        </motion.div>

      </section>

      {/* ================= LITTLE THINGS ================= */}

      <section className="min-h-[90svh] flex items-center justify-center px-5 py-20 sm:py-24">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-5xl"
        >

          <p className="font-clean text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#9a8279] text-center mb-5">
            chapter two · very important observations
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-center leading-tight">
            A few things
            <br />
            <span className="italic">about you.</span>
          </h2>

          <p className="font-hand text-base sm:text-lg text-center text-[#8c7770] mt-5">
            Based on extremely reliable research. (me.) 😂
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-10 sm:mt-14">

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#f8e8e8] p-6 sm:p-9 rotate-[-1deg]"
            >
              <span className="font-clean text-[10px] tracking-widest text-[#9a6f73]">
                01
              </span>

              <h3 className="font-serif text-xl sm:text-2xl mt-4 text-[#4b3833]">
                Professional overthinker
              </h3>

              <p className="font-hand text-base sm:text-lg leading-7 mt-3 text-[#735b54]">
                Oru small matter-ah eduthu full investigation
                conduct panniduva. 😂
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#f4eee5] p-6 sm:p-9 rotate-[1deg]"
            >
              <span className="font-clean text-[10px] tracking-widest text-[#9a8279]">
                02
              </span>

              <h3 className="font-serif text-xl sm:text-2xl mt-4 text-[#4b3833]">
                Kovam Department
              </h3>

              <p className="font-hand text-base sm:text-lg leading-7 mt-3 text-[#735b54]">
                Edhukkellam kovapaduva nu unakke sometimes
                theriyadhu. 😂
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#eee6e2] p-6 sm:p-9 rotate-[1deg]"
            >
              <span className="font-clean text-[10px] tracking-widest text-[#9a8279]">
                03
              </span>

              <h3 className="font-serif text-xl sm:text-2xl mt-4 text-[#4b3833]">
                Always Cared
              </h3>

              <p className="font-hand text-base sm:text-lg leading-7 mt-3 text-[#735b54]">
                Naan nalla feel pannama irundha times-la kooda,
                nee dhaan enna paathukitta. ❤️
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#f7e9df] p-6 sm:p-9 rotate-[-1deg]"
            >
              <span className="font-clean text-[10px] tracking-widest text-[#9a8279]">
                04
              </span>

              <h3 className="font-serif text-xl sm:text-2xl mt-4 text-[#4b3833]">
                Somehow always there
              </h3>

              <p className="font-hand text-base sm:text-lg leading-7 mt-3 text-[#735b54]">
                Jokes aside, kashtam vandha first few people-la
                nee definitely iruppa. ♡
              </p>
            </motion.div>

          </div>

          <p className="font-hand text-center text-base sm:text-xl text-[#8c7770] mt-10">
            Idhellam naan sonnadhu dhaan.
            <br className="sm:hidden" />
            Nee disagree panna allowed illa. 😂
          </p>

        </motion.div>

      </section>

      {/* ================= MEMORIES ================= */}

      <section className="px-5 py-24 sm:py-28">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-6xl mx-auto"
        >

          <p className="font-clean text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#9a8279] text-center mb-5">
            chapter three · evidence
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-center">
            Namma moments ♡
          </h2>

          <p className="font-hand text-base sm:text-lg text-center text-[#8c7770] mt-4">
            Some memories deserve their own little wall.
          </p>

          {/* Mobile: one column | Desktop: three columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-12 sm:mt-16 items-center">

            {/* Photo 1 */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 0 }}
              className="bg-white p-3 sm:p-4 pb-6 sm:pb-8 shadow-[0_10px_30px_rgba(80,50,40,0.12)] rotate-[-2deg]"
            >
              <img
                src={photo("03.jpg")}
                alt="A memory together"
                className="w-full max-h-[70vh] object-contain"
              />

              <p className="font-hand text-center text-base sm:text-lg leading-6 text-[#6b5148] mt-4 sm:mt-5">
                Just a small moment, but still one of my favourites. 🤍
              </p>
            </motion.div>

            {/* Photo 2 */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 0 }}
              className="bg-white p-3 sm:p-4 pb-6 sm:pb-8 shadow-[0_10px_30px_rgba(80,50,40,0.12)] rotate-[2deg]"
            >
              <img
                src={photo("05.jpeg")}
                alt="A memory together"
                className="w-full max-h-[70vh] object-contain"
              />

              <p className="font-hand text-center text-base sm:text-lg leading-6 text-[#6b5148] mt-4 sm:mt-5">
                “Indha photo-ku enna caption nu therila…
                but I really like this one. 🫶”
              </p>
            </motion.div>

            {/* Photo 3 */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 0 }}
              className="bg-white p-3 sm:p-4 pb-6 sm:pb-8 shadow-[0_10px_30px_rgba(80,50,40,0.12)] rotate-[-2deg]"
            >
              <img
                src={photo("01.jpg")}
                alt="A memory together"
                className="w-full max-h-[70vh] object-contain"
              />

              <p className="font-hand text-center text-base sm:text-lg leading-6 text-[#6b5148] mt-4 sm:mt-5">
                “Namma edutha first photo. ♡”
              </p>
            </motion.div>

            {/* Photo 4 */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 0 }}
              className="bg-white p-3 sm:p-4 pb-6 sm:pb-8 shadow-[0_10px_30px_rgba(80,50,40,0.12)] rotate-[2deg]"
            >
              <img
                src={photo("02.jpg")}
                alt="A memory together"
                className="w-full max-h-[70vh] object-contain"
              />

              <p className="font-hand text-center text-base sm:text-lg leading-6 text-[#6b5148] mt-4 sm:mt-5">
                “Context illa. Aana semma memory.” 😂
              </p>
            </motion.div>

            {/* Center note */}
            <motion.div
              initial={{ opacity: 0, rotate: -4 }}
              whileInView={{ opacity: 1, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#f4eee5] p-7 sm:p-10 shadow-[0_10px_30px_rgba(80,50,40,0.08)]"
            >
              <p className="font-hand text-xl sm:text-2xl leading-relaxed text-[#6b5148]">
                “Life-la important moments
                ellame big moments ah irukkanum
                nu illa.”
              </p>

              <p className="font-serif italic text-base sm:text-lg leading-7 text-[#8c7770] mt-5">
                Sometimes it's just us,
                laughing at something stupid.
              </p>
            </motion.div>

            {/* Photo 5 */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 0 }}
              className="bg-white p-3 sm:p-4 pb-6 sm:pb-8 shadow-[0_10px_30px_rgba(80,50,40,0.12)] rotate-[-2deg]"
            >
              <img
                src={photo("04.jpeg")}
                alt="A memory together"
                className="w-full max-h-[70vh] object-contain"
              />

              <p className="font-hand text-center text-base sm:text-lg leading-6 text-[#6b5148] mt-4 sm:mt-5">
                “One more for the collection. ♡”
              </p>
            </motion.div>

          </div>

          <p className="font-hand text-center text-base sm:text-xl text-[#8c7770] mt-12 sm:mt-16">
            Okay... ippo konjam photos add panna vendiyadhu dhaan. 😌
          </p>

        </motion.div>

      </section>
      <section className="paper-texture px-6 py-16 text-center">
  <p className="font-clean text-xs uppercase tracking-[0.3em] text-[#9a746d]">
    A few things you didn't ask for
  </p>

  <h2 className="mt-3 font-serif text-3xl text-[#5a403a]">
    But you're getting them anyway 😂
  </h2>

  <div className="mx-auto mt-8 flex max-w-md flex-col gap-4">
    <button
      onClick={() => setActiveVideo("shoulder")}
      className="rounded-full border border-[#d8aaa5] bg-[#fffaf5] px-6 py-4 font-clean text-sm tracking-wide text-[#6b4b45] shadow-sm transition hover:-translate-y-1 hover:bg-[#f8e8e7]"
    >
      🫂 A soft little memory
    </button>

    <button
      onClick={() => setActiveVideo("funny")}
      className="rounded-full border border-[#d8aaa5] bg-[#fffaf5] px-6 py-4 font-clean text-sm tracking-wide text-[#6b4b45] shadow-sm transition hover:-translate-y-1 hover:bg-[#f8e8e7]"
    >
      🤡 Okay… this is more like us
    </button>
  </div>
</section>

{activeVideo && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
    <div className="relative max-h-[90vh] w-full max-w-lg rounded-3xl bg-[#fffaf5] p-4 shadow-2xl overflow-hidden">
      <button
        onClick={() => setActiveVideo(null)}
        className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-[#6b4b45] shadow-md"
        aria-label="Close video"
      >
        ✕
      </button>

      <video
        key={activeVideo}
        className="max-h-[75vh] w-full rounded-2xl object-contain"
        controls
        autoPlay
        playsInline
      >
        <source
          src={`${import.meta.env.BASE_URL}videos/${activeVideo}.mp4`}
          type="video/mp4"
        />
        Your browser does not support video playback.
      </video>
    </div>
  </div>
)}

      {/* ================= BUT SERIOUSLY ================= */}

      <section className="min-h-[90svh] flex items-center justify-center px-5 py-20 sm:py-28">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-3xl"
        >

          <p className="font-clean text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#9a8279] text-center mb-7">
            chapter four · okay, seriously
          </p>

          <div className="relative bg-[#fffdf9] border border-[#eadbd2] shadow-[0_20px_50px_rgba(80,50,40,0.08)] px-5 py-9 sm:px-12 sm:py-14">

            <span className="absolute top-4 right-5 font-hand text-xl sm:text-2xl text-[#d89da7] rotate-12">
              ♡
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3f302b]">
              But seriously...
            </h2>

            <div className="mt-8 space-y-5">

              <p className="font-serif text-sm sm:text-lg leading-7 sm:leading-8 text-[#594640]">
                Jokes apart, unna en life-la irukradhu enakku
                genuinely romba lucky feeling.
              </p>

              <p className="font-serif text-sm sm:text-lg leading-7 sm:leading-8 text-[#594640]">
                Every friendship doesn't need some huge story.
                Sometimes it's just having someone who understands
                your nonsense, listens to your random thoughts,
                and somehow stays through all of it.
              </p>

              <p className="font-hand text-lg sm:text-2xl leading-7 sm:leading-relaxed text-[#6b5148]">
                Namma rendu perum evlo busy aanaalum,
                life epdi change aanaalum,
                namma friendship-ku oru place always irukkum. ♡
              </p>

              <p className="font-serif text-sm sm:text-lg leading-7 sm:leading-8 text-[#594640]">
                And whenever life gets a little too much,
                I hope you remember that you don't have to
                figure everything out alone.
              </p>

              <p className="font-hand text-lg sm:text-xl text-[#8c7770] pt-2">
                Naan irukken. That's it.
                <br className="sm:hidden" />
                No dramatic dialogue. 😂
              </p>

            </div>

            <div className="mt-9 pt-7 border-t border-[#eadbd2]">

              <p className="font-hand text-base sm:text-lg leading-6 text-[#8c7770]">
                — from someone who is very glad
                <br />
                you exist in their life.
              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= ONE LAST THING ================= */}

      <section className="min-h-[85svh] flex items-center justify-center px-5 py-20 sm:py-28">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-2xl text-center"
        >

          <p className="font-clean text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#9a8279] mb-6">
            chapter five · one last thing
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
            Before you go...
            <br />
            <span className="italic">one tiny thing.</span>
          </h2>

          <p className="font-hand text-base sm:text-lg leading-7 text-[#8c7770] mt-6 px-2">
            Don't click the button if you're scared of compliments. 😂
          </p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowSecret(!showSecret)}
            className="mt-8 min-h-12 px-7 py-3 rounded-full border border-[#cfa5a5] text-[#6b5148] font-clean text-[10px] sm:text-xs tracking-[0.18em] uppercase hover:bg-[#f5e5e5] transition-colors cursor-pointer"
          >
            {showSecret ? "okay okay, hide it" : "click me"}
          </motion.button>

          <AnimatePresence>
            {showSecret && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.97 }}
                transition={{ duration: 0.5 }}
                className="mt-10 bg-[#fffdf9] border border-[#eadbd2] px-5 py-8 sm:px-8 sm:py-10 shadow-[0_15px_40px_rgba(80,50,40,0.08)]"
              >

                <p className="font-hand text-xl sm:text-3xl leading-8 text-[#6b5148]">
                  In case nobody told you today...
                </p>

                <p className="font-serif text-lg sm:text-2xl leading-7 text-[#3f302b] mt-4">
                  you're doing better than you think.
                </p>

                <p className="font-hand text-base sm:text-lg text-[#8c7770] mt-5">
                  And yes, I'm saying this seriously for once. 😭
                </p>

              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </section>

      {/* ================= FINAL BIRTHDAY ================= */}

      <section className="min-h-[100svh] flex items-center justify-center px-5 py-20 sm:py-28">

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl text-center"
        >

          <p className="font-clean text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#9a8279] mb-7">
            and finally...
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-hand text-4xl sm:text-6xl md:text-7xl text-[#6b5148]"
          >
            Happy Birthday,
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif italic text-4xl sm:text-6xl md:text-7xl text-[#3f302b] mt-2 break-words"
          >
            {name} ♡
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-serif text-sm sm:text-lg md:text-xl leading-7 sm:leading-8 text-[#594640] mt-8 max-w-xl mx-auto"
          >
            I hope this year brings you more reasons to laugh,
            more things you're excited about,
            and a lot of moments you'll look back on and think,
            <span className="italic">
              {" "}“yeah, life is actually pretty nice.”
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.1 }}
            className="font-hand text-lg sm:text-2xl leading-7 text-[#8c7770] mt-7"
          >
            Sandhoshama iru, nalla iru,
            <br />
            romba over-ah serious aagadha. 😂
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.4 }}
            className="h-px bg-[#d9bfc0] mx-auto mt-10"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.7 }}
            className="font-hand text-base sm:text-lg leading-6 text-[#9a8279] mt-7"
          >
            Here's to more memories, more nonsense,
            <br />
            and hopefully better photos. 📷😂
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 2,
              type: "spring",
            }}
            className="text-3xl text-[#c48792] mt-9"
          >
            ♡
          </motion.div>

        </motion.div>

      </section>

    </main>
  );
}

export default App;