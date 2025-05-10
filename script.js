function calculate() {
    const Data = [
        { level: "Green 1 Star", plans: 0, polish: 40, alloy: 3800, amber: 0 },
        { level: "Blue", plans: 0 , polish: 70, alloy: 7000, amber: 0 },
        { level: "Blue 1 Star", plans: 0, polish: 95, alloy: 9700, amber: 0 },
        { level: "Blue 2 Star", plans: 45, polish: 0, alloy: 0, amber: 0 },
        { level: "Blue 3 Star", plans: 50, polish: 0, alloy: 0, amber: 0 },
        { level: "Purple", plans: 60, polish: 0, alloy: 0, amber: 0 },
        { level: "Purple 1 Star", plans: 70, polish: 0, alloy: 0, amber: 0 },
        { level: "Purple 2 Star", plans: 40, polish: 65, alloy: 6500, amber: 0 },
        { level: "Purple 3 Star", plans: 50, polish: 80, alloy: 8000, amber: 0 },
        { level: "Purple T1", plans: 60, polish: 95, alloy: 10000, amber: 0 },
        { level: "Purple T1 1 Star", plans: 70, polish: 110, alloy: 11000, amber: 0 },
        { level: "Purple T1 2 Star", plans: 85, polish: 130, alloy: 13000, amber: 0 },
        { level: "Purple T1 3 Star", plans: 100, polish: 160, alloy: 15000, amber: 0 },
        { level: "Gold", plans: 40, polish: 220, alloy: 22000, amber: 0 },
        { level: "Gold 1 Star", plans: 40, polish: 230, alloy: 23000, amber: 0 },
        { level: "Gold 2 Star", plans: 45, polish: 250, alloy: 25000, amber: 0 },
        { level: "Gold 3 Star", plans: 45, polish: 260, alloy: 26000, amber: 0 },
        { level: "Gold T1", plans: 45, polish: 280, alloy: 28000, amber: 0 },
        { level: "Gold T1 1 Star", plans: 55, polish: 300, alloy: 30000, amber: 0 },
        { level: "Gold T1 2 Star", plans: 55, polish: 320, alloy: 32000, amber: 0 },
        { level: "Gold T1 3 Star", plans: 55, polish: 340, alloy: 35000, amber: 0 },
        { level: "Gold T2", plans: 55, polish: 360, alloy: 38000, amber: 0 },
        { level: "Gold T2 1 Star", plans: 75, polish: 430, alloy: 43000, amber: 0 },
        { level: "Gold T2 2 Star", plans: 80, polish: 460, alloy: 45000, amber: 0 },
        { level: "Gold T2 3 Star", plans: 85, polish: 500, alloy: 48000, amber: 0 },
        { level: "Red", plans: 85, polish: 530, alloy: 50000, amber: 10 },
        { level: "Red 1 Star", plans: 90, polish: 560, alloy: 52000, amber: 10 },
        { level: "Red 2 Star", plans: 95, polish: 590, alloy: 54000, amber: 10 },
        { level: "Red 3 Star", plans: 100, polish: 620, alloy: 56000, amber: 10 },
        { level: "Red T1", plans: 110, polish: 670, alloy: 59000, amber: 15 },
        { level: "Red T1 1 Star", plans: 115, polish: 700, alloy: 61000, amber: 15 },
        { level: "Red T1 2 Star", plans: 120, polish: 730, alloy: 63000, amber: 15 },
        { level: "Red T1 3 Star", plans: 125, polish: 760, alloy: 65000, amber: 15 },
        { level: "Red T2", plans: 135, polish: 810, alloy: 68000, amber: 20 },
        { level: "Red T2 1 Star", plans: 140, polish: 840, alloy: 70000, amber: 20 },
        { level: "Red T2 2 Star", plans: 145, polish: 870, alloy: 72000, amber: 20 },
        { level: "Red T2 3 Star", plans: 150, polish: 900, alloy: 74000, amber: 20 },
        { level: "Red T3", plans: 160, polish: 950, alloy: 77000, amber: 25 },
        { level: "Red T3 1 Star", plans: 165, polish: 990, alloy: 80000, amber: 25 },
        { level: "Red T3 2 Star", plans: 170, polish: 1030, alloy: 83000, amber: 25 },
        { level: "Red T3 3 Star", plans: 180, polish: 1070, alloy: 86000, amber: 25 }
    ];

    const materials = {
        "拋光液": 0,
        "強韌合金": 0,
        "設計圖紙": 0,
        "琥珀": 0
    };

    for (let i = 1; i <= 6; i++) {
        const startValue = document.getElementById(`start${i}`)?.value;
        const targetValue = document.getElementById(`target${i}`)?.value;

        if (!startValue || !targetValue || startValue === "null" || targetValue === "null") continue;

        const startIndex = Data.findIndex(item => item.level === startValue);
        const targetIndex = Data.findIndex(item => item.level === targetValue);

        if (startIndex === -1 || targetIndex === -1) continue;

        const [start, target] = startIndex <= targetIndex
            ? [startIndex, targetIndex]
            : [targetIndex, startIndex];

        for (let j = start+1; j <= target; j++) {
            materials["拋光液"] += Data[j].polish;
            materials["強韌合金"] += Data[j].alloy;
            materials["設計圖紙"] += Data[j].plans;
            materials["琥珀"] += Data[j].amber;
        }
    }

    const tableRow = document.querySelector("table tbody tr");
    tableRow.cells[0].textContent = materials["拋光液"];
    tableRow.cells[1].textContent = materials["強韌合金"];
    tableRow.cells[2].textContent = materials["設計圖紙"];
    tableRow.cells[3].textContent = materials["琥珀"];
}