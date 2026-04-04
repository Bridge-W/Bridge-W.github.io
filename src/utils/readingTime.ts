// src/utils/readingTime.ts
export function calculateReadingTime(content: string | undefined | null): number {
    if (!content) return 1; // 默认1分钟

    const wordsPerMinute = 400;
    // 移除 HTML 标签
    const text = content.replace(/<[^>]*>/g, '');
    const wordCount = text.length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

// 新增：基于字符数估算（不需要完整内容）
export function calculateReadingTimeByCharCount(charCount: number): number {
    const wordsPerMinute = 400;
    return Math.max(1, Math.ceil(charCount / wordsPerMinute));
}