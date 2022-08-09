passwords = """
about after again below could
every first found great house
large learn never other place
plant point right small sound
spell still study their there
these thing think three water
where which world would write
""".split()

for x in range(5):
    for y in range(x + 1, 5):
        print(f"{x + 1} : {y + 1}")
        grouped = {}
        for p in passwords:
            grouped.setdefault((p[x], p[y]), []).append(p)
        print(grouped)
        lens = list(map(len, grouped.values()))
        print(f"1: {lens.count(1)}\t2: {lens.count(2)}\t3: {lens.count(3)}\t4: {lens.count(4)}\t5: {lens.count(5)}")
        print()
