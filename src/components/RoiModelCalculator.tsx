import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Download, 
  Layers, 
  ShieldAlert, 
  Sparkles, 
  Briefcase, 
  Coins, 
  Scale 
} from 'lucide-react';
import { FINANCIAL_MODEL_10_YEAR, COST_BENEFIT_30_YEAR } from '../data/whitepaperData';

export const RoiModelCalculator: React.FC = () => {
  const [assetCount, setAssetCount] = useState<number>(10);
  const [coFundingRatio, setCoFundingRatio] = useState<number>(50); // 50%
  const [spinoffMultiplier, setSpinoffMultiplier] = useState<number>(1.0);
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(8); // Year 10 (index 8)

  const selectedYear = FINANCIAL_MODEL_10_YEAR[selectedYearIndex];

  // Dynamically adjusted calculations
  const scaledSpinoffRevenue = selectedYear.grossSpinoffRevenue * spinoffMultiplier;
  const scaledAvoidedCost = (selectedYear.avoidedLegalInsurance + selectedYear.avoidedHighSecStorage) * (assetCount / 10);
  const scaledNetEconomicImpact = (scaledSpinoffRevenue + scaledAvoidedCost) - (selectedYear.netPublicTreasuryCost * (1 - (coFundingRatio - 50) / 100));
  const scaledJobs = Math.round(selectedYear.highTechFteJobs * (0.6 + 0.4 * (assetCount / 10)) * spinoffMultiplier);

  // 30-Year Savings per Asset
  const legacyTotal30Yr = 15000000;
  const replicateTotal30Yr = 1500000;
  const netSavingsPerAsset = legacyTotal30Yr - replicateTotal30Yr; // £13,500,000
  const totalSavingsCohort = netSavingsPerAsset * assetCount;

  const handleDownloadCsv = () => {
    const headers = [
      "Year",
      "Seed CapEx (£M)",
      "Operational Cost (£M)",
      "G20 Inflows (£M)",
      "ODA Allocations (£M)",
      "Net Treasury Cost (£M)",
      "Aerospace Spinoffs (£M)",
      "Robotic Milling (£M)",
      "Spatial Twin C2PA (£M)",
      "Gross Spinoff Revenue (£M)",
      "Avoided Legal & Insurance (£M)",
      "Avoided High-Sec Storage (£M)",
      "Net Annual Economic Impact (£M)",
      "High-Tech FTE Jobs"
    ];

    const rows = FINANCIAL_MODEL_10_YEAR.map(row => [
      row.label,
      row.seedCapEx.toFixed(1),
      row.operationalCost.toFixed(1),
      row.g20CoFunding.toFixed(1),
      row.odaGrantAllocation.toFixed(1),
      row.netPublicTreasuryCost.toFixed(1),
      row.aerospaceSpinoffs.toFixed(1),
      row.roboticMillingLicensing.toFixed(1),
      row.spatialTwinRevenue.toFixed(1),
      row.grossSpinoffRevenue.toFixed(1),
      row.avoidedLegalInsurance.toFixed(1),
      row.avoidedHighSecStorage.toFixed(1),
      row.netAnnualEconomicImpact.toFixed(1),
      row.highTechFteJobs
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "UK_Replicate_Repatriate_10Year_Financial_Model.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section id="roi-model" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-stone-200 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-900 mb-2">
              <Calculator className="w-3.5 h-3.5 text-amber-800" />
              <span>Vector 2: Macroeconomic Model &amp; Spinoff Yields</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>10-Year Financial Simulation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 text-balance">
              Industrial ROI: Converting Museum Liabilities into Advanced Catapult Assets.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 font-light max-w-2xl text-pretty">
              Allocating seed capital into the High Value Manufacturing Catapult transforms recurring litigation and storage expenses into compounding revenue from aerospace metrology and nuclear robotics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadCsv}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-stone-600" />
              <span>Export Model (.CSV)</span>
            </button>
          </div>
        </div>

        {/* 30-Year Multi-Decadal Contrast Ribbon */}
        <div className="mt-8 rounded-xl border border-amber-900/20 bg-amber-50/50 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-amber-900 font-semibold mb-1">
                30-Year Cost-Benefit Analysis (Per Major Contested Asset)
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
                Legacy Physical Retention vs. Replicate &amp; Repatriate
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-center">
              <div>
                <div className="text-xs text-stone-500 font-sans">Legacy Retention</div>
                <div className="text-xl sm:text-2xl font-serif font-semibold text-rose-700 tabular-nums">
                  £15,000,000
                </div>
              </div>

              <div className="text-stone-300 text-2xl font-serif">→</div>

              <div>
                <div className="text-xs text-stone-500 font-sans">Replicate &amp; Repatriate</div>
                <div className="text-xl sm:text-2xl font-serif font-semibold text-emerald-700 tabular-nums">
                  £1,500,000
                </div>
              </div>

              <div className="pl-4 sm:border-l border-stone-300 text-left">
                <div className="text-xs text-stone-500 font-sans">Net Savings per Asset</div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tabular-nums">
                  £13,500,000 <span className="text-xs font-sans text-emerald-700 font-semibold">(89% Reduction)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-amber-900/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans text-stone-700">
            {COST_BENEFIT_30_YEAR.slice(0, 4).map((item, idx) => (
              <div key={idx} className="p-3 bg-white/70 rounded-lg border border-amber-900/10">
                <div className="font-semibold text-stone-900">{item.costComponent}</div>
                <div className="mt-1 flex justify-between text-stone-600">
                  <span>Legacy: <strong className="text-rose-700">{item.legacyPhysicalRetention}</strong></span>
                  <span>R2: <strong className="text-emerald-700">{item.replicateRepatriate}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Scenario Parameters & Projection Dashboard */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls & Dynamic Adjusters */}
          <div className="lg:col-span-4 rounded-xl border border-stone-200 bg-stone-50 p-6 space-y-6">
            <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider font-mono pb-2 border-b border-stone-200">
              Simulation Parameters
            </h3>

            {/* Asset Count Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-sans">
                <span className="text-stone-700">Contested Asset Cohort:</span>
                <span className="font-mono font-semibold text-stone-900">{assetCount} Major Assets</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={assetCount}
                onChange={(e) => setAssetCount(Number(e.target.value))}
                className="w-full h-1.5 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-stone-900"
              />
              <div className="text-[11px] text-stone-500">
                Baseline includes Parthenon Marbles, Benin Bronzes, Rosetta Stone, Amaravati Stupa.
              </div>
            </div>

            {/* G20 Sovereign Matching */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-sans">
                <span className="text-stone-700">G20 Partner Co-Funding Ratio:</span>
                <span className="font-mono font-semibold text-stone-900">{coFundingRatio}% Matching</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={coFundingRatio}
                onChange={(e) => setCoFundingRatio(Number(e.target.value))}
                className="w-full h-1.5 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-stone-900"
              />
              <div className="text-[11px] text-stone-500">
                Economically robust origin states (e.g. Greece) share 50/50 costs of marble and robotic milling.
              </div>
            </div>

            {/* Spinoff Multiplier */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-sans">
                <span className="text-stone-700">Catapult Spinoff Multiplier:</span>
                <span className="font-mono font-semibold text-stone-900">{spinoffMultiplier.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2.5"
                step="0.1"
                value={spinoffMultiplier}
                onChange={(e) => setSpinoffMultiplier(Number(e.target.value))}
                className="w-full h-1.5 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-stone-900"
              />
              <div className="text-[11px] text-stone-500">
                Translational commercialization rate into aerospace turbine inspection and nuclear robotics.
              </div>
            </div>

            {/* Selected Horizon Timeline Selector */}
            <div className="space-y-2 pt-2 border-t border-stone-200">
              <div className="text-xs font-sans text-stone-700 font-medium">
                Select Model Year:
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {FINANCIAL_MODEL_10_YEAR.map((yr, idx) => (
                  <button
                    key={yr.year}
                    onClick={() => setSelectedYearIndex(idx)}
                    className={`py-1.5 px-2 text-xs font-mono rounded transition-colors cursor-pointer ${
                      selectedYearIndex === idx
                        ? 'bg-stone-900 text-white font-semibold'
                        : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {yr.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Model Output Cards & Table */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Primary Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Gross Spinoff Revenue ({selectedYear.label})
                </div>
                <div className="text-3xl font-serif font-bold text-stone-900 tabular-nums">
                  £{scaledSpinoffRevenue.toFixed(1)}M
                </div>
                <div className="text-[11px] text-stone-500 font-sans pt-1">
                  Aerospace metrology, robotic carving licenses &amp; OpenUSD assets.
                </div>
              </div>

              <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Avoided Museum Costs ({selectedYear.label})
                </div>
                <div className="text-3xl font-serif font-bold text-emerald-700 tabular-nums">
                  £{scaledAvoidedCost.toFixed(1)}M
                </div>
                <div className="text-[11px] text-stone-500 font-sans pt-1">
                  Zero multi-jurisdiction defense litigation &amp; reduced high-sec indemnity.
                </div>
              </div>

              <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  High-Tech FTE UK Jobs ({selectedYear.label})
                </div>
                <div className="text-3xl font-serif font-bold text-amber-900 tabular-nums">
                  {scaledJobs.toLocaleString()}
                </div>
                <div className="text-[11px] text-stone-500 font-sans pt-1">
                  Robotics engineers, metrologists, and precision machinists.
                </div>
              </div>
            </div>

            {/* Authoritative 10-Year Financial Model Table */}
            <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-xs">
              <div className="p-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-stone-800 uppercase tracking-wider">
                  Full 10-Year Projections (Baseline UK Treasury &amp; Catapult Data)
                </span>
                <span className="text-xs text-stone-500 font-sans">Figures in GBP Millions (£M)</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100/50 text-stone-600 font-mono">
                      <th className="py-2.5 px-3">Metric</th>
                      {FINANCIAL_MODEL_10_YEAR.map(y => (
                        <th key={y.year} className="py-2.5 px-2 text-right tabular-nums whitespace-nowrap">{y.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    <tr className="hover:bg-stone-50">
                      <td className="py-2 px-3 font-medium text-stone-800">Seed CapEx (£M)</td>
                      {FINANCIAL_MODEL_10_YEAR.map(y => (
                        <td key={y.year} className="py-2 px-2 text-right font-mono tabular-nums text-stone-600">{y.seedCapEx.toFixed(1)}</td>
                      ))}
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-2 px-3 font-medium text-stone-800">Operational Replication (£M)</td>
                      {FINANCIAL_MODEL_10_YEAR.map(y => (
                        <td key={y.year} className="py-2 px-2 text-right font-mono tabular-nums text-stone-600">{y.operationalCost.toFixed(1)}</td>
                      ))}
                    </tr>
                    <tr className="hover:bg-stone-50 text-emerald-700">
                      <td className="py-2 px-3 font-medium">G20 Co-Funding Inflows (£M)</td>
                      {FINANCIAL_MODEL_10_YEAR.map(y => (
                        <td key={y.year} className="py-2 px-2 text-right font-mono tabular-nums">({y.g20CoFunding.toFixed(1)})</td>
                      ))}
                    </tr>
                    <tr className="hover:bg-stone-50 text-emerald-700">
                      <td className="py-2 px-3 font-medium">ODA Grant Allocations (£M)</td>
                      {FINANCIAL_MODEL_10_YEAR.map(y => (
                        <td key={y.year} className="py-2 px-2 text-right font-mono tabular-nums">({y.odaGrantAllocation.toFixed(1)})</td>
                      ))}
                    </tr>
                    <tr className="hover:bg-stone-50 font-semibold bg-stone-50/50">
                      <td className="py-2 px-3 text-stone-900">Net Public Treasury Cost (£M)</td>
                      {FINANCIAL_MODEL_10_YEAR.map(y => (
                        <td key={y.year} className="py-2 px-2 text-right font-mono tabular-nums text-stone-900">{y.netPublicTreasuryCost.toFixed(1)}</td>
                      ))}
                    </tr>
                    <tr className="hover:bg-stone-50 text-amber-900 font-semibold">
                      <td className="py-2 px-3">Gross Spinoff Revenue (£M)</td>
                      {FINANCIAL_MODEL_10_YEAR.map(y => (
                        <td key={y.year} className="py-2 px-2 text-right font-mono tabular-nums">{y.grossSpinoffRevenue.toFixed(1)}</td>
                      ))}
                    </tr>
                    <tr className="hover:bg-stone-50 font-bold bg-amber-50/40 text-stone-900">
                      <td className="py-2 px-3">Net Annual Economic Impact (£M)</td>
                      {FINANCIAL_MODEL_10_YEAR.map(y => (
                        <td key={y.year} className={`py-2 px-2 text-right font-mono tabular-nums ${y.netAnnualEconomicImpact < 0 ? 'text-rose-700' : 'text-emerald-700'}`}>
                          {y.netAnnualEconomicImpact > 0 ? `+${y.netAnnualEconomicImpact.toFixed(1)}` : y.netAnnualEconomicImpact.toFixed(1)}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-2 px-3 font-medium text-stone-700">High-Tech FTE Jobs Created</td>
                      {FINANCIAL_MODEL_10_YEAR.map(y => (
                        <td key={y.year} className="py-2 px-2 text-right font-mono tabular-nums text-stone-800">{y.highTechFteJobs.toLocaleString()}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
