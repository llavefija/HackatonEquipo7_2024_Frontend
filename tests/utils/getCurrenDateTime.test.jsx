import { describe, it, expect, vi } from 'vitest';
import { getCurrentDateTime } from '../../src/utils/getCurrentDateTime';

describe('getCurrentDateTime', () => {
    it('should return the current date and time in the correct format', () => {
        const mockDate = new Date(2024, 9, 22, 15, 45);
        vi.setSystemTime(mockDate);

        const result = getCurrentDateTime();

        expect(result).toBe('2024-10-22T15:45');

        vi.useRealTimers();
    });
});