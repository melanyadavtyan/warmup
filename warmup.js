function countWordsLettersSentences(text) {
    // Count words
    const words = text.match(/\b\w+\b/g) || [];
    const wordCount = words.length;

    // Count letters
    const letters = text.replace(/[^a-zA-Z]/g, '');
    const letterCount = letters.length;

    // Count sentences
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '');
    const sentenceCount = sentences.length;

    return {
        words: wordCount,
        letters: letterCount,
        sentences: sentenceCount
    };
}

// Example usage:
const inputText = "This is a sample sentence. It contains words and punctuation! How many words, letters, and sentences does it have?";
const counts = countWordsLettersSentences(inputText);
console.log("Words:", counts.words);
console.log("Letters:", counts.letters);
console.log("Sentences:", counts.sentences);
