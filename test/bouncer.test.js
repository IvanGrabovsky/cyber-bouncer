import { describe, it, expect } from 'vitest';
import { canEnter, calculateTicketPrice, getAccessZone } from '../src/bouncer.js';

describe('🕶️ 1. Функція canEnter', () => {
  it('має забороняти вхід забаненому користувачу, навіть якщо він повнолітній і має квиток', () => {
    expect(canEnter(21, true, false, true)).toBe(false);
  });

  it('має забороняти вхід забаненому користувачу, навіть якщо він VIP', () => {
    expect(canEnter(30, false, true, true)).toBe(false);
  });

  it('має забороняти вхід неповнолітнім (< 18), навіть із квитком', () => {
    expect(canEnter(17, true, false, false)).toBe(false);
  });

  it('має дозволяти вхід повнолітньому з квитком', () => {
    expect(canEnter(18, true, false, false)).toBe(true);
    expect(canEnter(25, true, false, false)).toBe(true);
  });

  it('має дозволяти вхід повнолітньому VIP-гостю без квитка', () => {
    expect(canEnter(20, false, true, false)).toBe(true);
  });

  it('має забороняти вхід повнолітньому без квитка і без VIP-статусу', () => {
    expect(canEnter(22, false, false, false)).toBe(false);
  });
});

describe('💰 2. Функція calculateTicketPrice', () => {
  it('для VIP ціна завжди 0', () => {
    expect(calculateTicketPrice(500, false, true, null)).toBe(0);
    expect(calculateTicketPrice(500, true, true, 'NEON2077')).toBe(0);
  });

  it('з промокодом NEON2077 знижка 50%', () => {
    expect(calculateTicketPrice(400, false, false, 'NEON2077')).toBe(200);
    expect(calculateTicketPrice(400, true, false, 'NEON2077')).toBe(200); // промокод має вищий пріоритет за студентський
  });

  it('студенту надається знижка 30%', () => {
    expect(calculateTicketPrice(400, true, false, null)).toBe(280);
    expect(calculateTicketPrice(1000, true, false, 'WRONG_CODE')).toBe(700);
  });

  it('без знижок повертається повна вартість', () => {
    expect(calculateTicketPrice(350, false, false, null)).toBe(350);
  });
});

describe('🚪 3. Функція getAccessZone', () => {
  it('повертає "Denied" для некоректного типу або відʼємного балансу', () => {
    expect(getAccessZone(-50)).toBe('Denied');
    expect(getAccessZone('500')).toBe('Denied');
    expect(getAccessZone(null)).toBe('Denied');
  });

  it('повертає "Street" для балансу < 100', () => {
    expect(getAccessZone(0)).toBe('Street');
    expect(getAccessZone(99)).toBe('Street');
  });

  it('повертає "Standard" для балансу від 100 до 499', () => {
    expect(getAccessZone(100)).toBe('Standard');
    expect(getAccessZone(300)).toBe('Standard');
    expect(getAccessZone(499)).toBe('Standard');
  });

  it('повертає "VIP Lounge" для балансу від 500 до 1999', () => {
    expect(getAccessZone(500)).toBe('VIP Lounge');
    expect(getAccessZone(1200)).toBe('VIP Lounge');
    expect(getAccessZone(1999)).toBe('VIP Lounge');
  });

  it('повертає "Cyber Penthouse" для балансу 2000 і більше', () => {
    expect(getAccessZone(2000)).toBe('Cyber Penthouse');
    expect(getAccessZone(50000)).toBe('Cyber Penthouse');
  });
});
