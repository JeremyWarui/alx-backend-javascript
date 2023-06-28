export default function guardrail(mathFunction) {
  const queue = [];
  let answer;
  try {
    answer = mathFunction();
    queue.push(answer);
  } catch (error) {
    answer = error.toString();
    queue.push(answer);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
