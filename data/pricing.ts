/**
 * Centralised pricing. Edit prices here only.
 * Source: School of Brilliance promotional poster (Speaking & Writing mock test packages).
 */
export interface MockPackage {
  id: string;
  tests: number;
  original: number;
  discounted: number;
}

export const MOCK_DISCOUNT_PERCENT = 20;

export const mockPackages: MockPackage[] = [
  { id: "1", tests: 1, original: 150, discounted: 120 },
  { id: "3", tests: 3, original: 390, discounted: 312 },
  { id: "5", tests: 5, original: 600, discounted: 480 },
  { id: "10", tests: 10, original: 1000, discounted: 800 },
  { id: "20", tests: 20, original: 1800, discounted: 1440 },
];

export const savings = (p: MockPackage) => p.original - p.discounted;
export const formatAmount = (n: number) => n.toLocaleString("en-US");
