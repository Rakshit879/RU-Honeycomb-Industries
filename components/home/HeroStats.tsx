export default function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-8 rounded-3xl bg-white p-6 lg:p-8 shadow-xl md:grid-cols-4">

      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-700">
          5000+
        </h2>
        <p className="mt-2 text-slate-500">
          Cooling Pads
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-700">
          25+
        </h2>
        <p className="mt-2 text-slate-500">
          Business Clients
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-700">
          98%
        </h2>
        <p className="mt-2 text-slate-500">
          Satisfaction
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-700">
          24×7
        </h2>
        <p className="mt-2 text-slate-500">
          Support
        </p>
      </div>

    </div>
  );
}