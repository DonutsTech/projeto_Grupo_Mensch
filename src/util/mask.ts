export function phone(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  e.currentTarget.value = value;
  return e;
}
