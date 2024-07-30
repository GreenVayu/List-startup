import TeamData from "./components/teamData.json";

function Team() {
  return (
    <div className="team-container">
      <div className="bg-gradient-to-r from-emerald-800 to-zinc-300 xmd:p-8 mt-6">
        <h1 className="text-white text-xl font-semibold tracking-wide text-center p-2 mt-2 xmd:text-start ">
          {TeamData.intro.title}
        </h1>
        <p className="text-white text-lg font-normal leading-normal tracking-wide p-2">
          {TeamData.intro.description}
        </p>
      </div>

      <div className="sec1 bg-[url('/team/Colorpalette.png')] mt-12">
        <h1 className="text-emerald-800 text-xl font-semibold tracking-widest border-b-2 border-amber-500 w-fit mx-auto mb-6">
          {TeamData.sections[0].title}
        </h1>
        <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-2 xmd:hidden mx-4">
          {TeamData.sections[0].members.map((member, index) => (
            <div
              key={index}
              className="rounded border border-emerald-800 shadow-lg min-w-40"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-32 mx-auto"
              />
              <p className="text-emerald-800 text-lg font-bold leading-3 tracking-wide text-center mt-2">
                {member.name}
              </p>
              <p className="text-emerald-800 font-normal leading-5 tracking-tight text-sm text-center mt-2">
                {member.role.split(",").map((line, idx) => (
                  <>
                    {line}
                    {idx < member.role.split(",").length - 1 && <br />}
                  </>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden xmd:flex justify-evenly gap-4 p-6">
          {TeamData.sections[0].members.map((member, index) => (
            <div
              key={index}
              className="rounded border border-emerald-800 w-fit"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-52 h-[230px] mx-auto rounded-tl-[3px] rounded-tr-[3px]"
              />
              <h1 className="text-emerald-800 text-xl font-semibold leading-3 tracking-wide w-fit p-2 mx-auto mt-2">
                {member.name}
              </h1>
              <p className="text-emerald-800 text-sm mb-2 font-normal leading-5 tracking-tight text-center">
                {member.role.split(",").map((line, idx) => (
                  <>
                    {line}
                    {idx < member.role.split(",").length - 1 && <br />}
                  </>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="sec2 mt-12">
        <div className="bg-gradient-to-r from-emerald-800 to-zinc-300 p-4">
          <h1 className="text-white text-xl font-semibold tracking-widest w-fit text-center mb-6 mt-6 xmd:w-fit xmd:mx-auto">
            ARCHITECTS <span className="border-b-2 border-amber-500">AND</span>{" "}
            <span className="text-center">STORYTELLERS</span>{" "}
          </h1>

          <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-2 xmd:hidden mx-4">
            {TeamData.sections[1].members.map((member, index) => (
              <div
                key={index}
                className="rounded border border-emerald-800 shadow-lg min-w-40 bg-white"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-32 mx-auto"
                />
                <p className="text-emerald-800 text-lg font-bold leading-3 tracking-wide text-center mt-2">
                  {member.name}
                </p>
                <p className="text-emerald-800 font-normal leading-5 tracking-tight text-sm text-center mt-2">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden xmd:flex justify-evenly gap-4 p-6">
            {TeamData.sections[1].members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded border border-emerald-800 w-fit rounded-tl-[3px] rounded-tr-[3px]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-52 h-[230px] mx-auto"
                />
                <h1 className="text-emerald-800 text-base md:text-xl font-semibold leading-3 tracking-wide w-fit mx-auto py-2 px-1 mt-2">
                  {member.name}
                </h1>
                <p className="text-emerald-800 text-sm mb-2 font-normal leading-5 tracking-tight text-center">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec3 bg-[url('/team/Colorpalette.png')] mt-12">
        <h1 className="text-emerald-800 text-xl font-semibold tracking-widest border-b-2 border-amber-500 w-fit mx-auto mb-6">
          {TeamData.sections[2].title}
        </h1>

        <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-2 xmd:hidden mx-4">
          {TeamData.sections[2].members.map((member, index) => (
            <div
              key={index}
              className="rounded border border-emerald-800 shadow-lg min-w-40"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-32 mx-auto"
              />
              <p className="text-emerald-800 text-lg font-bold leading-3 tracking-wide text-center mt-2">
                {member.name}
              </p>
              <p className="text-emerald-800 font-normal leading-5 tracking-tight text-sm text-center mt-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden xmd:flex justify-evenly gap-4 p-6">
          {TeamData.sections[2].members.map((member, index) => (
            <div
              key={index}
              className="rounded border border-emerald-800 w-fit"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-52 h-[230px] mx-auto rounded-tl-[3px] rounded-tr-[3px]"
              />
              <h1 className="text-emerald-800 text-xl font-semibold leading-3 tracking-wide w-fit p-2 mx-auto mt-2">
                {member.name}
              </h1>
              <p className="text-emerald-800 text-sm mb-2 font-normal leading-5 tracking-tight text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="sec4 mt-12">
        <div className="bg-gradient-to-r from-emerald-800 to-zinc-300 p-4">
          <h1 className="text-white text-xl font-semibold tracking-widest w-fit mx-auto mb-6 mt-6">
            D<span className="border-b-2 border-amber-500">ESIGN UX/U</span>I
          </h1>

          <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-2 xmd:hidden mx-4">
            {TeamData.sections[3].members.map((member, index) => (
              <div
                key={index}
                className="rounded border border-emerald-800 shadow-lg min-w-40 bg-white"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-32 mx-auto"
                />
                <p className="text-emerald-800 text-lg font-bold leading-3 tracking-wide text-center mt-2">
                  {member.name}
                </p>
                <p className="text-emerald-800 font-normal leading-5 tracking-tight text-sm text-center mt-2">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden xmd:flex justify-evenly gap-4 p-6">
            {TeamData.sections[3].members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded border border-emerald-800 w-fit"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-52 h-[230px] mx-auto rounded-tl-[3px] rounded-tr-[3px]"
                />
                <h1 className="text-emerald-800 text-xl font-semibold leading-3 tracking-wide w-fit mx-auto py-2 px-1 mt-2">
                  {member.name}
                </h1>
                <p className="text-emerald-800 text-sm mb-2 font-normal leading-5 tracking-tight text-center">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec5 bg-[url('/team/Colorpalette.png')] mt-12">
        <h1 className="text-emerald-800 text-xl font-semibold tracking-widest xmd:w-fit xmd:mx-auto mb-6 text-center">
          VIDEO <span className="border-b-2 border-amber-500">PRODUCTION </span>
          & EDITING
        </h1>

        <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-2 xmd:hidden mx-4">
          {TeamData.sections[4].members.map((member, index) => (
            <div
              key={index}
              className="rounded border border-emerald-800 shadow-lg min-w-40 bg-white"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-32 mx-auto"
              />
              <p className="text-emerald-800 text-lg font-bold leading-3 tracking-wide text-center mt-2">
                {member.name}
              </p>
              <p className="text-emerald-800 font-normal leading-5 tracking-tight text-sm text-center mt-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden gap-x-12 gap-y-8 p-6 md:grid-cols-3 md:gap-x-24 xmd:w-fit xmd:grid xmd:grid-cols-2 mx-auto">
          {TeamData.sections[4].members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded border border-emerald-800 w-fit"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-[200px] md:w-52 md:h-[230px] mx-auto rounded-tl-[3px] rounded-tr-[3px]"
              />
              <h1 className="text-emerald-800 text-xl font-semibold leading-3 tracking-wide w-fit mx-auto py-2 px-1 mt-2">
                {member.name}
              </h1>
              <p className="text-emerald-800 text-sm mb-2 font-normal leading-5 tracking-tight text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="sec6 bg-gradient-to-r from-emerald-800 to-zinc-300 p-4 mt-12 bg-white">
        <h1 className="text-white text-xl font-semibold tracking-widest border-b-2 border-amber-500 w-fit mx-auto mb-6">
          {TeamData.sections[5].title}
        </h1>

        <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-2 xmd:hidden mx-4">
          {TeamData.sections[5].members.map((member, index) => (
            <div
              key={index}
              className="rounded border border-emerald-800 shadow-lg min-w-40 bg-white"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-32 mx-auto"
              />
              <p className="text-emerald-800 text-lg font-bold leading-3 tracking-wide text-center mt-2">
                {member.name}
              </p>
              <p className="text-emerald-800 font-normal leading-5 tracking-tight text-sm text-center mt-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden gap-x-12 gap-y-8 p-6 md:grid-cols-3 md:gap-x-24 xmd:w-fit xmd:grid xmd:grid-cols-2 mx-auto">
          {TeamData.sections[5].members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded border border-emerald-800 w-fit"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-[200px] md:w-52 md:h-[230px] mx-auto rounded-tl-[3px] rounded-tr-[3px]"
              />
              <h1 className="text-emerald-800 text-xl font-semibold leading-3 tracking-wide w-fit mx-auto py-2 px-1 mt-2">
                {member.name}
              </h1>
              <p className="text-emerald-800 text-sm mb-2 font-normal leading-5 tracking-tight text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="sec7 bg-[url('/team/Colorpalette.png')] mt-12">
        <h1 className="text-emerald-800 text-xl font-semibold tracking-widest border-b-2 border-amber-500 w-fit mx-auto mb-6">
          {TeamData.sections[6].title}
        </h1>

        <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-2 xmd:hidden mx-4">
          {TeamData.sections[6].members.map((member, index) => (
            <div
              key={index}
              className="rounded border border-emerald-800 shadow-lg min-w-40 bg-white"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-32 mx-auto"
              />
              <p className="text-emerald-800 text-lg font-bold leading-3 tracking-wide text-center mt-2">
                {member.name}
              </p>
              <p className="text-emerald-800 font-normal leading-5 tracking-tight text-sm text-center mt-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden gap-x-12 gap-y-8 p-6 md:grid-cols-3 md:gap-x-24 xmd:w-fit xmd:grid xmd:grid-cols-2 mx-auto">
          {TeamData.sections[6].members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded border border-emerald-800 w-fit"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-[200px] md:w-52 md:h-[230px] mx-auto rounded-tl-[3px] rounded-tr-[3px]"
              />
              <h1 className="text-emerald-800 text-xl font-semibold leading-3 tracking-wide w-fit mx-auto py-2 px-1 mt-2">
                {member.name}
              </h1>
              <p className="text-emerald-800 text-sm mb-2 font-normal leading-5 tracking-tight text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Team;
