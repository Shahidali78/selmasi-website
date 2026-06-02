// ============================================================
// SELMASI PRICING LOGIC
// Update package details here — used by LearnerCalculator
// ============================================================

export type PackageId = "entry" | "premium";

export interface Package {
  id: PackageId;
  name: string;
  setupFee: number;
  monthlyBase: number;
  includedLearners: number;
  extraPerLearner: number;
}

export const PACKAGES: Record<PackageId, Package> = {
  entry: {
    id: "entry",
    name: "Entry Level",
    setupFee: 8500,
    monthlyBase: 1500,
    includedLearners: 300,
    extraPerLearner: 5,
  },
  premium: {
    id: "premium",
    name: "Premium",
    setupFee: 16500,
    monthlyBase: 1500,
    includedLearners: 300,
    extraPerLearner: 5,
  },
};

export interface PricingResult {
  packageName: string;
  setupFee: number;
  monthlyBase: number;
  includedLearners: number;
  extraLearners: number;
  extraLearnerFee: number;
  monthlyTotal: number;
}

export function calculatePricing(
  packageId: PackageId,
  learners: number
): PricingResult {
  const pkg = PACKAGES[packageId];
  const safeCount = Math.max(0, Math.floor(learners));
  const extraLearners = Math.max(0, safeCount - pkg.includedLearners);
  const extraLearnerFee = extraLearners * pkg.extraPerLearner;
  const monthlyTotal = pkg.monthlyBase + extraLearnerFee;

  return {
    packageName: pkg.name,
    setupFee: pkg.setupFee,
    monthlyBase: pkg.monthlyBase,
    includedLearners: pkg.includedLearners,
    extraLearners,
    extraLearnerFee,
    monthlyTotal,
  };
}

export function formatRand(amount: number): string {
  return `R${amount.toLocaleString("en-ZA")}`;
}
