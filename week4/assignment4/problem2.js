function countLeaves(days) {
    // Each day, leaves fall following this pattern:
    // Day 1: 10 leaves
    // Day 2: 20 leaves (doubles)
    // Day 3: 30 leaves (+10 from day 2)
    // Day 4: 40 leaves (+10 from day 3)
    // Pattern: First day doubles, then +10 each day
    let total = 0;
    let leavesToday = 10;

    for (let day = 1; day <= days; day++) {
        if (day === 1) {
            leavesToday = 10;
        } else if (day === 2) {
            leavesToday = leavesToday * 2;
        } else {
            leavesToday += 10;
        }
        total += leavesToday;
    }
    
    // Use a for loop to calculate total
    // the return outputTotal will be a string. refer to the example outputs to see the format. 
    let outputTotal = `Total leaves fallen after ${days} days: ${total}`;
    return outputTotal;
}

function categorizeLeafColors(leaves) {
    // leaves is an array of color strings
    // Count each color and return an object
    
    let colorCount = {};
    // Loop through array and count colors
    for (let color of leaves) {
        if (colorCount[color]) {
            colorCount[color]++;
        } else {
            colorCount[color] = 1;
        }
    }
    
    return colorCount;
}