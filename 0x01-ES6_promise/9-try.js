export default function guardrail(mathFunction) {
  const queue = [];
  let answer;
  try {
    answer = mathFunction();
    queue.push(answer);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
