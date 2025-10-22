function calculateAverage(scores) {
    // Calculate and return the average of an array of scores
    // Handle empty array case (return 0)
    if (scores.length === 0) return 0;
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

function dropLowestScore(scores) {
    // Return a new array with the lowest score removed
    // If multiple lowest scores exist, remove only one
    // Don't modify the original array!
    if (scores.length === 0) return [];
    const minScore = Math.min(...scores);
    const indexToRemove = scores.indexOf(minScore);
    return scores.filter((_, i) => i !== indexToRemove);
}

function getLetterGrade(score) {
    // Return letter grade based on score
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

function curveGrades(scores, curveAmount) {
    // Add curveAmount to each score
    // Cap all scores at 100 (no score above 100)
    // Return new array, don't modify original
    return scores.map(score => Math.min(score + curveAmount, 100));
}