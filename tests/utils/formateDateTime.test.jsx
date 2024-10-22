import { describe, it, expect } from 'vitest';
import { formatDateTime } from '../../src/utils/formateDateTime';
describe('formatDateTime', () => {
    it('should return the correct date and hour when given a valid dateTime string', () => {
        const dateTime = '2024-10-22T15:45';
        const result = formatDateTime(dateTime);

        expect(result).toEqual({ date: '2024-10-22', hour: 15 });
    });

    it('should handle hour as a single digit correctly', () => {
        const dateTime = '2024-10-22T09:30';
        const result = formatDateTime(dateTime);

        expect(result).toEqual({ date: '2024-10-22', hour: 9 });
    });

    it('should return NaN for invalid hour in dateTime', () => {
        const dateTime = '2024-10-22TXX:30';
        const result = formatDateTime(dateTime);

        expect(result.hour).toBeNaN();
    });

    it('should throw an error if dateTime format is incorrect', () => {
        const dateTime = 'invalid-date-time';

        expect(() => formatDateTime(dateTime)).toThrow();
    });
});