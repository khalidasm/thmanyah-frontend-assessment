import { AppError } from '@/types';
import { ERROR_MESSAGES, HTTP_STATUS } from '@/constants';
export * from './type-converters';
export * from './api-response-builder';
export class AppErrorHandler {
  static createError(code: string, message: string, details?: unknown): AppError {
    return {
      code,
      message,
      details,
      timestamp: new Date(),
    };
  }
  static handleApiError(error: unknown): AppError {
    if (error instanceof Error) {
      return this.createError('API_ERROR', error.message, error.stack);
    }
    return this.createError('UNKNOWN_ERROR', 'An unknown error occurred', error);
  }
  static handleDatabaseError(error: unknown): AppError {
    if (error instanceof Error) {
      return this.createError('DATABASE_ERROR', ERROR_MESSAGES.DATABASE_ERROR, error.message);
    }
    return this.createError('DATABASE_ERROR', ERROR_MESSAGES.DATABASE_ERROR, error);
  }
  static handleValidationError(message: string, details?: unknown): AppError {
    return this.createError('VALIDATION_ERROR', message, details);
  }
}
export class ValidationUtils {
  static isValidSearchTerm(term: string): boolean {
    return term.trim().length > 0 && term.trim().length <= 100;
  }
  static isValidCountry(country: string): boolean {
    return /^[A-Z]{2}$/.test(country);
  }
  static isValidLimit(limit: number): boolean {
    return limit > 0 && limit <= 200;
  }
  static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
  static sanitizeSearchTerm(term: string): string {
    return term.trim().toLowerCase();
  }
}
export class FormatUtils {
  static formatDuration(seconds?: number): string {
    if (!seconds) return 'Unknown';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }
  static formatDate(date: Date | string): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleString();
  }
  static formatTimeAgo(date: Date | string): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  }
  static truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
}
export class HttpUtils {
  static createApiResponse<T>(
    data: T,
    message?: string,
    status: number = HTTP_STATUS.OK
  ) {
    return {
      success: true,
      data,
      message,
      status,
    };
  }
  static createErrorResponse(
    error: AppError,
    status: number = HTTP_STATUS.INTERNAL_SERVER_ERROR
  ) {
    return {
      success: false,
      error: error.message,
      details: error.details,
      status,
    };
  }
  static async retryOperation<T>(
    operation: () => Promise<T>,
    maxRetries: number = 3,
    delay: number = 1000
  ): Promise<T> {
    let lastError: unknown;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, delay * attempt));
        }
      }
    }
    throw lastError;
  }
}
export class StringUtils {
  static capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  static extractDomain(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace('www.', '');
    } catch {
      return url;
    }
  }
  static cleanXmlContent(xmlContent: string): string {
    if (!xmlContent || typeof xmlContent !== 'string') {
      return '';
    }
    let cleaned = xmlContent;
    cleaned = cleaned.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
    cleaned = cleaned.replace(/<[^>]*>/g, '');
    const htmlEntities: { [key: string]: string } = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
      '&apos;': "'",
      '&nbsp;': ' ',
      '&hellip;': '...',
      '&mdash;': '—',
      '&ndash;': '–',
      '&lsquo;': "'",
      '&rsquo;': "'",
      '&ldquo;': '"',
      '&rdquo;': '"',
      '&copy;': '©',
      '&reg;': '®',
      '&trade;': '™',
      '&euro;': '€',
      '&pound;': '£',
      '&cent;': '¢',
      '&deg;': '°',
      '&plusmn;': '±',
      '&times;': '×',
      '&divide;': '÷',
      '&frac12;': '½',
      '&frac14;': '¼',
      '&frac34;': '¾',
      '&sup1;': '¹',
      '&sup2;': '²',
      '&sup3;': '³',
      '&micro;': 'µ',
      '&para;': '¶',
      '&sect;': '§',
      '&bull;': '•',
      '&dagger;': '†',
      '&Dagger;': '‡',
      '&larr;': '←',
      '&rarr;': '→',
      '&uarr;': '↑',
      '&darr;': '↓',
      '&harr;': '↔',
      '&crarr;': '↵',
      '&lArr;': '⇐',
      '&rArr;': '⇒',
      '&uArr;': '⇑',
      '&dArr;': '⇓',
      '&hArr;': '⇔',
      '&forall;': '∀',
      '&part;': '∂',
      '&exist;': '∃',
      '&empty;': '∅',
      '&nabla;': '∇',
      '&isin;': '∈',
      '&notin;': '∉',
      '&ni;': '∋',
      '&prod;': '∏',
      '&sum;': '∑',
      '&minus;': '−',
      '&lowast;': '∗',
      '&radic;': '√',
      '&prop;': '∝',
      '&infin;': '∞',
      '&ang;': '∠',
      '&and;': '∧',
      '&or;': '∨',
      '&cap;': '∩',
      '&cup;': '∪',
      '&int;': '∫',
      '&there4;': '∴',
      '&sim;': '∼',
      '&cong;': '≅',
      '&asymp;': '≈',
      '&ne;': '≠',
      '&equiv;': '≡',
      '&le;': '≤',
      '&ge;': '≥',
      '&sub;': '⊂',
      '&sup;': '⊃',
      '&nsub;': '⊄',
      '&sube;': '⊆',
      '&supe;': '⊇',
      '&oplus;': '⊕',
      '&otimes;': '⊗',
      '&perp;': '⊥',
      '&sdot;': '⋅',
      '&lceil;': '⌈',
      '&rceil;': '⌉',
      '&lfloor;': '⌊',
      '&rfloor;': '⌋',
      '&lang;': '⟨',
      '&rang;': '⟩',
      '&loz;': '◊',
      '&spades;': '♠',
      '&clubs;': '♣',
      '&hearts;': '♥',
      '&diams;': '♦',
    };
    Object.entries(htmlEntities).forEach(([entity, replacement]) => {
      cleaned = cleaned.replace(new RegExp(entity, 'g'), replacement);
    });
    cleaned = cleaned.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(parseInt(dec, 10));
    });
    cleaned = cleaned.replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => {
      return String.fromCharCode(parseInt(hex, 16));
    });
    cleaned = cleaned
      .replace(/\s+/g, ' ')
      .replace(/\n\s*\n/g, '\n')
      .trim();
    return cleaned;
  }
  static cleanAndTruncateXmlContent(xmlContent: string, maxLength: number = 100): string {
    const cleaned = this.cleanXmlContent(xmlContent);
    return FormatUtils.truncateText(cleaned, maxLength);
  }
} 