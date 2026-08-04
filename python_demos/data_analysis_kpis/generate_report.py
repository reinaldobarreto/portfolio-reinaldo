import csv
import json
from collections import defaultdict
from dataclasses import dataclass
from datetime import date
from pathlib import Path


@dataclass(frozen=True)
class Row:
    d: date
    channel: str
    orders: int
    revenue: float


def parse_rows(csv_path: Path) -> list[Row]:
    rows: list[Row] = []
    with csv_path.open("r", encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        for r in reader:
            rows.append(
                Row(
                    d=date.fromisoformat(str(r["date"])),
                    channel=str(r["channel"]),
                    orders=int(r["orders"]),
                    revenue=float(r["revenue"]),
                )
            )
    return rows


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    csv_path = root / "data" / "orders.csv"
    rows = parse_rows(csv_path)

    rows_sorted = sorted(rows, key=lambda x: x.d)
    start = rows_sorted[0].d if rows_sorted else None
    end = rows_sorted[-1].d if rows_sorted else None

    orders_total = sum(r.orders for r in rows_sorted)
    revenue_total = round(sum(r.revenue for r in rows_sorted), 2)
    aov_mean = round(revenue_total / orders_total, 2) if orders_total else 0.0
    days = (end.toordinal() - start.toordinal() + 1) if start and end else 0
    revenue_mean_per_day = round(revenue_total / days, 2) if days else 0.0

    by_channel_orders: dict[str, int] = defaultdict(int)
    by_channel_revenue: dict[str, float] = defaultdict(float)
    for r in rows_sorted:
        by_channel_orders[r.channel] += r.orders
        by_channel_revenue[r.channel] += r.revenue

    by_channel: list[dict] = []
    for ch in sorted(by_channel_orders.keys()):
        o = by_channel_orders[ch]
        rev = round(by_channel_revenue[ch], 2)
        by_channel.append(
            {
                "channel": ch,
                "orders": o,
                "revenue": rev,
                "aov": round(rev / o, 2) if o else 0.0,
            }
        )

    report = {
        "rows": len(rows_sorted),
        "period": {"start": start.isoformat() if start else None, "end": end.isoformat() if end else None},
        "kpis": {
            "orders_total": orders_total,
            "revenue_total": revenue_total,
            "aov_mean": aov_mean,
            "revenue_mean_per_day": revenue_mean_per_day,
        },
        "by_channel": by_channel,
    }

    out = root.parents[1] / "public" / "demos" / "data-analysis-python" / "report.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")


if __name__ == "__main__":
    main()

