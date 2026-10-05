/**
 * 🕶️ Cyberpunk Bouncer AI (Нео-Київ 2077)
 * 
 * Практичне завдання з теми:
 * - Умовні конструкції (if / else if / else)
 * - Логічні оператори (&&, ||, !)
 * - Оператори порівняння (===, !==, >, <, >=, <=)
 */

/**
 * Завдання 1: Перевірка пропуску в клуб
 * 
 * Правила пропуску:
 * 1. Якщо відвідувач у чорному списку (isBanned === true) -> вхід ЗАВЖДИ заборонено (false).
 * 2. Відвідувачу має бути щонайменше 18 років (age >= 18).
 * 3. Якщо вік підходить і гість не в бані, він може пройти, якщо:
 *    - у нього є квиток (hasTicket === true) АБО
 *    - він має статус VIP (isVip === true)
 * 
 * @param {number} age - Вік відвідувача
 * @param {boolean} hasTicket - Чи є квиток
 * @param {boolean} isVip - Чи є VIP-гостем
 * @param {boolean} isBanned - Чи знаходиться в бані/чорному списку
 * @returns {boolean} true, якщо вхід дозволено, інакше false
 */
export function canEnter(age, hasTicket, isVip, isBanned) {
  // TODO: Реалізуйте перевірку за допомогою умовних або логічних операторів
  return false;
}

/**
 * Завдання 2: Розрахунок вартості квитка з урахуванням знижок
 * 
 * Правила:
 * 1. Якщо гість VIP (isVip === true) -> квиток безкоштовний (повертає 0).
 * 2. Якщо діє секретний промокод 'NEON2077' (promoCode === 'NEON2077') -> знижка 50% від basePrice.
 * 3. Інакше якщо гість студент (isStudent === true) -> знижка 30% від basePrice.
 * 4. В усіх інших випадках сплачується повна вартість (basePrice).
 * 
 * Примітка: Знижки не сумуються. Пріоритет: VIP > Промокод > Студент.
 * 
 * @param {number} basePrice - Базова ціна квитка (наприклад, 400)
 * @param {boolean} isStudent - Чи студент
 * @param {boolean} isVip - Чи VIP
 * @param {string|null} promoCode - Промокод або null
 * @returns {number} Фінальна вартість квитка
 */
export function calculateTicketPrice(basePrice, isStudent, isVip, promoCode) {
  // TODO: Реалізуйте розрахунок ціни
  return 0;
}

/**
 * Завдання 3: Визначення зони доступу за балансом на кібер-чипі
 * 
 * Правила за балансом:
 * - Якщо balance не є числом (typeof balance !== 'number') або менше 0 -> повертає 'Denied'
 * - менше 100 кредитів (< 100) -> 'Street'
 * - від 100 до 499 (включно) -> 'Standard'
 * - від 500 до 1999 (включно) -> 'VIP Lounge'
 * - 2000 і більше -> 'Cyber Penthouse'
 * 
 * @param {number} balance - Баланс кредитів
 * @returns {string} Назва доступної зони
 */
export function getAccessZone(balance) {
  // TODO: Реалізуйте визначення зони
  return '';
}
