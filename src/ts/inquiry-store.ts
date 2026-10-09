export const STORE_KEY = "bi_inquiry_v1";

export interface InquiryItem {
  id: string;
  name: string;
  meta: string;
  image: string;
  qty: number;
}

export function clampQty(value: number): number {
  if (!Number.isFinite(value)) return 1;
  return Math.min(99, Math.max(1, Math.round(value)));
}

/** Pure: coerce arbitrary stored data into a valid, de-duplicated list. */
export function normalizeItems(input: unknown): InquiryItem[] {
  if (!Array.isArray(input)) return [];
  const out: InquiryItem[] = [];
  for (const raw of input) {
    if (!raw || typeof raw !== "object") continue;
    const o = raw as Record<string, unknown>;
    const id = String(o.id ?? "").trim();
    const name = String(o.name ?? "").trim();
    if (!id || !name) continue;
    if (out.some((i) => i.id === id)) continue;
    out.push({
      id,
      name,
      meta: String(o.meta ?? "").trim(),
      image: String(o.image ?? "").trim(),
      qty: clampQty(Number(o.qty ?? 1))
    });
  }
  return out;
}

export function countItems(items: InquiryItem[]): number {
  return items.reduce((sum, i) => sum + clampQty(i.qty), 0);
}

export function upsertItem(items: InquiryItem[], item: InquiryItem): InquiryItem[] {
  const next = items.filter((i) => i.id !== item.id);
  next.push({ ...item, qty: clampQty(item.qty) });
  return next;
}

export function setItemQty(items: InquiryItem[], id: string, qty: number): InquiryItem[] {
  return items.map((i) => (i.id === id ? { ...i, qty: clampQty(qty) } : i));
}

export function removeItem(items: InquiryItem[], id: string): InquiryItem[] {
  return items.filter((i) => i.id !== id);
}

export function hasItem(items: InquiryItem[], id: string): boolean {
  return items.some((i) => i.id === id);
}

/** One line per product, used in WhatsApp messages and emails. */
export function formatItemLines(items: InquiryItem[]): string {
  return items.map((i, k) => `${k + 1}. ${i.name} × ${clampQty(i.qty)}${i.meta ? ` — ${i.meta}` : ""}`).join("\n");
}

/** Compact summary of names + quantities, used in form fields. */
export function formatItemSummary(items: InquiryItem[]): string {
  return items.map((i) => `${i.name} ×${clampQty(i.qty)}`).join(", ");
}

export function loadItems(): InquiryItem[] {
  try {
    const raw = window.localStorage.getItem(STORE_KEY);
    return normalizeItems(raw ? JSON.parse(raw) : []);
  } catch {
    return [];
  }
}

export function saveItems(items: InquiryItem[]): void {
  try {
    window.localStorage.setItem(STORE_KEY, JSON.stringify(items));
  } catch {
    /* storage unavailable */
  }
}

export function clearItems(): void {
  try {
    window.localStorage.removeItem(STORE_KEY);
  } catch {
    /* storage unavailable */
  }
}
