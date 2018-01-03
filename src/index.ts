
export function normalizePhone(phone: string): string {
    if (!phone) {
        return '';
    }

    const newPhone = phone.replace(/\D+/g, '').split('');

    if (newPhone[0] === '8') {
        newPhone[0] = '7';
    }

    return newPhone.join('');
}
