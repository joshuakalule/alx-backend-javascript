export default function guardrail(mathFunc) {
  const list = [];

  try {
    list.push(mathFunc());
  } catch (error) {
    list.push(String(error));
  } finally {
    list.push('Guardrail was processed');
  }

  return list;
}
